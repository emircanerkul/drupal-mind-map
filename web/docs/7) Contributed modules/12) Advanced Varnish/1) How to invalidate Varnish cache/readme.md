---
url: >-
  https://www.drupal.org/docs/contributed-modules/advanced-varnish/how-to-invalidate-varnish-cache
description: >-
  The module provides few possible ways to invalidate Varnish cache, the main
  power are in the VCL file where all ban requests are present, below you can
  see a short explanation how this works from Varnish side: # Cache invalidation
  support: # # 1. ENTIRE SITE (200): # - method: BAN # - path: /site # - header
  X-Varnish-Purge: site secret (MUST match X-Varnish-Secret value). # 2. CACHE
  TAGS (200): # - method: BAN # - path: /tags # - header X-Varnish-Purge: site
  secret (MUST match X-Varnish-Secret value). # - header X-Tag: 32f5 de19 143b -
  hashed version of the tag to invalidate # 3.
published_time: '2019-07-20T07:13:30+00:00'
modified_time: '2022-01-26T14:12:23+00:00'
---
The module provides few possible ways to invalidate Varnish cache, the main power are in the VCL file where all ban requests are present, below you can see a short explanation how this works from Varnish side:

```php
# Cache invalidation support:
#
#  1. ENTIRE SITE (200):
#     - method: BAN
#     - path: /site
#     - header X-Varnish-Purge: site secret (MUST match X-Varnish-Secret value).
#  2. CACHE TAGS (200):
#     - method: BAN
#     - path: /tags
#     - header X-Varnish-Purge: site secret (MUST match X-Varnish-Secret value).
#     - header X-Tag: 32f5 de19 143b - hashed version of the tag to invalidate
#  3. DEFLATE CALL (200):
#     - method: BAN
#     - path: /deflate
#     - header X-Varnish-Purge: site secret (MUST match X-Varnish-Secret value).
#  4. SINGLE URL + VARIANTS (200):
#     - method: BAN
#     - path: (the path to invalidate, e.g.: "path/a?p=1" or "path/*")
#     - header Host: the hostname to clear the path for.
#     - header X-Varnish-Purge: site secret (no verification)
```

So, these type of requests can be sent to Varnish by Backend server in order to invalidate Varnish caches, let's see how we can actually send these requests.

First of all you can use Built-in purger which is part of this module to invalidate varnish cache immediately, for that we need to enable this functionality. Go to Advanced Varnish configuration page (/admin/config/development/adv\_varnish) and set checkbox "**Use built-in Varnish purger**" after that you'll see a new input "**Varnish server host**" here you need to type you Varnish server(s). This can be a host name or IP address (multiple values supported, just type all the servers separated by comma)

![](https://www.drupal.org/files/adv_5.png)

Additionally you can specify a header value which will be used to flush ALL varnish cache later:

![](https://www.drupal.org/files/adv_8.png)

After the values is set click on "**Save configuration**" button. When form is saved the Varnish cache will be automatically invalidated when `invalidateTags` method will be called in Drupal.

Also you'll find a new link on the from page called "**Manual purge**"

![](https://www.drupal.org/files/adv_6.png)

This page allow you to invalidate varnish cache manually, click on link or visit the page (/admin/config/development/adv\_varnish/clear\_cache) to see available options:

![](https://www.drupal.org/files/adv_7.png)

So let's check what this options are:

1. **Tag** \- this option allows you to invalidate tags manually just type the needed tags and click "Run purge" to do that.
2. **Path** \- this option will allow you to invalidate cache for give path. Path can be give in form of "path/a?p=1" and "path/\*"
3. **Full cache of the site** \- this option allows you to invalidate ALL varnish cache immediately.

Useful links:

* [Cache Invalidation](https://book.varnish-software.com/4.0/chapters/Cache%5FInvalidation.html)
* [Use Drupal 8 Cache Tags with Varnish and Purge](https://www.jeffgeerling.com/blog/2016/use-drupal-8-cache-tags-varnish-and-purge)