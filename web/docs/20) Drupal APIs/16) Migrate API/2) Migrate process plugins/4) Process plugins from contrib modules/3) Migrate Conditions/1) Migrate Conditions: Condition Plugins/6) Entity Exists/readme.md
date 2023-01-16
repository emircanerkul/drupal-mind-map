---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/entity-exists
description: >-
  This condition is 100% inspired by the core entity_exists process plugin. It
  uses all the same syntax. Available configuration keys: entity_type: The
  machine name of the entity type. negate: (optional) Whether to negate the
  'entity_exists' condition. Defaults to FALSE. You can also negate the
  'entity_exists' plugin by using 'not:entity_exists' as the plugin id. source:
  (optional) Property or array of properties on which to evaluate the condition.
published_time: '2022-02-09T15:00:13+00:00'
modified_time: '2022-11-20T00:59:16+00:00'
---
This condition is 100% inspired by the core [entity\_exists process plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21EntityExists.php/class/EntityExists). It uses all the same syntax.

Available configuration keys:

* **entity\_type**: The machine name of the entity type.
* **negate**: (optional) Whether to negate the 'entity\_exists' condition. Defaults to FALSE. You can also negate the 'entity\_exists' plugin by using 'not:entity\_exists' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

The `entity_type` can be specified using parens notation.