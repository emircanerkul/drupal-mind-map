---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/creating-custom-field-types-widgets-and-formatters/create-a-custom-field-formatter
description: >-
  The field formatter formats the field data to be viewed by the end user. Field
  formatters are defined as plugins, so it's a good idea to familiarize yourself
  with the Plugin API before diving into writing a new field formatter. Field
  formatter class File:
  /modules/random/src/Plugin/Field/FieldFormatter/RandomDefaultFormatter.php
published_time: '2015-11-22T22:44:36+00:00'
modified_time: '2022-10-07T22:23:53+00:00'
---
The field formatter formats the field data to be viewed by the end user. Field formatters are defined as plugins, so it's a good idea to familiarize yourself with the [Plugin API](https://www.drupal.org/docs/8/api/plugin-api) before diving into writing a new field formatter.

### Field formatter class

File: /modules/random/src/Plugin/Field/FieldFormatter/RandomDefaultFormatter.php

```php
<?php

namespace Drupal\random\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;

/**
 * Plugin implementation of the 'Random_default' formatter.
 *
 * @FieldFormatter(
 *   id = "random_default",
 *   label = @Translation("Random text"),
 *   field_types = {
 *     "random"
 *   }
 * )
 */
class RandomDefaultFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    $summary[] = $this->t('Displays the random string.');
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];

    foreach ($items as $delta => $item) {
      // Render each element as markup.
      $element[$delta] = ['#markup' => $item->value];
    }

    return $element;
  }

}

```

### Formatter Settings

If your formatter needs custom display settings, there are three steps required to achieve this:

1. Override [PluginSettingsBase::defaultSettings()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21PluginSettingsBase.php/function/PluginSettingsBase%3A%3AdefaultSettings/8.2.x) in order to set the defaults
2. Create the configuration schema for the settings you've created
3. Create a form to allow users to change the settings

#### Step 1: Override PluginSettingsBase::defaultSettings() in order to set the defaults

```php
/**
 * {@inheritdoc}
 */
public static function defaultSettings() {
  return [
    // Declare a setting named 'text_length', with
    // a default value of 'short'
    'text_length' => 'short',
  ] + parent::defaultSettings();
}

```

#### Step 2: Create the configuration schema for the settings you've created

Configuration schema goes in the following file:

```php
[MODULE ROOT]/config/schema/[MODULE_NAME].schema.yml
```

In this file, you will describe the data type(s) of the setting(s) you've created in defaultSettings():

Step 1 created a setting named 'text\_length', that stores a string value. The schema for this would look like the following:

```yaml
field.formatter.settings.[FORMATTER ID]:
  type: mapping
  label: 'FORMATTER NAME text length'
  mapping:
    text_length:
      type: string
      label: 'Text Length'

```

#### Step 3: Create a form to allow users to change the settings

The form to allow users to change the values for the settings is created by overriding [FormatterBase::settingsForm()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FormatterBase.php/function/FormatterBase%3A%3AsettingsForm/8.2.x)

Remember to add the form state namespace to the top of the PHP file.

```php
use Drupal\Core\Form\FormStateInterface;
```

```php
/**
 * {@inheritdoc}
 */
public function settingsForm(array $form, FormStateInterface $form_state) {
  $form = parent::settingsForm($form, $form_state);

  $form['text_length'] = [
    '#title' => $this->t('Text length'),
    '#type' => 'select',
    '#options' => [
      'short' => $this->t('Short'),
      'long' => $this->t('Long'),
    ],
    '#default_value' => $this->getSetting('text_length'),
  ];

  return $form;
}

```