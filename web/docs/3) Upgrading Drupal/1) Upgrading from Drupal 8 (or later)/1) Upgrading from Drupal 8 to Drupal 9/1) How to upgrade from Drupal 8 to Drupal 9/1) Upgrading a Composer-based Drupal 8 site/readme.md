Perform the following steps from your Drupal 8 site's root (where `composer.json` lives).

1. Temporarily add write access to protected files and directories:  
```php  
chmod 777 web/sites/default  
chmod 666 web/sites/default/*settings.php  
chmod 666 web/sites/default/*services.yml  
```
2. Next, you'll need to pull in both the Drupal 9 version of `core-recommended` and `dev-dependencies` packages as dependencies. We use `--no-update` to avoid a chicken-and-egg problem with mutual dependencies:  
```php  
composer require 'drupal/core-recommended:^9' 'drupal/core-composer-scaffold:^9' 'drupal/core-project-message:^9' --update-with-dependencies --no-update  
```  
If you have `drupal/core-dev` installed:  
```php  
composer require 'drupal/core-dev:^9' --dev --update-with-dependencies --no-update  
```
3. Now, actually perform the update to the code itself:  
```php  
composer update  
```  
Note: If any of your packages doesn't have a release explicitly declared as D9-compatible, you will likely run into a dependency error when trying to update your codebase. There may already be a patch in the issue queue that you can use if you use to 'upgrade' the project to be drupal 9 compatible. Please refer to this documentation for more details on how to handle this situation: [https://www.drupal.org/docs/develop/using-composer/using-drupals-lenient...](https://www.drupal.org/docs/develop/using-composer/using-drupals-lenient-composer-endpoint)  
<!-- note-tip -->  
> TIP: Another, less recommended way to get around this, is you can add an alias to drupal/core, such as:  
composer require "drupal/core:9.0.0 as 8.9.0" --no-update &amp;&amp; composer update(Make sure you replace 9.0.0 and 8.9.0 to whatever versions you are using in your installation.). This can lead to problems with modules that are *explicitly* d9 only, as they will not work in this scenario, but it might get you past where you need to be.
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
If you did run to include core 9.0 as 8.9 make sure to change the entry after a successful upgrade in your `composer.json` file. Otherwise you won't be able to install any Drupal updates.  
```php  
"drupal/core": "^9.0.0",  
```