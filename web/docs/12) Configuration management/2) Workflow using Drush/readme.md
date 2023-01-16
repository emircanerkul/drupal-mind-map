---
url: https://www.drupal.org/docs/configuration-management/workflow-using-drush
description: >-
  This page assumes you are familiar with using Drush, and that you have the
  latest version. The following example shows how to export changes from
  development to production sites. The reverse is also possible. If you don't
  have the environments already set up you should first create at least a Live
  and a Development environment: Install a supported version of Drupal 9 or
  higher. We will call this site "Live." Make a copy of this site (We'll call
  this "Development"). Make the copy by using the same source code, the files
  directory and a database dump of the Live site imported on Development.
published_time: '2015-01-29T16:14:04+00:00'
modified_time: '2021-12-16T03:59:20+00:00'
---
This page assumes you are familiar with using [Drush](https://github.com/drush-ops/drush/ "drush-ops/drush: Drush is a command-line shell and scripting interface for Drupal, a veritable Swiss Army knife designed to make life easier for those who spend their working hours hacking away at the command prompt."), and that you have the latest version.

The following example shows how to export changes from development to production sites. The reverse is also possible.

If you don't have the environments already set up you should first create at least a Live and a Development environment:

* Install a supported version of Drupal 9 or higher. We will call this site "Live."
* Make a copy of this site (We'll call this "Development"). Make the copy by using the same source code, the files directory and a database dump of the Live site imported on Development. It is also possible now to install a fresh site from existing configuration, so copying the site is as easy as installing a new site with the configuration exported (see [#1613424: \[META\] Allow a site to be installed from existing configuration](https://www.drupal.org/project/drupal/issues/1613424 "Status: Closed (fixed)")) and you won't need a full copy of the site.
* On the Development site, change the site name in **`admin/config/system/site-information`** to differentiate them.

The workflow to move the configurations from development to live with drush will be as follows:

1. Run **`drush config:export`** in your Development site (older versions of Drush may use **`drush config-export`** instead) or just use the alias **`drush cex`** for short and it will work on all drush versions. This exports the configuration to your sync directory. The current contents of your export directory (called "sync" by default) will be deleted.
2. Copy the content of the Development sync folder to the Live site's sync folder with a tool like rsync, Git, FTP or SCP.
3. Run **`drush config:import`** in your Live site (older versions of Drush may use **`drush config-import`** instead) or use the alias `drush cim`.
4. Drush will display the available configuration changes and prompt you with "Import the listed configuration changes? (y/n): ". Type "y" to confirm.

You may want to [change the location of the sync directory](https://www.drupal.org/docs/8/configuration-management/changing-the-storage-location-of-the-sync-directory "Changing the storage location of the sync directory | Drupal 8 guide on Drupal.org").