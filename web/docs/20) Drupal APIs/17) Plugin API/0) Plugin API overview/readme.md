---
url: https://www.drupal.org/docs/drupal-apis/plugin-api/plugin-api-overview
description: >-
  Plugins are small pieces of functionality that are swappable. Plugins that
  perform similar functionality are of the same plugin type. Drupal contains
  many different plugins, of different types. For example, 'Field widget' is a
  plugin type, and each different field widget type is a plugin. The admin user
  may select from the list of field widget plugins to set the widget that a
  field uses.
published_time: '2013-09-12T18:18:29+00:00'
modified_time: '2021-03-07T08:37:05+00:00'
---
**Plugins** are small pieces of functionality that are swappable. Plugins that perform similar functionality are of the same **plugin type**.

Drupal contains many different plugins, of different types. For example, 'Field widget' is a plugin type, and each different field widget type is a plugin. The admin user may select from the list of field widget plugins to set the widget that a field uses.

The D8 plugin system provides a set of guidelines and reusable code components to allow developers to expose pluggable components within their code and (as needed) support managing these components through the user interface.

Plugins are defined by modules: a module may provide plugins of different types, and different modules may provide their own plugins of a particular type.