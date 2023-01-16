---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/simple-configuration-api
description: >-
  This page describes the API for getting and setting configuration data, for
  Simple Configuration. (This is not for information stored in Configuration
  Entities.) Configuration Data Each module can provide default configuration.
  For example, the maintenance mode settings are defined in
  core/modules/system/config/install/system.maintenance.yml. In this file, the
  first part is a namespace representing which module supplied this
  configuration (system module in this example), which is followed by the
  sub-system (maintenance in this example). The file must be under a
  config/install directory.
published_time: '2012-10-11T04:15:54+00:00'
modified_time: '2020-05-18T14:09:41+00:00'
---
This page describes the API for getting and setting configuration data, for Simple Configuration. (This is not for information stored in [Configuration Entities](/node/2143501).)

### Configuration Data

Each module can provide default configuration. For example, the maintenance mode settings are defined in `core/modules/system/config/install/system.maintenance.yml`. In this file, the first part is a namespace representing which module supplied this configuration (system module in this example), which is followed by the sub-system (maintenance in this example). The file **must** be under a config/install directory. Also it must contain the symbol '.' in the file name for validating in `ConfigBase->validateName($name)`. This file contains the following YAML:

```php
message: '@site is currently under maintenance. We should be back shortly. Thank you for your patience.'
langcode: en

```

Configuration can also be nested, as in the performance settings (`system.performance.yml`):

```php
cache:
  page:
    enabled: '0'
    max_age: '0'
preprocess:
  css: '0'
  js: '0'
response:
  gzip: '0'

```

#### **IMPORTANT:** The root keys must be a mapping

The data at the root of a configuration must be represented as a mapping and not an unpredictable sequence. For example, if you are storing data for each available entity type, make the parent key the entity type and add a root key of `entity_type`. See the example layout below:

```php
entity_type:
  commerce_order:
    foo: 'bar'
  node:
    foo: 'bar'
  user:
    foo: 'bar'

```

If the entity types are the root key then it is impossible to represent the configuration using schema. Additionally Drupal core would be unable to add extra information when the configuration is installed as part of a module (or theme) installation.

### Interacting with configuration

You interact with these files through the Config object, and you instantiate a Config object by calling the function `config()` with the filename minus the extension. Calling the config function will return an instance of \\Drupal\\Core\\Config\\ImmutableConfig.

```php
// Immutable Config (Read Only).
$config = \Drupal::config('system.performance');

```

```php
// Mutable Config (Read / Write).
$config = \Drupal::service('config.factory')->getEditable('system.performance');

```

Once you have a Config object, you can interact with it in various ways.

### Reading configuration

Configuration is read using the `get()` method. This can be used in several ways. To read a piece of configuration, just provide its key.

```php
$config = \Drupal::config('system.maintenance');
$message = $config->get('message');

```

Calls to `\Drupal::config()` can also be chained.

```php
$message = \Drupal::config('system.maintenance')->get('message');

```

To read nested configuration, separate the keys with the '.' character.

```php
$enabled = \Drupal::config('system.performance')->get('cache.page.enabled');

```

You can read configuration at any level, if there is configuration nested underneath your level, it will be returned as an array.

```php
$page_cache = \Drupal::config('system.performance')->get('cache.page');

```

This would return an array with two keys - 'enabled' and 'max\_age'.

To return all the data in a config object, just call `get()` with no arguments.

Also, you can return all configuration keys available on the system or just those keys starting with a particular substring ($prefix).

```php
$keys = \Drupal::service('config.factory')->listAll($prefix = "");
```

### Writing configuration

To change a configuration you will need to get an instance of \\Drupal\\Core\\Config\\Config (Mutable config object) by making a call to getEditable() on the config factory. Attempting to make a change or calling a delete() / save() function on an instance of \\Drupal\\Core\\Config\\ImmutableConfig will throw a ImmutableConfigException.

This is done in the following way:

```php
\Drupal::service('config.factory')->getEditable('system.performance');

```

Configuration is changed or added using the `set()` method and saved using the `save()` method. Note that configuration must be _explicitly_ saved; simply setting data into a configuration does not save it.

You save data into a config object the same way that you read it, by referencing the keys and saving appropriate data. The syntax is the same as `variable_set()` was in previous versions of Drupal.

```php
$config = \Drupal::service('config.factory')->getEditable('system.performance');

// Set a scalar value.
$config->set('cache.page.enabled', 1);

// Set an array of values.
$page_cache_data = ['enabled' => 1, 'max_age' => 5];
$config->set('cache.page', $page_cache_data);

// Save your data to the database.
$config->save();

```

The `set()` function is also chainable, so if you only need to change one value, you can do it in a single line of code.

```php
\Drupal::service('config.factory')->getEditable('system.performance')->set('cache.page.enabled', 1)->save();

```

If you want to replace _all_ the data in the configuration object, use the `setData()` function. You cannot use `setData()` to replace just a subset of the data - if you want to replace anything less than the entire object you must use one or more calls to `set()` instead. When using `setData()` you must specify every key and value in the same associative array format as is returned by `get()` with no arguments. For the system performance settings in `system.performance.yml`, this would look like the following:

```php
// Set all values.
\Drupal::service('config.factory')->getEditable('system.performance')->setData([
    'cache' => [
      'page' => [
        'enabled' => '0',
        'max_age' => '0',
      ],
    ],
    'preprocess' => [
      'css' => '0',
      'js' => '0',
    ],
    'response' => [
      'gzip' => '0',
    ],
  ])
  ->save();

```

### Removing configuration

Individual configuration values can be unset using the `clear()` function, which is also chainable.

```php
$config = \Drupal::service('config.factory')->getEditable('system.performance');
$config->clear('cache.page.max_age')->save();
$page_cache_data = $config->get('cache.page');

```

In this example `$page_cache_data` would return an array with one key - 'enabled' - because 'max\_age' was unset.

Whole configuration sets can be removed using the `delete()` function.

```php
\Drupal::service('config.factory')->getEditable('system.performance')->delete();

```

Note that this should **not** be followed by a call to `save()`, as doing so would create an empty version of the configuration set.

### Best Practices

Avoid instantiating config objects multiple times within the same function, as this is a performance drain. The following code unnecessarily instantiates the config object 'foo.bar' twice.

```php
\Drupal::service('config.factory')->getEditable('foo.bar')->set('foo', 'foo')->save();
\Drupal::service('config.factory')->getEditable('foo.bar')->set('bar', 'bar')->save();

```

A better solution would be to instantiate the config object once, save it into a variable, and work with that variable for the rest of your code scope.

```php
$config = \Drupal::service('config.factory')->getEditable('foo.bar');
$config
  ->set('foo', 'foo')
  ->set('bar', 'bar')
  ->save();

```

### Injecting configuration values into services

Configuration values can be injected into your custom service using service factory.

```yaml
services:
  app.service:
    class: Drupal/mail_module/Service
    factory: Drupal/mail_module/ServiceFactory:create
    arguments: ['@config.factory']
```

```php
class ServiceFactory {
  static function create($config) {
    return new Service($config->get('mail.config')->get('transport'));
  }
}

class Service {
  public function __construct($transport) {
    $this->mailTransport = $transport;
  }
}
```

Example was adapted from [How to inject configuration values into services?](https://drupal.stackexchange.com/questions/193957/how-to-inject-configuration-values-into-services)