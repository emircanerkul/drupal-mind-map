There are a few ways to tell if a module has Composer dependencies:

* It documents the facts on its project page or in its README or INSTALL files.
* Its root directory contains a `composer.json` file.
* Once [#2494073: Prevent modules which have unmet Composer dependencies from being installed](https://www.drupal.org/project/drupal/issues/2494073 "Status: Needs work") is fixed, Drupal core will notify you of such modules automatically.