When you named your module's .info.yml file, it was of the form `module_name.info.yml`. That module\_name is registered with core Drupal as the "Machine name" of your module. You can open up the details of your module in the module list to see it. Drupal then loads the routing file that is of the form `module_name.routing.yml` that it will use to define how Drupal will behave when a specific path is encountered. For example, if we had a file `example.info.yml` that had defined our module, we would then have a file `example.routing.yml` (Note - make sure to use single quotes in .yml files rather than double quotes, as double quotes can have unexpected results):

**`example.routing.yml`**

```php
example.content:
  path: '/example' 
  defaults: 
    _controller: '\Drupal\example\Controller\ExampleController::content' 
    _title: 'Hello World'
  requirements: 
    _permission: 'access content' 

```

This tells Drupal that a route named 'example.content' (named with the module name as prefix) exists and is bound to the URI '/example' on the site. When that path is accessed, the 'access content' permission is checked on the accessing user and, if access is granted, the ExampleController::content method is invoked and a page is displayed with the title 'Hello World'.

Note that Drupal's autoloading mechanism loaded the file at `modules/example/src/Controller/ExampleController.php` because when it encountered the machine name "example" in the string "\_controller", it looks in the src folder of that module. If your files are not autoloading, you may want to recheck the registered machine name of your module.

If you built Drupal 7 modules before, this is pretty similar to how Drupal 7 associated page callbacks to paths in hook\_menu(). (However, the routing system is not responsible for managing tabs, action links and contextual links).

### Allow access without checking permission

There are rare cases, where you'd want to allow access without checking a permission, but they exist.

The following example allows access without checking permissions:

```yaml
example.content:
  path: '/example' 
  defaults: 
    _controller: '\Drupal\example\Controller\ExampleController::content' 
    _title: 'Hello World'
  requirements: 
    _access: 'TRUE'

```