---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/callback
description: >-
  The callback condition is 100% inspired by the core callback process plugin.
  It uses all the same syntax and much of the same code. Available configuration
  keys: callable: The name of the callable method. unpack_source: (optional)
  Whether to interpret the source as an array of arguments. strict: (optional)
  If set to TRUE, the callback is considered false only if it is identically
  equal to false. Defaults to FALSE. This is useful for callbacks like strpos,
  which may return a 0 that does not indicate FALSE. negate: (optional) Whether
  the result of the callable function should be negated.
published_time: '2022-02-09T14:56:42+00:00'
modified_time: '2022-11-20T00:57:10+00:00'
---
The callback condition is 100% inspired by the core [callback process plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Callback.php/class/Callback). It uses all the same syntax and much of the same code.

Available configuration keys:

* **callable**: The name of the callable method.
* **unpack\_source**: (optional) Whether to interpret the source as an array of arguments.
* **strict**: (optional) If set to TRUE, the callback is considered false only if it is identically equal to false. Defaults to FALSE. This is useful for callbacks like `strpos`, which may return a 0 that does not indicate FALSE.
* **negate**: (optional) Whether the result of the callable function should be negated. Defaults to FALSE. You can also negate the result of the callable function by using 'not:callback' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

The `callable` can be specified using parens notation.