---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-entity-dependencies
description: >-
  Configuration entities may declare dependencies. A dependency can be a module,
  a theme or an entity. A configuration entity's dependencies must be installed
  before the configuration entity can be installed. If the dependencies are not
  present and installed in the site, the configuration entity will fail to
  install. A module should declare in its info YAML file module and theme
  dependencies that its configuration entities will require. Generally, module
  developers will not need to concern themselves with declaring dependencies for
  configuration entities.
published_time: '2014-04-07T20:46:43+00:00'
modified_time: '2019-03-14T18:25:52+00:00'
---
[Configuration entities](https://drupal.org/node/1809494) may declare dependencies. A dependency can be a [module](https://drupal.org/developing/modules/8), a theme or an [entity](https://drupal.org/developing/api/entity).

A configuration entity's dependencies must be installed before the configuration entity can be installed. If the dependencies are not present and installed in the site, the configuration entity will fail to install. A module should declare in its info YAML file module and theme dependencies that its configuration entities will require.

Generally, module developers will not need to concern themselves with declaring dependencies for configuration entities. By extending core configuration entity base classes and creating plugins from standard plugin API providers, dependencies will be calculated and declared automatically.