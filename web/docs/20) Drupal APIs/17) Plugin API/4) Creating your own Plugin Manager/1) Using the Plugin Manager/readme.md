Assuming that our plugin type is all wired up, using it becomes fairly easy. First we must invoke the plugin class:

```php
$type = \Drupal::service('plugin.manager.archiver');

```

### Get a list of available plugins:

```php
$plugin_definitions = $type->getDefinitions();

```

### Get a specific plugin:

```php
$plugin_definition = $type->getDefinition('plugin_id');

```

### Create a preconfigured instance of a plugin:

```php
$plugin = $type->createInstance('plugin_id', ['of' => 'configuration values']);

```