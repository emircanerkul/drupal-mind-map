---
url: >-
  https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-6-or-drupal-7/customize-migrations
description: >-
  Create your initial migrations Create the migrations using drush
  migrate:upgrade --configure-only as discussed in Upgrade Using Drush Make sure
  you have a config/sync directory, to which the next step will write Export the
  migrations using drush config:export Create your custom migration module Copy
  only the YML files you want to use from the config/sync directory into the
  config/install directory of your new custom module, editing them to remove the
  uuid values and to edit the id, group, label, and other values as needed Copy
  the group file the migrate_plus.migration_group.migrate_drupal_7.ym
published_time: '2017-10-21T21:15:54+00:00'
modified_time: '2022-11-28T06:08:22+00:00'
---
