All controller methods in the same class should be intended for use with the same route key i.e.: they should all be intended for use with `_content` or `_controller`, but not a mix of both. For example,

```php
# Routes that return content.
module.some_route:
  defaults:
    _content: '\Drupal\my_module\Controller\ContentController::someRoute'
module.other_route:
  defaults:
    _content: '\Drupal\my_module\Controller\ContentController::otherRoute'

# Routes that return something else.
module.some_ajax_route:
  defaults:
    _controller: '\Drupal\my_module\Controller\AjaxController::someAjaxRoute'

```