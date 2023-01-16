Let's create a select field that let's users choose their favourite colour. At the end of the list add the option "Other". If a user selects "Other" you want to display a textfield where the user can enter their colour of choice.

![Drupal Form API #states - Conditional Fields, Figure 1](https://www.drupal.org/files/drupalformapistates.gif)

```php
<?php

namespace Drupal\ajaxfilters\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;


class DefaultForm extends FormBase
{
  public function getFormId() {
    return 'default_form';
  }


  public function buildForm(array $form, FormStateInterface $form_state)
  {
    //create a list of radio boxes that will toggle the  textbox
    //below if 'other' is selected
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
        //define static name and id so we can easier select it
        // 'id' => 'colour_select',
        'name' => 'field_colour_select',
      ],
    ];

    //this textfield will only be shown when the option 'Other'
    //is selected from the radios above.
    $form['custom_colour'] = [
      '#type' => 'textfield',
      '#size' => '60',
      '#placeholder' => 'Enter favourite colour',
      '#attributes' => [
        'id' => 'custom-colour',
      ],
      '#states' => [
        //show this textfield only if the radio 'other' is selected above
        'visible' => [
          // Don't mistake :input for the type of field or for a css selector --
          // it's a jQuery selector. 
          // You can always use :input or any other jQuery selector here, no matter 
          // whether your source is a select, radio or checkbox element.
          ':input[name="field_colour_select"]' => ['value' => 'other'],
        ],
      ],
    ];

    //create the submit button
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Sorry, I\'m colour-blind'),
    ];

    return $form;
  }


  public function validateForm(array &$form, FormStateInterface $form_state)
  {
    parent::validateForm($form, $form_state);
  }


  public function submitForm(array &$form, FormStateInterface $form_state)
  {
    // Display result.
    foreach ($form_state->getValues() as $key => $value) {
      drupal_set_message($key . ': ' . $value);
    }
  }

}

```

Now let's enhance this example a little bit. Make sure the user can't choose any other colour, after he selected 'Other' and entered a custom favourite colour. To achieve this we also add a #states property to the radios list and tell it, to enable the field only if the value of the custom colour textbox is empty.

![Drupal Form API #states property, Figure 2](https://www.drupal.org/files/drupalformapistates2.gif)

```php
  public function buildForm(array $form, FormStateInterface $form_state)
  {
    //create a list of radio boxes that will toggle the  textbox
    //below if 'other' is selected
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
        //define static name and id so we can easier select it
        // 'id' => 'select-colour',
        'name' => 'field_select_colour',
      ],
      //add the #states property to the radios
      '#states' => [
        'enabled' => [
          //enable the radios only if the custom color textbox is empty
          ':input[name="field_custom_colour"]' => ['value' => ''],
        ],
      ],
    ];

    //this textfield will only be shown when the option 'Other'
    //is selected from the radios above.
    $form['custom_colour'] = [
      '#type' => 'textfield',
      '#size' => '60',
      '#placeholder' => 'Enter favourite colour',
      '#attributes' => [
        //also add static name and id to the textbox
        'id' => 'custom-colour',
        'name' => 'field_custom_colour',
      ],
      '#states' => [
        //show this textfield only if the radio 'other' is selected above
        'visible' => [
          ':input[name="field_select_colour"]' => ['value' => 'other'],
        ],
      ],
    ];

    //create the submit button
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Sorry, I\'m colour-blind'),
    ];

    return $form;

  }
```

### States based on boolean form fields (checkboxes)

![Drupal states and boolean form fields](https://www.drupal.org/files/drupal_states_with_boolean_fields.gif)

The field above (field\_override\_subject) is of type boolean. The field below (field\_subject) is a simple plaintext field. 

```php
  // Enable or disable subject field depending on the
  // state of field_override_subject (bool).
  // Make sure to use the right CSS selector. Use your browser's
  // dev tools to find the correct 'name' property of the input field.
  $form['field_subject']['#states'] = [
    'visible' => [
      ':input[name="field_override_subject[value]"]' => ['checked' => TRUE],
    ],
  ];
```