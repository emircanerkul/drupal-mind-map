### `var_dump` callback

To investigate data within a migration, you can print data by combining the _callback_ plugin and `var_dump()`:

```yaml
process:
  dump_sourcevar:
    plugin: callback
    callable: var_dump
    source: sourcevar 
```

You can use this to debug data inside of a pipeline too:

```yaml
process:
  field_example:
    -
      plugin: callback
      callable: var_dump
      source: sourcevar
    -
      plugin: some_plugin
```

### Migrate Devel

The [Migrate Devel](https://www.drupal.org/project/migrate%5Fdevel) module provides two options you can use with the [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) drush command `migrate-import` (`mim`):

```php
drush migrate-import <migration> --migrate-debug
drush migrate-import <migration> --migrate-debug-pre
```

* `--migrate-debug`: prints each row as it's migrated (`MigrateEvents::POST_ROW_SAVE`)
* `--migrate-debug-pre`: same idea, but before the process is run on the row ([MigrateEvents::PRE\_ROW\_SAVE](https://api.drupal.org/api/drupal/core!modules!migrate!src!Event!MigrateEvents.php/constant/MigrateEvents%3A%3APRE%5FROW%5FSAVE/9.1.x))

### Migrate Sandbox!

The [Migrate Sandbox!](https://www.drupal.org/project/migrate%5Fsandbox) module provides a UI for developers to quickly and safely experiment with migrate process plugins and migrate process pipelines.