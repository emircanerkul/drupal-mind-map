Some notes on hook\_update\_N() functions:

* [the hook\_update\_N() skeleton section on the parent page](https://www.drupal.org/node/2535316#update-hook) tells how/where to create your hook\_update\_N() function.
* You'll also need this at the top of your mymodule.install file:  
```php  
use Drupal\Core\Database\Database;  
```
* Combine all your current data model updates into one hook\_update\_N() function, but don't combine them with other updates that were done previously.
* [NEVER reference your current hook\_schema() return value in your hook\_update\_N() function.](https://www.drupal.org/node/150220)
* The sections below give examples of how to perform various database updates. For other schema changes (like deleting fields, etc.), follow the examples below, using other methods from the [Schema class](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Database!Schema.php/class/Schema/8).