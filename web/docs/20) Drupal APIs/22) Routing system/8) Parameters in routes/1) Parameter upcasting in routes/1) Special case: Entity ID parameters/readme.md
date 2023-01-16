In the case that a route parameter matches the ID of an entity type, you do not need to implement the `ParamConverter` class. In `routing.yml`, simply write `type: entity:my_entity_type` instead of `type: my_menu`. Note that `entity:entity_type` must not be surrounded by quotation marks.

In the case that you are loading your own custom entity Controller implementation, it is important that

* The actual variable name of the entity in the Controller method callback argument should be the identical to the route parameter name. If the route parameter name is `{foobar}` then the variable name must be `$foobar`.
* The variable for the entity in the controller must be type hinted on the entity class, e.g. `\Drupal\foobar\Entity\Foobar $foobar`.

```yaml
foobar.view:
  path: '/foobar/{foobar}'
  defaults:
    _controller: '\Drupal\foobar\Controller\Foobar::content'
    _title: 'Oh yeah foobar'
  requirements:
    _access: 'TRUE'
```

And the Controller Implementation

```php
class Foobar extends ControllerBase {
  public function content(\Drupal\foobar\Entity\Foobar $foobar, Request $request) {
    return [
      '#markup' => 'cheesus slice',
    ];
  }
}
```