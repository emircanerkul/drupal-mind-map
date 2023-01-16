When migrations are executed with Drush using contributed [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) or [Migrate Run](https://www.drupal.org/project/migrate%5Frun) module, the messages of a migration can be used with `drush migrate:messages <migration>` or alias `drush mmsg <migration>`.

You can also look for yourself in the migration's database tables. There are two relevant tables for each migration:

* The map table, named `migrate_map_MIGRATION_NAME`
* The message table, named `migrate_message_MIGRATION_NAME`

The two tables can be JOINed on the `source_ids_hash` field. In the map table, the `source_row_status` and `rollback_action` field values are constants defined in MigrateIdMapInterface:

Status values:

* 0: Imported
* 1: Needs update
* 2: Ignored
* 3: Failed

Rollback values:

* 0: Delete
* 1: Preserve