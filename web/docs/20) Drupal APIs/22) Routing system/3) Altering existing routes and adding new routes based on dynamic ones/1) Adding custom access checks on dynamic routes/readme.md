[Route::setRequirement()](https://api.drupal.org/api/drupal/vendor!symfony!routing!Route.php/function/Route%3A%3AsetRequirement) can be used to set [custom access checks](https://www.drupal.org/docs/8/api/routing-system/access-checking-on-routes) on any route within the alterRoutes function. If you are using an Access Check service that has arguments defining extra services as requirements, the service name should be used in the second parameter rather than the class name. Below, standardAccessCheck does not have specific services defined and servicesAccessCheck does.

```yaml
services:
  example.standard_access_checker:
    class: Drupal\example\Access\StandardAccessCheck
    arguments: ['@current_user']
    tags:
      - { name: access_check, applies_to: _custom_access }
  example.services_access_checker:
    class: Drupal\example\Access\ServicesAccessCheck
    arguments: ['@mymodule.service']
    tags:
      - { name: access_check }
```

The above custom access checks can both be defined using the service name or class name, however, ServiceAccessCheck must use the service name. This is to ensure the services defined in services.yml are injected into the construct function when the access check is called.

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
    // Define custom access for '/user/login'.
    if ($route = $collection->get('user.login')) {
      $route->setRequirement('_custom_access', 'Drupal\example\Access\StandardAccessCheck::access');
    }
    // Define custom access for '/user/logout'.
    if ($route = $collection->get('user.logout')) {
      $route->setRequirement('_custom_access', 'example.services_access_checker::access');
    }
  }

}

```