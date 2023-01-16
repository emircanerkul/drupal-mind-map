---
url: https://www.drupal.org/docs/drupal-apis/render-api/auto-placeholdering
description: >-
  Drupal 8's Render API automatically creates placeholders of highly dynamic
  parts of a page, to have the best possible cacheability (i.e. the fewest
  possible contexts to vary by) for those pages. Why? Some cache contexts have a
  high cardinality and are thus very costly because they cause many, many
  variations. A good example is the 'user' cache context. Some cache tags have a
  high invalidation rate: they're known to be invalidated very frequently, which
  makes caching anything that has this cache tag (i.e. depends on the data this
  cache tag describes) not very worthwhile.
published_time: '2015-09-20T15:48:39+00:00'
modified_time: '2022-08-10T04:44:29+00:00'
---
Drupal 8's Render API automatically creates placeholders of highly dynamic parts of a page, to have the best possible cacheability (i.e. the fewest possible contexts to vary by) for those pages.