[List of process plugins provided by the core Migrate module](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-core-process-plugins).

Alternatively, you can use drupal console to get a list:

```php
 drupal debug:plugin migrate.process

```

Alternatively, you can use drush to get a list:

```php
$ drush ev "print_r(\Drupal::service('plugin.manager.migrate.process')->getDefinitions());"

```

Or to get a list of just the keys of the migrate process plugins:

```php
$ drush ev "print_r(array_keys(\Drupal::service('plugin.manager.migrate.process')->getDefinitions()));"

```