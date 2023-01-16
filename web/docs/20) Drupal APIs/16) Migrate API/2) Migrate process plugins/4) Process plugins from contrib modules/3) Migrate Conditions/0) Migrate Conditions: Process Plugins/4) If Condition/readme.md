---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/if-condition
description: >-
  Get configured properties based on result of a condition. if_condition solves
  the same problem documented here. See also this feature request. It can also
  act essentially as a default_value process plugin that uses a source property
  as the default instead of a string literal. Available configuration keys:
  condition: The condition plugin to evaluate. Can be either: The id of the
  condition. This is possible if the condition does not require any
  configuration, such as the 'empty' condition. An array with a 'plugin' key
  that is the id of the condition.
published_time: '2022-02-08T20:30:30+00:00'
modified_time: '2022-07-28T16:55:30+00:00'
---
Get configured properties based on result of a condition.

if\_condition solves the same problem [documented here](https://www.drupal.org/docs/drupal-apis/migrate-api/process-pipelines#s-if-x-do-1-elseif-do-2-). See also this [feature request](https://www.drupal.org/node/3203079). It can also act essentially as a default\_value process plugin that uses a source property as the default instead of a string literal.

Available configuration keys:

* **condition**: The condition plugin to evaluate. Can be either:  
   1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.  
   2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.
* **do\_get**: (optional) property to get and return if condition is met. If not set, the source will be used.
* **else\_get**: (optional) property to get and return if condition is not met. If not set, NULL will be returned.
* **do\_process**: (optional) a process pipeline to run if the condition is met. Only one of do\_get and do\_process may be set.
* **else\_process**: (optional) a process pipeline to run if the condition is met. Only one of else\_get and else\_process may be set.