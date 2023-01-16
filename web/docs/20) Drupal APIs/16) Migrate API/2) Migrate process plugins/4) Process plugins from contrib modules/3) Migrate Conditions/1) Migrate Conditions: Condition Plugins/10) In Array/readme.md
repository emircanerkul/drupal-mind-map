---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/in-array
description: >-
  This condition relies on the php's in_array() function. If the value or
  property is a scalar, this condition behaves exactly like the equals
  condition. Available configuration keys: value: (one of value or property is
  required) The literal array in which to search for the source. property: (one
  of value or property is required) The source or destination property key to
  'get' and then search for the source. strict: (optional) 'strict' parameter
  for in_array(). Defaults to FALSE. negate: (optional) Whether to negate the
  'in_array' condition. Defaults to FALSE.
published_time: '2022-02-09T14:45:54+00:00'
modified_time: '2022-11-20T20:56:47+00:00'
---
This condition relies on the php's `in_array()` function.

If the value or property is a scalar, this condition behaves exactly like the equals condition.

Available configuration keys:

* **value**: (one of value or property is required) The literal array in which to search for the source.
* **property**: (one of value or property is required) The source or destination property key to 'get' and then search for the source.
* **strict**: (optional) 'strict' parameter for in\_array(). Defaults to FALSE.
* **negate**: (optional) Whether to negate the 'in\_array' condition. Defaults to FALSE. You can also negate the 'in\_array' plugin by using 'not:in\_array' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.