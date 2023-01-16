This assumes that migration is done through a custom module via workflow <https://cgit.drupalcode.org/migrate%5Fplus/tree/migrate%5Fexample>  
An example migration definition is [https://cgit.drupalcode.org/migrate\_plus/tree/migrate\_example/config/ins...](https://cgit.drupalcode.org/migrate%5Fplus/tree/migrate%5Fexample/config/install/migrate%5Fplus.migration.beer%5Fnode.yml)

```php
drush en migrate_example -y
drush ms

```

Given a migration\_id load its migration object and check messages why it failed to initialize.

```php
$ drush php
Psy Shell v0.8.11 (PHP 7.1.11-1+ubuntu16.04.1+deb.sury.org+1 — cli) by Justin Hileman
>>> $migration_id = 'beer_node';
>>> $manager = \Drupal::service('plugin.manager.migration');
>>> $plugins = $manager->createInstances([]);
>>> $migration = $plugins[$migration_id];
=> Drupal\migrate\Plugin\Migration {#11436
     +"class": "Drupal\migrate\Plugin\Migration",
     +"uuid": "2ce3ab55-bf95-4759-a2ee-630e5984f211",
     +"langcode": "en",
     +"status": true,
     +"_core": [
       "default_config_hash" => "B7O2KKDymRasREDBdEEavpADUN2SRyCkWY2ldOca2Xo",
     ],
     +"field_plugin_method": null,
     +"cck_plugin_method": null,
     +"migration_group": "beer",
   }
>>> $migration->getSourcePlugin()->checkRequirements();
Drupal\Component\Plugin\Exception\PluginNotFoundException with message 'The "beer_node" plugin does not exist.'

```

Other checks that shows a migration error.

```php
>>> $map = $migration->getIdMap();
>>> $imported = $map->importedCount();
Drupal\Core\Database\ConnectionNotDefinedException with message 'The specified database connection is not defined: aa'

```

Debugging migration definition

```php
$ drush php
Psy Shell v0.8.11 (PHP 7.1.11-1+ubuntu16.04.1+deb.sury.org+1 — cli) by Justin Hileman
>>> $migration_id = 'beer_node';
>>> $manager = \Drupal::service('plugin.manager.migration');
>>> $plugins = $manager->createInstances([]);
>>> $migration = $plugins[$migration_id];
>>> $migration->getPluginDefinition();

```