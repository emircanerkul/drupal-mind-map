The autowiring functionality within the MODULENAME.services.yml file is a Symfony framework feature and not automatically tested by the Drupal core test suite. There is _no Drupal core service which is autowired._ Therefore, there is no consistent, tested workflow. Since Symfony 4 (new in Drupal 9) PHP classes are not autoresolved. If your services are autowired, but their injected classes are not, it is better to write your own service provider for your module than maintaining a MODULENAME.services.yml file in your Drupal module. See the following Drupal core issue, which addresses it: [Document and add tests for service autowiring](/project/drupal/issues/3021803).

It's recommended to write your service provider PHP class, as next described.

### Autowiring by the MODULENAME.services.yml file

Drupal can automatically wire services for you. The functionality differs between Drupal 8 and 9\. This approach will potentially save you work within the `*.services.yml` file. After you have setup your service in the `my_module.services.yml` file, you can easily switch injected objects in your development workflow without modifying the `.services.yml` file.

The definition for an autowiring service is similar to the following one.

`services:
  my_module.twitter_feed:
    class: Drupal\my_module\TwitterFeed
    autowire: true
`

If Drupal exceptionally cannot wire a service class for you, because any object cannot be found, then you can create an alias. The object could be not auto-registered because it is from a different root namespace and not defined as a service.

For example, the following service definition creates an alias for a dependency (`Symfony\Component\DomCrawler\Crawler`), which cannot be found in this example case.

```php
  domcrawler.crawler:
    class: Symfony\Component\DomCrawler\Crawler
    public: false
```

The entire `my_module.services.yml` will look like the following.

```php
services:
  my_module.twitter_feed:
    class: Drupal\my_module\TwitterFeed
    autowire: true

  domcrawler.crawler:
    class: Symfony\Component\DomCrawler\Crawler
    public: false
```

### Service provider PHP class objects

In Drupal 9 some autowiring "magic" from Drupal 8 was removed, so PHP classes around your services are not autoresolved. Drupal also overrides the Symfony dependency injection by its own logic, therefore you must write your own service provider class in your module to autowire your service containers (basically all PHP classes, except e.g. Drupal Plugins or Drupal Entities, which Drupal 9 resolves by its own).

Service providers are supported since Drupal 8 and can be used in Drupal 9 in the same way.

Drupal automatically discovers only one service provider per Drupal module. The naming convention for the service provider PHP class is camel cased Drupal module name plus ServiceProvider.php. You cannot name the service provider class just ServiceProvider.php. It must be \[MODULE-NAME-CAMEL-CASE\]ServiceProvider.php.

```php
<?php
declare(strict_types=1);

namespace Drupal\my_nice_module;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\Finder\Finder;


class MyNiceModuleServiceProvider extends ServiceProviderBase {

  public function register(ContainerBuilder $container) {
    $containerModules = $container->getParameter('container.modules');
    $finder = new Finder();

    $foldersWithServiceContainers = [];

    $foldersWithServiceContainers['Drupal\my_nice_module\\'] = $finder->in(dirname($containerModules['my_nice_module']['pathname']) . '/src/')->files()->name('*.php');

    $foldersWithServiceContainers['Drupal\my_nice_module\Transformer\\'] = $finder->in(dirname($containerModules['my_nice_module']['pathname']) . '/src/Transformer/')->files()->name('*.php');

    $foldersWithServiceContainers['Drupal\my_nice_module\DomCrawler\\'] = $finder->in(dirname($containerModules['my_nice_module']['pathname']) . '/src/DomCrawler/')->files()->name('*.php');
    $foldersWithServiceContainers['Drupal\my_nice_module\MongoDBFetcher\\'] = $finder->in(dirname($containerModules['my_nice_module']['pathname']) . '/src/MongoDBFetcher/')->files()->name('*.php');

    $foldersWithServiceContainers['Drupal\my_nice_module\Importer\\'] = $finder->in(dirname($containerModules['my_nice_module']['pathname']) . '/src/Importer/')->files()->name('*.php');
    $foldersWithServiceContainers['Drupal\my_nice_module\Importer\MongoDB\\'] = $finder->in(dirname($containerModules['my_nice_module']['pathname']) . '/src/Importer/MongoDB/')->files()->name('*.php');

    foreach ($foldersWithServiceContainers as $namespace => $files) {
      foreach ($files as $fileInfo) {
        // remove .php extension from filename
        $class = $namespace
          . substr($fileInfo->getFilename(), 0, -4);
        // don't override any existing service
        if ($container->hasDefinition($class)) {
          continue;
        }
        $definition = new Definition($class);
        $definition->setAutowired(TRUE);
        $container->setDefinition($class, $definition);
      }
    }
  }

}
```

Afterwards, you are able to access your services via the service container.

```php
$barista = \Drupal::getContainer()
  ->get(Barista::class);
```

The service name is the fully qualified name of namespace.

#### Exceptions

You could stumble into exceptions like the following one.

```php
In DefinitionErrorExceptionPass.php line 54:
                                                                                                                                                                                                                                                                                                                       
  Cannot autowire service "importer.media_contact_entity_ids_for_node_determinator": argument "$entityTypeManager" of method "Drupal\importer\Determinator\MediaContactEntityIdsForNodeDeterminator::__construct()" references interface "Drupal\Core\Entity\EntityTypeManagerInterface"   
  but no such service exists. You should maybe alias this interface to the existing "entity_type.manager" service.                                                                                                                                                                                                     
                                                                                                                             
```

You can resolve them via aliasing in your **MODULENAME.services.yml** file.

```yaml
Drupal\Core\Entity\EntityTypeManagerInterface:
  alias: entity_type.manager
```