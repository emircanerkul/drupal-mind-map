---
url: >-
  https://www.drupal.org/docs/develop/creating-modules/defining-and-using-your-own-configuration-in-drupal
description: >-
  Main topic described: defining own configuration You can include default
  configuration in your module based on functionality in other modules (node
  types, views, fields, text formats, etc). For example, node module provides a
  node type configuration, so in your own module you configure a default node
  type that can be supplied with your module. You may want to define
  configuration for your own plugins, entities and settings, which can in turn
  be utilized by other modules, just as you can utilize node's content type
  configuration.
published_time: '2013-10-21T14:44:18+00:00'
modified_time: '2023-01-03T18:06:45+00:00'
---
**Main topic described: _defining own configuration_**

You can [include default configuration in your module](https://drupal.org/node/2087879) based on functionality in other modules (node types, views, fields, text formats, etc).  
For example, node module provides a node type configuration, so in your own module you configure a default node type that can be supplied with your module.

You may want to define configuration for your own plugins, entities and settings, which can in turn be utilized by other modules, just as you can utilize node's content type configuration.

### The configuration file

Configuration files for your module reside in the `config/install` subdirectory of your module. Thus, `/modules/example/config/install/example.settings.yml` if your module is in `/modules/example`. You can place your own module's configuration files here using the YAML file format.

Although this is not enforced, it is strongly suggested that you name configuration files that you define for your module using a prefix of your own module name: `example.settings.yml` for example for configuration settings. Do not name the file `settings.yml` or `system.settings.yml` as that would possibly conflict with file names elsewhere. If you don't follow this convention, Drush commands such as `drush config:import` will be confused.

This also allows you to ship with configuration for _other_ components, such as the node type example from [including default configuration in your module](https://drupal.org/node/2087879) where the configuration file was `node.type.example_mytype.yml` identifying the configuration file to be handled as a node type by node module.

The name of the configuration file (minus the .yml file extension) is also called the _configuration name_ in the system and that is how you can refer to your configuration from the PHP API.

### Structure of the configuration file

The configuration file should use the YAML file format. You can structure your own configuration file based on your own needs, there are no restrictions beyond the YAML format itself on the structure. Eg. if you need a setting to output something custom from your [page controller](https://drupal.org/node/2116767), the file may include a `message` key with a string value:

```php
message: 'Hello'
langcode: 'en'

```

It is best practice to include the language code of the file under a `langcode` key. This is used by the language system to offer translatable text up for translation. The `langcode` key is reserved for this purpose and you should not use it on the top level of the file for anything else.

### Translatable configuration

To translate the configuration, the _Configuration Translation_ module must be installed.

In order to make the configuration translatable you need to add two more files:

\- `/modules/example/config/schema/example.schema.yml`  
\- `/modules/example/example.config_translation.yml`

The first one defines [the schema](https://www.drupal.org/docs/8/api/configuration-api/configuration-schemametadata#use) of the custom configuration. We define `example.settings` as a `config_object` containing a number of fields. Each field has a type: the underlying type definition determines whether the field will be translatable or not (see [core.data\_types.schema.yml](https://git.drupalcode.org/project/drupal/-/blob/8.8.x/core/config/schema/core.data%5Ftypes.schema.yml)). For example a `path` field containing a Drupal internal path is not translatable, but a `text` field is.

```yaml
# /modules/example/config/schema/example.schema.yml
example.settings:
  type: config_object
  label: 'Example config'
  mapping:
    message:
      type: text
      label: 'Message'

```

The second one adds a link on `/admin/config/regional/config-translation` to the corresponding translation form:

```yaml
# /modules/example/example.config_translation.yml
example.admin.config:
  title: 'Example module'
  base_route_name: example.admin.config
  names:
    - example.settings

```

The key is by convention the same as the base route name: `example.admin.config` is the name of the route to the admin config form of your module. `names` lists all the configuration keys that are edited in the form, in this case the custom config defined in the schema above.

The file can include more complex lists and key/value pairs in a tree structure. See for example the [views.view.content.yml file](https://api.drupal.org/api/drupal/core!modules!node!config!optional!views.view.content.yml/8) for an example configuration file with quite a bit of complexity.

Configuration Translation automatically adds a "translate module" tab to the module configuration form, however it may not be visible if it is the only tab available. To add a "default" tab for the configuration form, we need to add another file `example.links.task.yml`. (See [Module defined local tasks](https://www.drupal.org/docs/8/api/menu-api/providing-module-defined-local-tasks).)

```yaml
// example.links.task.yml
example.admin.config:
  route_name: example.admin.config
  title: Settings
  base_route: example.admin.config
```

### Using the configuration

The simplest way to use this is the `Drupal::config()` static method:

```php
$config = \Drupal::config('example.settings');
// Will print 'Hello'.
print $config->get('message');
// Will print 'en'.
print $config->get('langcode');

```

If you want to edit a configuration and update it with a new value you can use the `\Drupal::service('config.factory')->getEditable()` method:

```php
$config = \Drupal::service('config.factory')->getEditable('example.settings');

// Set and save new message value.
$config->set('message', 'Hi')->save();

// Now will print 'Hi'.
print $config->get('message');

```

### See also

* [Configuration API overview](https://drupal.org/node/1667894)