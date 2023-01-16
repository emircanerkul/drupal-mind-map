[Drupal 8 or higher sites can be built using Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies). The recommended Composer project doesn't have Drush listed as a dependency, you can install Drush from the command line as follows:

```php
composer require drush/drush
```

This will give you the latest (stable) Drush which should be compatible with a recent Drupal. For more information about this, read the [Drush and Drupal version compatibility matrix](https://www.drush.org/latest/install/#drupal-compatibility). 

To check your version of Drush, use

`drush --version`