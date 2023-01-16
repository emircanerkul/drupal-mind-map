This is an example of how to define the database connection details for your Drupal 6 / 7 source site. If your source site uses a database prefix, be sure to provide the prefix. You will need to connect to both the local development database (`default`) as well as the source database (D6 or D7). The following is an example of how to do this with Lando. The example includes the default database set up for completeness.

<!-- note-warning -->
> WARNING: Note: It is important to name your migrate database key migrate to avoid issues, see&nbsp;Getting 'Field discovery failed for Drupal core version 7.' when migrating.

**Example database connections in settings.php**

```php
$databases['default']['default'] = [
  'database' => 'drupal8',
  'username' => 'drupal8',
  'password' => 'drupal8',
  'prefix' => '',
  'host' => 'database',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];

$databases['migrate']['default'] = [
  'database' => 'drupal7db',
  'username' => 'drupal7db',
  'password' => 'drupal7db',
  'prefix' => '',
  'host' => 'd7db',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];
```

**Example .lando.yml**

```php
name: mywebsite
recipe: drupal8
config:
  webroot: web

# Create Drupal 7 database service, consider adding phpmyadmin
services:
  d7db:
    type: mariadb
    creds:
      user: drupal7db
      password: drupal7db
      database: drupal7db
    portforward: true
```

Import the Drupal 7 database, assuming the database dump file is called `mywebsite_db.sql.gz` and in the current folder:

```php
lando db-import --host=d7db --user=drupal7db mywebsite_db.sql.gz
```

Inspiration from <https://github.com/thinktandem/migration%5Fboilerplate>.

**DDEV Notice**

If you are using ddev instead of Lando, there are no further configurations needed inside `.ddev/config.yaml`!