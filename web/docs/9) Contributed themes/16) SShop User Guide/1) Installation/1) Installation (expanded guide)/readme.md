1. Install the latest version of the [Drupal 8](https://www.drupal.org/project/drupal) via composer:  
```php  
composer create-project drupal/drupal drupal_dir (old, do not use)  
composer create-project drupal/recommended-project my_site_name_dir (recommended)  
```
2. Download the eStore Theme  
```php  
composer require 'drupal/sshop'  
```
3. Enable both the required and/or the recommended modules, [you use this guide for drush](https://www.drupal.org/docs/8/extending-drupal-8/installing-modules-from-the-command-line) installation or you can install them manually from the Drupal administration UI on the path "/admin/modules":  
```php  
drush en \  
colorbox \  
commerce \  
commerce_wishlist \  
fontawesome \  
quicktabs\  
views_slideshow\  
views_slideshow_cycle \  
panels \  
page_manager \  
-y  
```
4. [Download](https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip) the Bootstrap library and extract into "/libraries/bootstrap" folder.  
_Note: if you don't have the /libraries folder, then you should create it._
5. Download and install the [Stacktable.js](http://johnpolacek.github.io/stacktable.js/) and the [SmartMenus](https://www.smartmenus.org/):  
   * The Stacktable.js [download](https://github.com/johnpolacek/stacktable.js/zipball/master/) and extract into "/libraries/stacktable.js" folder.  
   * The SmartMenus [download](https://www.smartmenus.org/files/?file=smartmenus-jquery/smartmenus-1.1.0.zip) and extract into "/libraries/smartmenus" folder.
6. Download and enable [SShop theme](https://www.drupal.org/project/sshop).
7. Enable homepage. Go to Modules list page (/admin/modules) and enable the "SShop homepage feature" this module will provide a homepage (/home).
8. Configure the Default Product type. Go to Manage form display page of the Default Product type (/admin/commerce/config/product-types/default/edit/form-display) and enable all disabled fields.