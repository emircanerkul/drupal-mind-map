---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/all-elements
description: >-
  Evaluates the configured condition on each array element and returns TRUE if
  every element meets the condition. Available configuration keys: condition:
  The condition plugin to evaluate on each element. Can be either: The id of the
  condition. This is possible if the condition does not require any
  configuration, such as the 'empty' condition An array with a 'plugin' key that
  is the id of the condition. Any additional properties will be used as
  configuration when creating an instance of the condition. negate: (optional)
  Whether to negate the all_elements condition. Defaults to FALSE.
published_time: '2022-02-08T21:43:27+00:00'
modified_time: '2022-11-20T00:56:30+00:00'
---
Evaluates the configured condition on each array element and returns TRUE if every element meets the condition.

Available configuration keys:

* **condition**: The condition plugin to evaluate on each element. Can be either:  
   * The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition  
   * An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.
* **negate**: (optional) Whether to negate the all\_elements condition. Defaults to FALSE. You can also negate the 'all\_elements' plugin by using 'not:all\_elements' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

Please note that you should never specify `source` on the condition that `all_elements` leverages. It wouldn't make any sense.