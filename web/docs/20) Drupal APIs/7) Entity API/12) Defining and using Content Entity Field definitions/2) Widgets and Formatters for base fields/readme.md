Base fields can specify the widgets and formatters they should use just like configurable fields. The widget and formatter and necessary settings are specified on the FieldDefinition class like this:

```php
use Drupal\Core\Field\BaseFieldDefinition;

// ...

    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setDescription(t('The title of this node, always treated as non-markup plain text.'))
      ->setRequired(TRUE)
      ->setTranslatable(TRUE)
      ->setSettings(array(
        'default_value' => '',
        'max_length' => 255,
      ))
      ->setDisplayOptions('view', array(
        'label' => 'hidden',
        'type' => 'string',
        'weight' => -5,
      ))
      ->setDisplayOptions('form', array(
        'type' => 'string',
        'weight' => -5,
      ))
      ->setDisplayConfigurable('form', TRUE);

```

This uses the "string" formatter and widget and configures the weight for the node title. `setDisplayConfigurable()` can be used to make the field visible in the manage form display/manage display UI's, so that the order and label display can be changed. Core currently does not allow a change to the widget or their settings in the UI.

For setting a field as hidden by default you can also define a `region` key in the array you pass to `setDisplayOptions()` and set it to `hidden.`