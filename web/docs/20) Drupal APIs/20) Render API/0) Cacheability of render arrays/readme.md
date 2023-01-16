---
url: >-
  https://www.drupal.org/docs/drupal-apis/render-api/cacheability-of-render-arrays
description: >-
  Short version in the API documentation: Render API overview: Caching Render
  arrays determine what is shown to the user. Therefore, arrays also determine
  how cacheable a response is. If code is generating very dynamic render arrays
  (generally speaking, if it is using a lot of if-statements), then that also
  means that Drupal cannot simply cache the HTML that was rendered from the
  render array: it needs to call the code (and all those if-statements) when
  appropriate. In other words: Drupal needs to be aware of how dynamic your code
  is.
published_time: '2015-03-20T12:15:26+00:00'
modified_time: '2022-07-21T14:23:40+00:00'
---
**Short version in the API documentation: [Render API overview: Caching](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/group/theme%5Frender/8#sec%5Fcaching)**

Render arrays determine what is shown to the user. Therefore, arrays also determine how cacheable a response is.

If code is generating very dynamic render arrays (generally speaking, if it is using a lot of if-statements), then that also means that Drupal cannot simply cache the HTML that was rendered from the render array: it needs to call the code (and all those if-statements) when appropriate.  
In other words: Drupal needs to be aware of how dynamic your code is. If it's not aware, then it may send the same cached HTML to the wrong user!

> It is of the utmost importance that you inform the Render API of the cacheability of a render array.

### The thought process

Please try to adopt the following thought process.

Whenever you are generating a render array, use the following 5 steps:

1. I'm rendering something. That means I must think of cacheability.
2. Is this something that's expensive to render, and therefore is worth caching?  
 If the answer is "yes", then what identifies this particular representation of the thing I'm rendering? Those are the **cache keys**.
3. Does the representation of the thing I'm rendering vary per combination of permissions, per URL, per interface language, per … something? Those are the [**cache contexts**](/developing/api/8/cache/contexts).  
_Note: cache contexts are completely analogous to HTTP's `Vary` header._
4. What causes the representation of the thing I'm rendering to become outdated?  
 I.e., which things does it depend upon, so that when those things change, so should my representation? Those are the [**cache tags**](/developing/api/8/cache/tags).
5. When does the representation of the thing I'm rendering become outdated?  
 I.e., is the data valid for a limited period of time only?  
 That is the [**max-age**](/developing/api/8/cache/max-age) (maximum age). It defaults to "permanently (forever) cacheable" (`Cache::PERMANENT`). When the representation is only valid for a limited time, set a max-age, expressed in seconds. Zero means that it's not cacheable at all.

> Cache contexts, tags and max-age **must always be set**, because they affect the cacheability of the entire response. Therefore they "bubble": parents automatically receive them.
> 
> Cache keys must only be set if the render array should be cached.

### Conceptual example

Let's apply this to a conceptual example:

* **cache keys**: when rendering a node (thing) in the teaser view mode (configuration indicating a specific representation), my cache keys would be e.g., `['node', 5, 'teaser']`
* **cache contexts**: a teaser node is rendered differently for users in different timezones (because of the "authored on" date field), so my cache contexts would be e.g., `['timezone']`.
* **cache tags**: the node teaser shows the node title, authoring date, author, author's profile picture and body, the dependencies are the node itself, the user entity associated with the author, the file entity associated with the profile picture and the text format associated with the body field. If any of them change, then the cached HTML for the node 5 teaser must be regenerated. So my cache tags would be: `['node:5', 'user:3', 'file:4', 'config:filter.format.basic_html']`.
* **cache max-age**: the node teaser remains valid until the node is changed, not for a limited time. So, there's no need to set a max-age: relying on the default (`Cache::PERMANENT`) will do.

_(Note: Drupal sets all the cache metadata in the above example automatically: the entity view builder and field formatters take care of that. It's just meant to be a concrete example that is intuitively understood by all.)_

### Concrete example

_Note that every Entity and Config object implements `CacheableDependencyInterface`. That interface provides all the cacheability metadata to ensure a render array is invalidated whenever an Entity/Config object are modified. See [CacheableDependencyInterface & friends](/developing/api/8/cache/cacheable-dependency-interface)._

Looking at a concrete example:

```php
$renderer = \Drupal::service('renderer');

$config = \Drupal::config('system.site');
$current_user = \Drupal::currentUser();

$build = [
  '#markup' => t('Hi, %name, welcome back to @site!', [
    '%name' => $current_user->getUsername(), 
    '@site' => $config->get('name'), 
  ]),
  '#cache' => [
    'contexts' => [ 
      // The "current user" is used above, which depends on the request, 
      // so we tell Drupal to vary by the 'user' cache context.
      'user', 
    ],
  ], 
];

// Merges the cache contexts, cache tags and max-age of the config object 
// and user entity that the render array depend on.
$renderer->addCacheableDependency($build, $config);
$renderer->addCacheableDependency($build, \Drupal\user\Entity\User::load($current_user->id())); 
```

We're generating markup that contains the user name and the site name. The user name is tied to a `User` entity, so we want to associate its cache tags. And since that output varies per user (it's a personal welcome message, after all), we must also specify the 'user' cache context. The site name is stored in the configuration system, so we want to associate the cache tags of the `Config` object that the output depends on as well.

That's quite a bit of code. But we're now informing Drupal correctly about the cacheability of this render array & markup!

Let's see how that changes if we make the welcome message not personal, but generic:

```php
$renderer = \Drupal::service('renderer');

$config = \Drupal::config('system.site');

$build = [
  '#markup' => t('Hi, welcome back to @site!', [ 
    '@site' => $config->get('name'),
  ])
]; 
$renderer->addCacheableDependency($build, $config); 
```

The generated markup is only slightly different, but the code became much simpler. This is logical: the markup can now be used for all users, so less cacheability metadata is necessary. Most notably, no cache contexts are present anymore (after all, there's only a single variation left now).

### Headers (debugging)

Finally: it is easy to see which cache contexts a certain page varies by and which cache tags it is invalidated by: one must only look at the `X-Drupal-Cache-Contexts` and `X-Drupal-Cache-Tags` headers!

To get those headers, [configure your site for development.](/developing/api/8/response/cacheable-response-interface#debugging)

### How Drupal optimizes rendering using this cacheability metadata

(To be expanded.)

Drupal uses this cacheability metadata to:

* automatically invalidate cached pages — using cache tags — from its [Page Cache](/documentation/modules/internal%5Fpage%5Fcache) and [Dynamic Page Cache](/documentation/modules/dynamic%5Fpage%5Fcache) that:  
   * show content that is now outdated  
   * show content based on permissions and the permissions for the anonymous user have been changed  
   * …
* automatically create variations when caching rendered render arrays — using cache contexts — to ensure internal-use-only fields are not shown to readers, but only to news editors
* automatically create placeholders of highly dynamic parts of a page, to have the best possible cacheability (i.e., the fewest possible contexts to vary by) for those pages — see [auto-placeholdering](/developing/api/8/render/arrays/cacheability/auto-placeholdering) for more information.
* …

### FAQ

Why is `addCacheableDependency()`'s `$dependency` parameter not typehinted to `CacheableDependencyInterface`, i.e., what else can you pass in?

The docs say why:

```php
   * @param \Drupal\Core\Cache\CacheableDependencyInterface|mixed $dependency
   *   The dependency. If the object implements CacheableDependencyInterface,
   *   then its cacheability metadata will be used. Otherwise, the passed in
   *   object must be assumed to be uncacheable, so max-age 0 is set.

```

The best concrete example is: `AccessResultInterface` does not extend `CacheableDependencyInterface`, i.e., you can implement access results that don't provide cacheability metadata. In that case, we must assume `max-age = 0` (i.e., "not cacheable").

Because your render array now depends on input data that is not cacheable, the render array must also be not cacheable.

**In other words: _any_ data that a render array relies (i.e., all inputs) on _should_ be passed to that method.** Otherwise, you'll have to manually ensure the correct cacheability metadata is present.

### See also

* [Cache contexts](/developing/api/8/cache/contexts)
* [Cache tags](/developing/api/8/cache/tags)
* [Cache max-age](/developing/api/8/cache/max-age)
* [CacheableDependencyInterface & friends](/developing/api/8/cache/cacheable-dependency-interface)
* [RendererInterface::addCacheableDependency() documentation](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21RendererInterface.php/function/RendererInterface%3A%3AaddCacheableDependency/8)
* [RendererInterface::render() documentation](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21RendererInterface.php/function/RendererInterface%3A%3Arender/8)
* Blog post: [Ensuring Drupal 8 Block Cache Tags bubble up to the Page](https://www.previousnext.com.au/blog/ensuring-drupal-8-block-cache-tags-bubble-up-page) (w/Twig Templates)