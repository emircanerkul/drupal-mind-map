**When service objects are seralized by drupal private properties are lost.**

Be sure to **not** set any service properties in your form class to have private visibility.

For example, when a form is rebuilt via ajax as in when you add an `#ajax` definition to a form element, the form class is serialized on  
ajax requests and any services that are assigned to private properties in the class are lost. This results in a form where the ajax runs and proceses successfully then generates errors due to null property values on subsequent ajax requests.

When you have an element with a defined `#ajax` handler like the below, you'll need to ensure the services injected into your form class  
are not private.

```php
      '#ajax' => [
        'callback' => '::myAjaxCallback', 'event' => 'change', 'wrapper' => 'my-ajax-wrapper', 'progress' => [
          'type' => 'throbber', 'message' => $this->t('Verifying entry...'),
        ],
      ]
```

**Example:**

```php
class MyEntityForm extends EntityForm 

  /**
   * Drupal routeBuilder object, for rebuilding routes on form save.
   *
   * This is an injected service and must not be declared private or
   * it will be lost on serialisation of this form object.
   *
   * @var \Drupal\Core\Routing\RouteBuilder
   */
  protected $routeBuilder

  /**
   * MyEntityForm constructor.
   *
   * The injected service properties, eg $this->routeBuilder must
   * be not be declared private as this form is reloaded with ajax and
   * cached, private properties aren't serialisable.
   *
   * @param \Drupal\Core\Routing\RouteBuilderInterface $routeBuilder
   */
  public function __construct(RouteBuilderInterface $routeBuilder) {
    $this->routeBuilder = $routeBuilder
  }

}
```