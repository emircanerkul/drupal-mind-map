---
url: https://www.drupal.org/docs/8/core/modules/dynamic-page-cache/overview
description: >-
  Drupal 8 provides the Dynamic Page Cache module that is recommended for
  websites of all sizes. It caches pages minus the personalized parts, and is
  therefore useful for all users (both anonymous & authenticated). We can find
  this core module at: core/modules/dynamic_page_cache. This feature improves
  performance because it makes it possible to cache pages with dynamic content.
  Pages requested by users (anonymous or authenticated) are stored the first
  time they are requested and can then be reused. Personalized parts are
  excluded: they are turned into placeholders automatically.
published_time: '2015-07-28T14:59:13+00:00'
modified_time: '2020-03-22T16:46:23+00:00'
---
Drupal 8 provides the Dynamic Page Cache module that is recommended for websites of all sizes. It caches pages minus the personalized parts, and is therefore useful for _all_ users (both anonymous & authenticated).

We can find this core module at: **core/modules/dynamic\_page\_cache**.

> This feature improves performance because it makes it possible to cache pages with dynamic content. Pages requested by users (anonymous or authenticated) are stored the first time they are requested and can then be reused. Personalized parts are excluded: they are [turned into placeholders automatically](/developing/api/8/render/arrays/cacheability/auto-placeholdering). Depending on your site configuration and the complexity of particular pages, Dynamic Page Cache may significantly increase the speed of your site, even for authenticated users.

Dynamic Page Cache requires no configuration. The module uses the metadata (_[cache contexts](/developing/api/8/cache/contexts)_) of all the components on a page to figure out if it can be cached_._