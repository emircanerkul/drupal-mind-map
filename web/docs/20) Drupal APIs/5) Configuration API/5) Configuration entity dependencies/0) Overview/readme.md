Configuration entity dependencies are declared through the `config_dependencies` key in a configuration entity's definition. The keys of this array may be one of:

* content
* config
* module
* theme

Configuration entities determine their dependencies by implementing `\Drupal\Core\Config\Entity\ConfigEntityInterface::calculateDependencies()`. This method should be called from the configuration entity's implementation of `\Drupal\Core\Entity\EntityInterface::preSave()`. Implementations should use the helper method `\Drupal\Core\Config\Entity\ConfigEntityBase::addDependency()` to add dependencies. All the implementations in core call the parent method `\Drupal\Core\Config\Entity\ConfigEntityBase::calculateDependencies()`, which resets the dependencies and provides an implementation to determine the plugin providers for configuration entities that implement [\\Drupal\\Core\\Entity\\EntityWithPluginCollectionInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityWithPluginCollectionInterface.php). See the [configuration dependency manager](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Config%21Entity%21ConfigDependencyManager.php/class/ConfigDependencyManager/8) API documentation for more detail on these classes and methods.