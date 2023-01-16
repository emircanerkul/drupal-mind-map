---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/chaining-migrations-using-migration_lookup
description: >-
  MigrationLookup (migration_lookup) is a migration process plugin that gets a
  value from a previous migration. It is particularly useful for reference
  fields because it can look up the ID of an entity created by a previous
  migration. Example: Users and Nodes Suppose you are migrating users and nodes
  from a Drupal 7 site.
published_time: '2020-10-15T06:36:37+00:00'
modified_time: '2022-09-28T23:08:08+00:00'
---
[MigrationLookup](https://api.drupal.org/api/drupal/core!modules!migrate!src!Plugin!migrate!process!MigrationLookup.php/class/MigrationLookup) (`migration_lookup`) is a migration process plugin that gets a value from a previous migration. It is particularly useful for reference fields because it can look up the ID of an entity created by a previous migration.