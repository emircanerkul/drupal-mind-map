---
url: https://www.drupal.org/docs/drupal-apis/cache-api/cache-max-age
description: >-
  Cache max-age = time dependencies Cache max-age is analogous to HTTP's
  Cache-Control header's max-age directive Why? Cache max-age provides a
  declarative way to create time-dependent caches. Some data is only valid for a
  limited period of time, in that case, you want to specify a corresponding
  maximum age. However, in Drupal core's case, we don't have any data that is
  valid for only a limited period of time; we typically cache permanently (see
  below) and rely entirely on cache tags for invalidation. What? A cache max-age
  is a positive integer, expressing a number of seconds.
published_time: '2015-07-28T15:55:49+00:00'
modified_time: '2022-05-03T14:10:34+00:00'
---
> Cache max-age = time dependencies

> Cache max-age is analogous to HTTP's [Cache\-Control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) header's [max\-age](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9.3) directive