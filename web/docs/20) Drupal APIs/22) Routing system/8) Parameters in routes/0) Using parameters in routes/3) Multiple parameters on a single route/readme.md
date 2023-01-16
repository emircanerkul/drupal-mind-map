If two entities of the same type are required in the same route then the typehinting magic above won't work and the slug-to-argument name magic as explained in the [parameters in routes](https://www.drupal.org/docs/8/api/routing-system/parameter-upcasting-in-routes) handbook page needs to be used. However, upcasting still works, just the system needs a little help:

```php
route_with_two_nodes:
  path: '/foo/{node1}/{node2}'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::foo'
  options:
    parameters:
      node1:
        type: entity:node
      node2:
        type: entity:node

```

```php
use Drupal\node\NodeInterface;

class ExampleController {
  function foo(NodeInterface $node1, NodeInterface $node2) {
  }
}

```