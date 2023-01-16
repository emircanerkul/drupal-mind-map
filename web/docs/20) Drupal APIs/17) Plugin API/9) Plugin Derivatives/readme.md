---
url: https://www.drupal.org/docs/drupal-apis/plugin-api/plugin-derivatives
description: >-
  One of the most powerful portions of the plugin system is its ability to help
  inform the user interface components of a system and allow your end users to
  choose which plugin option(s) they want to use. Typically options presented in
  this manner have a one to one correlation of options to plugins. However, this
  correlation is not strictly a requirement, and when looking at things that are
  expanded via user input, such a correlation is actually undesirable. For this
  example we will discuss blocks. All blocks are available to the user through
  the user interface.
published_time: '2012-06-22T20:05:34+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
One of the most powerful portions of the plugin system is its ability to help inform the user interface components of a system and allow your end users to choose which plugin option(s) they want to use. Typically options presented in this manner have a one to one correlation of options to plugins. However, this correlation is not strictly a requirement, and when looking at things that are expanded via user input, such a correlation is actually undesirable. For this example we will discuss blocks.

All blocks are available to the user through the user interface. For most blocks, having a single UI representation of the block plugin is fine. For example, having a single plugin for configuring the "Powered by Drupal" block will work fine. However, the menu block(s) all require the same logic but need distinct options within the user interface. Furthermore, when a site builder creates a new custom block, that block should be available in the UI for placement. Derivatives come to the rescue!

Derivatives provide a simple way to expand a single plugin so that it can represent itself as multiple plugins in the user interface. This is done by creating a separate class for this purpose and referencing it appropriately in your plugin definition. For this example, we will consider the plugin definition for system menus `\Drupal\system\Plugin\Block\SystemMenuBlock`. Have a look at its annotation:

```php
/**
 * Provides a generic Menu block.
 *
 * @Block(
 *   id = "system_menu_block",
 *   admin_label = @Translation("Menu"),
 *   category = @Translation("Menus"),
 *   deriver = "Drupal\system\Plugin\Derivative\SystemMenuBlock"
 * )
 */
class SystemMenuBlock extends BlockBase implements ContainerFactoryPluginInterface {
  // ... the class definition goes on here.
}

```

This definition is only an example; all the keys within the annotation could be completely different except for the 'deriver' key. In theory, this derivative class is reusable across different plugins. In practice, plugins would have to be very similar to begin with for their derivative class to be useful across more than one plugin.

Let's take a look at what one of these classes might actually look like:

**/core/modules/system/src/Plugin/Derivative/SystemMenuBlock.php:**

```php
namespace Drupal\system\Plugin\Derivative;

class SystemMenuBlock extends DeriverBase implements ContainerDeriverInterface {

  /* ...[snip]... */

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    foreach ($this->menuStorage->loadMultiple() as $menu => $entity) {
      $this->derivatives[$menu] = $base_plugin_definition;
      $this->derivatives[$menu]['admin_label'] = $entity->label();
      $this->derivatives[$menu]['config_dependencies']['config'] = array($entity->getConfigDependencyName());
    }
    return $this->derivatives;
  }
}


```

### Plugin Type Changes

This class will now return a derivative for every menu in Drupal, both system generated, and user generated as separate plugin definitions. With the derivative class written, we only have one last element to change in our plugin type in order to support derivatives for this plugin type. Our plugin type currently looks something like this:

```php
namespace Drupal\block\Plugin\Type;

use Drupal\Component\Plugin\PluginType;
use Drupal\Core\Plugin\Discovery\HookDiscovery;
use Drupal\Component\Plugin\Factory\DefaultFactory;

class BlockPluginType extends PluginType {
  public function __construct() {
    $this->discovery = new HookDiscovery('block_info');
    $this->factory = new DefaultFactory($this);
  }
}


```

and we need only to add a new `use` statement to get at the `DerivativeDiscoveryDecorator`, and then make use of it in the `$this->discovery` declaration.

```php
namespace Drupal\block\Plugin\Type;
use Drupal\Component\Plugin\Discovery\DerivativeDiscoveryDecorator;

use Drupal\Component\Plugin\PluginType;
use Drupal\Core\Plugin\Discovery\HookDiscovery;
use Drupal\Component\Plugin\Factory\DefaultFactory;

class BlockPluginType extends PluginType {
  public function __construct() {
    $this->discovery = new DerivativeDiscoveryDecorator(new HookDiscovery('block_info'));
    $this->factory = new DefaultFactory($this);
  }
}


```

These two simple changes now make our block plugin system support derivatives for any plugin that needs them, and additionally we already have the menu block setup to produce derivatives as well.

### Why?

If you're familiar with drupal's hook\_info paradigm, you might look at this and wonder why we would do this instead of simply using a `foreach()` loop in the hook\_info definition of the relevant modules. This is a fair question, and simply put, our example here is one of many different discovery methods that could be used. Some will not have PHP `foreach()` statements so readily available. Furthermore, if your module supplies multiple plugins, you would need different `foreach()` statements for every plugin provided that needed derivatives, so this is a consistent approach across all derivative methodologies.