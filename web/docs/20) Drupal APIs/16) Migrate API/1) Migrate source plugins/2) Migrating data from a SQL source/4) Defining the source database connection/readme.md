Drupal 8 Database API allows us to define [multiple database connections](https://www.drupal.org/docs/8/api/database-api/database-configuration).

* The database connections are defined in settings.php or settings.local.php.
* The 'default' database connection is our Drupal 8 database.
* Let's define a second database connection with the key 'migrate' in addition to the 'default' database connection in our settings.php. If your database uses table prefixes, add 'prefix' key to the arrays.

```php
$databases['default']['default'] = array (
  'database'  => 'drupal8-database-name',
  'username'  => 'drupal8-database-username',
  'password'  => 'drupal8-database-password',
  'host'      => 'drupal8-database-server',
  'port'      => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver'    => 'mysql',
);
$databases['migrate']['default'] = array (
  'database'  => 'source-database-name',
  'username'  => 'source-database-username',
  'password'  => 'source-database-password',
  'host'      => 'source-database-server',
  'port'      => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver'    => 'mysql',
);

```