**Migration plugins** specify individual ETL migrations, such as node, user or taxonomy term migration.

* Migration plugins are defined in YAML format.
* [Examples for migrating nodes, users and other entities from non-Drupal sources](https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples).
* Reading the migration plugins defined by Drupal core / contributed modules is also very good way to learn about migration plugins. These migrations are mainly extracting the data from Drupal 6 / 7 database. These migrations can be found in a module's 'migrations' directory.

**Source plugins** extract the data from the source.

* [List of source plugins provided by the core Migrate module](https://api.drupal.org/api/drupal/namespace/Drupal!migrate!Plugin!migrate!source).
* [Source plugin usage examples](https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins).

**Process plugins** transform the data.

* [List of process plugins for common operations provided by the core Migrate module](https://api.drupal.org/api/drupal/namespace/Drupal!migrate!Plugin!migrate!process).
* [Read more about process plugins](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins).

**Destination plugins** save the data to Drupal 8.

* [List of destination plugins for Drupal configuration and content entities provided by the core Migrate module](https://api.drupal.org/api/drupal/namespace/Drupal!migrate!Plugin!migrate!destination).
* [Read more about destination plugins + examples](https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples).