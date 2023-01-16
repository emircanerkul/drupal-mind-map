---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/parameters-in-routes/implementing-custom-parameter-converters
description: >-
  It should be very rare that you need custom parameter converters because all
  content and configuration entities automatically get upcast, and you should
  adopt those two systems as much as possible anyway. However, if there is a
  reason to implement custom parameter converters, read on. Parameter converters
  are managed by the ParamConverterManager. To implement new parameter
  converters, implement the ParamConverterInterface. For a basic example, see
  the LanguageConverter implementation. In your convert() method, include any
  code required to load the object.
published_time: '2014-07-27T03:53:58+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
It should be very rare that you need custom parameter converters because all content and configuration entities automatically get upcast, and you should adopt those two systems as much as possible anyway. However, if there is a reason to implement custom parameter converters, read on.

Parameter converters are managed by the [ParamConverterManager](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!ParamConverter!ParamConverterManager.php/8). To implement new parameter converters, implement the [ParamConverterInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21ParamConverter%21ParamConverterInterface.php/interface/ParamConverterInterface/8).

For a basic example, see the [LanguageConverter](https://api.drupal.org/api/drupal/core!modules!language!src!LanguageConverter.php/class/LanguageConverter/8) implementation.

In your `convert()` method, include any code required to load the object. This can include direct database queries if needed.

The `applies()` method tells Drupal which routes your ParamConverter applies to. `$definition['type']` is declared in your `routing` file, as so:

```php
example.myroute:

  # {example_object} declares the parameter.  
  # This is the parameter "label".
  path: '/example/{example_object}'

  options:
    parameters:
      # The parameter label. Corresponds to the string 
      # used in "path" above.
      example_object:
        # The type name of the parameter. 
        # This value is passed as-is to your applies() method,  
        # in $definition['type'].
        type: 'example-type'
```

Parameter converters are services so you should add an entry to your example.services.yml for your custom ParamConverter:

```php
services:
  example.param_converter:
    class: Drupal\example\Routing\ParamConverter
    tags:
      - { name: paramconverter }

```

The `paramconverter` tags help identify this as a parameter converter to run in the route process.