The contributed [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) provides `drush migrate-status` Drush command that you can execute on the command line of your server.

If you don't see the migration:

* verify that you have enabled your custom module (if you are using a custom module that provides Migrate API source / process / destination plugins)
* verify that your custom source / process / destination plugins are located in `src/Plugin/migrate/source`, `src/Plugin/migrate/process`, `src/Plugin/migrate/destination` directories
* if you are using an SQL source plugin, verify that you have defined the source database connection in your settings.php or settings.local.php and that the database connection parameters are correct.