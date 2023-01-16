---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/creating-custom-field-types-widgets-and-formatters/create-a-custom-field-widget
description: >-
  Field widgets are used to render the field inside forms. Field widgets are
  defined as plugins, so it's a good idea to familiarize yourself with the
  Plugin API before diving into writing a new field type. To create a field
  widget in Drupal 8 you need a class with the FieldWidget annotation. The
  location of the field widget class should be
  /[MODULE_NAME]/src/Plugin/Field/FieldWidget/. For example,
  /foo/src/Plugin/Field/FieldWidget/BarWidget.php. The namespace of that class
  should be \Drupal\[MODULE_NAME]\Plugin\Field\FieldWidget. For example,
  \Drupal\foo\Plugin\Field\FieldWidget.
published_time: '2015-11-22T22:46:28+00:00'
modified_time: '2022-10-05T22:31:20+00:00'
---
Field widgets are used to render the field inside forms. Field widgets are defined as plugins, so it's a good idea to familiarize yourself with the [Plugin API](https://www.drupal.org/docs/8/api/plugin-api) before diving into writing a new field type.

To create a field widget in Drupal 8 you need a class with the FieldWidget annotation.

The **location** of the field widget class should be `/[MODULE_NAME]/src/Plugin/Field/FieldWidget/`. For example, `/foo/src/Plugin/Field/FieldWidget/BarWidget.php`.

The **namespace** of that class should be `\Drupal\[MODULE_NAME]\Plugin\Field\FieldWidget`. For example, `\Drupal\foo\Plugin\Field\FieldWidget`.

The **annotation** above the class should include a unique id, a label and an array of ids of field types that this widget can handle.

```php
/**
 * A widget bar.
 *
 * @FieldWidget(
 *   id = "bar",
 *   label = @Translation("Bar widget"),
 *   field_types = {
 *     "baz",
 *     "string"
 *   }
 * )
 */

```

The **class** needs to implement the WidgetInterface interface. And can extend the WidgetBase class for common implementation of the interface. The only required method to implement is `::formElement()` which should return the actual form elements that represent your widget.

```php
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

//...
class BarWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element += [
      // Add to the element render array passed in.
      // See WidgetInterface::formElement().
    ];
    
    return ['value' => $element];
  }

}

```

### Widget Settings

If your widget needs additional settings, there are three steps required to achieve this:

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
    // Create the custom setting 'size', and
    // assign a default value of 60
    'size' => 60,
  ] + parent::defaultSettings();
}

```

#### Step 2: Create the configuration schema for the settings you've created

Configuration schema goes in the following file:

```php
/[MODULE_NAME]/config/schema/[MODULE_NAME].schema.yml
```

In this file, you will describe the data type(s) of the setting(s) you've introduced in defaultSettings():

Step 1 created a setting named 'size', that stores an integer value. The schema for this would look like the following:

```yaml
field.widget.settings.[WIDGET ID]:
  type: mapping
  label: 'WIDGET NAME widget settings'
  mapping:
    size:
      type: integer
      label: 'Size'

```

#### Step 3 - Create a form to allow users to change the settings

The form to allow for users to change the values for the settings is created by overriding [WidgetBase::settingsForm()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21WidgetBase.php/function/WidgetBase%3A%3AsettingsForm/8.2.x)

```php
/**
 * {@inheritdoc}
 */
public function settingsForm(array $form, FormStateInterface $form_state) {
  $element['size'] = [
    '#type' => 'number',
    '#title' => $this->t('Size of textfield'),
    '#default_value' => $this->getSetting('size'),
    '#required' => TRUE,
    '#min' => 1,
  ];

  return $element;
}
```

You can also list the selected settings in the summary for the widget as follows:

```php
/**
 * {@inheritdoc}
 */
public function settingsSummary() {
  $summary = [];

  $summary[] = $this->t('Textfield size: @size', array('@size' => $this->getSetting('size')));

  return $summary;
}
```

You can use the [getSetting()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21PluginSettingsBase.php/function/PluginSettingsBase%3A%3AgetSetting/8.2.x) method of the class to retrieve the setting, for use in the widget:

```php
class BarWidget extends WidgetBase implements WidgetInterface {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element['value'] = $element + [
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->value) ? $items[$delta]->value : NULL,
      '#size' => $this->getSetting('size'),
    ];

    return $element;
  }

}

```