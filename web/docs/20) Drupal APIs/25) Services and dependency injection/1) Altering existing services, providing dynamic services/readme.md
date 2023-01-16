---
url: >-
  https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/altering-existing-services-providing-dynamic-services
description: >-
  There are several advantages of the service container. Since each service is
  accessed / instantiated using a single string key and has a defined interface,
  it can be swapped out with a different implementation. To modify existing
  services, implement a class extending ServiceProviderBase and the alter()
  method. If you want to extend existing services to add functionality, you may
  also consider decorating the service.
published_time: '2013-06-24T15:22:44+00:00'
modified_time: '2022-11-29T08:55:30+00:00'
---
There are several advantages of the service container. Since each service is accessed / instantiated using a single string key and has a defined interface, it can be swapped out with a different implementation. To modify existing services, implement a class extending `ServiceProviderBase` and the `alter()` method. If you want to extend existing services to add functionality, you may also consider [decorating the service](https://symfony.com/doc/current/service%5Fcontainer/service%5Fdecoration.html).

Note that if you want this service alteration to be recognized automatically, **the name of this class is required to be a CamelCase version of your module's machine name followed by `ServiceProvider`**, it is required to be in your module's top-level namespace Drupal\\your\_module, and it must implement `\Drupal\Core\DependencyInjection\ServiceModifierInterface` (which `ServiceProviderBase` does).

_Note that while swapping services is very easy, you should be cautious when making use of this feature. If multiple modules swap the same service, then neither module can predict if their swapped service will win eventually. If a service provides extension capabilities with events, hooks, or by other means, that is definitely more compatible with other extensions. Alternatively, most of these problems can be solved by [decorating existing services](https://symfony.com/doc/current/service%5Fcontainer/service%5Fdecoration.html) instead._

For example, define `my_module/src/MyModuleServiceProvider.php` for a module named `my_module`:

```php
namespace Drupal\my_module;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;

// @note: You only need Reference, if you want to change service arguments.
use Symfony\Component\DependencyInjection\Reference;

/**
 * Modifies the language manager service.
 */
class MyModuleServiceProvider extends ServiceProviderBase {

  /**
   * {@inheritdoc}
   */
  public function alter(ContainerBuilder $container) {
    // Overrides language_manager class to test domain language negotiation.
    // Adds entity_type.manager service as an additional argument.

    // Note: it's safest to use hasDefinition() first, because getDefinition() will 
    // throw an exception if the given service doesn't exist.
    if ($container->hasDefinition('language_manager')) {
      $definition = $container->getDefinition('language_manager');
      $definition->setClass('Drupal\language_test\LanguageTestManager')
        ->addArgument(new Reference('entity_type.manager'));
    }
  }
}

```

Other examples of where service swapping may be useful is to swap out the string translation service (the one behind `t()`). A common feature request that Drupal core does not provide is to have regional language variants or informal/formal languages, where the translation differences may be minimal. By swapping the string translation service, this is easy to resolve in a contributed module.

Finally, it is also possible to define the `register()` method to register services dynamically, however this should be very rare.

**Override core service using module\_name.services.yml**

A simpler way to override core service class without creating your custom service provider class.  
Following example will override core service named "language\_manager".

```yaml
language_manager:
  class: Drupal\module_name\Service\MyLanguageManager
  arguments: ['@language.default']
```