---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/less-than
description: >-
  Available configuration keys: value: (one of value or property is required)
  The literal value to which to compare the source. property: (one of value or
  property is required) The source or destination property key to 'get' and to
  compare the source. negate: (optional) Whether to negate the 'less_than'
  condition. Defaults to FALSE. You can also negate the 'less_than' plugin by
  using 'not:less_than' as the plugin id. source: (optional) Property or array
  of properties on which to evaluate the condition.
published_time: '2022-02-08T22:18:19+00:00'
modified_time: '2022-11-20T20:59:38+00:00'
---
Available configuration keys:

* **value**: (one of value or property is required) The literal value to which to compare the source.
* **property**: (one of value or property is required) The source or destination property key to 'get' and to compare the source.
* **negate**: (optional) Whether to negate the 'less\_than' condition. Defaults to FALSE. You can also negate the 'less\_than' plugin by using 'not:less\_than' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.