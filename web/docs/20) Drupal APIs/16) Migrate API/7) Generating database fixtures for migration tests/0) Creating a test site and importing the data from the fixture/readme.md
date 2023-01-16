### Importing data from the fixture to your test database 

1\. Prepare an empty database where you can import the data from the fixture. The database name in the example below is _drupal\_fixture_ but you can call the database whatever you want.

2\. Define a database connection to your empty database in your Drupal settings.php.

```php
$databases['fixture_connection']['default'] = array (
  'database' => 'drupal_fixture',
  'username' => 'username',
  'password' => 'password',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);

```

3\. Import the Drupal 6 or Drupal 7 fixture into this database.

Command to import Drupal 6 fixture:   
`php core/scripts/db-tools.php import --database fixture_connection core/modules/migrate_drupal/tests/fixtures/drupal6.php`

Command to import Drupal 7 fixture:   
`php core/scripts/db-tools.php import --database fixture_connection core/modules/migrate_drupal/tests/fixtures/drupal7.php`

4\. [Add a row for uid 0 to {users} table manually](https://www.drupal.org/node/1029506).

### Set up Drupal 6 / Drupal 7 installation that uses your test database

a. Download the latest Drupal 6 / Drupal 7.

b. Edit the sites/default/settings.php of your Drupal 6 / Drupal 7 installation so that it points to your your test database which has the data from the fixture.

c. Install the following contributed modules to sites/all/modules of your Drupal 6 / Drupal 7 installation.

Contributed modules for Drupal 6:

* [CCK](https://www.drupal.org/project/cck/releases)
* [Date](https://www.drupal.org/project/date/releases)
* [Event](https://www.drupal.org/project/event/releases)
* [i18n](https://www.drupal.org/project/i18n/releases)
* [ImageAPI](https://www.drupal.org/project/imageapi/releases)
* [ImageCache](https://www.drupal.org/project/imagecache/releases)

Contributed modules for Drupal 7:

Attached is a [drush makefile ](https://www.drupal.org/files/drupal7.make%5F.txt)for Drupal7 fixture.

* [Breakpoints](https://www.drupal.org/project/breakpoints/releases)
* [Ctools](https://www.drupal.org/project/ctools/releases)
* [Date](https://www.drupal.org/project/date/releases)
* [Email](https://www.drupal.org/project/email/releases)
* [Entity API](https://www.drupal.org/project/entity/releases)
* [Entity Reference](https://www.drupal.org/project/entityreference/releases)
* [Entity Translation](https://www.drupal.org/project/entity%5Ftranslation/releases)
* [i18n](https://www.drupal.org/project/i18n/releases)
* [Link](https://www.drupal.org/project/link/releases)
* [Multiupload Filefield Widget](https://www.drupal.org/project/multiupload%5Ffilefield%5Fwidget/releases)
* [Multiupload Imagefield Widget](https://www.drupal.org/project/multiupload%5Fimagefield%5Fwidget/releases)
* [Picture](https://www.drupal.org/project/icture/releases)
* [Phone](https://www.drupal.org/project/phone/releases)
* [References](https://www.drupal.org/project/references/releases)
* [Telephone](https://www.drupal.org/project/telephone/releases)
* [Title](https://www.drupal.org/project/title/releases)
* [Variable](https://www.drupal.org/project/variable/releases)

#### Commands to install Drupal 7 via composer:

```php
composer create-project drupal-composer/drupal-project:7.x-dev drupal7
cd drupal7
composer require drupal/ctools drupal/date drupal/email drupal/entity drupal/entityreference drupal/entity_translation drupal/i18n drupal/link drupal/multiupload_filefield_widget drupal/multiupload_imagefield_widget drupal/phone drupal/references drupal/telephone drupal/title drupal/variable drupal/views
```

### Log in to your test site and finalize the configuration

1\. You can now log in to your test site as the admin user.

* Drupal 6: username/password is root/root
* Drupal 7: username/password is admin/root

2\. Fix file directory to "sites/default/files", and temp directory to "sites/default/files/temp"