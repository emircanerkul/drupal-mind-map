```php
$layoutPluginManager = \Drupal::service('plugin.manager.core.layout');
$layoutDefinitions = $layoutPluginManager->getDefinitions();
$definedLayouts = [];
foreach ($layoutDefinitions as $key => $layoutDefinition) {
  $definedLayouts[] = $layoutDefinition->getLabel();
}
return [
  '#theme' => 'item_list',
  '#items' => $definedLayouts,
];
```