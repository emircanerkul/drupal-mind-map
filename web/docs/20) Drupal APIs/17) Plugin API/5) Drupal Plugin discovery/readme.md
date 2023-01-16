---
url: https://www.drupal.org/docs/drupal-apis/plugin-api/drupal-plugin-discovery
description: >-
  Plugin discovery is the process by which Drupal finds plugins of a given type.
  A discovery method must be set for every plugin type (explained in the plugin
  manager documentation). The discovery component of plugins implements a
  DiscoveryInterface that defines the methods any discovery class must have. /**
  * @file * Contains \Drupal\Component\Plugin\Discovery\DiscoveryInterface. */
  namespace Drupal\Component\Plugin\Discovery; /** * An interface defining the
  minimum requirements of building a plugin * discovery component.
published_time: '2012-06-15T20:55:00+00:00'
modified_time: '2020-09-28T07:50:36+00:00'
---
Plugin discovery is the process by which Drupal finds plugins of a given type. A discovery method must be set for every plugin type (explained in the [plugin manager](http://www.drupal.org/node/1637730) documentation).

The discovery component of plugins implements a `DiscoveryInterface` that defines the methods any discovery class must have.

```php
/**
 * @file
 * Contains \Drupal\Component\Plugin\Discovery\DiscoveryInterface.
 */

namespace Drupal\Component\Plugin\Discovery;

/**
 * An interface defining the minimum requirements of building a plugin
 * discovery component.
 *
 * @ingroup plugin_api
 */
interface DiscoveryInterface {

  /**
   * Gets a specific plugin definition.
   *
   * @param string $plugin_id
   *   A plugin id.
   * @param bool $exception_on_invalid
   *   (optional) If TRUE, an invalid plugin ID will throw an exception.
   *
   * @return mixed
   *   A plugin definition, or NULL if the plugin ID is invalid and
   *   $exception_on_invalid is FALSE.
   *
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   *   Thrown if $plugin_id is invalid and $exception_on_invalid is TRUE.
   */
  public function getDefinition($plugin_id, $exception_on_invalid = TRUE);

  /**
   * Gets the definition of all plugins for this type.
   *
   * @return mixed[]
   *   An array of plugin definitions (empty array if no definitions were
   *   found). Keys are plugin IDs.
   */
  public function getDefinitions();

  /**
   * Indicates if a specific plugin definition exists.
   *
   * @param string $plugin_id
   *   A plugin ID.
   *
   * @return bool
   *   TRUE if the definition exists, FALSE otherwise.
   */
  public function hasDefinition($plugin_id);

}


```

There are four different core discovery types.

1. **StaticDiscovery**  
StaticDiscovery allows for direct registration of plugins within the discovery class itself. A protected property (`$definitions`) in the class holds all plugin definitions that are registered with it through the public method `setDefinition()`. Any plugin defined through this method can then be invoked as outlined in the [plugin manager documentation](http://www.drupal.org/node/1637730).
2. **HookDiscovery**  
The HookDiscovery class allows Drupal's `hook_component_info()`/`hook_component_info_alter()` pattern to be used for plugin discovery. With this discovery, the plugin manager will invoke info hooks to retrieve a list of available plugins.
3. **AnnotatedClassDiscovery**  
The AnnotatedClassDiscovery class uses name of the [annotations](http://docs.doctrine-project.org/projects/doctrine-common/en/latest/reference/annotations.html) that contains the plugin definition, e.g., `@Plugin`, `@EntityType`, in plugin docblocks to discover plugins, minimizing memory usage during the discovery phase. The AnnotatedClassDiscovery class takes an argument in its constructor, `$subdir`, which specifies the sub-directory/sub-namespace for this plugin type. The AnnotatedClassDiscovery class scans PSR-4 classes inside those sub-directories of Plugin folders to find plugins (see a ["Annotations-based plugins"](https://www.drupal.org/node/1882526 "Community Doc link")).
4. **YamlDiscovery**  
YamlDiscovery allows plugins to be defined in yaml files. Drupal core uses this for local tasks and local actions.