---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/filter-on-condition
description: >-
  Filters an input array on a condition. This works like php's array_filter
  function. We keep the values that meet the condition and throw away the values
  that do not meet the condition. Available configuration keys: condition: The
  condition plugin to evaluate. Can be either: The id of the condition. This is
  possible if the condition does not require any configuration, such as the
  'empty' condition. An array with a 'plugin' key that is the id of the
  condition. Any additional properties will be used as configuration when
  creating an instance of the condition.
published_time: '2022-02-08T21:25:04+00:00'
modified_time: '2022-11-20T21:10:05+00:00'
---
Filters an input array on a condition.

This works like php's array\_filter function. We keep the values that meet the condition and throw away the values that do not meet the condition.

Available configuration keys:

* **condition**: The condition plugin to evaluate. Can be either:  
   1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.  
   2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.

Please note that when using 'filter\_on\_condition', it makes no sense to configure the 'source' directly on the condition. The source must be configured on the process plugin in order for this plugin to be useful.