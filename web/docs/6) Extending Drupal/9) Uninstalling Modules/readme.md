---
url: https://www.drupal.org/docs/extending-drupal/uninstalling-modules
description: >-
  In order to uninstall the module, be sure that the module is not being used on
  your site so that it does not impact any functionality. You can use either the
  Drush or the Administrative Interface to uninstall modules. Using Drush
  Pre-requisite: Drush should be installed on your machine. To install Drush
  check How to install Drush. Run the following Drush command to uninstall the
  module: drush pm-uninstall module_name Or use the Drush alias: drush pmu
  module_name Next, clear cache using the Drush command: drush cr That's it.
published_time: '2017-01-21T18:20:28+00:00'
modified_time: '2023-01-06T16:57:45+00:00'
---
In order to uninstall the module, be sure that the module is not being used on your site so that it does not impact any functionality.  
You can use either the Drush or the Administrative Interface to uninstall modules.

#### Using Drush

Pre-requisite: Drush should be installed on your machine.  
To install Drush check [How to install Drush.](https://www.drupal.org/node/1791676 "Specific instructions for installing Drush on different platforms | Drupal.org")

Run the following Drush command to uninstall the module:  
`drush pm-uninstall module_name`

Or use the Drush alias:  
`drush pmu module_name`

Next, clear cache using the Drush command:  
`drush cr`

That's it. The uninstalled module will no longer show as checked in the module list and the functionality of the module will have been removed from the site.

#### Using the Administrative Interface

1. In the _Manage_ administrative menu, navigate to _Extend_ \> _Uninstall_ tab `(admin/modules/uninstall) `where you will find the list of enabled modules that are ready to be uninstalled.
2. You can search or filter for the module to be uninstalled by typing the module name in the search field.
3. Check the box/boxes of modules that you want to uninstall.
4. Click the _Uninstall button_ at the bottom of the page.
5. Step 4 will prompt you to confirm the module uninstall request.
6. Click _Uninstall_.
7. Go to the link `manage>configuration>development>performance` click on `clear all cache.`

The functionality of the uninstalled module will now have been removed from the site.

#### **Using composer**

Run `composer remove drupal/module`

References to this module in composer.json and composer.lock should be removed, as well as the folder in the directory path (e.g. in /modules/contrib/)

Verify in /admin/modules/ module had been removed

If for some reason, module folder gets retained in the /modules/contrib directory, you may now safely delete it now, e.g. running `rm -rf module_name` from that directory

Run the usual `update.php`, `drush updb`, `drush cache:rebuild`, etc. to clean-up and flush system

Refer also to <https://www.drupal.org/forum/support/post-installation/2022-03-04/uninstall-modules-that-were-installed-with-composer>