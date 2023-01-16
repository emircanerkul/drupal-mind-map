---
url: >-
  https://www.drupal.org/docs/8/converting-drupal-7-modules-to-drupal-8/wscci-conversion-guide-pass-3
description: >-
  Named parameters in the router The Drupal 6 and 7 menu system allowed the
  passing of arguments populated from the path as well as scalar values to the
  page callback. When converting to a controller, the named parameters of the
  controller method are matched to request attributes from the path or defaults.
published_time: '2013-05-25T22:48:36+00:00'
modified_time: '2016-10-15T22:23:47+00:00'
---
### Named parameters in the router

The Drupal 6 and 7 menu system allowed the passing of arguments populated from the path as well as scalar values to the page callback. When converting to a controller, the named parameters of the controller method are matched to request attributes from the path or defaults.

```php
tracker.users_recent_content:
  path: '/tracker/{account}'
  options:
    converters:
      account: 'user'
  defaults:
    _content: '\Drupal\tracker\Controller\TrackerController::trackerPage'
    set_title: 'FALSE'
  requirements:
    _access_tracker_own_information: 'TRUE'

tracker.user_tab:
  path: '/user/{account}/track'
  options:
    converters:
      account: 'user'
  defaults:
    _content: '\Drupal\tracker\Controller\TrackerController::trackerPage'
    set_title: 'TRUE'
  requirements:
    _access_tracker_user_tab: 'TRUE'

```

The TrackerController::trackerPage() method now can have a parameter $account, to which the system will pass the value of the {account} placeholder. Also, because we have a converter specified the system will automatically turn it from an integer into a User object. That is:

```php

use Drupal\user\UserInterface;

class TrackerController {
  // ...

  public function trackerPage(UserInterface $account) {
    // ...
  }
}

```

Note that if you have multiple placeholders, they may appear in _any_ order. They match on name, not on order. Also, The request object is always available if needed:

```php

use Symfony\Component\HttpFoundation\Request;
use Drupal\user\UserInterface;

class TrackerController {
  // ...

  public function trackerPage(UserInterface $account, Request $request) {
    // ...
  }
}

```

And it also can be in any order.

Note: The request object should only be used if GET parameters are needed by the controller. Except in extreme cases the Request should not be passed on to other routines by the Controller; it should extract the information needed and pass just that on, so that other code can be kept uncoupled from the Request.