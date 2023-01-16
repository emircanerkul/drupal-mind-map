---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/older-than
description: >-
  The source must be a datetime string in the configured format. The date we
  compare to (either value or property) can be either a datetime string
  understood by strtotime() or a datetime string in the configured format.
published_time: '2022-02-09T14:52:16+00:00'
modified_time: '2022-11-20T21:01:15+00:00'
---
The source must be a datetime string in the configured format. The date we compare to (either value or property) can be either a datetime string understood by `strtotime()` or a datetime string in the configured format.

For details about php date formats, please see <https://www.php.net/manual/en/datetime.format.php>

For details about `strtotime()` please see <https://www.php.net/manual/en/function.strtotime.php>

Available configuration keys:

* **value**: (one of value or property is required) A date string as accepted by strtotime() or a datetime string matching the configured format, against which the source value should be compared.
* **property**: (one of value or property is required) The source or destination property containing a date string as accepted by strtotime() against which the source value should be compared. If comparing the source to a property, the property value must be in the same format as the source.
* **format**: The format of the source as accepted by DateTime::createFromFormat().
* **negate**: (optional) Whether the 'older\_than' condition should be negated. Defaults to FALSE. You can also negate the 'older\_than' plugin by using 'not:older\_than' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.