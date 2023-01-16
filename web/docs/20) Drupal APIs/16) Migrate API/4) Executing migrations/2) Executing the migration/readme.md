### Using Drush and Migrate Tools

The contributed [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) provides 'migrate-import' and 'migrate-rollback' Drush commands. The command below migrates 10 rows from a migration with id 'games' so that you can verify the results on your Drupal 8 site. If you wish to migrate all rows from the source, leave out the 'limit' argument.

`drush migrate-import games --limit=10`

### Using Drush and Migrate Manifest

The contributed [Migrate Manifest](https://drupal.org/project/migrate%5Fmanifest) module allows you to run a group of migrations in a reproducible manner and in the correct order based on the migration dependencies. [Usage examples are provided in the Upgrading to Drupal 8 handbook](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush#manifest).