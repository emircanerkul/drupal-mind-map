---
url: >-
  https://www.drupal.org/docs/updating-drupal/updating-modules-and-themes-using-composer
description: >-
  The recommended way to install and update a Drupal 8 site is using Composer.
  People who are used to upgrading module with Drush should notice that in Drush
  9 and Drush 10 (the current version) all the up commands pm-update,
  pm-updatecode and pm-updatestatus are deprecated. You have to use the
  corresponding Composer commands instead. To update core, all outdated modules
  and theme, update the db, clear the cache: composer update "drupal/*"
  --with-all-dependencies drush updatedb drush cache:rebuild To update specific
  module or update things one at the time, see below.
published_time: '2017-11-02T20:47:31+00:00'
modified_time: '2022-07-12T09:45:24+00:00'
---
The recommended way to install and update a Drupal 8 site is using Composer.

People who are used to upgrading module with Drush should notice that in Drush 9 and Drush 10 (the current version) all the `up` commands `pm-update`, `pm-updatecode` and `pm-updatestatus` are deprecated. You have to use the corresponding Composer commands instead.

To update core, all outdated modules and theme, update the db, clear the cache:

```php
composer update "drupal/*" --with-all-dependencies
drush updatedb
drush cache:rebuild
```

To update specific module or update things one at the time, see below.