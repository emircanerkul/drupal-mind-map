Creating blocks defined in your module's code requires studying and understanding the [Plugin API](https://drupal.org/developing/api/8/plugins), and more specifically [Annotations based plugin discovery](https://drupal.org/node/1882526), which is the mechanism that Drupal 8 uses to locate the code that defines your block.

Creating a custom block defined by your module involves the following steps:

* Create a block plugin using annotations
* Extend the [Drupal\\Core\\Block\\BlockBase](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Block!BlockBase.php/class/BlockBase/8) class
* Implement the methods from the [Drupal\\Core\\Block\\BlockPluginInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Block!BlockPluginInterface.php/interface/BlockPluginInterface/8) interface needed for your use case

### Make your block visible to Drupal and your users

Drupal uses the PSR-4 standard for discovery. Assuming a module name of `fax,` the code for your custom block(s) should be placed into `fax/src/Plugin/Block/.` Each file in this directory should be named according to the class it contains. If we're going to define the class FaxBlock, it should be in a file named `fax/src/Plugin/Block/FaxBlock.php ` and have content along the lines of the following example:

```php
namespace Drupal\fax\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Fax' block.
 *
 * @Block(
 *   id = "fax_block",
 *   admin_label = @Translation("Fax block"),
 * )
 */
class FaxBlock extends BlockBase {
  // Override BlockPluginInterface methods here.
}

```

The 'id' property in the annotation defines the unique, machine-readable ID of your block, and the name of the block as it will be seen by other code. The 'admin\_label' annotation defines the human-readable name of the block that will be used when displaying your block in the administration interface. The available annotation properties can be found in [\\Drupal\\Core\\Block\\Annotation\\Block](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Block%21Annotation%21Block.php/class/Block/8) (the public properties).

The two most common methods to override are:

`BlockPluginInterface::build()` \- which is expected to return a render array defining the content you want your block to display.

`BlockBase::access()` \- which controls the block's visibility. It is expected to return an AccessResult object.

### Add custom configuration options to your block

You can also add custom configuration options to the block configuration form by overriding the `BlockPluginInterface::blockForm()` and `BlockPluginInterface::blockSubmit()` methods and then using the `BlockBase::setConfigurationValue()` and `BlockBase::getConfiguration()`.

In the next example we're adding a new textfield in our blockForm() method and then saving the user-submitted data in the blockSubmit() method. The code demonstrates how values might be retrieved when building the form, validated, and updated using the appropriate methods.

```php
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Cache\Cache;

/**
 * Provides a 'Fax' block.
 *
 * @Block(
 *   id = "fax_block",
 *   admin_label = @Translation("Fax block"),
 * )
 */
class FaxBlock extends BlockBase implements BlockPluginInterface {

  // Access method here ...

  /**
   * {@inheritdoc}
   */
  public function build() {
    $config = $this->getConfiguration();

    $fax_number = isset($config['fax_number']) ? $config['fax_number'] : '';
    return [
      '#markup' => $this->t('The fax number is @number!', ['@number' => $fax_number]),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    // Retrieve existing configuration for this block.
    $config = $this->getConfiguration();

    // Add a form field to the existing block configuration form.
    $form['fax_number'] = [
      '#type' => 'textfield',
      '#title' => t('Fax number'),
      '#default_value' => isset($config['fax_number']) ? $config['fax_number'] : '',
    ];
    
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    // Save our custom settings when the form is submitted.
    $this->setConfigurationValue('fax_number', $form_state->getValue('fax_number'));
  }

  /**
   * {@inheritdoc}
   */
  public function blockValidate($form, FormStateInterface $form_state) {
    $fax_number = $form_state->getValue('fax_number');

    if (!is_numeric($fax_number)) {
      $form_state->setErrorByName('fax_number', t('Needs to be an integer'));
    }
  }
}

```

You could also use the BlockBase::getConfiguration() method in your build() method to retrieve the configuration data and display it to your users. The access() method of your block could also contain more complicated logic to determine whether the block should be displayed.

**Example of access condition method.**

```php
 /**
   * {@inheritdoc}
   */
  public function access(AccountInterface $account, $return_as_object = FALSE) {
    return \Drupal\Core\Access\AccessResult::allowedIf($account->isAuthenticated());
  }
```

  
**You could also create your own caching conditions**

Example method using cache tags. Read more about [cache tags](https://www.drupal.org/docs/8/api/cache-api/cache-tags).

```php
 /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
     return \Drupal\Core\Cache\Cache::mergeTags(parent::getCacheTags(), ['node_list']);
  }
```

If you want to change the block cache max time to 0\. Read more about [cache max-age](https://www.drupal.org/docs/8/api/cache-api/cache-max-age).

```php
  public function getCacheMaxAge() {
    // If you want to disable caching for this block.
    return 0;
  }
```