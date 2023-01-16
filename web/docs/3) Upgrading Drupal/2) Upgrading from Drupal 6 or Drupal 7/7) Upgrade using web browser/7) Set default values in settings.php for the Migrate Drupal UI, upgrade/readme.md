When using the UI you must enter the database credentials for the source database and, if you are migrating files, the path to the public and private files.

These values can be set in settings.php so they do not need to be re-entered every time you perform an upgrade.

```php
$settings['migrate_source_connection'] = '';
$settings['migrate_source_version'] = '';
$settings['migrate_file_public_path'] = '';
$settings['migrate_file_private_path'] = '';
```

where

* migrate\_source\_version - The version of the source database. This can be '6' or '7'. Defaults to '7'.
* migrate\_source\_connection - The key in the $databases array for the source site database.
* migrate\_file\_public\_path - The location of the source Drupal 6 or Drupal 7 public files. This can be a local file directory containing the source Drupal 6 or Drupal 7 site (e.g /var/www/docroot), or the site address (e.g <http://example.com>).
* migrate\_file\_private\_path - The location of the source Drupal 7 private files. This can be a local file directory containing the source Drupal 7 site (e.g /var/www/docroot), or empty to use the same value as Public files directory.

See change log record [Set default values in settings.php for the Migrate Drupal UI, /upgrade](https://www.drupal.org/node/3187621).