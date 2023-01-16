Drupal has information on [using Composer ](https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies)and [how to update a site using Composer](https://www.drupal.org/node/2700999), but here is a quick guideline:

1. Make sure you're running the latest version of composer:  
```php  
composer self-update  
```
2. Go to the root of your site:  
```php  
cd /path/to/kickstart  
```
3. Run the following command to update all packages, where the **\--with-dependencies** flag will update all dependencies of your project's dependencies, and optionally **\--optimize-autoloader** to speed up performance:  
```php  
composer update --with-dependencies --optimize-autoloader  
```
4. Next, run any database updates (cd into the web directory first):  
```php  
cd /path/to/kickstart/web  
./vendor/bin/drush updb  
```
5. Clear the Drupal cache (cd into the web directory first):  
```php  
./vendor/bin/drush cr  
```