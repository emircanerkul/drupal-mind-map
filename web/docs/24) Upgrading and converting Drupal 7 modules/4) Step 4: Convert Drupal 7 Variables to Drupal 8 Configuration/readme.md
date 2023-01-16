---
url: >-
  https://www.drupal.org/docs/upgrading-and-converting-drupal-7-modules/step-4-convert-drupal-7-variables-to-drupal-8
description: >-
  In Drupal 7 and before one of the common ways of storing settings was using
  variable_get() and variable_set(). In Drupal 8 these have been replaced with
  the new configuration system API/storage. System values that could be reset,
  and unlike configuration would not be edited by end users or transferred
  between Drupal instances, can be implemented via State API instead of Config
  API. See How to upgrade D7 variables to D8's state system. Short introduction
  to CMI Modules store default settings in configuration files that are stored
  in a config/install/ directory in the module root directory.
published_time: '2012-07-02T03:35:00+00:00'
modified_time: '2020-07-29T15:20:28+00:00'
---
In Drupal 7 and before one of the common ways of storing settings was using `variable_get()` and `variable_set()`. In Drupal 8 these have been replaced with the new configuration system API/storage.

System values that could be reset, and unlike configuration would not be edited by end users or transferred between Drupal instances, can be implemented via State API instead of Config API. See [How to upgrade D7 variables to D8's state system](https://www.drupal.org/node/1787318).

### Short introduction to CMI

* Modules store default settings in configuration files that are stored in a `config/install/` directory in the module root directory.
* When a module is enabled these default settings are copied to the active configuration in the site's database.
* When settings are changed by a site administrator these are stored in the active configuration in the database, which can be exported back to files.

### Upgrade procedure

1. Decide on a config object name and a name for the settings. Simple settings can be stored in a config object named `<module_name>.settings.yml`, while for more complex settings it is advisable to use sub-keys. See the guidelines below.
2. Create a directory named `config` in your module's root directory.
3. In `config/install`, create the default settings file with the default configuration. The filename convention is `<module_name>.<config_object_name>.<optional_sub_key>.yml`. For example, this is the config file for the 'large' image style from the Image module (`image.style.large.yml`):  
```php  
name: large  
label: 'Large (480x480)'  
effects:  
  ddd73aa7-4bd6-4c85-b600-bdf2b1628d1d:  
    id: image_scale  
    data:  
      width: 480  
      height: 480  
      upscale: true  
    weight: '0'  
    ieid: ddd73aa7-4bd6-4c85-b600-bdf2b1628d1d  
```
4. Grep the entire code base and replace all instances of `variable_get()` and `variable_set()` with `\Drupal::config()->get()` and `\Drupal::configFactory()->getEditable()->set()`. An example:  
```php  
  $items_per_page = \Drupal::config('node.settings')->get('items_per_page');  
```  
```php  
  function node_form_system_site_information_settings_form_submit($form, &$form_state) {  
    \Drupal::configFactory()->getEditable('node.settings')  
      ->set('items_per_page', $form_state['values']['default_nodes_main'])  
      ->save();  
  }  
```  
In a namespace, for example a form class, use \\Drupal::config() instead of Drupal::config().
5. Create a migration to allow sites using previous versions of Drupal and your module to upgrade. A well documented example can be found at [Migrate API documentation page](https://www.drupal.org/docs/8/api/migrate-api/writing-migrations-for-contributed-and-custom-modules#configuration-entities). Configuration entities are more complex and you will probably have to write a migration source plugin but a destination plugin for entities already exists.
6. Update overrides in `settings.php`. See [Configuration override system](/docs/drupal-apis/configuration-api/configuration-override-system).

### Guidelines

1. Within your conversion issue work, convert one variable at a time.  
   * Determine the variable name to convert.  
   * Grep the entire Drupal code base for the variable name and identify all instances that need to be updated.  
   * Speed up greps by checking `/core` first. But do not forget to grep `/profiles`.
2. New configuration objects are only picked up when a module is first enabled. If you add a new configuration to a module that is already enabled, you should disable, uninstall and re-enable the module for the configuration files to appear.
3. Keep configuration object names short and concise.  
   * If a module has only one set of settings (i.e., one setting form that will result in one configuration object), then the standard configuration object name is `$module.settings`.  
   The following bullets only apply to modules that need multiple configuration objects, in which case "settings" would be ambiguous:  
   * Given a module settings form `system_site_information_settings_form()` that manages the variables:  
   ```php  
   site_name  
   site_mail  
   site_frontpage  
   site_403  
   ...  
   ```  
   * Understand that the primary namespace/owner of the configuration object is System module, so the configuration object name _has to_ start with `system.`  
   * Do not convert the form constructor function's name as-is for the configuration object name (`system.site-information`). No Drupal developer wants to have to remember or deal with needlessly long names on a daily basis.  
   * Instead, find the common denominator and shortest basename of all variables (`site`) and choose an appropriate configuration object name:  
   ```php  
   system.site  
   ```
4. Strip the configuration object name (or parts of it) from key names.  
   * Given a new configuration object name:  
   ```php  
   system.site  
   ```  
   and a variable name:  
   ```php  
   site_name  
   ```  
   * Understand that converting `site_name` into `system.site:site_name` is bad DX.  
   * Instead, remove the duplicate `site_` from the key name; i.e.:  
   ```php  
   system.site:name  
   ```
5. Leverage sub-keys.  
   * Determine and understand the meaning of the entire set of variables to be converted.  
   * Given a subset of variables:  
   ```php  
   site_frontpage  
   site_403  
   site_404  
   ```  
   * Research a bit to understand that all of them refer to internal router paths that denote pages to be shown in certain cases.  
   * Do _not_ convert them to meaningless `frontpage`, `403`, `404`.  
   * Instead, leverage sub-keys and introduce DX sanity for D8 developers:  
   ```php  
   page.front  
   page.403  
   page.404  
   ```
6. Direct access, or provide context.  
   * `\Drupal::config('system.site')->get('name')` is fine when being invoked only once within a function.  
   * It's also fine, if the respective code is only reached through certain code conditions.  
   * However, when `Drupal::config('system.site')` is unconditionally used multiple times within a function, then only invoke it once.  
   * Unless the context is crystal clear, try to avoid the ambiguous variable name `$config`.  
   * Instead, use a self-descriptive variable name; e.g.:  
   ```php  
   $site_config = \Drupal::config('system.site');  
   ```
7. Where the configuration object name will include a dynamic item (e.g. when defining an additional per-content type configuration) you will need to use [configuration entities](https://drupal.org/node/1809494).
8. All defaults should be provided in your default settings file. Do not attempt to pass them as a second parameter or using the :? syntax.

### More information

* [Migrate API and example migrations](https://www.drupal.org/docs/8/api/migrate-api/writing-migrations-for-contributed-and-custom-modules)