Then we define our form fields and return the form:

```php
    // Page title field.
    $form['page_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum generator page title:'),
      '#default_value' => $config->get('loremipsum.page_title'),
      '#description' => $this->t('Give your lorem ipsum generator page a title.'),
    ];
    // Source text field.
    $form['source_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Source text for lorem ipsum generation:'),
      '#default_value' => $config->get('loremipsum.source_text'),
      '#description' => $this->t('Write one sentence per line. Those sentences will be used to generate random text.'),
    ];

    return $form;
  }
```