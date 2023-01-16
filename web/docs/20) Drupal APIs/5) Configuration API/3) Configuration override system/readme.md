---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-override-system
description: >-
  Drupal 8's configuration system handles configuration in a unified manner. By
  default, Drupal stores configuration data in the database, but it can be
  exported to YAML files, allowing the configuration to be managed by version
  control. There are cases however when configuration values need to be
  overridden for specific purposes. Drupal 7 had the global $conf variable that
  was usually populated in settings.php with conditional override values for the
  configuration. A big drawback of that system was that the overrides crept into
  actual configuration.
published_time: '2013-02-27T11:11:12+00:00'
modified_time: '2022-04-20T11:56:05+00:00'
---
Drupal 8's configuration system handles configuration in a unified manner. By default, Drupal stores configuration data in the database, but it can be exported to YAML files, allowing the configuration to be managed by version control. There are cases however when configuration values need to be overridden for specific purposes. Drupal 7 had the `global $conf` variable that was usually populated in `settings.php` with conditional override values for the configuration. A big drawback of that system was that the overrides crept into actual configuration. When a configuration form that contained overridden values was saved, the conditional override got into the actual configuration storage.

Drupal 8 introduces a configuration override system that:

* Maintains these overrides as temporary layers on top of the standard configuration values
* Do not use overridden values for configuration forms
* May store overrides with other configuration files for staging and version control support (for example, in case of language overrides; see below).

The Drupal 7 global `$conf` variable is renamed to `$config` in Drupal 8 and is activated on the configuration system by default.

### Global overrides

Drupal 8 retains the possibility of using the `global $config` overrides. The configuration system integrates these override values via the `Drupal\Core\Config\ConfigFactory::get()` implementation. When you retrieve a value from configuration, the `global $config` variable gets a chance to change the returned value:

```php
// Get system site maintenance message text. This value may be overriden by
// default from global $config (as well as translations, see below).
$message = \Drupal::config('system.maintenance')->get('message');

```

To override configuration values in `global $config` for example in `settings.php`, reference their configuration keys:

```php
$config['system.maintenance']['message'] = 'Sorry, our site is down now.';

```

For nested values, use nested array keys

```php
$config['system.performance']['css']['preprocess'] = 0;

```

When using `$config` override outside of `settings.php`, use a preceding `global $config;`

You may find it helpful to identify the available config variables by either :

* Browsing them using "Configuration Manager" module using the UI found at /admin/config/development/configuration/single/export
* inspecting your sites config yml files directly,
* or querying for them with drush.  
```php  
drush config-list  
drush config-get system.performance --include-overridden  
```

