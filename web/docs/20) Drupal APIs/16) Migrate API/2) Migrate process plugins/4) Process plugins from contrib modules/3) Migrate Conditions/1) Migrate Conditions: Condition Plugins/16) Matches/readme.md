---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/matches
description: >-
  This condition can be used on a source string. It returns true if the source
  string matches the configured regex pattern. Available configuration keys:
  regex: The regex pattern to match negate: (optional) Whether to negate the
  'matches' condition. Defaults to FALSE. You can also negate the 'matches'
  plugin by using 'not:matches' as the plugin id. source: (optional) Property or
  array of properties on which to evaluate the condition.
published_time: '2022-09-29T20:28:40+00:00'
modified_time: '2022-11-20T21:00:16+00:00'
---
This condition can be used on a source string. It returns `true` if the source string matches the configured regex pattern.

Available configuration keys:

* **regex**: The regex pattern to match
* **negate**: (optional) Whether to negate the 'matches' condition. Defaults to FALSE. You can also negate the 'matches' plugin by using 'not:matches' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.