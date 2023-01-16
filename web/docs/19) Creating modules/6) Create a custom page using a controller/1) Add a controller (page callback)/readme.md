The controller returns the page body. It must be either a class method or a registered service. It can be different depending on various conditions (HTTP vs. HTTPS, content headers, others) but that is beyond the scope of this introduction.

The Controller class `ExampleController` should be defined in `example/src/Controller/ExampleController.php`:

```php
<?php
namespace Drupal\example\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides route responses for the Example module.
 */
class ExampleController extends ControllerBase {

  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function myPage() {
    return [
      '#markup' => 'Hello, world',
    ];
  }

}

```

namespace

This declares the prefix needed to fully qualify the name of the class we are defining. Compare the file's doc block and the name of the class. The class auto-loader knows that, to find the class `\Drupal\example\Controller\ExampleController`, it should look for the file `modules/example/src/Controller/ExampleController.php`.

use

This allows us to use `ControllerBase` instead of the fully qualified name. This makes our `class` line much easier to read.

myPage()

The method specified in the YAML file must be public. It should return [a renderable array](https://www.drupal.org/docs/drupal-apis/render-api/render-arrays).

## Changes from Drupal 7

See the [change record](https://drupal.org/node/1800686) for changing the routing system.