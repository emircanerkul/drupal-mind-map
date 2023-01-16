You can define your own services using an `example.services.yml` file, where `example` is the name of the module defining the service. This file uses the same structure as the `core.services.yml` file.

There are several subsystems requiring you to define services. For example, [custom route access checker classes](/node/2122195), [custom parameter upcasting](/node/2122223), or [defining a plugin manager](/node/1637730) all require you to register your class as a service.

It is also possible to add more YAML files to discover services by using `$GLOBALS['conf']['container_yamls']`. The use of that should be very rare though.

### Defining services by fully qualified name of PHP namespace

It's not needed to specify a machine name as a name for your service. Instead you can simply use the PHP class namespace:

```yaml
services:
  Drupal\coffee_shop\Service\Barista:
    class: Drupal\coffee_shop\Service\Barista
    arguments: ['@config.factory']
```

Then you are able to retrieve your service by the PHP class namespace from the service container (no additional development IDE plugin needed for service name suggestion):

```php
$barista = \Drupal::getContainer()
  ->get(Barista::class);
```

Here is an example with the extra abstraction layer with a service machine name, which means too much work (old approach):

```php
\Drupal::service('modulename.service_machinename');
```