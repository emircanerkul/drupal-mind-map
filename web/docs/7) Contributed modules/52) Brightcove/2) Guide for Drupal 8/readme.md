---
url: https://www.drupal.org/docs/contributed-modules/brightcove/guide-for-drupal-8
description: >-
  Installation guide for Brightcove Video Connect 8.x-1.x and 8.x-2.x Download
  the module Install library dependency (PHP-API-Wrapper) The recommended method
  for installing the library dependency is to reference the Brightcove module's
  composer.json inside the extra section of the root composer.json file as
  described in Managing dependencies for a custom project.
published_time: '2017-05-19T08:32:01+00:00'
modified_time: '2021-11-01T13:51:42+00:00'
---
### Installation guide for Brightcove Video Connect 8.x-1.x and 8.x-2.x

1. **Download the module**
2. **Install library dependency (PHP-API-Wrapper)**  
 The recommended method for installing the library dependency is to reference the Brightcove module's composer.json inside the extra section of the root composer.json file as described in [Managing dependencies for a custom project](https://www.drupal.org/node/2822349).  
After adding the brightcove/composer.json path to the merge-plugin section (in the extra section) of the root composer.json, it should look similar to this:  
```php  
        "merge-plugin": {  
            "include": [  
                "core/composer.json",  
                "modules/brightcove/composer.json"  
            ],  
            "recurse": false,  
            "replace": false,  
            "merge-extra": false  
        }  
```  
After the extra section has been modified, run **composer update** on development environments (**composer install** on production environments) in the root folder to install the required libraries. (note: [composer](https://getcomposer.org/) is required)  
For more information, see [Using Composer with Drupal](https://www.drupal.org/node/2404989)  
From this point on, follow the instructions from step no. 4 described in the guide for [version 3.x](https://www.drupal.org/docs/contributed-modules/brightcove/guide-for-drupal-9-0)