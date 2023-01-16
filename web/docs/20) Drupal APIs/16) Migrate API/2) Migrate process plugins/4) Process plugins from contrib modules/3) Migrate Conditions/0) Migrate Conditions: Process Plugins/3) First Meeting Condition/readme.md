---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/first-meeting-condition
description: >-
  Returns first value in array meeting condition. first_meeting_condition is a
  generalization of core's null_coalesce process plugin that uses a condition
  instead of is_null(). It can create this "empty_coalesce" feature request, for
  example. Available configuration keys: condition: The condition plugin to
  evaluate. Can be either: The id of the condition. This is possible if the
  condition does not require any configuration, such as the 'empty' condition.
  An array with a 'plugin' key that is the id of the condition.
published_time: '2022-02-08T20:12:29+00:00'
modified_time: '2022-11-20T21:12:01+00:00'
---
Returns first value in array meeting condition.

first\_meeting\_condition is a generalization of core's null\_coalesce process plugin that uses a condition instead of `is_null()`. It can create this ["empty\_coalesce" feature request](https://www.drupal.org/project/migrate%5Fplus/issues/3259530), for example.

Available configuration keys:

* **condition**: The condition plugin to evaluate. Can be either:  
   1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.  
   2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.
* **default\_value**: (optional) The value to return if no values in the source meet the condition. This must be a string literal, not a source or destination property.

Please note that when using 'first\_meeting\_condition', it makes no sense to configure the 'source' directly on the condition.