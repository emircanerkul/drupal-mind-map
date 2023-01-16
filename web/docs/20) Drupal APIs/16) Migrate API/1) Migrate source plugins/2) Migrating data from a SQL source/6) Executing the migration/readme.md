**Importing the migration definition**

The contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module allows migration plugins to be implemented as configuration entities, allowing them to flexibly be loaded, modified, and saved. Refer to the [Executing migrations documentation page](https://www.drupal.org/docs/8/api/migrate-api/executing-migrations) on how to import the YAML format migration definition.

**Checking the status of the migration, executing the migration, rollbacks**

The contributed Migrate Tools module provides the Drush commands for checking the status of a migration, executing the migration and doing a rollback. Refer to the [Executing migrations documentation page](https://www.drupal.org/docs/8/api/migrate-api/executing-migrations) on detailed instructions.

If you don't see the migration when executing `drush migrate-status`, verify that:

* you have enabled your custom module which provides the custom source plugin
* you have your source plugin in src/Plugin/migrate/source directory
* your migration definition was imported as configuration
* you have defined the source database connection in your settings.php or settings.local.php and that the database connection parameters are correct.
* the 'key' of your migration configuration source plugin matches to the database connection key defined in settings.php.