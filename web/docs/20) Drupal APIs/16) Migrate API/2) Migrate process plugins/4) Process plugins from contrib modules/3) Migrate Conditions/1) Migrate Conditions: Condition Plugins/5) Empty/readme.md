---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/empty
description: >-
  Available configuration keys: negate: (optional) Whether the 'empty' condition
  should be negated. Defaults to FALSE. You can also negate the 'empty' plugin
  by using 'not:empty' as the plugin id. source: (optional) Property or array of
  properties on which to evaluate the condition. If not set, the condition will
  be evaluated on the source passed to the ::evaluate() method, typically the
  source of the process plugin that is using this condition. Examples 1. Skip on
  empty with clear array handling The core skip_on_empty process plugin can have
  trouble with arrays. (See [#3254356]).
published_time: '2022-02-08T22:24:36+00:00'
modified_time: '2022-11-20T00:58:33+00:00'
---
Available configuration keys: 

* **negate**: (optional) Whether the 'empty' condition should be negated. Defaults to FALSE. You can also negate the 'empty' plugin by using 'not:empty' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.