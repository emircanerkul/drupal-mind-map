---
url: https://www.drupal.org/docs/8/core/modules/options/overview
description: >-
  In Drupal 8 and later, the Options module is included in Drupal core. When
  enabled, the Options module defines selection, check box and radio button
  widgets for text and numeric fields. Options provides a number of hooks:
  hook_options_list returns the list of options to be displayed for a field.
  Field types willing to enable one or several of the widgets defined in
  options.module (select, radios/checkboxes, on/off checkbox) need to implement
  this hook to specify the list of options to display in the widgets. Parameters
  $field: The field definition. $instance: The instance definition.
published_time: '2013-05-24T22:12:51+00:00'
modified_time: '2016-11-30T12:50:18+00:00'
---
In Drupal 8 and later, the Options module is included in [Drupal core](/node/3060). When enabled, the Options module defines selection, check box and radio button widgets for text and numeric fields.

Options provides a number of hooks:

**hook\_options\_list** returns the list of options to be displayed for a field. Field types willing to enable one or several of the widgets defined in options.module (select, radios/checkboxes, on/off checkbox) need to  
implement this hook to specify the list of options to display in the widgets.

**Parameters**

1. $field: The field definition.
2. $instance: The instance definition. It is recommended to only use instance level properties to filter out values from a list defined by field level properties.
3. $entity: The entity object the field is attached to.
4. @return: The array of options for the field. Array keys are the values to be stored, and should be of the data type (string, number...) expected by the first 'column' for the field type. Array values are the labels to display within the widgets. The labels should NOT be sanitized, options.module takes care of sanitation according to the needs of each widget. The HTML tags defined in \_field\_filter\_xss\_allowed\_tags() are allowed, other tags will be filtered.

**hook\_options\_list\_alter** alters the list of options to be displayed for a field. This hook can notably be used to change the label of the empty option.  
**Parameters**

1. $options: The array of options for the field, as returned by hook\_options\_list(). An empty option (\_none) might have been added, depending on the field properties.
2. $context: An associative array containing:  
   * field: The field definition (\\Drupal\\field\\Plugin\\Core\\Entity\\Field).  
   * instance: The instance definition. It is recommended to only use instance level properties to filter out values from a list defined by field level properties (Drupal\\field\\Plugin\\Core\\Entity\\FieldInstance).  
   * entity: The entity object the field is attached to (\\Drupal\\Core\\Entity\\EntityInterface).