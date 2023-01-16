For a full site scan of all projects on a site, [Upgrade Status](https://www.drupal.org/project/upgrade%5Fstatus) provides a complete solution. It wraps the internals of `drupal-check` and runs scanning on custom and drupal.org contributed projects on your site. You can use this report to assess the overall major version compatibility of your site. Additional features on top of drupal-check include:

* Per project scanning. Stored results and multi-result export.
* Problem categorization based on deprecation version number.
* Deprecate Twig syntax is detected.
* Deprecated Drupal library use and extension of deprecated libraries is detected.
* Missing core\_version\_requirement keys are noted for all scanned projects.

Upgrade Status also comes with Drush support if you prefer the command line.

![Upgrade Status Drupal 8 module UI](https://www.drupal.org/files/UpgradeStatus8to9UI.png)