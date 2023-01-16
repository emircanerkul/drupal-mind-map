This module must be installed on a Drupal site that is managed by Composer. Drupal.org has documentation on how to [use Composer to manage Drupal site dependencies](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies) to get you started quickly.

1. Install the module using [Composer](https://getcomposer.org/).  
 Composer will download the this module and all its dependencies.  
**Note**: Composer must be executed at the root of your Drupal installation.  
 For example:  
```php  
cd /path/to/drupal/root  
composer require drupal/apigee_api_catalog  
```  
For more information about installing contributed modules using Composer, read  
[how to download contributed modules and themes using Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies#managing-contributed).
2. Choose **Extend** in the Drupal administration menu.
3. Select the **Apigee API catalog** module.
4. Choose **Install**.