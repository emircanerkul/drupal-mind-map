* If you are using an obsolete module on your website, it is important to plan for its replacement or removal as soon as possible.
* The Upgrade Status module can provide recommendations for alternative modules.
* Be sure to test the replacement module thoroughly to ensure that it works properly with your website and does not cause any issues.

Obsolete Modules:

* **Migrate Drupal Multilingual**  
 This module's functionality is now provided by the Migrate Drupal module instead. Migrate Drupal Multilingual has been an obsolete, empty stub since before Drupal 9.0.0\. You can safely uninstall this module without any change to functionality.
* **Entity Reference**  
 The functionality of this module was moved to a Drupal core subsystem before Drupal 8.0.0, and the module has been an obsolete, empty stub since before Drupal 9.0.0\. You can safely uninstall this module without any change to functionality.
* **SimpleTest**  
 SimpleTest has been removed from core. You should [convert your remaining SimpleTest cases to PHPUnit](https://www.drupal.org/docs/automated-testing/converting-simpletests-to-phpunit-tests). You can add a dependency on the [contributed SimpleTest module](https://www.drupal.org/project/simpletest) in order to continue running your tests while that conversion is taking place.