---
url: >-
  https://www.drupal.org/docs/drupal-apis/database-api/instantiating-a-database-connection-object
description: >-
  Database interaction should be done via a database connection object. There
  are the few scenarios that required some attention: In the Procedural code,
  i.e. *.module, *.inc or script files: The best way to instantiate a database
  connection object is via the Service Container. Example: $database =
  \Drupal::database(); // Or $database = \Drupal::service('database'); This will
  result in a database connection object that is configured to connect to the
  default master database as defined in your database configuration in
  settings.php.
published_time: '2017-07-12T14:55:11+00:00'
modified_time: '2022-05-19T02:27:19+00:00'
---
Database interaction should be done via a database connection object. There are the few scenarios that required some attention:

1. In the Procedural code, i.e. `*.module`, `*.inc` or script files:  
   1. The best way to instantiate a database connection object is via the Service Container.  
   Example:  
   ```php  
   $database = \Drupal::database();  
   // Or  
   $database = \Drupal::service('database');  
   ```  
   This will result in a database connection object that is configured to connect to the default master database as defined in your database configuration in settings.php.
2. For historical and technical reasons, the type returned by `\Drupal::database()` is [\\Drupal\\Core\\Database\\Connection](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Database%21Connection.php/class/Connection/8.7.x "Base Database API class."), and this is why it's sometimes called `$connection`.
3. In OOP code:  
   1. In some cases a database connection object may already be available as a member on the current class; for example, many plugins and services have `$this->database` (or`$this->connection`) - the database connection object as a member.  
   2. If it is possible, use DI (_dependency injection_) to use `@database` service or `$container->get('database');` to inject the database connection  
   3. If not possible (as in a static method of a class), use `\Drupal::database()`.  
   4. If services are not yet available, `\Drupal\Core\Database\Database::getConnection()` can get a database connection.  
   5. In unit tests, we do not have a booted kernel or a built container. Unit tests should generally not access a database. A unit test which needs a database service should be converted to a kernel test.  
   6. In kernel and functional test classes we have `$this->container->get('database')`. Some test authors might discover that the container referenced by the test class will be out of sync with the current container during the request in a functional test. In that circumstance, a test author might call `$this->rebuildContainer()` and then access `$this->container->get('database')` again.