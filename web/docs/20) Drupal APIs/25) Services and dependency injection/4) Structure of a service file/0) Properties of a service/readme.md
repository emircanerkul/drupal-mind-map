<!-- note-version -->
> VERSION: Note for Drupal &gt; 8
Links in this section lead to Symfony documentation specific to its version used in Drupal 8. Please use version switcher on the Symfony site to see information relevant to your Drupal version.

* **abstract**: The service definition will not result in an actual service. The service is supposed to be used as 'parent'. Values: ‘true’ = service will be abstract; ‘false’ (default) = service will be instantiated.
* **alias**: Alias name for a service. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/alias%5Fprivate.html).
* **arguments**: Argument(s) to be used with the factory method (in case of ‘factory\_class’) or with the class constructor (in case of ‘class’). A '@' indicates another service, and then what is put in here is the name of the service, as defined in its services.yml file. An argument wrapped in '%' characters represents a parameter, which can be defined in the 'parameters' section of the file. A '@?' indicates that the dependency is optional ([more info](https://symfony.com/doc/2.0/book/service%5Fcontainer.html#making-references-optional)). [More information](https://symfony.com/doc/3.4/service%5Fcontainer.html#service-parameters), & [More on parameters](https://symfony.com/doc/3.4/service%5Fcontainer/parameters.html)
* **calls**: Used for setter injection. Defines additional methods to call after the service has been instantiated. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/injection%5Ftypes.html#setter-injection).
* **class**: The class of the service.
* **configurator**: A callable which configures a service after its instantiation. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/configurators.html#using-the-configurator).
* **decorates**: A service definition that will be replaced/overridden by this service definition. Can be combined with 'parent' to more easily replace the original service definition. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/service%5Fdecoration.html).
* **factory**: The class (and factory\_method) that will instantiate the service class. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/factories.html).
* **file**: A file which is included just before the service gets loaded. [More information](https://symfony.com/doc/current/components/dependency%5Finjection/advanced.html#requiring-files).
* **parent**: A service definition which properties will be inherited. See 'abstract'. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/parent%5Fservices.html).
* **properties**: [More information](https://symfony.com/doc/3.4/service%5Fcontainer/injection%5Ftypes.html#property-injection).
* **public**: Set the service as public or private. Private services can only be used as argument for other services. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/alias%5Fprivate.html).  
 ‘true’ (default): service is public. ‘false’: service is private.
* **scope**: Determines how long an instance of a service is used by the container. ‘container’ (default): always use the same instance. ‘prototype’: create a new instance every time the service is called. ‘request’: create a new instance at each (sub) request (deprecated starting from Symfony 2.8). [More information](https://symfony.com/doc/2.4/cookbook/service%5Fcontainer/scopes.html#understanding-scopes).
* **synchronized**: The service will be reconfigured on each scope change (deprecated starting from Symfony 2.7) [More information](https://symfony.com/doc/2.4/cookbook/service%5Fcontainer/scopes.html#using-synchronized-service).
* **synthetic**: The service is injected into the container instead of being created by the container. Values: ‘true’ = synthetic service; ‘false’ (default) = normal service. [More information](https://symfony.com/doc/3.4/service%5Fcontainer/synthetic%5Fservices.html).
* **tags**: A name to identify groups of services. Tags are used in compiler passes and for collecting cache bins. [More information](https://symfony.com/doc/current/service%5Fcontainer/tags.html).

More examples of services.yml:

Suppose you have a module called _icecream_ and need to inject a database service. Your **icecream.services.yml** file would contain this:

```yaml
services:
  icecream:
    class: Drupal\icecream\Services\Scoopdb
    arguments: ['@database'] 
```

Where...

* `icecream` is our service name
* Class with namespace => `Drupal\icecream\Services\Scoopdb`
* Arguments contains the names of the services that need to be injected inside our custom service. '@database' is in our case

The class points to a file called `Scoopdb.php` inside the `src/Services` folder.

Our `Scoopdb.php` file would contain:

```php
use Drupal\Core\Database\Connection;
/**
 * Class Scoopdb.
 */
class Scoopdb implements ScoopdbInterface {
  /**
   * @var \Drupal\Core\Database\Connection $database
   */
  protected $database;

  /**
   * Constructs a new Scoopdb object.
   * @param \Drupal\Core\Database\Connection $connection
   */
  public function __construct(Connection $connection) {
    $this->database = $connection;
  }

  /**
   * Returns list of nids from icecream table.
   */
  public function icecream () {
    $query = $this->database->query('SELECT nid FROM {icecream}');
    $result = $query->fetchAssoc();
    return $result;
  }
}
```

To inject this Service into another Service we have to construct an object for that Service which you will need to inject inside our constructor.