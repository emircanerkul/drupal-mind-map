Decorator classes are used to wrap the defined discovery class with another class(es) that implements all the same methods but provides some additional level of processing before or after that provided by the base discovery class. For example, the `DefaultPluginManager`, and thus any that extend it, allow for [derivative discovery](https://www.drupal.org/docs/8/api/plugin-api/plugin-derivatives) using the 

Example from `DefaultPluginManager::getDiscovery()`:

```php
  protected function getDiscovery() {
    if (!$this->discovery) {
      $discovery = new AnnotatedClassDiscovery($this->subdir, $this->namespaces, $this->pluginDefinitionAnnotationName, $this->additionalAnnotationNamespaces);
      $this->discovery = new ContainerDerivativeDiscoveryDecorator($discovery);
    }
    return $this->discovery;
  }
```

Find out more about this in [Discovery Decorators](https://www.drupal.org/node/1652966).