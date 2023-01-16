If migration fails, you might get the following error while trying to rerun the migration: 

```php
 Migration MIGRATION_NAME is busy with another operation: Importing
```

Run the following command to break the migration lock if [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) or [Migrate Run](https://www.drupal.org/project/migrate%5Frun) are installed:

```php
$ drush migrate:reset-status MIGRATION_NAME       # or drush mrs MIGRATION_NAME

```

If Migrate Tools or Migrate Run are _not_ installed, use:

```php
$ drush php-eval "var_dump(Drupal::keyValue('migrate_status')->set('MIGRATION_NAME', 0));"
NULL
```

If you are getting the following error while trying to run command above:

```php
\Drupal::$container is not initialized yet. \Drupal::setContainer() must be called with a real container.
```

you are probably running multisite website so don't forget to specify the website.