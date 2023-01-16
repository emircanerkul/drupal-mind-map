---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/access-checking-on-routes/route-access-checking-basics
description: >-
  Simple access checking with permissions/roles The route data structure allows
  you to specify permissions and/or roles that are required to access the route.
  Multiple access checks If a route has multiple access checks, the andIf
  operation is used to chain them together: all results must be
  AccessResult::allowed otherwise access will be denied. Returning an
  AccessResult::neutral() and an AccessResult::forbidden() object does not make
  any difference.
published_time: '2019-04-15T21:39:30+00:00'
modified_time: '2022-06-08T00:21:58+00:00'
---
### Simple access checking with permissions/roles

The [route data structure](https://drupal.org/node/2092643#section-requirements) allows you to specify permissions and/or roles that are required to access the route.

### Multiple access checks

If a route has multiple access checks, the [andIf](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Access%21AccessResultInterface.php/function/AccessResultInterface%3A%3AandIf/8) operation is used to chain them together: all results must be `AccessResult::allowed` otherwise access will be denied. Returning an [AccessResult::neutral()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Access%21AccessResult.php/function/AccessResult%3A%3Aneutral/8) and an [AccessResult::forbidden()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Access%21AccessResult.php/function/AccessResult%3A%3Aforbidden/8) object does not make any difference. This is different to entity access checks: that one is using orIf and a Neutral result might become Allowed (if there are no Forbidden results but there is an Allowed). See [this Drupal core issue](https://www.drupal.org/project/drupal/issues/2991698) for more information about this discrepancy. 