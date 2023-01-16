The following commands require [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) to be installed: 

When developing large migrations, it is useful to limit the number of rows being imported. This speeds up the import/rollback cycle whilst refined field mappings, callbacks etc.

```php
$ drush migrate:import --limit=10 MIGRATION_NAME 

```

The following commands allow an individual migration entity to be imported and rolled back for development purposes:

```php
$ drush migrate:import --idlist=123 MIGRATION_NAME 
$ drush migrate:rollback --idlist=123 MIGRATION_NAME 

```

The id is usually the primary id of the entity being migrated, but more information can be found in the migrate\_map\_MIGRATION\_NAME database tables, particularly looking at the sourceId column.