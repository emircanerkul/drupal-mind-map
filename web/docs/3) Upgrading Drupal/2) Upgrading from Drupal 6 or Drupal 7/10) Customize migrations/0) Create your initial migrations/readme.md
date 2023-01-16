* Create the migrations using `drush migrate:upgrade --configure-only` as discussed in [Upgrade Using Drush](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush)
* Make sure you have a `config/sync` directory, to which the next step will write
* Export the migrations using `drush config:export`
* Create your custom migration module
* Copy only the YML files you want to use from the `config/sync` directory into the `config/install` directory of your new custom module, editing them to remove the `uuid` values and to edit the id, group, label, and other values as needed
* Copy the group file the `migrate_plus.migration_group.migrate_drupal_7.yml` from `config/sync` to the `config/install` directory of your new custom module, naming it `migrate_plus.migration_group.your_module.yml`. You will need the group file as it contains the database settings.