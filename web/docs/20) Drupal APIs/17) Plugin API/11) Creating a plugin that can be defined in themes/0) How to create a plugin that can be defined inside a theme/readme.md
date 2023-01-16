Make sure your plugin provides a YML Discovery method. Which is the only one that you can use in a theme.

In your module.services.yml file,make sure you pass the theme handler. Example (from the layout\_plugin module):

```php
services:
  plugin.manager.layout_plugin:
    class: Drupal\layout_plugin\Plugin\Layout\LayoutPluginManager
    arguments: ['@container.namespaces', '@cache.discovery', '@module_handler', '@theme_handler']

```

In your Plugin Manager file (src/Plugin/Layout/MyPluginManager.php):

* Add the ThemeHandler attribute to your plugin.  
```php  
  /**  
   * The theme handler.  
   *  
   * @var \Drupal\Core\Extension\ThemeHandlerInterface  
   */  
  protected $themeHandler;  
```
* In your \_construct function, make sure you assign the ThemeHandler  
```php  
  $this->themeHandler = $theme_handler;  
```
* add `$this->moduleHandler->getModuleDirectories() + $this->themeHandler->getThemeDirectories()` in `getDiscovery()` function  
```php  
  /**  
   * {@inheritdoc}  
   */  
  protected function getDiscovery() {  
    ...  
    $this->discovery = new YamlDiscovery(..., $this->moduleHandler->getModuleDirectories() + $this->themeHandler->getThemeDirectories());  
    ...  
  }  
```
* redefine the providerExists method like this:  
```php  
  /**  
   * {@inheritdoc}  
   */  
  protected function providerExists($provider) {  
    return $this->moduleHandler->moduleExists($provider) || $this->themeHandler->themeExists($provider);  
  }  
```

For good examples take a look at both the BreakPoints module and the Layout Plugin module.