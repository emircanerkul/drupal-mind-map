Using #ajax in settings forms is not straightforward, as the form snippet created in settingsForm() is not at the root of the form, but rather nested deeply. In the example below, the form has two settings: _display\_type_, which can be either 'label' or 'entity', and _entity\_display\_mode_, which can be either 'full' or 'teaser'. The entity display mode is only shown when the display\_type is set to 'entity'.

```php
public function settingsForm(array $form, FormStateInterface $form_state) {
  $form['display_type'] = [
    '#title' => $this->t('Display Type'),
    '#type' => 'select',
    '#options' => [
      'label' => $this->t('Label'),
      'entity' => $this->t('Entity'),
    ],
    '#default_value' => $this->getSetting('display_type'),
    '#ajax' => [
      'wrapper' => 'private_message_thread_member_formatter_settings_wrapper',
      'callback' => [$this, 'ajaxCallback'],
    ],
  ];

  $form['entity_display_mode'] = [
    '#prefix' => '<div id="private_message_thread_member_formatter_settings_wrapper">',
    '#suffix' => '</div>',
  ];

  // First, retrieve the field name for the current field]
  $field_name = $this->fieldDefinition->getItemDefinition()->getFieldDefinition()->getName();
  // Next, set the key for the setting for which a value is to be retrieved
  $setting_key = 'display_type';

  // Try to retrieve a value from the form state. This will not exist on initial page load
  if($value = $form_state->getValue(['fields', $field_name, 'settings_edit_form', 'settings', $setting_key])) {
    $display_type = $value;
  }
  // On initial page load, retrieve the default setting
  else {
    $display_type = $this->getSetting('display_type');
  }

  if($display_type == 'entity') {
    $form['entity_display_mode']['#type'] = 'select';
    $form['entity_display_mode']['#title'] = $this->t('View mode');
    $form['entity_display_mode']['#options'] = [
      'full' => $this->t('Full'),
      'teaser' => $this->t('Teaser'),
    ];
    $form['entity_display_mode']['#default_value'] = $this->getSetting('entity_display_mode');
  }
  else {
    // Force the element to render (so that the AJAX wrapper is rendered) even
    // When no value is selected
    $form['entity_display_mode']['#markup'] = '';
  }

  return $form;
}

```

Next, create the ajax callback, and return the relevant form element:

```php
public function ajaxCallback(array $form, FormStateInterface $form_state) {
  $field_name = $this->fieldDefinition->getItemDefinition()->getFieldDefinition()->getName();
  $element_to_return = 'entity_display_mode';

  return $form['fields'][$field_name]['plugin']['settings_edit_form']['settings'][$element_to_return];
}


```