---
url: >-
  https://www.drupal.org/docs/creating-modules/creating-custom-blocks/add-a-form-to-the-block-configuration
description: >-
  At this point, we have a custom block defined in code. We can extend the
  custom block and add the ability for the site builder to enter a piece of
  configuration for each instance of our custom block. Reminder Always keep in
  mind that all site building configuration in Drupal 8 can be exported from the
  development site and imported to the production site (known as Configuration
  Management). You, as a module builder can also provide a default configuration
  to auto-fill the form when the site builder instantiates a new block.
published_time: '2015-04-08T03:50:20+00:00'
modified_time: '2022-10-11T12:10:52+00:00'
---
At this point, we have [a custom block defined in code](https://www.drupal.org/docs/creating-custom-modules/creating-custom-blocks/create-a-custom-block). We can extend the custom block and **add the ability for the site builder to enter a piece of configuration for each instance of our custom block**.

### Reminder

Always keep in mind that all site building configuration in Drupal 8 can be exported from the development site and imported to the production site (known as [Configuration Management](/documentation/administer/config)). You, as a module builder can also provide a default configuration to auto-fill the form when the site builder instantiates a new block.

### Adding the form

First add this use statement at the top of the new block plugin (`src/Plugin/Block/HelloBlock.php` from [the previous step](https://www.drupal.org/docs/creating-custom-modules/creating-custom-blocks/create-a-custom-block)):

```php
use Drupal\Core\Form\FormStateInterface;

```

Then, add the following methods, which will render the configuration form:

```php
  /**
   * {@inheritdoc}
   */  
  public function defaultConfiguration() {
    return [
      'hello_block_name' => $this->t(''),
    ];
  }
  
  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['hello_block_name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Who'),
      '#description' => $this->t('Who do you want to say hello to?'),
      '#default_value' => $this->configuration['hello_block_name'],
    ];

    return $form;
  }

```

In this example we are adding a new field to the form.

Next, we have to tell Drupal to save the values from our form into the configuration for this block. Here is an example:

```php
  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $this->configuration['hello_block_name'] = $values['hello_block_name'];
  }
```

Optionally a custom validation can be added:

```php
  /**
   * {@inheritdoc}
   */
  public function blockValidate($form, FormStateInterface $form_state) {
    if ($form_state->getValue('hello_block_name') === 'John') {
      $form_state->setErrorByName('hello_block_name', $this->t('You can not say hello to John.'));
    }
  }
```

To view the form, go to your previously added instance in admin->structure->Block Layout and click on Configure for the (Hello World) block.