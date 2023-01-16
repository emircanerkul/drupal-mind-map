There are only two requirements for defining a new plugin manager:

1. You must define a discovery method.
2. You must define a factory.

Everything else within the plugin system is situational and based upon your use case.

It is recommended to use the DefaultPluginManager as a base class, that defaults to Annotation based discovery with derivates, the container factory and has built-in support for caching by language and definition altering and processing.

### Service definition

Plugin managers should be defined as services. It is considered best practice to prefix the service name with `plugin.manager.`

An example `MODULE.services.yml`, listing a single plugin manager service:

```php
services:
  plugin.manager.archiver:
    class: Drupal\Core\Archiver\ArchiverManager
    parent: default_plugin_manager

```

See the end of this page for examples using this service. For more detail, see [Services and dependency injection in Drupal 8](https://www.drupal.org/node/2133171).

### Plugin manager class

```php
namespace Drupal\Core\Archiver;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;

/**
 * Provides an Archiver plugin manager.
 *
 * @see \Drupal\Core\Archiver\Annotation\Archiver
 * @see \Drupal\Core\Archiver\ArchiverInterface
 * @see plugin_api
 */
class ArchiverManager extends DefaultPluginManager {

  /**
   * Constructs a ArchiverManager object.
   *
   * @param \Traversable $namespaces
   *   An object that implements \Traversable which contains the root paths
   *   keyed by the corresponding namespace to look for plugin implementations.
   * @param \Drupal\Core\Cache\CacheBackendInterface $cache_backend
   *   Cache backend instance to use.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler to invoke the alter hook with.
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct(
      'Plugin/Archiver',
      $namespaces,
      $module_handler,
      'Drupal\Core\Archiver\ArchiverInterface',
      'Drupal\Core\Archiver\Annotation\Archiver'
    );
    $this->alterInfo('archiver_info');
    $this->setCacheBackend($cache_backend, 'archiver_info_plugins');
  }

}

```

This plugin type tells the system we'll be asking Drupal for any available `Plugin/Archiver` annotations and using that as our basic discovery methodology, support derivates, that other modules can alter the defined plugins using `hook_archiver_info_alter()` and the definitions are cached per language in the injected backend using the cache ID `archiver_info_plugins`.