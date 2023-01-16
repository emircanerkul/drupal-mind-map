The process of detecting poorly cacheable (highly dynamic) parts of a page and rendering them later is called _auto-placeholdering_.

If a certain render array is built lazily (using a [#lazy\_builder](https://www.drupal.org/node/2498803) callback) and has the `'user'` cache context, Drupal is able to postpone the rendering until the very last moment. The place in the page where that very dynamic content would appear is first assigned a placeholder, and only at the very last moment, it is replaced with the actual content.

This allows Drupal to still:

* render cache fragments (blocks, entities …) despite parts of them being too dynamic to be worth caching.
* cache the overall page in the Dynamic Page Cache.

Auto-placeholdering is performed according to the auto-placeholder conditions specified in the `renderer.config` container parameter:

```php
  renderer.config:
    auto_placeholder_conditions:
      max-age: 0
      contexts: ['session', 'user']
      tags: []

```

This can be customized to match your site's needs, but as you can tell, by default Drupal will automatically placeholder fragments of the page that have a max-age of zero, or vary by session or by the current user. No high-invalidation rate cache tags are specified — because that requires site-specific knowledge.