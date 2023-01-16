---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/and-condition
description: >-
  This condition allows logical combinations of other conditions. Available
  configuration keys: condition: An array of arrays. Each element must have a
  'plugin' key that is the id of the condition. Any additional properties will
  be used as configuration when creating an instance of the condition. iterate:
  (optional) The default value is FALSE. If 'iterate' is FALSE, Each condition
  is evaluated on the source value. If 'iterate' is TRUE, then each condition is
  evaluated on the element in the source that has the corresponding index/key.
  Thus, when 'iterate' is TRUE, the source must be an array.
published_time: '2022-02-08T21:47:16+00:00'
modified_time: '2022-11-20T00:52:41+00:00'
---
This condition allows logical combinations of other conditions.

Available configuration keys: 

* **condition**: An array of arrays. Each element must have a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.
* **iterate**: (optional) The default value is FALSE. If 'iterate' is FALSE, Each condition is evaluated on the source value. If 'iterate' is TRUE, then each condition is evaluated on the element in the source that has the corresponding index/key. Thus, when 'iterate' is TRUE, the source must be an array.
* **negate**: (optional) Whether the 'and' condition should be negated. Defaults to FALSE. You can also negate the 'and' plugin by using 'not:and' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.