The usage examples below are 3 different scenarios. Use the example that suits your use case. 

### **Step #3.1: Call from controller**

In the place where you are returning your render array (whether from a controller method that is called from your router yml file, or wherever), make a call to your twig template. Below is an example from a testing module that is called from the routing yml file in the module. (need more info on this part)

```php
<?php
/**
 * @file
 * Contains \Drupal\test_twig\Controller\TestTwigController.
 */
 
namespace Drupal\test_twig\Controller;
 
use Drupal\Core\Controller\ControllerBase;
 
class TestTwigController extends ControllerBase {
  public function content() {
 
    return [
      '#theme' => 'my_template',
      '#test_var' => $this->t('Test Value'),
    ];
 
  }
}

```

### **Step #3.2: Render as HTML**

You can also use render service method to build the output if you need to use this as part of a different workflow in your code: -

```php
$renderable = [
  '#theme' => 'my_template',
  '#test_var' => 'test variable',
];
$rendered = \Drupal::service('renderer')->renderPlain($renderable);


```

Keep in mind that this is a basic implementation, and doesn't do any kind of caching. The [Render API Overview](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/group/theme%5Frender/8) docs contain more information about how you can add caching to this. Speaking of caching - variable names will be cached and if you change them (say, "test\_var" to "my\_var") you'll have to refresh the cache.

### **Step #3.3: Render as part of another plugin (such as block).**

You can also use render array as output of custom plugin such as block: 

```php
<?php

namespace Drupal\[module]\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'My Template' block.
 *
 * @Block(
 *   id = "my_template_block",
 *   admin_label = @Translation("My Template")
 * )
 */
class MyTemplateBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return ['label_display' => FALSE];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $renderable = [
      '#theme' => 'my_template',
      '#test_var' => 'test variable',
    ];

    return $renderable;
  }

}

```

For more information about above example see [Block API overview](https://www.drupal.org/docs/8/api/block-api/block-api-overview).