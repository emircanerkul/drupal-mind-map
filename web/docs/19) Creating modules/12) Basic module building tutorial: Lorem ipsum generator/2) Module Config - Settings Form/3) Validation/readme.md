See [Introduction to Form API / Validating Forms](https://www.drupal.org/docs/8/api/form-api/introduction-to-form-api#fapi-validation).

We must also declare the _validateForm()_, _submitForm()_ and _getEditableConfigNames()_ methods, even if we're not using them:

```php
/**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {

  }

```