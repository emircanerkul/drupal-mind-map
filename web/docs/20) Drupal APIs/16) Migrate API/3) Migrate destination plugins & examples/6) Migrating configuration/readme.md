---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples/migrating-configuration
description: >-
  The example below is extremely simple and shows how module configuration
  settings can be migrated to Drupal 8 using the config destination plugin. The
  core Dblog module is used as an example. It has only one configuration setting
  that needs to be migrated from Drupal 6 to Drupal 8 configuration objects.
  This migration is defined in
  /core/modules/dblog/migrations/d6_dblog_settings.yml.
published_time: '2017-10-19T19:32:03+00:00'
modified_time: '2021-08-17T04:22:43+00:00'
---
The example below is extremely simple and shows how module configuration settings can be migrated to Drupal 8 using the `config` destination plugin. The core Dblog module is used as an example. It has only one configuration setting that needs to be migrated from Drupal 6 to Drupal 8 configuration objects.

This migration is defined in `/core/modules/dblog/migrations/d6_dblog_settings.yml`.

```php
id: d6_dblog_settings
label: Database logging configuration
migration_tags:
  - Drupal 6
  - Configuration
source:
  plugin: variable
  variables:
    - dblog_row_limit
  source_module: dblog
process:
  row_limit: dblog_row_limit
destination:
  plugin: config
  config_name: dblog.settings
```

Let’s break this into pieces and look at what this migration is doing:

**1\. The migration is defined in `MODULE/migrations` as a YAML file**.

* Contrib and custom modules should place the migration [YAML](http://en.wikipedia.org/wiki/YAML) files in the `MODULE/migrations` directory.
* If you look for examples from other contributed modules, you may notice that the migrations are placed in the `MODULE/migration_templates` directory. This directory still works for backwards compatibility, but the [correct place since Drupal 8.1 is the MODULE/migrations directory](https://www.drupal.org/node/2668742).
* The file name of the YAML file must match the ID of the migration. The ID of the migration is 'd6\_dblog\_settings' in this example, and the name of the YAML file is 'd6\_dblog\_settings.yml'

**2\. The migration has an ID and Label, and it has been tagged as Drupal 6 relevant and as a Configuration migration**.

```php
id: d6_dblog_settings
label: Database logging configuration
migration_tags:
  - Drupal 6
  - Configuration
```

Drupal 6 to Drupal 8 migrations must use migration tag 'Drupal 6' and Drupal 7 to Drupal 8 migration tag 'Drupal 7', respectively.

**3\. Defining the source plugin**.

```php
source:
  plugin: variable
  variables:
    - dblog_row_limit
  source_module: dblog
```

We’re declaring that the ID of the source plugin to be used in this migration is 'variable'. [Drupal 8 Plugin system](https://www.drupal.org/docs/8/api/plugin-api/plugin-api-overview) finds the source plugin class based on this ID. The [Variable](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21source%21Variable.php/class/Variable) plugin class has this ID in the @MigrateSource annotation.

* The Variable source plugin takes two arguments:
* 'variables' is an array of D6 configuration variable names. This simple module had only one configuration variable in Drupal 6.
* 'source\_module' is the machine name of the D6 module.
* This source plugin queries the listed variables from the D6 variables database table. If you want to see how the source plugin does this, see [Variable:query()](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21source%21Variable.php/function/Variable%3A%3Aquery)

**4\. Processing and transformation to Drupal 8**

```php
process:
  row_limit: dblog_row_limit
```

Here we're mapping a D8 destination property `row_limit`from D6 source property `dblog_row_limit`. In this case, both D6 and D8 use the same strings with the same meaning, so we can use this short syntax. Technically, this shorthand form is using the [get process plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Get.php/class/Get), and this is equivalent to the following longhand form:

```php
process:
  row_limit:
    plugin: get
    source: dblog_row_limit
```

**5\. Defining the destination plugin**

```php
destination:
  plugin: config
  config_name: dblog.settings
```

The destination in Drupal 8 is a configuration object. The ID of the destination plugin, which will save the data to Drupal 8 is 'config'. The [Config](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21destination%21Config.php/class/Config) class has this ID @MigrateDestination annotation.

This 'config' destination plugin takes `config_name` as an argument. This is how we indicate which D8 configuration object the data should be saved to. The D8 field `row_limit` we used earlier in the process is a property of this destination object. This is the same configuration object you are using in your module settings form.

**6\. Caching**

The migration caches .yml files. If you already ran a migration and updated or added .yml files, you need to rebuild the Drupal 8 cache. Otherwise, Drupal will ignore the changes in the file system.

If Drupal thinks that a config migration was successful then it won't be attempted again. If you have changed the d6\_dblog\_settings.yml file from the example above, you may have to run `drush sql:query "TRUNCATE migrate_map_d6_dblog_settings"` before repeating the migration again.

**7\. Conclusion**

The Migrate API framework simplifies migrating configuration settings from Drupal 6 / Drupal 7 to Drupal 8\. All we have to do is to define what migration is required with a file in the `MODULE/migrations` directory. The Migrate API provides the majority of the source, process, and destination plugins required, so we typically don’t need to create them ourselves.