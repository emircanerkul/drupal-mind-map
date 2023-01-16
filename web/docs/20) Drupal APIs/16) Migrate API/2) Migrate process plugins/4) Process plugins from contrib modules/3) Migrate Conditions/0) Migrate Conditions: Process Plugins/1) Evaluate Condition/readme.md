---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/evaluate-condition
description: >-
  Evaluates a condition, returning true or false. This can replace any use of
  static_map that maps to TRUE/FALSE and has many more powerful uses. Available
  configuration keys: condition: The condition plugin to evaluate. Can be
  either: The id of the condition. This is possible if the condition does not
  require any configuration, such as the 'empty' condition. An array with a
  'plugin' key that is the id of the condition. Any additional properties will
  be used as configuration when creating an instance of the condition. Examples
  1.
published_time: '2022-02-08T19:58:45+00:00'
modified_time: '2022-11-20T21:06:09+00:00'
---
Evaluates a condition, returning true or false.

This can replace any use of static\_map that maps to TRUE/FALSE and has many more powerful uses.

Available configuration keys:

* **condition**: The condition plugin to evaluate. Can be either:  
   1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.  
   2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.