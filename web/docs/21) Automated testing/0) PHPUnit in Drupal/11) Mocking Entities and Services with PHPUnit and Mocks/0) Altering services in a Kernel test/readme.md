If a Kernel test class implements `Drupal\Core\DependencyInjection\ServiceModifierInterface`, then in its alter() method it can change the definition of existing services.

### Example: change the class of a service

To change the class of the EntityTypeManager service to a custom class:

```php
class MyKernelTest extends EntityKernelTestBase implements ServiceModifierInterface {

  public function alter(ContainerBuilder $container) {
    $service_definition = $container->getDefinition('entity_type.manager');
    $service_definition->setClass(TestEntityTypeManager::class);
  }

}

class TestEntityTypeManager extends EntityTypeManager {

// Additional or overridden methods here.

}

```

Changing the entity type manager allows you to add or override methods, as in the following examples:

### Example: add a setHandler() method

The following method added to the TestEntityTypeManager class allows your test code to mock an entity handler and set it on the entity type manager:

```php
  public function setHandler(string $entity_type_id, string $handler_type, EntityHandlerInterface $handler) {
    $this->handlers[$handler_type][$entity_type_id] = $handler;
  }

```

### Example: alter entity type definitions

The following methods added to the TestEntityTypeManager class allow your test code to register a callback which alters entity type definitions. This keeps the alteration in the test code, rather than in a hook implementation in fixture test module.

```php
  public function addAlter(callable $alter) {
    $this->alterers[] = $alter;

    $this->clearCachedDefinitions();
  }

  protected function alterDefinitions(&$definitions) {
    parent::alterDefinitions($definitions);

    foreach ($this->alterers as $alterer) {
      $alterer($definitions);
    }
  }
```

### Example: alter base field definitions

The following methods added to a substituted EntityFieldManager subclass allow your test code to register a callback which alters base field definitions. This keeps the alteration in the test code, rather than in a hook implementation in fixture test module.

```php
  public function addAlter(callable $alter) {
    $this->alterers[] = $alter;

    $this->clearCachedFieldDefinitions();
  }

  protected function buildBaseFieldDefinitions($entity_type_id) {
    $base_field_definitions = parent::buildBaseFieldDefinitions($entity_type_id);

    foreach ($this->alterers as $alterer) {
      $alterer($entity_type_id, $base_field_definitions);
    }

    return $base_field_definitions;
  }
```