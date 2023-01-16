---
url: https://www.drupal.org/docs/8/api/filter-api/overview
description: >-
  The Filter API is conceptually the same in Drupal 8 as it was in Drupal 7 and
  before. The major changes are: New filters can be defined using plugins
  instead of hooks. Filters now need to specify a filter type if they want to
  work well with in-place editing. API features Text format config entities
  \Drupal\filter\Entity\FilterFormat config entity: configure text formats, one
  text format can have one text editor. Every text format consists of an ordered
  list of filters (filter plugins), with settings for those filters that do have
  settings.
published_time: '2015-11-18T15:00:10+00:00'
modified_time: '2017-01-09T17:14:49+00:00'
---
The Filter API is conceptually the same in Drupal 8 as it was in Drupal 7 and before. The major changes are:

1. New filters can be defined using plugins instead of hooks.
2. Filters now need to specify a _filter type_ if they want to work well with [in-place editing](/documentation/modules/quickedit).