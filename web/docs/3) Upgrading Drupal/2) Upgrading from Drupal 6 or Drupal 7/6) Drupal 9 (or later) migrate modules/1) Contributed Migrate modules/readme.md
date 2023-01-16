### [Migrate Upgrade](https://www.drupal.org/project/migrate%5Fupgrade)

* Provides the `migrate:upgrade` a Drush command for generating the migrations from a Drupal source site.
* See [Upgrade using Drush](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush).

### [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus)

* Provides APIs for grouping migrations as well as a facility to manipulate incoming source data in migrations as well as code examples to build custom migrations. Required by Migrate Upgrade.

### [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools)

* Since Drush 10.4, most [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) commands such as `migrate:status`, `migrate:import`, and `migrate:stop` are [are included in Drush](https://gitlab.com/drupalspoons/migrate%5Ftools/-/issues/118), except for the `migrate:tree` command which shows a tree of migration dependencies, which you can get by installing the module. The code-base that made its way into Drush was from an earlier and simpler fork of the [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) code. For example, Drush does not support migrate plus config entities or provide a progress bar. Over time, the Drush team continues to add features and some of this might become incorporated upstream.
* See [Upgrade using Drush](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush).

### [Migrate Manifest](https://www.drupal.org/project/migrate%5Fmanifest)

* Provides a Drush command for running template-based migrations using a manifest format.

### [WordPress Migrate](https://www.drupal.org/project/wordpress%5Fmigrate)

* Can work with WordPress blog exports (WXR formats) and Drush to mass migrate from WordPress to Drupal 7 or Drupal 9 or later.
* [Original documentation](https://www.drupal.org/node/1593370). [Drupal 7 guide](https://www.drupal.org/docs/7/migrating-to-drupal/migrating-from-wordpress). Docs planned to move [here](https://www.drupal.org/docs/8/modules/wordpress-migrate) eventually.

### [Migration Tools](https://www.drupal.org/project/migration%5Ftools)

* Adds classes and methods that help simplify a number of migration tasks including parsing source HTML, processing strings, extracting selected source content, debugging and troubleshooting, and more.
* See: [DrupalCon Seattle 2019 - Migrating terrible static content into Drupal 8](https://events.drupal.org/seattle2019/sessions/migrating-terrible-static-content-drupal-8)

### [Migrate File Entities to Media Entities](https://www.drupal.org/project/migrate%5Ffile%5Fto%5Fmedia)

* Allows migration of Drupal 7 Files entities to Media Entities

### [Migrate Scanner](https://www.drupal.org/project/migrate%5Fscanner)

* Provides a recursive directory scanner for migrations files, which helps to organize migrations into sub-directories.

### [Location Migration](https://www.drupal.org/project/location%5Fmigration)

* Migrates data from the [Location](https://www.drupal.org/project/location) module on Drupal 7 to the [Address](https://www.drupal.org/project/address) and [Geolocation](https://www.drupal.org/project/geolocation) modules.

### [Migrate: Exclude Entities](https://www.drupal.org/project/migrate%5Fexclude%5Fentities)

* Provides a simple mechanism, using settings.php changes, to block specific entity types from being migrated during a core upgrade using either Migrate Drupal or Migrate Upgrade.

### [Migrate: Skip on 404](https://www.drupal.org/project/migrate%5Fskip%5Fon%5F404)

* Allows core migrations, using either Migrate Drupal or Migrate Upgrade, to stop the normal file migration from failing if it comes across a file that cannot be located.

### [Migrate: URL2Link](https://www.drupal.org/project/migrate%5Furl2link)

* Provides a migration path for the [URL](https://www.drupal.org/project/url) module on Drupal 7 to the Link module in Drupal 8 & 9.

### [Migrate: Views](https://www.drupal.org/project/views%5Fmigration)

* Provides a migration path for the [Views (for Drupal 7)](https://www.drupal.org/project/views) module on Drupal 7 to the Core module - Views in Drupal 9.