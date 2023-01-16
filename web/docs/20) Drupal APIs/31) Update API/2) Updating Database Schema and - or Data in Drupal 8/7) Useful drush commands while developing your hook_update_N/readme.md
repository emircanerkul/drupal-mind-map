Checking the current schema version of a module

```php
drush php-eval "echo drupal_get_installed_schema_version('my_module');"

```

Manually setting the current schema version of a module

```php
drush php-eval "echo drupal_set_installed_schema_version('my_module', '8000');"

```