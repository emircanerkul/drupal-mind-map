---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/isset
description: >-
  Available configuration keys: negate: (optional) Whether the 'isset' condition
  should be negated. Defaults to FALSE. You can also negate the 'isset' plugin
  by using 'not:isset' as the plugin id. source: (optional) Property or array of
  properties on which to evaluate the condition. If not set, the condition will
  be evaluated on the source passed to the ::evaluate() method, typically the
  source of the process plugin that is using this condition. Examples: 1. Skip a
  row if skip_me_please is set.
published_time: '2022-02-08T22:20:05+00:00'
modified_time: '2022-11-20T20:59:06+00:00'
---
Available configuration keys: 

* **negate**: (optional) Whether the 'isset' condition should be negated. Defaults to FALSE. You can also negate the 'isset' plugin by using 'not:isset' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.