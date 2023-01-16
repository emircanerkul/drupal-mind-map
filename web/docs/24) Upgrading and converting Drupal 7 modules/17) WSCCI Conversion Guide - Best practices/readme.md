---
url: >-
  https://www.drupal.org/docs/8/converting-drupal-7-modules-to-drupal-8/wscci-conversion-guide-best-practices
description: >-
  Separate controller objects for different return types All controller methods
  in the same class should be intended for use with the same route key i.e.:
  they should all be intended for use with _content or _controller, but not a
  mix of both. For example, # Routes that return content. module.some_route:
  defaults: _content:
  '\Drupal\my_module\Controller\ContentController::someRoute'
  module.other_route: defaults: _content:
  '\Drupal\my_module\Controller\ContentController::otherRoute' # Routes that
  return something else.
published_time: '2013-08-15T19:55:29+00:00'
modified_time: '2016-10-15T22:23:47+00:00'
---
