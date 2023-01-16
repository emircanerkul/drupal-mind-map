---
url: >-
  https://www.drupal.org/docs/configuration-management/workflow-using-the-drupal-ui
description: >-
  Here is a simple example to demonstrate how the site name can be configured in
  one environment and deployed in another environment. This example involves
  downloading and uploading configuration tar.gz files manually, but keeping
  your site's sync directory under version control and synchronizing that way is
  also an option. Install a supported version of Drupal 9 or higher. We will
  call this site "Production." Make a copy of it at a different URL – this will
  be "Development". Make the copy by using the same source code, the files
  directory and a database dump of the production site.
published_time: '2015-01-29T15:35:21+00:00'
modified_time: '2021-12-16T03:57:32+00:00'
---
Here is a simple example to demonstrate how the site name can be configured in one environment and deployed in another environment. This example involves downloading and uploading configuration tar.gz files manually, but keeping your site's [sync directory](https://www.drupal.org/node/2431247/ "Changing the storage location of the sync directory | Drupal 8 guide on Drupal.org") under version control and synchronizing that way is also an option.

1. Install a supported version of Drupal 9 or higher. We will call this site "Production."
2. Make a copy of it at a different URL – this will be "Development". Make the copy by using the same source code, the files directory and a database dump of the production site. Remember the configuration system is for synchronizing settings **between copies of the same site** \- that means matching UUIDs - you should always make a full copy of the site and database first (but you don't have to do it before you start adding content to your site.) In Drupal 7 you would have only needed the database dump and uploaded files, in Drupal 8 or higher, other parts of the file directory are relevant, including the configuration and PHP files.  
 Upon completion of [#1613424: \[META\] Allow a site to be installed from existing configuration](https://www.drupal.org/project/drupal/issues/1613424 "Status: Closed (fixed)"), it will be possible to install a fresh site from an existing configuration, so copying the site will be as easy as installing a new site with the configuration exported. Until that issue is fixed, you will need a full copy of the site.
3. After copying, edit settings.php file on the new (Development) copy and adjust the MySQL details in `$databases`.
4. Check your file/directory ownership and permissions too (Drupal might complain your sync directory is not writeable).
5. Clear/rebuild the cache.
6. Now let's simulate a configuration change. On the Development site, go to Basic Site settings - `admin/config/system/site-information` and change the Site name.
7. Export the full Development site configuration at `admin/config/development/configuration/full/export`. This will create a compressed file named _config-site-domain-name-2017-01-10-15-38.tar.gz_
8. On the Production site, navigate to `admin/config/development/configuration/full/import` and upload the compressed file.
9. Once the file has been transferred you'll be redirected to the Sync tab. Here you can see a list of YAML files that will be changed, added or removed - clicking View Differences will present a detailed diff view of the Active (current setting) and Staged (to be imported) data.  
![View differences modal window](https://www.drupal.org/files/configuration-system-view-differences-modal-v2.png)
10. Click **Import all** to import the configuration changes. You should see a message that the configuration was imported successfully and there will be a message in the table saying:  
"There are no configuration changes to import".

Now your site name has changed on production too. Although theoretically you should make all changes on development and deploy to production, sometimes changes on Live directly may be necessary, or more commonly may have been made by your users (in addition to user roles and permissions, you can prevent _any_ configuration changes by _anyone_ with the [Configuration Read-only mode](https://www.drupal.org/project/config%5Freadonly "Configuration Read-only mode | Drupal.org") Module).

If you go to /admin/config/development/configuration, Drupal will warn you what has been changed with the message:

> The following items in your active configuration have changes since the last import that may be lost on the next import.

To export these changes from production to development:

1. Export the full production site configuration at `admin/config/development/configuration/full/export`. This will create another tar.gz file.
2. On the development site, navigate to `admin/config/development/configuration/full/import` and upload the file you just downloaded. Review the changes and click **Import all**

You can continue making further changes in development and export to production when you're happy with them.

If you have a complex, interactive site with a reasonable level of traffic, consider turning on maintenance mode on your production environment when importing a full set of configuration files, to avoid the config changes conflicting with anything users may be doing at the time. It also gives you a chance to browse as an admin user and double-check the updated site is working OK before you put it live again.