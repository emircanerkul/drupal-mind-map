---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/switch-on-condition
description: >-
  Add a switch statement to your process pipeline. The syntax is intended to
  evoke the php switch statement, but each case here evaluates a condition,
  which can be more complicated than a static value. Only the first condition
  that is met will be used. It is as if there is a "break" included with each
  case by default. Available configuration keys: cases: An array of arrays. Each
  case should contain the following properties: condition: The condition plugin
  to evaluate for the caseCan be either: The id of the condition.
published_time: '2022-10-03T15:59:01+00:00'
modified_time: '2022-11-20T21:21:51+00:00'
---
Add a switch statement to your process pipeline.

The syntax is intended to evoke the php switch statement, but each case here evaluates a condition, which can be more complicated than a static value. Only the first condition that is met will be used. It is as if there is a "break" included with each case by default.

Available configuration keys:

* **cases**: An array of arrays. Each case should contain the following properties:  
   * **condition**: The condition plugin to evaluate for the caseCan be either:  
         1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.  
         2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.  
   * **Exactly one of the following must be specified for each case**:  
         * **default\_value**: A string literal to return if the case is met  
         * **get**: A source or destination property to get and return if the case is met.  
         * **process**: A process pipeline to run if the case is met. If the source is not specified, then the source of switch\_on\_condition will be used.

The [default](https://www.drupal.org/docs/contributed-modules/migrate-conditions/migrate-conditions-condition-plugins/default) condition is often the best condition to use for the final case.