---
url: https://www.drupal.org/docs/8/api/middleware-api/overview
description: >-
  Drupal 8/9 has a Middleware API that it adopted from the broader PHP
  community: https://github.com/stackphp. This one-liner from their project page
  captures it well: Symfony's HttpKernelInterface provides a solid interface,
  which makes creating and sharing framework-agnostic HTTP filters a breeze! So,
  StackPHP: builds on top of Symfony's HttpKernelInterface is a convention for
  composing HttpKernelInterface middlewares. That's it!
published_time: '2016-07-22T10:40:00+00:00'
modified_time: '2022-05-27T05:43:52+00:00'
---
Drupal 8/9 has a Middleware API that it adopted from the broader PHP community: <https://github.com/stackphp>. This one-liner from their project page captures it well:

> Symfony's HttpKernelInterface provides a solid interface, which makes creating and sharing framework-agnostic HTTP filters a breeze!

So, StackPHP:

1. builds on top of Symfony's [HttpKernelInterface](https://github.com/symfony/symfony/blob/master/src/Symfony/Component/HttpKernel/HttpKernelInterface.php)
2. is a convention for composing `HttpKernelInterface` middlewares.

That's it!

### Dependency Injection

The `Drupal\Core\DependencyInjection\Compiler\StackedKernelPass` compiler pass implicitly prepends the inner kernel as first constructor argument of the middleware. Thus, you do not need to define arguments in your modules `*.services.yml` definition for the middleware unless your middleware depends on another registered service.

### Examples

You can find lots of examples at [https://github.com/stackphp/stackphp.com/blob/master/source/middlewares....](https://github.com/stackphp/stackphp.com/blob/master/source/middlewares.html).

### Drupal core

In Drupal core, the following concepts are implemented via StackPHP middlewares:

1. Internal page cache (` \Drupal\page_cache\StackMiddleware\PageCache)`
2. content negotiation (`\Drupal\Core\StackMiddleware\NegotiationMiddleware`)
3. reverse proxy support (`\Drupal\Core\StackMiddleware\ReverseProxyMiddleware`)
4. session handling (`\Drupal\Core\StackMiddleware\Session`)

### Drupal Contributed Modules

1. Rate Limiting Service for API consumption (<https://www.drupal.org/project/rate%5Flimiter>)

### 3rd Party Github Hosted

1. CORS-Drupal8 (<https://github.com/dmouse/cors-drupal8>)

### Caution

Middlewares run on _every_ request. Effectively, the Middleware API is the equivalent of [Drupal 7's hook\_boot()](https://www.drupal.org/node/1909596). So, make sure they run at the appropriate time (i.e. the appropriate order), and ensure they do as little I/O as possible. Because _every_ request will be impacted. **Add one slow StackPHP middleware, and the entire Drupal 8 site will be slow!**