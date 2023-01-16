---
url: >-
  https://www.drupal.org/docs/contributed-modules/migrate-conditions/migrate-conditions-condition-plugins/is-stub
description: >-
  Returns true if the current row is a stub. Note that when used within the
  process of a sub_process configuration, this will refer to the "dummy row"
  that is created and used by the sub_process plugin. That row is never a stub.
  Available configuration keys: negate: (optional) Whether the 'is_stub'
  condition should be negated. Defaults to FALSE. You can also negate the
  'is_stub' plugin by using 'not:is_stub' as the plugin id. Examples 1. Set a
  boolean field if the row is a stub Sometimes it's desirable to locate and
  clean up stub entities after a migration is complete.
published_time: '2022-10-31T13:27:28+00:00'
modified_time: '2022-10-31T13:29:46+00:00'
---
Returns true if the current row is a stub.

Note that when used within the process of a sub\_process configuration, this will refer to the "dummy row" that is created and used by the sub\_process plugin. That row is never a stub.

Available configuration keys: 

* **negate**: (optional) Whether the 'is\_stub' condition should be negated. Defaults to FALSE. You can also negate the 'is\_stub' plugin by using 'not:is\_stub' as the plugin id.