---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/is-null
description: >-
  Available configuration keys: negate: (optional) Whether the 'is_null'
  condition should be negated. Defaults to FALSE. You can also negate the
  'is_null' plugin by using 'not:is_null' as the plugin id. source: (optional)
  Property or array of properties on which to evaluate the condition. If not
  set, the condition will be evaluated on the source passed to the ::evaluate()
  method, typically the source of the process plugin that is using this
  condition. Examples 1. Skip a row if a source value is null Maybe you can't
  use skip_on_empty because you want to allow zero (0) or false or something.
published_time: '2022-02-08T22:21:07+00:00'
modified_time: '2022-11-20T20:58:23+00:00'
---
Available configuration keys: 

* **negate**: (optional) Whether the 'is\_null' condition should be negated. Defaults to FALSE. You can also negate the 'is\_null' plugin by using 'not:is\_null' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.