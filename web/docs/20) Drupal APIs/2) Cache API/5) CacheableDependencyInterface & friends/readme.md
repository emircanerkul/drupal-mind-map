---
url: >-
  https://www.drupal.org/docs/8/api/cache-api/cacheabledependencyinterface-friends
description: >-
  To make dealing with cacheability metadata (cache tags, cache contexts and
  max-age) easier, Drupal 8 has CacheableDependencyInterface. Why? Imagine
  having to manually construct the cache tags of every single entity and
  configuration object you use in a render array (or some other computation)
  manually. And, when on a multilingual site, also add the necessary cache
  contexts manually (for either the translated entity or the language override
  for the configuration object).
published_time: '2015-07-29T08:34:09+00:00'
modified_time: '2016-10-13T16:17:00+00:00'
---
To make dealing with cacheability metadata ([cache tags](/developing/api/8/cache/tags), [cache contexts](/developing/api/8/cache/contexts) and [max-age](/developing/api/8/cache/contexts)) easier, Drupal 8 has `CacheableDependencyInterface`.