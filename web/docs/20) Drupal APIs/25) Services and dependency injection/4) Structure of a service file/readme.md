---
url: >-
  https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/structure-of-a-service-file
description: >-
  Services are defined in a file example.services.yml (assuming the module is
  named 'example'). When this file is placed in the root of the module, it will
  automatically be detected and used by Drupal. Example of a
  example.services.yml file: services: # Defines a simple service which requires
  no parameter for its constructor. example.simple: class: Drupal\example\Simple
  # Defines a service which requires the module_handler for its constructor.
published_time: '2014-02-12T13:28:21+00:00'
modified_time: '2023-01-12T11:10:45+00:00'
---
Services are defined in a file `example.services.yml` (assuming the module is named '`example`'). When this file is placed in the root of the module, it will automatically be detected and used by Drupal.

Example of a `example.services.yml` file:

```php
services:

  # Defines a simple service which requires no parameter for its constructor.
  example.simple:
    class: Drupal\example\Simple

  # Defines a service which requires the module_handler for its constructor.
  example.with_module_handler:
    class: Drupal\example\WithModuleHandler
    arguments: ['@module_handler', '%example.parameter%']

parameters:
  example.parameter: TRUE
```

More examples can be found in `core.services.yml` or any module's service file. All definitions are aggregated and saved as a [serialized array in the database](https://www.drupal.org/node/2540430).