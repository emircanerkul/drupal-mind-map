Dynamic routes are implemented in a method. This method is added as a `'route_callbacks'` entry in `example.routing.yml`:

```php
route_callbacks:
  - '\Drupal\example\Routing\ExampleRoutes::routes'

```

It's also possible to use a method on a service:

```php
route_callbacks:
  - 'example.service:routes'

```

Note: route\_callbacks is a top-level element in the routing file. Here is an example from the views module:

```php
views.ajax:
  path: '/views/ajax'
  defaults:
    _controller: '\Drupal\views\Controller\ViewAjaxController::ajaxView'
  options:
    _theme: ajax_base_page
  requirements:
    _access: 'TRUE'

route_callbacks:
  - 'views.route_subscriber:routes'

```

(**Since 8.2.0**`_theme: ajax_base_page` is no longer needed, and the entire options portion in that example may be omitted.)

The dynamic routing method either returns an array of `\Symfony\Component\Routing\Route` objects or a `\Symfony\Component\Routing\RouteCollection` object. A simple example could be a `src/Routing/ExampleRoutes.php` file in your module (if the module is named example).

```php
namespace Drupal\example\Routing;

use Symfony\Component\Routing\Route;

/**
 * Defines dynamic routes.
 */
class ExampleRoutes {

  /**
   * Provides dynamic routes.
   */
  public function routes() {
    $routes = [];
    // Declares a single route under the name 'example.content'.
    // Returns an array of Route objects. 
    $routes['example.content'] = new Route(
      // Path to attach this route to:
      '/example',
      // Route defaults:
      [
        '_controller' => '\Drupal\example\Controller\ExampleController::content',
        '_title' => 'Hello',
      ],
      // Route requirements:
      [
        '_permission'  => 'access content',
      ]
    );
    return $routes;
  }

}

```

Alternatively the dynamic route method can return a `\Symfony\Component\Routing\RouteCollection` object. This example defines the same route as the example above.

```php
namespace Drupal\example\Routing;

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

/**
 * Defines dynamic routes.
 */
class ExampleRoutes {

  /**
   * Provides dynamic routes.
   */
  public function routes() {
    $route_collection = new RouteCollection();

    $route = new Route(
      // Path to attach this route to:
      '/example',
      // Route defaults:
      [
        '_controller' => '\Drupal\example\Controller\ExampleController::content',
        '_title' => 'Hello',
      ],
      // Route requirements:
      [
        '_permission'  => 'access content',
      ]
    );
    // Add the route under the name 'example.content'.
    $route_collection->add('example.content', $route);
    return $route_collection;
  }

}

```

This example reproduces the same route from the [introductory example](https://drupal.org/node/2116767) that is _much simpler_ to define using the routing YAML file. Normally you would add dynamic routes with this method. Defining static routes is just painful this way. Use your own logic to derive those routes. Modules like Views, Image, and RESTful Web Services use this system to attach routes to all kinds of areas in Drupal core in a configurable way. The following is an example of the Image module in core in which the path is dynamically generated:

```php
namespace Drupal\image\Routing;

use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\StreamWrapper\StreamWrapperManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Routing\Route;

/**
 * Defines a route subscriber to register a url for serving image styles.
 */
class ImageStyleRoutes implements ContainerInjectionInterface {

  /**
   * The stream wrapper manager service.
   *
   * @var \Drupal\Core\StreamWrapper\StreamWrapperManagerInterface
   */
  protected $streamWrapperManager;

  /**
   * Constructs a new ImageStyleRoutes object.
   *
   * @param \Drupal\Core\StreamWrapper\StreamWrapperManagerInterface $stream_wrapper_manager
   *   The stream wrapper manager service.
   */
  public function __construct(StreamWrapperManagerInterface $stream_wrapper_manager) {
    $this->streamWrapperManager = $stream_wrapper_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('stream_wrapper_manager')
    );
  }

  /**
   * Returns an array of route objects.
   *
   * @return \Symfony\Component\Routing\Route[]
   *   An array of route objects.
   */
  public function routes() {
    $routes = [];
    // Generate image derivatives of publicly available files. If clean URLs are
    // disabled image derivatives will always be served through the menu system.
    // If clean URLs are enabled and the image derivative already exists, PHP
    // will be bypassed.
    $directory_path = $this->streamWrapperManager->getViaScheme('public')->getDirectoryPath();

    $routes['image.style_public'] = new Route(
      '/' . $directory_path . '/styles/{image_style}/{scheme}',
      [
        '_controller' => 'Drupal\image\Controller\ImageStyleDownloadController::deliver',
      ],
      [
        '_access' => 'TRUE',
      ]
    );
    return $routes;
  }

}

```