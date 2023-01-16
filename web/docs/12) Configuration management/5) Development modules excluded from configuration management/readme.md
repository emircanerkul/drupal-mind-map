---
url: >-
  https://www.drupal.org/docs/configuration-management/development-modules-excluded-from-configuration-management
description: >-
  Some modules are enabled by developers on their local instance of their drupal
  site but are not meant to be enabled on the production site. The manual
  solution to this is to un-install the module before doing a configuration
  export and to manually install it again locally after a configuration import.
  Since Drupal 8.8.0 a new setting is present:
  $settings['config_exclude_modules'] = ['devel', 'webprofiler']; The listed
  modules and all configuration that depends on them will be removed from the
  exported configuration when the configuration is exported.
published_time: '2020-09-09T14:44:23+00:00'
modified_time: '2020-09-16T07:22:55+00:00'
---
Some modules are enabled by developers on their local instance of their drupal site but are not meant to be enabled on the production site.

The manual solution to this is to un-install the module before doing a configuration export and to manually install it again locally after a configuration import.

Since Drupal 8.8.0 a new setting is present:

`$settings['config_exclude_modules'] = ['devel', 'webprofiler'];`

The listed modules and all configuration that depends on them will be removed from the exported configuration when the configuration is exported. This way the configuration that is imported on the production site will make these modules uninstalled. However, when importing the configuration on the development environment where the module is already installed and the settings is set to exclude the module from the configuration synchronisation the module will remain installed and its configuration remains intact.

If the configuration in the sync directory contains a "excluded module" it will be imported and enabled as any other configuration or module but when exporting the configuration it will be removed.

Also note that this works only for simple cases. It does not work for modules that add things to lots of configuration, as that configuration then starts to depend on the module and is simply removed from the sync process.

**Compatibility with Drush and Drupal Console**

If you're using Drush's `config:import` or `config:export` commands to manage config, you must be using **drush 10+** to use this feature.

This feature does not currently work with the drupal console `config:export` command, but there is [an open issue here](https://github.com/hechoendrupal/drupal-console/issues/4267).