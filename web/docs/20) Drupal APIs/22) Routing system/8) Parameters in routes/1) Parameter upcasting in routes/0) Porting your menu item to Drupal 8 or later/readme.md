In `my_module.routing.yml`

```php
my_module.mymenu:
  path: '/node/{my_menu}/mytab'
  defaults:
    _title: 'My Title'
    _form: '\Drupal\mymodule\Form\MyModuleformControllerForm'
  options:
    parameters:
      my_menu:
        type: my_menu

```

This is what a typical route would look like in Drupal 8\. The route described above is going to render a form on the page depending on the my\_menu argument passed down to it.

It's very important that the name of the parameter matches the variable in the page callback arguments. e.g., if the parameter name is declared as my\_menu in routing.yml file, the callback function would receive the upcasted value in the $my\_menu variable.