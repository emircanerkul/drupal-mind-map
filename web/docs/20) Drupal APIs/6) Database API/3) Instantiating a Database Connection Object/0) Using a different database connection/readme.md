If your site uses multiple databases, to run a query on a database other than the default one, use [Database::getConnection()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Database%21Database.php/function/Database%3A%3AgetConnection/8.6.x). For example:

```php
  $connection = \Drupal\Core\Database\Database::getConnection('default', 'other_database');

```

To set the active connection and return it use the following:

```php
\Drupal\Core\Database\Database::setActiveConnection('other_database');

$database = \Drupal\Core\Database\Database::getConnection();

```

This will provide a connection to the database defined in settings.php as:

```php
$databases['other_database']['default']
```