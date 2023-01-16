---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/access-checking-on-routes/advanced-route-access-checking
description: >-
  Custom access checking on routes Sometimes just relying on permissions and/or
  roles is not sufficient and you need to do custom access checking on routes.
  To achieve this, implement a class and use that to check access. If your
  module is called example, this would be a simple implementation placed under
  example/src/Access/CustomAccessCheck.php: namespace Drupal\example\Access; use
  Drupal\Core\Routing\Access\AccessInterface; use
  Drupal\Core\Session\AccountInterface; use Drupal\Core\Access\AccessResult; /**
  * Checks access for displaying configuration translation page.
published_time: '2013-10-28T12:34:14+00:00'
modified_time: '2022-04-25T04:25:07+00:00'
---
### Custom access checking on routes

Sometimes just relying on permissions and/or roles is not sufficient and you need to do custom access checking on routes. To achieve this, implement a class and use that to check access. If your module is called example, this would be a simple implementation placed under `example/src/Access/CustomAccessCheck.php`:

```php
namespace Drupal\example\Access;

use Drupal\Core\Routing\Access\AccessInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Checks access for displaying configuration translation page.
 */
class CustomAccessCheck implements AccessInterface {

  /**
   * A custom access check.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   Run access checks for this account.
   *
   * @return \Drupal\Core\Access\AccessResultInterface
   *   The access result.
   */
  public function access(AccountInterface $account) {
    // Check permissions and combine that with any custom access checking needed. Pass forward
    // parameters from the route and/or request as needed.
    return ($account->hasPermission('do example things') && $this->someOtherCustomCondition()) ? AccessResult::allowed() : AccessResult::forbidden();
  }

}

```

The access method arguments are resolved similar to [normal](https://www.drupal.org/node/2310425) routing. The following arguments are optionally available; they will be populated if they are properly type hinted:

* The slugs, upcasting for which is performed in accordance with the parameters on the route's controller, not the access checker.
* `\Symfony\Component\Routing\Route $route`
* `\Drupal\Core\Routing\RouteMatch $route_match`
* `\Drupal\Core\Session\AccountProxy $account`

Note that the `\Symfony\Component\HttpFoundation\Request $request` argument is _not_ available, even with proper type hinting. See issue [2786941](https://www.drupal.org/project/drupal/issues/2786941) for details.

Make sure not to mix up the `$user` coming from `\Drupal::currentUser()` and `AccountInterface $account`. Always perform logic against `AccountInterface $account`.

Additionally, you have to add the access class as a service by adding an entry in example.services.yml.

```php
services:
  example.access_checker:
    class: Drupal\example\Access\CustomAccessCheck
    tags:
      - { name: access_check, applies_to: _example_access_check }

```

By adding `name` and `applies_to` as [service tags](https://www.drupal.org/docs/8/api/services-and-dependency-injection/service-tags), Drupal will be aware this is an access class (and should implement AccessInterface) and that it applies to the route with the requirement set for `_example_access_check`.

That route will have the access check invoked (through the matching implemented in the applies() method). Then the access() method performs the custom access check. You can use data from wherever you need e.g. third party services, custom data checking, time of day, etc.

Your example.routing.yml would end up looking like this:

```yaml
example.edit:
  path: '/example-path/{node}'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::exampleMethod'
    _title: ''
  requirements:
    _example_access_check: 'TRUE'
```

There is no need to define a custom requirements flag for your access checker, if you can identify the right routes to work with without doing so.

### Accessing Other Services

Access Checks are standard Drupal services and as such, access to other services can be defined in module.services.yml. 

```php
services:
  example.access_checker:
    class: Drupal\example\Access\CustomAccessCheck
    arguments: ['@mymodule.service']
    tags:
      - { name: access_check, applies_to: _example_access_check }

```

The additional service can then be accessed using standard [Dependency Injection](https://www.drupal.org/docs/8/api/services-and-dependency-injection/structure-of-a-service-file) with the addition of the \_\_construct function. 

```php
namespace Drupal\example\Access;

use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Routing\Access\AccessInterface;
use Drupal\example\MyService;

/**
 * Checks access for displaying configuration translation page.
 */
class CustomAccessCheck implements AccessInterface{

  /**
   * Drupal core Request Stack.
   *
   * @var \Drupal\example\MyService
   */
  private $myService;

  /**
   * CustomAccessCheck constructor.
   *
   * @param \Drupal\example\MyService
   *   MyService does things.
   */
  public function __construct(MyService $myService) {
    $this->myService = $myService;
  }

  /**
   * A custom access check.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   Run access checks for this account.
   *
   * @return \Drupal\Core\Access\AccessResultInterface
   *   The access result.
   */
  public function access(AccountInterface $account) {
    // Check permissions and combine that with any custom access checking needed. Pass forward
    // parameters from the route and/or request as needed.
    return ($this->myService->checkAccess()) ? AccessResult::allowed() : AccessResult::forbidden();
  }

}

```

If new services are added to the Access Check feature and it is used in combination with [Altering Dynamic Routes](https://www.drupal.org/docs/8/api/routing-system/altering-existing-routes-and-adding-new-routes-based-on-dynamic-ones#custom%5Faccess%5Fchecks), the custom access check value should use the service name, rather than the class name.