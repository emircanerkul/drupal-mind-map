---
url: https://www.drupal.org/docs/contributed-modules/boost
description: >-
  Boost provides static page caching for Drupal enabling a very significant
  performance and scalability boost for sites that receive mostly anonymous
  traffic. Keep aware of file system performance (see link below). Since Drupal
  8-Version of this module Boost can serve cached content from files directly
  via RequestEvent independent from the used webserver. But it is still a good
  idea to use the webserver for serving static files. In this case there is even
  no PHP involved to serve content get the maximal boost.
published_time: '2022-06-27T14:59:51+00:00'
modified_time: '2022-12-16T21:34:05+00:00'
---
[Boost](/project/boost) provides static page caching for Drupal enabling a very significant performance and scalability boost for sites that receive mostly **anonymous traffic**. Keep aware of file system performance (see link below). Since Drupal 8-Version of this module **Boost can serve cached content from files directly via RequestEvent independent from the used webserver**. But it is still a good idea to use the webserver for serving static files. In this case there is even no PHP involved to serve content get the maximal boost.

Drupal 8/9 Version does not have a configuration helper but should work with Apache and Nginx. Only Nginx config is currently documented.

For Drupal 7 documentation, see [Boost 7.x: Static page caching for your website](https://www.drupal.org/node/1434362).