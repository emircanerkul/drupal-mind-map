This is a more detailed version of the [Update Instructions](#update-instructions) directly above this section and assumes[ drush](https://www.drupal.org/project/drush) is installed.

1. Always take a backup of your files and database before updating.  
   * `drush sql:dump` will dump the database.  
   * `drush archive-dump` has unfortunately been removed from Drush 9, so you'll have to use a standard CLI tool to back up the needed directories - typically excluding the vendor directory.
2. Read the [core release notes](https://www.drupal.org/project/drupal/releases "Releases for Drupal core | Drupal.org"). Some contributed modules or themes may need updating to work with a new [minor](https://www.drupal.org/core/release-cycle-overview " major, minor, and patch releases | Drupal.org") version (e.g. 8.3 to 8.4) of Drupal core. Patch releases (e.g. 8.4.4 to 8.4.5) shouldn't require this. To detect the needed module or theme updates, you need to read the project page or release notes.
3. Activate [maintenance mode](https://www.drupal.org/node/2827362/ "11.2. Enabling and Disabling Maintenance Mode | Drupal 8 User Guide guide on Drupal.org") using `drush state:set system.maintenance_mode 1` and then `drush cache:rebuild`.
4. If you determined that some modules or themes need updating, follow [the module update instructions](/docs/8/update/update-modules "Update modules | Drupal 8 guide on Drupal.org").
5. Determine if your Drupal install requires additional steps not included in this set of instructions:  
   * If you started your Drupal site using drupal-composer/drupal-project, please read the [special considerations](https://www.drupal.org/docs/updating-drupal/migrating-the-composer-project-for-drupal-earlier-than-880) section for extra steps you may need to take the first time you update to version 8.8.0 or later  
   * If you did not install Drupal 8 via composer and it is not yet converted to a composer managed project, you'll need to do so by following the [Add Composer to existing sites](https://www.drupal.org/docs/installing-drupal/add-composer-to-an-existing-site) guide.
6. Update Drupal core and all its dependencies:  
   * Run the following Composer command:  
         * If you are using `drupal/core-recommended`:  
         ```php  
         composer update "drupal/core-*" --with-all-dependencies  
         ```  
         * Otherwise run:  
         ```php  
         composer update drupal/core --with-dependencies  
         ```  
   * If you'd like to update to an unstable release, use one of these instead:  
         * For alphas, betas, RCs, etc.: `composer require 'drupal/core-recommended:^8.9' --update-with-all-dependencies`  
         * For a development branch, e.g. 8.9.x: `composer require drupal/core-recommended:8.9.x-dev --update-with-all-dependencies`
7. Next, apply any required database updates using `drush updatedb` and clear the cache using `drush cache:rebuild`
8. If you are using config management to deploy your config, make sure to export the config with `drush config:export` after the database update because some core updates may change the structure of the config files or introduce new values to them. Add the option `--diff` to view actual changes.
9. Check that your Drupal site is ok:  
   * Review the _status report_ page for errors.  
   * If the [Database Logging](https://www.drupal.org/docs/8/core/modules/dblog "Database Logging module | Drupal 8 guide on Drupal.org") module is enabled, perform some basic operations and check the recent logs for errors, warnings, etc.
10. Deactivate maintenance mode using `drush state:set system.maintenance_mode 0` and then `drush cache:rebuild`.
11. After deactivating maintenance mode, test the site also as an anonymous user.
12. If you have separate dev/staging and production servers, ensure the updated composer.json _and_ composer.lock files are on production and always run `composer install --no-dev` on production, rather than `composer update`. The `--no-dev` switch skips the installation of packages not intended for use on production sites.