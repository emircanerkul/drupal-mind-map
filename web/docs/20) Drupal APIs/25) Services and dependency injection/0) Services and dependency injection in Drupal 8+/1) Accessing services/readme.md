The global Drupal class is to be used within global functions. However, Drupal 8's base approach revolves around classes in the form of controllers, plugins, and so on. The best practice for these is _not to call out to the global service container_ and instead pass in the required services as arguments to a constructor or inject the needed services via service setter methods.

### Using dependency injection

_Dependency injection_ is the preferred method for accessing and using services in Drupal 8 and should be used whenever possible. Rather than calling out to the global services container, services are instead passed as arguments to a constructor or injected via setter methods. Many of the controller and plugin classes provided by modules in core make use of this pattern and serve as a good resource for seeing it in action.

Explicitly passing in the services that an object depends on is called dependency injection. In several cases, dependencies are passed explicitly in class constructors. For example, [route access checkers get the current user injected in service creation](/node/2122195) and the current request passed on when checking access. You can also use setter methods to set a dependency.

<!-- note-warning -->
> WARNING: Note: It's not possible to inject services to entity object. See this issue for more details.

### Using global functions

The [global Drupal class](https://api.drupal.org/api/drupal/core%21lib%21Drupal.php/class/Drupal/8) provides static methods to access several of the most common services. For example, `Drupal::moduleHandler()` will return the module handler service or `Drupal::translation()` will return the string translation service. If there is no dedicated method for the service you want to use, you can use the `Drupal::service()` method to retrieve any defined service.

Example: Accessing the database service via a dedicated `\Drupal::database()` accessor.

```php
// Returns a Drupal\Core\Database\Connection object.
$connection = \Drupal::database();
$result = $connection->select('node', 'n')
  ->fields('n', array('nid'))
  ->execute();

```

Example: Accessing the date service via the generic `\Drupal::service()` method.

```php
// Returns a Drupal\Core\Datetime\DateFormatter object.
$date = \Drupal::service('date.formatter');

```

Ideally, you should minimize the code sitting in global functions and refactor to be on controllers, listeners, plugins, etc. as appropriate, where actual dependencies are injected; see below.

Both have code examples in the [Symfony documentation](https://symfony.com/doc/current/service%5Fcontainer.html).