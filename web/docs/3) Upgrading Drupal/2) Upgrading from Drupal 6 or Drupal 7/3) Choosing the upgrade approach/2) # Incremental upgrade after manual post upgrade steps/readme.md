Depending on the amount and complexity of the manual post upgrade steps, it might not be feasible to keep the old site offline when the manual post upgrade steps are being executed on the new Drupal site. If the old site is online when the manual post upgrade steps are being done on the new Drupal site, it is possible that the users are creating or updating content on the old site.

Drupal supports _incremental upgrades_. This means that the migrations are executed again in order to migrate new and updated content. It is not recommended to change the configuration of the old source site between the initial upgrade and incremental migration.

![Incremental upgrade approach](https://www.drupal.org/files/incremental-upgrade.PNG)

This approach can be applied by 

* [Upgrading using web browser](https://www.drupal.org/docs/8/upgrade/upgrade-using-web-browser)
* [Upgrading using Drush](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush)