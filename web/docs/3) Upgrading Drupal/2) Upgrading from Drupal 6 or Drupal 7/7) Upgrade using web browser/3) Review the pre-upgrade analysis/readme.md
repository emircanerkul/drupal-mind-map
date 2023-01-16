If the database credentials to your source database are correct, the upgrade review page will appear as illustrated in the screenshot below. This page shows a summary of the upgrade status for all installed modules on the old site.

![Drupal 8 upgrade review](https://www.drupal.org/files/d8-upgrade-status-review-2.PNG)  

As a site builder you should carefully review the modules that will not be upgraded. For each module, evaluate if your new Drupal site will work without the module. The list includes modules that are installed on the old site but not on the new site and modules that do not provide an upgrade path.

Let's use some of the modules shown in the screenshot above as examples. 

* [Addressfield](https://www.drupal.org/project/addressfield) provides a field type for storing address data.  
   * If you would proceed with the upgrade, the nodes that had addresses on your source site would be migrated to the new Drupal without addresses which would most probably not be the desired outcome.  
   * This issue can be resolved by installing and enabling the Drupal [Address](https://www.drupal.org/project/address) module.  
   * In other words, you would not proceed and perform the actual upgrade but you would first install the missing Drupal module and then start the upgrade process again. You would then see that the Addressfield is included in the list of modules that will be upgraded.
* Color is a Drupal 7 core module that allows to easily change the color scheme of compatible themes.  
   * When the screenshot was made there was no upgrade path for migrating the configuration settings of the Color module from Drupal 7 to Drupal 9 or higher..  
   * However, you can manually set the configuration settings on your new Drupal site after the upgrade.  
   * It was safe to proceed with the upgrade and make a note that the configuration settings of the Drupal 7 module will not be automatically migrated.
* [Views](https://www.drupal.org/project/views) allows you to create different kinds of lists of your site content.  
   * Even if you have Views enabled on the new Drupal site it will appear as 'Not upgraded'. This is because there is no automatic upgrade mechanism that would migrate your Views configurations from Drupal 6 / 7 to Drupal 9 or higher.  
   * It is safe to proceed with the upgrade but you will need to manually create the views on your new Drupal site after you have executed the upgrade.

The list of modules that will be upgraded is collapsed by default. When you open the list, you can review what will end up where on the new site. For example, this shows that the block module from the source site is migrated to two modules on the new Drupal site. There is absolutely nothing to do about these, the list is purely informational.

![Drupal 8 upgrade review - modules that will be upgraded](https://www.drupal.org/files/d8-upgrade-module-status-review-2.PNG)