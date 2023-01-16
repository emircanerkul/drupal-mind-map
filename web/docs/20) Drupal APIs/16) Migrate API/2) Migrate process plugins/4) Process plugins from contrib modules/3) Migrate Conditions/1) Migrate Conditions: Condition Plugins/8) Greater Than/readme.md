---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/greater-than
description: >-
  Available configuration keys: value: (one of value or property is required)
  The literal value to which to compare the source. property: (one of value or
  property is required) The source or destination property key to 'get' and to
  compare the source. negate: (optional) Whether to negate the 'greater_than'
  condition. Defaults to FALSE. You can also negate the 'greater_than' plugin by
  using 'not:greater_than' as the plugin id. source: (optional) Property or
  array of properties on which to evaluate the condition.
published_time: '2022-02-08T22:17:22+00:00'
modified_time: '2022-11-20T01:05:41+00:00'
---
Available configuration keys:

* **value**: (one of value or property is required) The literal value to which to compare the source.
* **property**: (one of value or property is required) The source or destination property key to 'get' and to compare the source.
* **negate**: (optional) Whether to negate the 'greater\_than' condition. Defaults to FALSE. You can also negate the 'greater\_than' plugin by using 'not:greater\_than' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

The (string) `value` can be passed using parens notation. (However, `property` CANNOT be passed this way.)