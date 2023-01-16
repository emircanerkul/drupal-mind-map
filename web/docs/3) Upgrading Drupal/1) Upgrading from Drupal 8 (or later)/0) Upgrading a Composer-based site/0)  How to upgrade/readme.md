Perform the following steps from your Drupal site's root (where `composer.json` lives).

The examples show the instructions for updating from Drupal 9.5.0 to Drupal 10.0.0\. You must change the version numbers according to your needs.

1. Temporarily add write access to protected files and directories:  
```php  
chmod 777 web/sites/default  
chmod 666 web/sites/default/*settings.php  
chmod 666 web/sites/default/*services.yml  
```
2. Get both the `core-recommended` and `dev-dependencies` packages as dependencies. We use `--no-update` to avoid a chicken-and-egg problem with mutual dependencies:  
```php  
composer require 'drupal/core-recommended:^10' 'drupal/core-composer-scaffold:^10' 'drupal/core-project-message:^10' --update-with-dependencies --no-update  
```  
If you have `drupal/core-dev` installed:  
```php  
composer require 'drupal/core-dev:^10' --dev --update-with-dependencies --no-update  
```
3. Now, actually perform the update to the code itself:  
```php  
composer update  
```  
Note: If any of your packages are not compatible, you may get a dependency error. To fix this, look in the issue queue for the project for a patch. You can use that patch to 'upgrade' the project. Refer to this documentation for more details on how to handle this situation: [https://www.drupal.org/docs/develop/using-composer/using-drupals-lenient...](https://www.drupal.org/docs/develop/using-composer/using-drupals-lenient-composer-endpoint)  
<!-- note-tip -->  
> TIP: Another, less recommended way to get around this, is you can add an alias to drupal/core, such as:  
composer require "drupal/core:10.0.0 as 9.5.0" --no-update &amp;&amp; composer updateMake sure you replace the version numbers with the versions you are using in your installation. This can lead to problems with modules that are *explicitly* Drupal 10 only, as they will not work in this scenario, but it might get you past where you need to be.
4. Run any pending database updates, required if you update module code and that module needs to update the database, either by visiting update.php in the browser, or with Drush:  
```php  
drush updatedb  
```
5. When complete, restore read-only access to the sites/default directory:  
```php  
chmod 755 web/sites/default  
chmod 644 web/sites/default/*settings.php  
chmod 644 web/sites/default/*services.yml  
```
6. If you used the less recommended method in step 3, change the entry "drupal/core" in your composer.json file. Otherwise you won't be able to install any Drupal updates.  
```php  
"drupal/core": "^10.0.0",  
```