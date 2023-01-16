---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/creating-custom-field-types-widgets-and-formatters/create-a-custom-field-type
description: >-
  Field types define the properties and behaviors of fields. Field types are
  defined as plugins, so it's a good idea to familiarize yourself with the
  Plugin API before diving into writing a new field type. To create a field type
  in Drupal 8 you need a class with the FieldType annotation. The location of
  the field type class should be placed inside
  MODULE_NAME/src/Plugin/Field/FieldType
  /modules/foo/src/Plugin/Field/FieldType/BazItem.php The namespace of that
  class should be Drupal\MODULE_NAME\Plugin\Field\FieldType
published_time: '2013-07-29T07:25:04+00:00'
modified_time: '2023-01-04T10:40:55+00:00'
---
Field types define the properties and behaviors of fields. Field types are defined as plugins, so it's a good idea to familiarize yourself with the [Plugin API](https://www.drupal.org/docs/8/api/plugin-api) before diving into writing a new field type.

To create a field type in Drupal 8 you need a class with the FieldType annotation.

The **location** of the field type class should be placed inside MODULE\_NAME/src/Plugin/Field/FieldType  
_/modules/foo/src/Plugin/Field/FieldType/BazItem.php_

The **namespace** of that class should be Drupal\\MODULE\_NAME\\Plugin\\Field\\FieldType

```php
<?php

namespace Drupal\MODULE_NAME\Plugin\Field\FieldType;


```

The **annotation** above the class, within the doc comment, should include a unique id, a label, and the default formatter. The default formatter will be the ID used in the annotation of the field formatter class.

```php
/**
 * Provides a field type of baz.
 * 
 * @FieldType(
 *   id = "baz",
 *   label = @Translation("Baz field"),
 *   default_formatter = "baz_formatter",
 *   default_widget = "baz_widget",
 * )
 */

```

The **class** needs to implement the FieldItemInterface interface. And should extend the FieldItemBase class for common implementation of the interface.

```php
class BazItem extends FieldItemBase {

}

```

[FieldItemInterface::schema()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldItemInterface.php/function/FieldItemInterface%3A%3Aschema/8.2.x) should be overridden, in order to tell the system how to store the value(s) for the field

```php
/**
 * {@inheritdoc}
 */
public static function schema(FieldStorageDefinitionInterface $field_definition) {
  return [
    // columns contains the values that the field will store
    'columns' => [
      // List the values that the field will save. This
      // field will only save a single value, 'value'
      'value' => [
        'type' => 'text',
        'size' => 'tiny',
        'not null' => FALSE,
      ],
    ],
  ];
}


```

This method returns an array of [Schema API column specifications](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Database%21database.api.php/group/schemaapi/8.5.x).

The method [FieldItemInterface::propertyDefinitions()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldItemInterface.php/function/FieldItemInterface%3A%3ApropertyDefinitions/8.5.x) tells the system more details about your properties and/or validation constraints of the field. See the IDs in the plugin annotations of the DataTypes defined in the core/lib/Drupal/Core/TypedData/Plugin/DataType directory. Core constraints are defined in the core/lib/Drupal/Core/Validation/Plugin/Validation/Constraint directory.

```php
/**
 * {@inheritdoc}
 */
public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
  $properties = [];

  $properties['value'] = DataDefinition::create('string')
    ->setLabel(t('Value'))
    ->setRequired(TRUE);

  return $properties;
}
```

The method [Map::isEmpty](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21TypedData%21Plugin%21DataType%21Map.php/function/Map%3A%3AisEmpty/8.5.x) (an ancestor of FieldItemBase) should be overridden, telling the system how to determine when the field is empty.

```php
/**
 * {@inheritdoc}
 */
public function isEmpty() {
  $value = $this->get('value')->getValue();
  return $value === NULL || $value === '';
}
```

### Field Settings

Field settings allow users to customize the field according to their needs. If the field has any field settings, three steps need to be taken:

1. Override [FieldItemBase::defaultFieldSettings()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldItemBase.php/function/FieldItemBase%3A%3AdefaultFieldSettings/8.5.x) in order to set the defaults
2. Create the configuration schema for the settings you've created
3. Create a form to allow users to change the settings

#### Step 1: Override FieldItemBase::defaultFieldSettings()

```php
/**
 * {@inheritdoc}
 */
public static function defaultFieldSettings() {
  return [
    // Declare a single setting, 'size', with a default
    // value of 'large'
    'size' => 'large',
  ] + parent::defaultFieldSettings();
}

```

#### Step 2: Create the configuration schema for the settings you've created

Configuration schema goes in the following file:

```php
[MODULE ROOT]/config/schema/[MODULE_NAME].schema.yml
```

In this file, you will describe the data type(s) of the setting(s) you've created in defaultFieldSettings():

Step 1 created a setting named 'size', that stores a string value. The schema for this would look like the following:

```yaml
field.field_settings.[FIELD ID]:
  type: mapping
  label: 'FIELDNAME settings'
  mapping:
    size:
      type: string
      label: 'Size'
    
```

#### Step 3: Create a form to allow users to change the settings

The form to allow for users to change the values for the settings is created by overriding [FieldItemBase::fieldSettingsForm()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldItemBase.php/function/FieldItemBase%3A%3AfieldSettingsForm/8.5.x)

```php
/**
 * {@inheritdoc}
 */
public function fieldSettingsForm(array $form, FormStateInterface $form_state) {
  
  $element = [];
  // The key of the element should be the setting name
  $element['size'] = [
    '#title' => $this->t('Size'),
    '#type' => 'select',
    '#options' => [
      'small' => $this->t('Small'),
      'medium' => $this->t('Medium'),
      'large' => $this->t('Large'),
    ],
    '#default_value' => $this->getSetting('size'),
  ];

  return $element;
}

```