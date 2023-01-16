In addition to updating Drupal core and its modules, you may need to install updates for your Kickstart distribution. Follow these steps to update your Apigee Kickstart developer portal [using Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies):

1. Create a backup of your site.
2. Confirm that you are using the latest version of Composer:  
`composer self-update`
3. Navigate to the root of your site:  
`cd /path/to/MY_PROJECT/`
4. Run the following command to update Drupal core, where:  
   * **\--with-dependencies** updates all project dependencies  
   * **\--optimize-autoloader** (optional) speeds up performance  
`composer update --with-dependencies --optimize-autoloader`
5. Update databases:  
`./vendor/bin/drush updb`
6. Clear Drupal cache:  
`./vendor/bin/drush cr`
7. Validate the update in your developer portal.  
   * Navigate to your developer portal in the browser and confirm that the home page is available.  
   * Try creating an app in your portal to confirm that the dependencies have updated successfully.