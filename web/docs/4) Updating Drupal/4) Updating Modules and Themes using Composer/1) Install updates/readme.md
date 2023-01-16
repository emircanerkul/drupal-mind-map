For a minor-version update to a given Drupal module/project, simply use the following:

```php
composer update drupal/modulename --with-all-dependencies
```

To preview the update, and show you what would happen, without actually changing anything, add `--dry-run`.

For a major-version upgrade (such as 1.x to 2.x), `update` alone isn't enough: you must instead `require` the new major version explicitly. Since major versions often introduce major changes, this would be an excellent time to visit the module/project to inspect its documentation and issue queue. Once you're confident that the upgrade is fully compatible with your site, use the following, substituting the new major version number as needed:

```php
composer require drupal/modulename:^2.0
```

Finally, run any database updates, rebuild the cache and export the potentially changed configurations, reviewing the changes via `--diff`:

```php
drush updatedb
drush cache:rebuild
drush config:export --diff
```