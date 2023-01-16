* [Migrate Upgrade](/project/migrate%5Fupgrade): Use this module to use migrations as a configuration. This is a common practice but is not required by Drupal core.
* [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus): Provides extensions to core migration framework functionality, required by [Migrate Upgrade](/project/migrate%5Fupgrade).

 You can download the two modules as follows:

```php
composer require drupal/migrate_upgrade drupal/migrate_plus
```

Enable the modules:

```php
drush install migrate migrate_drupal migrate_upgrade migrate_plus
```

Note: Since Drush 10.4, most [Migrate Tools](/project/migrate%5Ftools) commands [are included in Drush](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118), except for the `migrate:tree` command which shows a tree of migration dependencies, which you can get by installing the module. The code-base that made its way into Drush was from an earlier and simpler fork of the [Migrate Tools](/project/migrate%5Ftools) code. For example, Drush does not support migrate plus config entities or provide a progress bar. Over time, the Drush team continues to add features and some of this might become incorporated upstream.

**IMPORTANT:** Pay close attention to selecting the correct version for each of the three contributed modules. Please refer to the project page for selecting a version compatible with your version of Drupal core.

For more information on the different upgrade modules, please refer to the [list of upgrade modules](https://www.drupal.org/docs/8/upgrade/drupal-8-upgrade-modules).