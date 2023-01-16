Above examples are using a SELECT form field to trigger AJAX events. The same approach can be used to trigger callback functions when a user enters text in a textfield element.

```php
<?php

namespace Drupal\my_module\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\InvokeCommand;

/**
 * Class SearchForm.
 */
class SearchForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'search_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    // Prevent page reload when user hits enter key in the searchbox.
    $form['#attributes'] = [
      'onsubmit' => 'return false',
    ];

    // Define the searchfield.
    $form['search_product'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Search product'),
      '#description' => $this->t('Enter search text and hit enter key.'),
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
      // Attach AJAX callback.
      '#ajax' => [
        'callback' => '::updateSearchString',
        // Set focus to the textfield after hitting enter.
        'disable-refocus' => FALSE,
        // Trigger when user hits enter key.
        'event' => 'change',
        // Trigger after each key press.
        // 'event' => 'keyup'
        'progress' => [
          'type' => 'throbber',
          'message' => $this->t('Searching products ...'),
        ],
      ],
    ];

    // Optionally display a submit button.
    // $form['submit'] = [
    //   '#type' => 'submit',
    //   '#value' => $this->t('Submit'),
    // ];

    return $form;
  }

  /**
   * AJAX Callback for searchbar.
   *
   * Called when the text in the searchbox changes.
   * Calls custom Javascript command.
   *
   * @param array $form
   *   Nested array of form elements that comprise the form.
   * @param Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return Drupal\Core\Ajax\AjaxResponse
   *   Returns an AJAX response object.
   */
  public function updateSearchString(array &$form, FormStateInterface $form_state) {
    // Get value from search textbox.
    $searchText = $form_state->getValue('search_product');
    // Invoke the callback function.
    $response = new AjaxResponse();
    $response->addCommand(new InvokeCommand(NULL, 'MyJavascriptCallbackFunction', [$searchText]));
    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Do nothing.
  }

}

```