---
url: https://www.drupal.org/docs/creating-custom-modules/add-a-composerjson-file
description: >-
  When developing custom modules there are several scenarios that require the
  developer to add a composer.json file to their module. Some of these scenarios
  depend upon whether the custom module is intended to be contributed back to
  the community as a project on drupal.org. Here are some reasons for creating a
  composer.json file: A module that uses a PHP library that is hosted on
  packagist.org, or that depends on other contributed modules from drupal.org,
  should have a composer.json file so that people downloading the module using
  Composer will automatically also install the dependencies.
published_time: '2015-06-30T12:37:50+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
When developing custom modules there are several scenarios that require the developer to add a composer.json file to their module. Some of these scenarios depend upon whether the custom module is intended to be contributed back to the community as a project on drupal.org. Here are some reasons for creating a composer.json file:

* A module that uses a PHP library that is hosted on packagist.org, or that depends on other contributed modules from drupal.org, should have a composer.json file so that people downloading the module using Composer will automatically also install the dependencies.
* A contributed module that depends on other modules/packages and has [automated tests](http://docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/maintainership/automated) that run on the DrupalCI environment must have a composer.json that expresses the dependencies. Tests of merge requests on the module will fail without a composer.json file, as will tests of patches that change the dependencies.
* If a module developer wishes to use the more expressive constraints provided by composer.json, such as the caret or tilde operators, those are only possible in composer.json. See [Managing dependencies for a custom project](https://www.drupal.org/docs/develop/using-composer/managing-dependencies-for-a-custom-project) for details. Note, however, that Drupal itself will not be bound by those constraints -- they will only be enforced when Composer is used to download and update code.
* If a module does not have any dependencies, or the dependencies are solely other Drupal modules, then a composer.json is **not required**. However, having a composer.json does not have a negative impact either.

Regardless of whether or not a developer has a composer.json file, their Drupal module dependencies must still be expressed in their `.info.yml`files so that Drupal can ensure that the correct modules are **enabled**.