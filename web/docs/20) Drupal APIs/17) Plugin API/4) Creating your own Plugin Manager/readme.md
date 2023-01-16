---
url: >-
  https://www.drupal.org/docs/drupal-apis/plugin-api/creating-your-own-plugin-manager
description: >-
  The plugin manager is the central controlling class that defines how the
  plugins of a particular type will be discovered and instantiated. This class
  is called directly in any module wishing to invoke a plugin type. This
  documentation will require an understanding of PSR-4. Scaffolding for plugin
  managers can be generated automatically with the following Drupal Console
  commands: generate:plugin:type:annotation generate:plugin:type:yaml Defining
  the Plugin Manager There are only two requirements for defining a new plugin
  manager: You must define a discovery method. You must define a factory.
published_time: '2012-06-15T17:29:56+00:00'
modified_time: '2022-11-14T06:54:36+00:00'
---
The plugin manager is the central controlling class that defines how the plugins of a particular type will be discovered and instantiated. This class is called directly in any module wishing to invoke a plugin type.

This documentation will require an understanding of [PSR-4](http://drupal.org/node/1479568).

Scaffolding for plugin managers can be generated automatically with the following [Drupal Console](https://drupalconsole.com/) commands:

* [generate:plugin:type:annotation](https://drupalconsole.com/docs/en/commands/generate-plugin-type-annotation)
* [generate:plugin:type:yaml](https://drupalconsole.com/docs/en/commands/generate-plugin-type-yaml)