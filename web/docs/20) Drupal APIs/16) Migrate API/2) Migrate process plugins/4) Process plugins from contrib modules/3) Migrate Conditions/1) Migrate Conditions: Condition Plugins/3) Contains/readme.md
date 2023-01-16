---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/contains
description: >-
  This condition can be used on a source array or a source string. If the source
  is a string, the value/property must also be a string. Available configuration
  keys: value: (one of value or property is required) The literal value to which
  to compare the source. property: (one of value or property is required) The
  source or destination property key to 'get' and to compare the source. negate:
  (optional) Whether to negate the 'contains' condition. Defaults to FALSE. You
  can also negate the 'contains' plugin by using 'not:contains' as the plugin
  id.
published_time: '2022-02-09T14:42:39+00:00'
modified_time: '2022-11-20T00:57:45+00:00'
---
This condition can be used on a source array or a source string. If the source is a string, the value/property must also be a string.

Available configuration keys:

* **value**: (one of value or property is required) The literal value to which to compare the source.
* **property**: (one of value or property is required) The source or destination property key to 'get' and to compare the source.
* **negate**: (optional) Whether to negate the 'contains' condition. Defaults to FALSE. You can also negate the 'contains' plugin by using 'not:contains' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

The (string) `value` can be specified using parens syntax. (However, `property` CANNOT be passed this way.)