### Calculating dependencies based on config entity properties

@todo - see \\Drupal\\block\\Entity\\Block::calculateDependencies

### Calculating dependencies based on other config entities

@todo - see \\Drupal\\entity\\EntityDisplayBase::calculateDependencies (this is a super complex example of this)

### Calculating dependencies in plugins and their derivatives

@todo see Drupal\\Core\\Config\\Entity\\ConfigEntityBase::calculateDependencies - flesh out the fact that the config entity implements EntityWithPluginBagInterface then a dependency will automatically be added on the module that provides the plugin.

[Plugin derivative](https://drupal.org/node/1653226) definitions are derived from a base plugin. For example, the `\Drupal\system\Plugin\Derivative\SystemMenuBlock` is a [plugin derivative](https://drupal.org/node/1653226) of the `\Drupal\system\Plugin\Block\SystemMenuBlock` plugin. System menu blocks require that a dependency relationship be established between the plugin block configuration entity and the menu configuration entity exposed through the block.

`\Drupal\system\Plugin\Block\SystemMenuBlock` implements the `getDerivativeDefinitions()` method. So derivative menu blocks, such as the Bartik footer menu block, will all have a dependency on the corresponding `\Drupal\system\Entity\Menu` entity.

```php
public function getDerivativeDefinitions($base_plugin_definition) {
  foreach ($this->menuStorage->loadMultiple() as $menu => $entity) {
    $this->derivatives[$menu] = $base_plugin_definition;
    $this->derivatives[$menu]['admin_label'] = $entity->label();
    $this->derivatives[$menu]['config_dependencies']['config'] = array($entity->getConfigDependencyName());
  }
  return $this->derivatives;
}

```

In the code above, each system menu block derivative is assigned a configuration dependency of the entity that provides the block's menu. To get the name of the entity that should be used to identify the configuration dependency, the entity's `getConfigDependencyName()` method is invoked. An entity's name is a composed string and should not be hard-coded where the dependency is declared.

The config\_dependencies property may also be declared as part of a plugin's definition. However, configuration entity dependencies mostly are dynamic values and thus calculated. Declaring a static dependency in the plugin's definition is anticipated to be rare and should be avoided.

### Enforced dependencies

@todo -- See <https://www.drupal.org/node/2404447>

See [Managing configuration in Drupal 8](https://drupal.org/documentation/administer/config) for more information about exporting and importing configuration files.