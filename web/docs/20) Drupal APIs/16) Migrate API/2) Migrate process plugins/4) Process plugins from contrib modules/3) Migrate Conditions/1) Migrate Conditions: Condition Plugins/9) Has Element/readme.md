---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/has-element
description: >-
  Evaluates the configured condition on each array element (or on a single
  element with the specified index) and returns TRUE if at least one element
  meets the condition. Available configuration keys: condition: The condition
  plugin to evaluate on each element. Can be either: The id of the condition.
  This is possible if the condition does not require any configuration, such as
  the 'empty' condition An array with a 'plugin' key that is the id of the
  condition. Any additional properties will be used as configuration when
  creating an instance of the condition.
published_time: '2022-02-08T22:25:56+00:00'
modified_time: '2022-11-20T01:07:27+00:00'
---
Evaluates the configured condition on each array element (or on a single element with the specified index) and returns TRUE if at least one element meets the condition.

Available configuration keys:

* **condition**: The condition plugin to evaluate on each element. Can be either:  
   * The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition  
   * An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.
* **index**: (optional) If set, the condition will only be evaluated on the array element with this index/key.
* **negate**: (optional) Whether to negate the has\_element condition. Defaults to FALSE. You can also negate the 'has\_element' plugin by using 'not:has\_element' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

Note that you should never configure `source` on the condition that is leveraged by `has_element`. It wouldn't make any sense.