Drush adds commands such as `drush migrate:status` and `drush migrate:import`. A full list of the migrate-related Drush commands can be found at the bottom of this page. 

If you try `drush migrate:status` without doing anything else you won't see any migrations available to run. That's because the individual migrations have to first be created based on your source database. Since Migrate has no idea what source to use, no migrations have been created yet. 

To generate the migrations you will need the Drush command `drush migrate:upgrade`which is provided by the contributed Migrate Upgrade module.

You most probably want to only generate individual migrations so that you can run them one by one. If this is the case, you need to use the `--configure-only` option.

The `--legacy-db-key` option allows you to use a $databases array, with a matching key, defined in settings.php:

```php
drush migrate:upgrade --legacy-db-key=migrate --legacy-root=https://example.com --configure-only 
```

'<https://example.com>' is the root of your source site. If the legacy site is on the local filesystem, you can use a file path to the Drupal root directory as the value for this option. The value that you supply here will be prepended to the paths of the individual files to locate and import them.

Use `--legacy-db-url` for a remote database:

```php
drush migrate:upgrade --legacy-db-url=mysql://user:password@server/db --legacy-root=https://example.com --configure-only 
```

where

* 'user' is the username of the source database
* 'password' is the source database user's password
* 'server' is the source database server
* 'db' is the source database

If your source site uses a table prefix in the database table names, you will need to add that as an additional argument as follows. In this example, the database prefix is 'drupal\_'

```php
drush migrate:upgrade --legacy-db-url=mysql://user:password@server/db --legacy-db-prefix=drupal_ --legacy-root=https://example.com --configure-only 
```

If you don't use the `--configure-only` option, `drush migrate:upgrade`will first generate and then execute all migrations.

After running `migrate:upgrade` with the `--configure-only` parameter, you run `migrate:status` to see the list of possible migrations:

```php
drush migrate:status 
```

Then you can review and selectively execute these migrations. To perform the migrations individually run the:

```php
drush migrate:import <migration name> 
```

There are several Drupal 6 and Drupal 7 migrations that are _always_ created. If you are upgrading from a Drupal 6 site you will see some Drupal 7 migrations when running some drush commands, such as `drush migrate:status`, and vice versa if you are upgrading from Drupal 7 you will see some Drupal 6 migrations when running some drush command. To avoid seeing those simply use the `--tag=` option on the drush command:

```php
drush migrate:status --tag='Drupal 7'
```

To perform all the migrations in the list, run the:

```php
drush migrate:import --all 
```

To perform only Drupal 7 migrations, run:

```php
drush migrate:import --tag='Drupal 7'
```

Alternatively, if you followed the guide [ Customize migrations when upgrading to Drupal 9 (or later)](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-6-or-drupal-7/customize-migrations-when-upgrading-to-drupal-9-or-later), and created a custom migration module, you can also perform the migration with an additional group annotation:

```php
drush migrate:import --group=your_module --continue-on-failure
```

This way you only migrate the migrations you defined in your custom migration modules `config/install` folder.

The `--continue-on-failure` will additionally prevent your migration from canceling after a failed migration. This way you can do a full migration, check the failed migrations, and implement custom processing for the failed migrations inside your custom module.