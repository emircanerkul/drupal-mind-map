If you write your own plugin type and want to use annotations, you just need to extend the [DefaultPluginManager](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Plugin%21DefaultPluginManager.php/class/DefaultPluginManager/) which uses [AnnotatedClassDiscovery](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Annotation%21Plugin%21Discovery%21AnnotatedClassDiscovery.php/8.2.x) by default - see the following piece of code.

The first parameter to the DefaultPluginManager constructor is the sub-directory/sub-namespace in which plugins of this type will be located. So, in this example, plugins will be searched for in the `$module/src/Plugin/Field/FieldFormatter` folders. The final argument is the custom annotation class defined above.

```php
use Drupal\Component\Plugin\Factory\DefaultFactory;
use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;

class FormatterPluginManager extends DefaultPluginManager {

  /**
   * Constructs a FormatterPluginManager object.
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler, FieldTypePluginManagerInterface $field_type_manager) {
    parent::__construct('Plugin/Field/FieldFormatter', $namespaces, $module_handler, 'Drupal\Core\Field\FormatterInterface', 'Drupal\Core\Field\Annotation\FieldFormatter');

    $this->setCacheBackend($cache_backend, 'field_formatter_types_plugins');
    $this->alterInfo('field_formatter_info');
    $this->fieldTypeManager = $field_type_manager;
  }
}

```

The injected namespaces come from the dependency injection container. For example, the FieldBundle:

```php
/**
 * @file
 * Contains Drupal\field\FieldBundle.
 */

namespace Drupal\field;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

/**
 * Field dependency injection container.
 */
class FieldBundle extends Bundle {

  /**
   * Overrides Symfony\Component\HttpKernel\Bundle\Bundle::build().
   */
  public function build(ContainerBuilder $container) {
    // Register the plugin managers for our plugin types with the dependency injection container.
    $container->register('plugin.manager.field.widget', 'Drupal\field\Plugin\Type\Widget\WidgetPluginManager')
      ->addArgument('%container.namespaces%');
    $container->register('plugin.manager.field.formatter', 'Drupal\field\Plugin\Type\Formatter\FormatterPluginManager')
      ->addArgument('%container.namespaces%');
  }

}

```

To call your custom plugin manager, you'll need to inject Drupal's namespaces into the class construction call.

`$type = new CustomPluginManager(\Drupal::getContainer()->getParameter('container.namespaces')); `