* A fresh installation of Drupal with the core modules 'Migrate' and 'Migrate Drupal' enabled. If you're [upgrading using the browser user interface](https://www.drupal.org/docs/8/upgrade/upgrade-using-the-user-interface), you will also need to enable 'Migrate Drupal UI' core module.
* Access to the Drupal 6 or 7 database from the host where your new Drupal site is.
* Access to the source site's files.  
   * If only public files are used, they will be accessible through the site's address.  
   * If private files need to be migrated, the files directory needs to be directly accessible to the new Drupal site and you must configure the Drupal file\_private\_path path in settings.php before running the upgrade.
* If you're [upgrading to Drupal 9 using Drush](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush), you need to download and enable the following contributed modules.  
   * Installation instructions for Drush are included on the page linked above.  
   * [Migrate Upgrade](https://www.drupal.org/project/migrate%5Fupgrade): Provides Drush support for upgrading from Drupal 6 or 7.  
   * [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus): Provides extensions to core migration framework functionality.  
   * For more information on the modules listed above, please refer to the [list of upgrade modules](https://www.drupal.org/docs/8/upgrade/drupal-8-upgrade-modules).  
   * **IMPORTANT**: Pay close attention to the compatibility of the module versions and the version of Drupal core you are using. The module pages of the three modules listed above clearly state which version to use.