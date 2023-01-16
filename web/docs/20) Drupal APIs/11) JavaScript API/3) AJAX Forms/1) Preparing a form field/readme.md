You can use AJAX events on your own forms or attach your custom event to an existing field in another form that was created by core or a contrib module. Use [hook\_form\_alter](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21form.api.php/function/hook%5Fform%5Falter/8.7.x) to attach AJAX events to existing forms.

![Drupal AJAX Forms, Figure 1](https://www.drupal.org/files/drupal_ajaxforms1.png)

```php
<?php

namespace Drupal\ajaxfilters\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\ReplaceCommand;

/**
 * Provides a default form.
 */
class DefaultForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'default_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Create a select field that will update the contents
    // of the textbox below.
    $form['example_select'] = [
      '#type' => 'select',
      '#title' => $this->t('Select element'),
      '#options' => [
        '1' => $this->t('One'),
        '2' => $this->t('Two'),
        '3' => $this->t('Three'),
        '4' => $this->t('From New York to Ger-ma-ny!'),
      ],
    ];

    // Create a textbox that will be updated
    // when the user selects an item from the select box above.
    $form['output'] = [
      '#type' => 'textfield',
      '#size' => '60',
      '#disabled' => TRUE,
      '#value' => 'Hello, Drupal!!1',      
      '#prefix' => '<div id="edit-output">',
      '#suffix' => '</div>',
    ];

    // Create the submit button.
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Display result.
    foreach ($form_state->getValues() as $key => $value) {
      \Drupal::messenger()->addStatus($key . ': ' . $value);
    }
  }

}

```

Drupal will auto-generate an ID for all Form elements and you can always view the rendered output to find out what ID Drupal has created. However, this is not future-proof and Drupal may, for whatever reason, change the ID and your callback will then fail to work. To overcome that the '#attributes' render element has been used to supply a specific HTML ID. This will be important in later steps.