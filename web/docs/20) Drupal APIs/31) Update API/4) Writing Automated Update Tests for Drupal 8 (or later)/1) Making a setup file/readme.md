Automated update tests make use of one or more "setup" files, which are PHP files that, when executed, will set up the database and configuration the way it should be prior to updates being run.

There is a file that you can use as a base, core/modules/system/tests/fixtures/update/drupal-8.bare.standard.php.gz -- this is a database dump of what you'd get after running a standard Drupal 8 installation.

You'll need to write an additional file that sets up your database tables or configuration matching your prior data model. Examples:

* If your data model change involves making changes to database schema, you'd want to set up your database tables and probably put some data in them.
* If your data model change involves configuration, you'd want to import configuration that has examples of the old configuration that you want to update and verify.

A good way to import configuration is like this, assuming that you've exported your configuration to a file in the same directory as this PHP file:

```php
use Drupal\Core\Database\Database;

$connection = Database::getConnection();

// Import YML config files.
$configs = [];
$configs[] = \Drupal\Component\Serialization\Yaml::decode(file_get_contents(__DIR__ . '/EXPORTED_CONFIG_FILENAME.yml'));

// Save them in the database.
foreach ($configs as $config) {
$connection->insert('config')
  ->fields(array(
      'collection',
      'name',
      'data',
    ))
  ->values(array(
      'collection' => '',
      'name' => 'YOUR_CONFIG_TYPE_PREFIX.' . $config['id'],
      'data' => serialize($config),
    ))
  ->execute();
}

```

### Making a setup file to include a core module not enabled in the Standard profile

If you need to write an update path test for a core module that's not enabled in the Standard profile, things can get a little complicated. In some cases, you might need to [create your own database dump](#s-creating-your-own-dump) from scratch. However, it's possible (with some manual effort) to craft a setup file that can be applied on top of one of the full "standard-base" fixtures provided by core (located in `core/modules/system/tests/fixtures/update`). The process is:

1. Create a clean database to work from.
2. Checkout or otherwise install an unmodified Drupal core 9.0.0 codebase.
3. Perform a clean install of 9.0.0 with the 'standard' profile (e.g. `drush si standard` if you're using drush).
4. Run `core/scripts/dump-database-d8-mysql.php` to generate a "bare" 9.0.0 dump. Core provides one, but to make the next steps easier, you'll want to do this yourself.
5. Install the non-standard core modules you need (e.g. content\_moderation + workflows).
6. Run dump-database-d8-mysql.php again to get the new database state with the new modules enabled.
7. Diff the two DB dumps to see the differences.
8. Copy the relevant bits into your module-specific setup file (e.g. `content_moderation.php`)

An example of this approach is available at [#3150294-53: New translations for moderated nodes are not created in the initial workflow state](https://www.drupal.org/comment/14264087#comment-14264087 "Status: Needs review") if you want to see it in action.