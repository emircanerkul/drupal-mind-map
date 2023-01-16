```php
$layoutPluginManager = \Drupal::service('plugin.manager.core.layout');
// Provide any configuration to the layout plugin if necessary.
$layoutInstanceConfiguration = [];
$layoutInstance = $layoutPluginManager->createInstance('layout_twocol', $layoutInstanceConfiguration);
```