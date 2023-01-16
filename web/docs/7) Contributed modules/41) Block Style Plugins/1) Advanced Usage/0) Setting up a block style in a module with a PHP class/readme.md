Even more power is available if a custom plugin is created in PHP.

Let's create a new "Sample Class" plugin which we will place in our module's `/src/Plugin/BlockStyle/` directory looking like `/src/Plugin/BlockStyle/SampleClass.php`.

Create a new plugin class extending the BlockStyleBase class. Be sure to add in proper plugin Annotations such as:

```php
/**
 * Provides a 'SampleClass' block style for adding a class in a text field.
 *
 * @BlockStyle(
 *  id = "sample_class",
 *  label = @Translation("Sample Class"),
 * )
 */
```

Add in any default styles into the configuration by overriding the **BlockStyleBase::defaultConfiguration()** method.

```php
public function defaultConfiguration() {
  return ['sample_class' => ''];
}
```

Override the **BlockStyleBase::buildConfigurationForm()** method to extend the $form array with your own custom style options using the Form API.

```php
public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
  $form['sample_class'] = array(
    '#type' => 'textfield',
    '#title' => $this->t('Add a custom class to this block'),
    '#description' => $this->t('Do not add the "period" to the start of the class'),
    '#default_value' => $this->configuration['sample_class'],
  );

  return $form;
}
```

Altogether it would look like:

```php
<?php

namespace Drupal\my_custom_module\Plugin\BlockStyle;

use Drupal\block_style_plugins\Plugin\BlockStyleBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'SampleClass' block style for adding a class in a text field.
 *
 * @BlockStyle(
 *  id = "sample_class",
 *  label = @Translation("Sample Class"),
 * )
 */
class SampleClass extends BlockStyleBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return ['sample_class' => ''];
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['sample_class'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Add a custom class to this block'),
      '#description' => $this->t('Do not add the "period" to the start of the class'),
      '#default_value' => $this->configuration['sample_class'],
    ];

    return $form;
  }

}

```