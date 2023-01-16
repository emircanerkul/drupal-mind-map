See [Introduction to Form API / Submitting Forms & Processing Form Data](https://www.drupal.org/docs/8/api/form-api/introduction-to-form-api#fapi-submission).

```php
  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('loremipsum.settings');
    $config->set('loremipsum.source_text', $form_state->getValue('source_text'));
    $config->set('loremipsum.page_title', $form_state->getValue('page_title'));
    $config->save();
    return parent::submitForm($form, $form_state);
  }

```