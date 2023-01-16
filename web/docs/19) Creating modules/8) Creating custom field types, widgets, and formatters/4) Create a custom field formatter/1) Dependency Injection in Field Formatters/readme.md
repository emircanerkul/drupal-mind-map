Using dependency injection in field formatters requires three steps:

1. Implement the [ContainerFactoryPluginInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Plugin%21ContainerFactoryPluginInterface.php/interface/ContainerFactoryPluginInterface/8.2.x) interface
2. Implement or override [ContainerFactoryPluginInterface::create()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Plugin%21ContainerFactoryPluginInterface.php/function/ContainerFactoryPluginInterface%3A%3Acreate/8.2.x)
3. Implement or override \_\_construct()

### 1) Implement the ContainerFactoryPluginInterface interface

Most field formatters will extend the \\Drupal\\Core\\Field\\FormatterBase class provided by Drupal Core. If you're doing this, you can skip this step and move right on to step 2), because FormatterBase already implements ContainerFactoryPluginInterface for you.

```php
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;

class MyFormatter implements ContainerFactoryPluginInterface {

```

### 2) Implement or override ContainerFactoryPluginInterface::create()

This example injects the entity\_type.manager service into the formatter.

```php
use Symfony\Component\DependencyInjection\ContainerInterface;

public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
  return new static(
    $plugin_id,
    $plugin_definition,
    $configuration['field_definition'],
    $configuration['settings'],
    $configuration['label'],
    $configuration['view_mode'],
    $configuration['third_party_settings'],
    // Add any services you want to inject here
    $container->get('entity_type.manager')
  );
}

```

### 3) Implement or override \_\_construct()

Implement \_\_construct() and store the service in a property of the class. If your field formatter extends \\Drupal\\Core\\Field\\FormatterBase class provided by Drupal Core, make sure to call parent::\_\_construct() as in the example below.

```php
use Drupal\Core\Field\FieldDefinitionInterface;

/**
 * The entity type manager service
 *
 * @var \Drupal\Core\Entity\EntityTypeManagerInterface
 */
protected $entityTypeManager;

/**
 * Construct a MyFormatter object.
 *
 * @param string $plugin_id
 *   The plugin_id for the plugin instance.
 * @param mixed $plugin_definition
 *   The plugin implementation definition.
 * @param \Drupal\Core\Field\FieldDefinitionInterface $field_definition
 *   Defines an interface for entity field definitions.
 * @param array $settings
 *   The formatter settings.
 * @param string $label
 *   The formatter label display setting.
 * @param string $view_mode
 *   The view mode.
 * @param array $third_party_settings
 *   Any third party settings.
 * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
 *   Entity type manager service.
 */
public function __construct($plugin_id, $plugin_definition, FieldDefinitionInterface $field_definition, array $settings, $label, $view_mode, array $third_party_settings, EntityTypeManagerInterface $entity_type_manager) {
  parent::__construct($plugin_id, $plugin_definition, $field_definition, $settings, $label, $view_mode, $third_party_settings);

  $this->entityTypeManager = $entity_type_manager;
}

```

You can now use the entity type manager anywhere in your formatter class as $this->entityTypeManager.