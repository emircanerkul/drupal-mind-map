---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/access-checking-on-routes/custom-route-access-checking
description: >-
  Simplified custom access checker Sometimes you have to add an access checker
  which is just used for a single route entry.
published_time: '2019-04-15T21:29:47+00:00'
modified_time: '2022-04-07T13:36:50+00:00'
---
### Simplified custom access checker

Sometimes you have to add an access checker which is just used for a single route entry.

In these cases, instead of [creating a separate access checker class or service](https://www.drupal.org/node/2122195), you can specify function such as a method on your controller on the routing definition:

```php
example:
  path: '/example'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::content'
  requirements:
    _custom_access: '\Drupal\example\Controller\ExampleController::access'

```

```php
namespace Drupal\example\Controller;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Session\AccountInterface;

/**
 * Builds an example page.
 */
class ExampleController {

  /**
   * Checks access for a specific request.
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
    return AccessResult::allowedIf($account->hasPermission('do example things') && $this->someOtherCustomCondition());
  }

}


```

In this case, the access method is in the same class as the controller itself so there is no need for a separate service entry. The available arguments are the same as for the service defined method.

<!-- note-tip -->
> TIP: Note: Function arguments are resolved as described in Using parameters in routes with the addition of AccountInterface as typehinted parameter.

### Access checking in the controller content method

If you need or want to do access checking in the controller content method for some reason, you can set `_access: 'TRUE'` in the route definition and do the access checking in the controller content method. If you take this approach, make sure to return the proper Symfony route exceptions if the page is not found or access should be denied. The above methods where access is decoupled from content are definitely preferred over mixing page logic to access.