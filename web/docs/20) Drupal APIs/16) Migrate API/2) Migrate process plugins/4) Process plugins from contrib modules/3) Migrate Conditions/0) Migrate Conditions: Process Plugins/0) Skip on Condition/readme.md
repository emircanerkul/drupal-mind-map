---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/skip-on-condition
description: >-
  Skips processing when the input value matches a condition. Available
  configuration keys: method: What to do if the condition is met. Possible
  values: row: Skips the entire row when an empty value is encountered. process:
  Prevents further processing of the input property when the value is empty.
  condition: The condition plugin to evaluate on the source. Can be either: The
  id of the condition. This is possible if the condition does not require any
  configuration, such as the 'empty' condition. An array with a 'plugin' key
  that is the id of the condition.
published_time: '2022-02-08T19:41:28+00:00'
modified_time: '2022-10-05T19:43:32+00:00'
---
Skips processing when the input value matches a condition.

Available configuration keys:

* **method**: What to do if the condition is met. Possible values:  
   1. row: Skips the entire row when an empty value is encountered.  
   2. process: Prevents further processing of the input property when the value is empty.
* **condition**: The condition plugin to evaluate on the source. Can be either:  
   1. The id of the condition. This is possible if the condition does not require any configuration, such as the 'empty' condition.  
   2. An array with a 'plugin' key that is the id of the condition. Any additional properties will be used as configuration when creating an instance of the condition.
* **message**: (optional) A message to be logged in the {migrate\_message\_\*} table for this row. Messages are only logged for the 'row' method. If not set, nothing is logged in the message table.
* **message\_context**: (optional) One or more source or destination properties to be used in the message. If `message_context` is set, the `message` will be passed as the first argument to `sprintf`, with the values of the properties specified in `message_context` passed as the subsequent arguments to `sprintf`.