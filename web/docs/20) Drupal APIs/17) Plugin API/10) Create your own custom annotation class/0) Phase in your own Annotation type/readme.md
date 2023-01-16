When you initially created your custom module, you might have used Drupal's default @Plugin annotation type in your plugins, although this is [not recommended](https://www.drupal.org/docs/8/api/plugin-api/annotations-based-plugins). Now that you want to add additional keys, set defaults or simply document the annotation keys you are using, you discover you can't. You want to switch to your own annotation class @MyPlugin, but can't do so either, at least not immediately, to avoid breaking backwards-compatibility for custom plugins your users might have created.

As long as all your (and your users') plugins reside in the same PSR-4 `$subdir`, there's however an easy way to allow your Plugin Manager discover plugins using both the original @Plugin type and your own @MyPlugin type annotations. Instead of passing your own `$plugin_definition_annotation_name`, pass the base class and then add the namespace of your own Annotation type definitions in `$additional_annotation_namespaces`.

So instead of constructing your Plugin Manager like this:

```php
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct(
      'Plugin/mymodule/MyPlugin',
      $namespaces,
      $module_handler,
      'Drupal\mymodule\Plugin\MyPluginInterface',
      // Your $plugin_definition_annotation_name:
      'Drupal\mymodule\Annotation\MyPlugin'
    );
```

make your Plugin Manager act type-agnostic when discovering your plugins:

```php
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct(
      'Plugin/mymodule/MyPlugin',
      $namespaces,
      $module_handler,
      'Drupal\mymodule\Plugin\MyPluginInterface',
      // Drupal's base $plugin_definition_annotation_name:
      'Drupal\Component\Annotation\Plugin',
      // Your own $additional_annotation_namespaces:
      ['Drupal\mymodule\Annotation']
    );
```

If you're following best practice and your plugins reside in different subdirectories of your `Plugin/$vendor` PSR-4 directory (e.g. `Plugin/mymodule/one_plugin_type` and `Plugin/mymodule/another_plugin_type`), you can discover all of them by providing the common `Plugin/mymodule` directory:

```php
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct(
      // This will discover plugins in all subdirectories, too:
      'Plugin/mymodule',
      $namespaces,
      $module_handler,
      'Drupal\mymodule\Plugin\MyPluginInterface',
      // Drupal's base $plugin_definition_annotation_name:
      'Drupal\Component\Annotation\Plugin',
      // Your own $additional_annotation_namespaces:
      ['Drupal\mymodule\Annotation']
    );
```

If the plugins however don't have a `Plugin/$vendor` directory in common, there is no easy way to discover all of them.