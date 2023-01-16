---
url: >-
  https://www.drupal.org/docs/configuration-management/file-system-based-workflow
description: >-
  Please note that Drupal by default keeps configuration management information
  in the database. For the file system based workflow to work, you will need to
  modify your settings.php and services.yml files. You should do this before
  installing Drupal, as it is complex to revert back to the database-based
  configuration management setup once you switch to file-based. If you need to
  enable configuration in files after the site installation, you must export
  your configuration first, and store a copy in the active configuration folder
  before enabling file-based configuration.
published_time: '2015-01-29T15:47:01+00:00'
modified_time: '2019-12-23T13:42:46+00:00'
---
Please note that Drupal by default keeps configuration management information in the database. For the file system based workflow to work, you will need to modify your settings.php and services.yml files.

**You should do this before installing Drupal, as it is complex to revert back to the database-based configuration management setup once you switch to file-based**. If you need to enable configuration in files after the site installation, you must export your configuration first, and store a copy in the active configuration folder before enabling file-based configuration.

**Note**: you must have different active and staging directories (as per the config below) - the config import step is still required for a file-based workflow. See [this issue](https://www.drupal.org/node/2862635) \- file system based workflow does not correctly install/uninstall modules without the config import step.

1. Open your settings.php file, find the section "Active configuration settings".
2. Uncomment the line starting with `$settings['bootstrap_config_storage']` to enable file-based configuration storage.  
 And please check that the row is corrected:  
```php  
$settings['bootstrap_config_storage'] = array('Drupal\Core\Config\BootstrapConfigStorageFactory::class', 'getFileStorage');  
```
3. Add the following code to settings.php (modified from <https://www.drupal.org/node/2291587#comment-10426135>):  
```php  
$config_directories[CONFIG_ACTIVE_DIRECTORY] = 'PATH_OUTSIDE_WEB_ROOT/config/active/';  
$config_directories[CONFIG_STAGING_DIRECTORY] = 'PATH_OUTSIDE_WEB_ROOT/config/staging/';  
```  
Save the file.
4. Open the services.yml file in sites/default and add the following code (code taken from <https://www.drupal.org/node/2291587#comment-10567238>):  
```php  
services:  
  config.storage:  
    class: Drupal\Core\Config\CachedStorage  
    arguments: ['@config.storage.active', '@cache.config']  
  config.storage.active:  
    class: Drupal\Core\Config\FileStorage  
    factory: Drupal\Core\Config\FileStorageFactory::getActive  
```
5. Copy the configuration (.yml) files from the origin website's `active` folder to the origin website's `staging` folder.
6. Use a tool (rsync, git, ftp, scp) to copy the content of the origin's `staging` folder to the destination's `staging` folder
7. In the destination website visit admin/config/development/configuration
8. Click import all