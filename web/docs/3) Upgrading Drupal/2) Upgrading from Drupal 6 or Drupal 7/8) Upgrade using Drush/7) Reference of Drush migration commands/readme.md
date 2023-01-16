### migrate:upgrade (no alias)

Provided by the [Migrate Upgrade](/project/migrate%5Fupgrade) project. Use this to run an upgrade from Drupal 6 / 7\. This command will generate migration configurations based on the source site's configuration and content. 

Refer to the examples earlier on this documentation page.

#### Basic example

```php
drush migrate:upgrade --legacy-db-key=migrate
```

#### Options

* legacy-db-url: Database connection information for the source database.
* legacy-db-prefix: Database table prefix for the source database.
* legacy-root: Path to the source site, this is used to transfer content from the files directory. If the files are private then a local file path must be specified, for public files http(s) will work as well.
* configure-only: Use this to create migration configurations only. When this option is set, migrations will be generated so that they can be executed individually with 'drush migrate:import'.

### migrate:status (ms)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to get the list of _all_ migrations with their current status. Use the --group or --tag option to filter the results.

#### Basic example

```php
drush migrate:status
```

### migrate:import (mi)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to perform one or more migration processes. This is normally used with custom migrations from non-Drupal sources. For example, if you've created and imported a custom migration configuration, this command can be used to run it.

#### Basic examples

```php
drush migrate:import migration_id
drush migrate:import --tag='Drupal 7'
drush migrate:import --group=files
```

#### Options

* all: Run all migrations currently configured.
* group: Run all migrations belonging to a particular group.
* limit: Limit the number of items to process in each migration.
* feedback: Frequency of progress messages, in items processed.
* idlist: Comma-separated list of source IDs to import.
* update: Migrate new items as well as previously migrated items that have been updated on the source.
* force: Force an operation to run, even if all dependencies are not satisfied.

#### Common use cases

* When `migrate:upgrade --configure-only` is used, configuration entities are created. The default behavior of the new Drupal site is to not allow existing configuration entities to be overwritten, `migrate:upgrade` cannot be used to run a migration after `migrate:upgrade --configure-only` is used. Use `migrate:import` instead.
* When a custom migration is created and imported (either via the configuration management UI or `drush config:import`), use `migrate:import` to run the migration.
* Use [Migrate Devel](https://www.drupal.org/project/migrate%5Fdevel) for troubleshooting errors during import. Example: `drush migrate:import migration_id --migrate-debug-pre`.

Pro tip: If you've imported a custom migration configuration and you need to update it and re-import it, use the [Configuration Update Manager](https://www.drupal.org/project/config%5Fupdate) module.

### migrate:rollback (mr)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to roll back a migration. This is normally used for testing or if you had issues and need to start over. Use this with the id or group of the migration task.

#### Basic examples

```php
drush migrate:rollback migration_id
drush migrate:rollback --tag='Drupal 7'
drush migrate:rollback --group=files
```

### migrate:stop (mst)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to stop an active migration operation.

#### Basic example

```php
drush migrate:stop migration_id
```

### migrate:reset-status (mrs)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to reset an active migration status back to idle.

#### Basic example

```php
drush migrate:reset-status migration_id
```

### migrate-manifest (no alias)

Provided by [the Migrate Manifest module](https://www.drupal.org/project/migrate%5Fmanifest).

### migrate:messages (mmsg)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to view any messages associated with a migration. This is useful to use when you have a failure in your migration process. This will show you why they failed and what caused them.

#### Basic example

```php
drush migrate:messages migration_id
```

### migrate:fields-source (mfs)

Included in Drush since [10.4.0](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118). Use this to list the fields available for mapping in a source.

#### Basic example

```php
drush migrate:fields-source migration_id
```

### migrate:tree (no alias)

Provided by [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) module, the only command not yet included in Drush. Use this to show a tree of migration dependencies.

#### Basic example

```php
drush migrate:tree --tag='Drupal 7'
```