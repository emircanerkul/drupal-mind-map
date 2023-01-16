If you are writing a tour you need to follow certain steps to see the tour actually appearing on the website.

If you are just testing a tour patch be sure to enable the module AFTER applying the patch.

* Create your tour yml file and name it like `tour.tour.[tour-name].yml` e.g.  
```php  
tour.tour.language.yml  
```  
If you want to use an example yml file to start with trying this one:  
```php  
core/modules/views_ui/config/optional/tour.tour.views-ui.yml  
```
* Copy the yml to **both** the _active_ and _staging_ subdirectories of the configuration directory of the site which looks something like:
* ```php  
sites/default/files/config_zAYjIjYlwIIJYm5UOQscPNMnQQDeWd96fKV9ThwO9XU/staging  
sites/default/files/config_zAYjIjYlwIIJYm5UOQscPNMnQQDeWd96fKV9ThwO9XU/active  
```  
[More about configuration management in Drupal 8](https://drupal.org/documentation/administer/config)
* In the admin section of the site go to admin/config/development/configuration  
 and click _Import all_
* Add this line to your settings.php:  
```php  
$settings['cache']['config'] = 'cache.backend.memory';  
```  
This disables caching of configuration files (not recommended on production websites). Then, you can make a change, reload the page and see the change (otherwise, you'd need to clear the cache every time which is not fun!)
* You do need to start from the beginning of the tour each time until the patch lands for: [#1942576: Tour tips to be able to link to other pages and start tour's automatically.](https://www.drupal.org/project/drupal/issues/1942576 "Status: Closed (fixed)")
* Once the tour is ready for action, you need to copy the file into the correct location. For example, a tour for the language module would live under:  
```php  
core/modules/language/config/optional  
```  
and then create your patch as usual.