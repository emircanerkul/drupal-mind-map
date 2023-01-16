---
url: >-
  https://www.drupal.org/docs/configuration-management/changing-the-storage-location-of-the-sync-directory
description: >-
  By default, Drupal places the configuration sync directory within the site's
  files directory, using a hash as part of the directory name, thus
  sites/default/files/config_HASH. The HASH is a pretty long string of random
  characters. This makes configuration more difficult (but not impossible) to be
  accessed over the web. The sync directory location can be changed after
  installation. On production sites, and if your account has permission to do
  so, it's a good idea to move the configuration sync directory outside of the
  webroot entirely.
published_time: '2015-02-22T10:29:29+00:00'
modified_time: '2022-06-09T06:06:12+00:00'
---
By default, Drupal places the configuration sync directory within the site's files directory, using a hash as part of the directory name, thus `sites/default/files/config_HASH`. The `HASH` is a pretty long string of random characters. This makes configuration more difficult (but not impossible) to be accessed over the web. The sync directory location can be changed after installation.

On production sites, and if your account has permission to do so, it's a good idea to move the configuration sync directory outside of the webroot entirely. As your sync directory should be under version control, this means having your version control repository's root be one level higher than your webroot.

On local development sites, you may want to be able to access the config files more easily, and so move the directory to something like `sites/default/sync`.

To move the directory, open up your settings.php file. At the end of the file, Drupal's installation process will have written a line specifying the location of the sync directory within `sites/default/files/config_HASH`.

Failure to have a sync directory can result in the following message in your PHP error log:  
`Uncaught PHP Exception Exception: "The configuration directory type 'sync' does not exist"`

If you want to move this folder, let's say to `sites/default/sync`, you need to update **$settings** variable like this:  
`$settings['config_sync_directory'] = 'sites/default/sync';`

If you want to move the folder outside of your webroot, you can use something like  
`$settings['config_sync_directory'] = '../config/sync';`  
where the config directory has the same parent directory as your webroot, and the sync directory exists within the config directory.

That's it! Now whether using the [Configuration Management UI](https://www.drupal.org/node/2416545 "Workflow using the Drupal UI | Drupal 8 guide on Drupal.org") or [Drush based workflow](https://www.drupal.org/node/2416591 "Workflow using Drush | Drupal 8 guide on Drupal.org"), the correct directory is being used.