---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/equals
description: >-
  Available configuration keys: value: (one of value or property is required)
  The literal value to which to compare the source. property: (one of value or
  property is required) The source or destination property key to 'get' and to
  compare the source. strict: (optional) Pass TRUE to compare with ===. Defaults
  to FALSE. negate: (optional) Whether to negate the 'equals' condition.
  Defaults to FALSE. You can also negate the 'equals' plugin by using
  'not:equals' as the plugin id. source: (optional) Property or array of
  properties on which to evaluate the condition.
published_time: '2022-02-08T22:16:06+00:00'
modified_time: '2022-11-20T01:00:02+00:00'
---
Available configuration keys:

* **value**: (one of value or property is required) The literal value to which to compare the source.
* **property**: (one of value or property is required) The source or destination property key to 'get' and to compare the source.
* **strict**: (optional) Pass TRUE to compare with ===. Defaults to FALSE.
* **negate**: (optional) Whether to negate the 'equals' condition. Defaults to FALSE. You can also negate the 'equals' plugin by using 'not:equals' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

The (string) `value` can be specified using parens syntax. (However, `property` CANNOT be passed this way.)