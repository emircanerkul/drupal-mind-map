---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins
description: >-
  All of these process plugins extend ProcessPluginWithConditionBase and require
  that a condition configuration key be set. The condition can be set to either:
  The id of the condition. This is possible if the condition does not require
  any configuration, such as the 'empty' condition. An array with a 'plugin' key
  that is the id of the condition. Any additional properties will be used as
  configuration when creating an instance of the condition. All process plugins
  provided by Migrate Conditions are set to "handle multiples". Please see our
  tips on handling source arrays with Migrate Conditions.
published_time: '2022-02-08T19:30:51+00:00'
modified_time: '2022-02-16T17:45:01+00:00'
---
All of these process plugins extend `ProcessPluginWithConditionBase` and require that a `condition` configuration key be set. The `condition` can be set to either:

1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.
2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.

All process plugins provided by Migrate Conditions are set to "handle multiples". Please see our [tips on handling source arrays](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/handling-source-arrays) with Migrate Conditions.