_Note_ that values overridden via `$config` within `settings.php` **will not be viewable from the Drupal administration interface** (until [#2408549: There is no indication on configuration forms if there are overridden values](https://www.drupal.org/project/drupal/issues/2408549 "Status: Needs review") is fixed, until then you can use [Configuration Override Warn](https://www.drupal.org/project/config%5Foverride%5Fwarn) or [Config Override Inspector](https://www.drupal.org/project/coi)) or from inspection via drush (unless you add the `--include-overridden` flag). The administration interface displays the values stored in configuration so that you can stage changes to other environments that don't have the overrides.

For an example of Overriding API Keys for security reasons see: [Commerce Gateway Payments API Key Override](https://docs.drupalcommerce.org/commerce2/developer-guide/payments/overriding-payment-config)

### Avoiding overrides

You can fetch configuration without overrides to access the raw configuration value (such as to disable applying even the global overrides). This is very useful, for example, if you are writing a configuration form. Using an override-free environment for the form is important, so you can avoid the values creeping into your saved configuration. This is even more useful if your code is used in a multilingual environment, where values of your configuration are routinely overridden as translations.

Here are some examples of getting configuration with and without overrides.

```php
// Get the site name, with overrides.
$site_name = \Drupal::config('system.site')->get('name');

// Get the site name without overrides.
$site_name = \Drupal::config('system.site')->getOriginal('name', FALSE);
// Note that mutable config is always override free.
$site_name = \Drupal::configFactory()->getEditable('system.site')->get('name');

```

You can also access the config storage directly via the `config.storage` service which implements [StorageInterface::read()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Config!StorageInterface.php/function/StorageInterface%3A%3Aread/8). However, this is rarely the correct way to access configuration.

### Language overrides

For example, for sending an email to a user, the configuration for that should come in the language of the user, not the page. So remember the language used previously, set the proper language based on the user, do the configuration based operations and set back the language:

```php
// Load the language_manager service
$language_manager = \Drupal::service('language_manager');

// Get the target language object
$langcode = $account->getPreferredLangcode();
$language = $language_manager->getLanguage($langcode);

// Remember original language before this operation.
$original_language = $language_manager->getConfigOverrideLanguage();
// Set the translation target language on the configuration factory.
$language_manager->setConfigOverrideLanguage($language);

$mail_config  = \Drupal::config('user.mail');

// Now send email based on $mail_config which is in the proper language.

// Set the configuration language back.
$language_manager->setConfigOverrideLanguage($original_language);

```

The language override system also uses configuration storage to store the overrides (unlike `global $config` based overrides). The language overrides are stored in files named after their base file. So if there is a language-specific override for the above-mentioned`user.mail` configuration file, it would be named `language.config.$langcode.user.mail`. The override files are named with a `language.config.` prefix, then a language code, and then the original configuration key. Storing the files with regular configuration ensures configuration translations are staged and can be diff'd for changes just like the base configuration.

How do these language override files get created in the first place? Locale module integrates with system events to create translation files for shipped configuration based on [the configuration schema information](http://drupal.org/node/1905070). See [#1905152: Integrate config schema with locale, so shipped configuration is translated](https://www.drupal.org/project/drupal/issues/1905152 "Status: Closed (fixed), Assigned to: alexpott") for background information about that. There is also the core Configuration Translation module which provides an overall user interface to translating configuration based on the schemas. It works for shipped as well as user-created configuration and works with the same language override files.

### Providing overrides from modules

It is also possible to provide module level overrides from any module. While Drupal core supports global overrides as well as language-based overrides, there are use cases for many other kinds of overrides, including user role-based, context-based, domain-based, group-based, and so on. Modules can define their own criteria to do these overrides.

When the ConfigFactory collects module provided overrides, it calls any services tagged with `config.factory.override`:

`config_example.services.yml`

```php
services:
  config_example.overrider:
    class: Drupal\config_example\Config\ConfigExampleOverrides
    tags:
      - {name: config.factory.override, priority: 5}

```

Set the subscriber priority to specify the priority of the overrides. Overrides with higher priority will trump those with lower priority (in case of the same config name).

`src/Config/ConfigExampleOverrides.php`

```php
namespace Drupal\config_example\Config;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Config\ConfigFactoryOverrideInterface;
use Drupal\Core\Config\StorageInterface;

/**
 * Example configuration override.
 */
class ConfigExampleOverrides implements ConfigFactoryOverrideInterface {

  /**
   * {@inheritdoc}
   */
  public function loadOverrides($names) {
    $overrides = [];
    if (in_array('system.site', $names)) {
      $overrides['system.site'] = ['name' => 'Overridden site name!'];
    }
    return $overrides;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheSuffix() {
    return 'ConfigExampleOverrider';
  }
  
  /**
   * {@inheritdoc}
   */
  public function getCacheableMetadata($name) {
    return new CacheableMetadata();
  }

  /**
   * {@inheritdoc}
   */
  public function createConfigObject($name, $collection = StorageInterface::DEFAULT_COLLECTION) {
    return NULL;
  }

}

```

Configuration overrides themselves to operate at three distinct layers: language, modules and settings.php, with the last of these taking precedence. Overrides in settings.php take precedence over values provided by modules. Overrides provided by modules take precedence over language. The event subscriber priority for module overrides only sets priority versus the other module overrides, it cannot be used to set higher priority in relation to language or settings.php overrides.

Keep in mind that configuration forms in Drupal Core don't use the overridden values of the configuration. With the module override example above, you will not see "Overridden site name!" at `/admin/config/system/site-information`.

It is worth reiterating that if you need to read the original configuration values in an override, for example, to compare or merge, you would need to load from the \\Drupal::configFactory and not \\Drupal::config to avoid a nested loop into your override: -

```php
$original = \Drupal::configFactory()->getEditable('system.site')->getOriginal('name', FALSE);

```

### Even more background information

The overrides system in its latest/current form was added in [#2098119: Replace config context system with baked-in locale support and single-event based overrides](https://www.drupal.org/project/drupal/issues/2098119 "Status: Closed (fixed), Assigned to: Gábor Hojtsy").

For historical/obsolete information see [#1646580: Implement Config Events and Listeners, and storage realms for localized configuration](https://www.drupal.org/project/drupal/issues/1646580 "Status: Closed (fixed), Assigned to: jhodgdon") where the configuration override system was originally introduced as well as [#1763640: Introduce config context to make original config and different overrides accessible](https://www.drupal.org/project/drupal/issues/1763640 "Status: Closed (fixed)") where it was substantially modified to work with contextual access. Language-specific overrides were added later in [#2020361: Create LanguageConfigContext to activate configuration overrides based on language](https://www.drupal.org/project/drupal/issues/2020361 "Status: Closed (fixed)").

### STILL MISSING FROM THIS DOCUMENTATION

Config overrides + cacheability metadata: [#2512718: EntityManager::getTranslationFromContext() should add the content language cache context to the entity](https://www.drupal.org/project/drupal/issues/2512718 "Status: Closed (fixed)")\+ [#2524082: Config overrides should provide cacheability metadata](https://www.drupal.org/project/drupal/issues/2524082 "Status: Closed (fixed)") \+ <https://www.drupal.org/node/2532882>