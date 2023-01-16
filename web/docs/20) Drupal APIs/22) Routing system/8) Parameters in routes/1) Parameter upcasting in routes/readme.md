---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/parameters-in-routes/parameter-upcasting-in-routes
description: >-
  Routes in Drupal 8 or later may include placeholder elements which designate
  places where the URL contains dynamic values. By naming these placeholders,
  the system can upcast (convert) those values to actual object instances. For
  example if a node's base path is '/node/{node}', then {node} is a placeholder.
  The ParamConverter system takes care of converting that parameter to a node
  object instance automatically (because there exists a content entity called
  node). Menu parameter upcasting means converting a menu argument to anything
  which could be used in the route controllers.
published_time: '2013-10-28T13:23:45+00:00'
modified_time: '2022-01-26T09:09:54+00:00'
---
Routes in Drupal 8 or later may include placeholder elements which designate places where the URL contains dynamic values. By naming these placeholders, the system can upcast (convert) those values to actual object instances. For example if a node's base path is `'/node/{node}'`, then `{node}` is a placeholder.

The ParamConverter system takes care of converting that parameter to a node object instance automatically (because there exists a content entity called `node`).

Menu parameter upcasting means converting a menu argument to anything which could be used in the route controllers. It can be an object or an array.

Let's take an example of the following code in Drupal 7:  
In `my_module.module`

```php
function my_module_menu() {
  $items['node/%my_menu/mytab'] = array(
    // ...
    // ...
  );
}

```

The `my_module_menu()` function implementing `hook_menu()` shows a menu item with an argument `%my_menu`. Suppose we want the callback function for this menu item to receive an object after doing some processing on the value passed from the url. e.g., we want to load a specific field of the node with `nid` 1 when we visit `node/1/mytab`.

To accomplish the above in Drupal 7, would require us to create a loader function like the one below:

```php
function my_menu_load($arg) {
  // Do whatever with argument and return your values
}

```

The page callback for the menu would receive whatever is returned from the loader function defined above.

To accomplish same in Drupal 8 or higher makes use of [ParamConverter](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21ParamConverter%21ParamConverterInterface.php/interface/ParamConverterInterface/8) interface. To port the example mentioned above, we will need to do the following:

1. Create my\_module.routing.yml
2. Create my\_module.services.yml describing metadata for your custom paramconverter implementing the paramconverter interface
3. Implement the custom paramconverter in a PHP class namespaced in my\_module.services.yml
4. Implement the callback for your menu item defined in my\_module.routing.yml