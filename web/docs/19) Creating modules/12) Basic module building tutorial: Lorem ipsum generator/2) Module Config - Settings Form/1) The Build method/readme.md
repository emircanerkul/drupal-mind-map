Next is the method that actually builds the settings form:

```php
  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Form constructor.
    $form = parent::buildForm($form, $form_state);
    // Default settings.
    $config = $this->config('loremipsum.settings');
```

The _$config_ variable is where we store our current settings.