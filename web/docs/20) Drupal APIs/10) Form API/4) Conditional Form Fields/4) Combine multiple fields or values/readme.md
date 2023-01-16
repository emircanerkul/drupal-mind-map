The #states property also allows to dynamically set a field's state based on values selected in multiple different fields or on multiple values of the same field.

Multiple conditions have to be grouped together in an array. Conditional logic is applied by adding `'and'`, `'or'` or `'xor'` in the grouping array. And even multiple groups can again be grouped together for more complex requirements.

Let's have a look at some examples, it's easier than it sounds.

### States based on multiple values of the same field

In our example above a textfield is displayed, when the user chooses the option 'Other' from the list of colors. Let's add second option that will also display the textfield and call it 'Custom color'.

```php
  // Create a list of radio boxes that will toggle the  textbox
  // below if 'other' or 'custom' is selected.
  $form['colour_select'] = [
    '#type' => 'radios',
    '#title' => $this->t('Pick a colour'),
    '#options' => [
      'blue' => $this->t('Blue'),
      'white' => $this->t('White'),
      'black' => $this->t('Black'),
      'other' => $this->t('Other'),
      'custom' => $this->t('Custom colour'),
    ],
    '#attributes' => [
      'name' => 'field_select_colour',
    ],
  ];

  // This textfield will be shown when either the option 'Other'
  // or 'Custom colour' is selected from the radios above.
  $form['custom_colour'] = [
    '#type' => 'textfield',
    '#size' => '60',
    '#placeholder' => 'Enter favourite colour',
    '#attributes' => [
      // Also add static name and id to the textbox.
      'id' => 'custom-colour',
      'name' => 'field_custom_colour',
    ],
    '#states' => [
      // Show this textfield if the radio 'other' or 'custom' is selected above.
      'visible' => [
        ':input[name="field_select_colour"]' => [
          // User selected 'Other'.
          ['value' => 'other'],
          // Conditional logic. Allowed are the values or, xor, and.
          'or',
          // User selected 'Custom colour'.
          ['value' => 'custom'],
        ],
      ],
    ],
  ];
```

### States based on values of multiple different fields

In this example the textfield for the custom color is only displayed if the user selects the 'Other' option from the field **Pick a colour** and the 'Yes' option from the field **Do you want to enter a custom colour**.

```php
  // Create a list of radio boxes with colours.
  $form['colour_select'] = [
    '#type' => 'radios',
    '#title' => $this->t('Pick a colour'),
    '#options' => [
      'blue' => $this->t('Blue'),
      'white' => $this->t('White'),
      'black' => $this->t('Black'),
      'other' => $this->t('Other'),
    ],
    '#attributes' => [
      'name' => 'field_select_colour',
    ],
  ];

  // Create a list of radio boxes that will only allow to select
  // yes or no.
  $form['choice_select'] = [
    '#type' => 'radios',
    '#title' => $this->t('Do you want to enter a custom colour?'),
    '#options' => [
      'yes' => $this->t('Yes'),
      'no' => $this->t('No'),
    ],
    '#attributes' => [
      'name' => 'field_choice_select',
    ],
  ];

  // This textfield will be shown when either the option 'Other'
  // or 'Custom colour' is selected from the radios above.
  $form['custom_colour'] = [
    '#type' => 'textfield',
    '#size' => '60',
    '#placeholder' => 'Enter favourite colour',
    '#attributes' => [
      // Also add static name and id to the textbox.
      'id' => 'custom-colour',
      'name' => 'field_custom_colour',
    ],
    '#states' => [
      // Show this textfield if the radios 'other' and 'yes' are
      // selected in the fields above.
      'visible' => [
        ':input[name="field_select_colour"]' => ['value' => 'other'],
        'and',
        ':input[name="field_choice_select"]' => ['value' => 'yes'],
      ],
    ],
  ];
```

### Complex conditions based on multiple fields and values

In this example we want to show the textfield if either 'Other' and 'Yes' or 'Blue' and 'No' are selected. This doesn't make much sense but is good enough for an example.

```php
  // Create a list of radio boxes with colours.
  $form['colour_select'] = [
    '#type' => 'radios',
    '#title' => $this->t('Pick a colour'),
    '#options' => [
      'blue' => $this->t('Blue'),
      'white' => $this->t('White'),
      'black' => $this->t('Black'),
      'other' => $this->t('Other'),
    ],
    '#attributes' => [
      'name' => 'field_select_colour',
    ],
  ];

  // Create a list of radio boxes that will only allow to select
  // yes or no.
  $form['choice_select'] = [
    '#type' => 'radios',
    '#title' => $this->t('Do you want to enter a custom colour?'),
    '#options' => [
      'yes' => $this->t('Yes'),
      'no' => $this->t('No'),
    ],
    '#attributes' => [
      'name' => 'field_choice_select',
    ],
  ];

  // This textfield will be shown when either the option 'Other'
  // or 'Custom colour' is selected from the radios above.
  $form['custom_colour'] = [
    '#type' => 'textfield',
    '#size' => '60',
    '#placeholder' => 'Enter favourite colour',
    '#attributes' => [
      // Also add static name and id to the textbox.
      'id' => 'custom-colour',
      'name' => 'field_custom_colour',
    ],
    '#states' => [
      // Show this textfield if the radios 'other' and 'yes' are
      // selected in the fields above.
      'visible' => [
        [
          ':input[name="field_select_colour"]' => ['value' => 'other'],
          'and',
          ':input[name="field_choice_select"]' => ['value' => 'yes'],
        ],
        'or',
        [
          ':input[name="field_select_colour"]' => ['value' => 'blue'],
          'and',
          ':input[name="field_choice_select"]' => ['value' => 'no'],
        ],
      ],
    ],
  ];
```