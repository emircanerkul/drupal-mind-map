1\. In _your\_module.info.yml_ file, you define the configuration route:

```php
...
configure: your_module.admin_settings

```

2\. In _your\_module.routing.yml_ file, you define the route:

```php
...
your_module.admin_settings:
  path: '/admin/config/your_module'
  defaults:
    _form: '\Drupal\your_module\Form\ModuleConfigurationForm'
    _title: 'your_module configuration screen'
  requirements:
    _permission: 'administer site configuration'

```

3\. in _your\_module/src/Form/ModuleConfigurationForm.php_ you define the form:

```php
<?php

namespace Drupal\your_module\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Defines a form that configures forms module settings.
 */
class ModuleConfigurationForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'your_module_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'your_module.admin_settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('your_module.admin_settings');
    $form['your_message'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Your message'),
      '#default_value' => $config->get('variable_name'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('your_module.admin_settings')
      ->set('variable_name', $form_state->getValue('your_message'))
      ->save();
    parent::submitForm($form, $form_state);
  }

}

```