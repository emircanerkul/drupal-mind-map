---
url: https://www.drupal.org/docs/administering-a-drupal-site/internal-page-cache
description: >-
  Drupal 8 or higher provides an Internal Page Cache module that is recommended
  for small to medium-sized websites. This core module, which is enabled by
  default, caches pages for anonymous users. It can be found at
  core/modules/page_cache. This feature improves performance because it speeds
  up the site. Pages requested by anonymous users are stored the first time they
  are requested and then reused; depending on your site configuration, the
  performance improvement may be significant. To speed up your site for
  authenticated users, see the Dynamic Page Cache module.
published_time: '2015-04-19T10:17:52+00:00'
modified_time: '2021-12-05T01:57:14+00:00'
---
Drupal 8 or higher provides an Internal Page Cache module that is recommended for small to medium-sized websites. This core module, which is enabled by default, caches pages for anonymous users. It can be found at **core/modules/page\_cache**.

This feature improves performance because it speeds up the site. Pages requested by anonymous users are stored the first time they are requested and then reused; depending on your site configuration, the performance improvement may be significant.

To speed up your site for authenticated users, see the [Dynamic Page Cache module](https://www.drupal.org/docs/8/core/modules/dynamic-page-cache/overview "Dynamic Page Cache overview | Drupal 8 guide on Drupal.org").

Websites that serve personalized content to anonymous users (dynamic, per-session, e.g. a shopping cart) will want to disable the Internal Page Cache module. This module assumes pages are identical for all anonymous users. Those websites can still take advantage of the Dynamic Page Cache module though, or can alternatively do their personalization using JavaScript + AJAX.