Drupal 9 (or later) significantly changed the way content and configuration is stored in the database. Because of this, an update can't simply be applied to an existing Drupal 6/7 site. Instead, the content and configuration data from the Drupal 6/7 site must be **migrated** to a **new** Drupal 9 (or later) site. This is done using the Migrate and Migrate Drupal modules provided by Drupal core in Drupal 8 and above, and then upgrading either [in a web browser](https://www.drupal.org/docs/upgrading-drupal/upgrade-using-web-browser) or by [using Drush](https://www.drupal.org/docs/upgrading-drupal/upgrade-using-drush).

Drupal core provides an upgrade path for all modules that were in Drupal 6 core and Drupal 7 core.

![Upgrading from Drupal 6 / 7 to Drupal 8](https://www.drupal.org/files/d6-d7-to-d8-upgrade.PNG)

**Examples of configuration migration**: Content types, field definitions, and user roles are _configuration_ entities which can be migrated to Drupal 9 (or later). 

**Examples of content migration**: Nodes, users, and taxonomy terms are examples of _content_ entities which can be migrated to Drupal 9 (or later).