After building routes (e.g. when a module is enabled or when caches are cleared), the `RoutingEvents::ALTER` event triggers the route alter process. The `\Drupal\Core\Routing\RouteSubscriberBase` class contains an event listener that listens to this event. You can alter existing routes by implementing the [alterRoutes(RouteCollection $collection)](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Routing%21RouteSubscriberBase.php/function/RouteSubscriberBase%3A%3AalterRoutes/8) method of this class.

This example alters two different routes of the User module. Use a `src/Routing/RouteSubscriber.php` file in your module.

```php
namespace Drupal\example\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    // Change path '/user/login' to '/login'.
    if ($route = $collection->get('user.login')) {
      $route->setPath('/login');
    }
    // Always deny access to '/user/logout'.
    // Note that the second parameter of setRequirement() is a string.
    if ($route = $collection->get('user.logout')) {
      $route->setRequirement('_access', 'FALSE');
    }
  }

}

```

The `\Drupal\example\Routing\RouteSubscriber::alterRoutes` method is an event subscriber because it extends `RouteSubscriberBase`. Therefore, the class must be registered as an event subscriber service.

Use a `example.services.yml` file in your module (if the module is named example).

```php
services:
  example.route_subscriber:
    class: Drupal\example\Routing\RouteSubscriber
    tags:
      - { name: event_subscriber }
```