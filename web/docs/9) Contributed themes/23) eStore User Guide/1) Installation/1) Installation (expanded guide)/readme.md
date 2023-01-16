1. Install the latest version of the [Drupal 8](https://www.drupal.org/project/drupal) via composer:  
```php  
composer create-project drupal/drupal drupal_dir (old, do not use)  
composer create-project drupal/recommended-project my_site_name_dir (recommended)  
```
2. Download the eStore Theme and his dependencies:  
```php  
composer require 'drupal/estore'  
```
3. Enable both the required and/or the recommended modules, [you use this guide for drush](https://www.drupal.org/docs/8/extending-drupal-8/installing-modules-from-the-command-line) installation or you can install them manually from the Drupal administration UI on the path "/admin/modules":  
```php  
drush en \  
views_bootstrap \  
commerce \  
commerce_wishlist \  
pathauto \  
block_class \  
fontawesome \  
panels \  
page_manager \  
-y  
```
4. [Download](https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip) the Bootstrap library and extract it into the "/libraries/bootstrap" folder.
5. Download and install the [Stacktable.js](http://johnpolacek.github.io/stacktable.js/): [download](https://github.com/johnpolacek/stacktable.js/zipball/master/) Stacktable.js and extract int into the "/libraries/stacktable.js" folder.
6. Install and set as default the [eStore theme](https://www.drupal.org/project/estore) on the path "/admin/appearance"
7. Enable the homepage. Go to the Modules list page (/admin/modules) and enable the "eStore homepage feature" this module will provide a homepage (/home).
8. Configure the Default Product type. Go to the Manage form display page of the Default Product type (/admin/commerce/config/product-types/default/edit/form-display) and enable all the disabled fields.

NOTE: You have to enable the eStore homepage feature module, to have a similar layout as on the <https://estore.optasy.com/>