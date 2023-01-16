---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/working-with-configuration-forms
description: >-
  Use $config in Form Context You can use configuration forms to figure out how
  $config can grab the data entered by the user and change the data in the
  /config/install/{module}.settings.yml file. Here is the code to declare a
  $config object in the form, which you can find in Form Settings PHP file. The
  Drupal Core ConfigFactory class is a way to read and write configuration data,
  and it is used to instantiate a Config object based on the contents of a
  specified configuration file. The new Config object can then be used to
  perform CRUD operations on that data.
published_time: '2014-02-27T12:07:46+00:00'
modified_time: '2022-11-29T06:28:27+00:00'
---
### Use `$config` in Form Context

You can use [configuration forms](https://drupal.org/node/2206551 "Form API") to figure out how `$config` can grab the data entered by the user and change the data in the `/config/install/{module}.settings.yml` file. Here is the code to declare a `$config` object in the form, which you can find in Form Settings PHP file.

The Drupal Core ConfigFactory class is a way to read and write configuration data, and it is used to instantiate a Config object based on the contents of a specified configuration file. The new Config object can then be used to perform CRUD operations on that data.

![$Config Object with Form](https://www.drupal.org/files/Config.jpg)  

Form definition example (located at example/src/Form/exampleSettingsForm.php) :

```php
<?php

namespace Drupal\example\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure example settings for this site.
 */
class ExampleSettingsForm extends ConfigFormBase {

  /** 
   * Config settings.
   *
   * @var string
   */
  const SETTINGS = 'example.settings';

  /** 
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'example_admin_settings';
  }

  /** 
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      static::SETTINGS,
    ];
  }

  /** 
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config(static::SETTINGS);

    $form['example_thing'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Things'),
      '#default_value' => $config->get('example_thing'),
    ];  

    $form['other_things'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Other things'),
      '#default_value' => $config->get('other_things'),
    ];  

    return parent::buildForm($form, $form_state);
  }

  /** 
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Retrieve the configuration.
    $this->config(static::SETTINGS)
      // Set the submitted configuration setting.
      ->set('example_thing', $form_state->getValue('example_thing'))
      // You can set multiple configurations at once by making
      // multiple calls to set().
      ->set('other_things', $form_state->getValue('other_things'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}

```

Routing file (example.routing.yml) :

```php
example.settings:
  path: '/admin/config/example/settings'
  defaults:
    _form: '\Drupal\example\Form\ExampleSettingsForm'
    _title: 'example'
  requirements:
    _permission: 'administer site configuration'

```

Using the `Config` object, you can simplify your data collected from the form. Having the above code in your Form Settings file, you will be able to store form data in `{module}.settings.yml`.

Any class that extends ConfigFormBase must implement the method getEditableConfigNames and return an array of the names of the configuration fields that it edits.