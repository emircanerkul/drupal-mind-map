Unlike previous versions of Drupal, most of the functionality that you need to build a multi-lingual site is provided by the following 4 modules in [Drupal core](/node/3060), rather than a suite of many contributed modules. To enable these modules, you'll need to go to the "Extend" administration page.

### Language module

Located at [core/modules/language/language.module](https://api.drupal.org/api/drupal/core%21modules%21language%21language.module/8.6.x)

The base module needed for any non-English or multi-lingual site.  
Allows users to configure languages and how page languages are chosen, and apply languages to content.

Provides the following functionality:

* Enable any non English language for your site's content (one or more)
* We can assign a language to everything: nodes, users, views, blocks, menus
* Two special type languages (Not specified/Not applicable)
* URL negotiation enabled by default
* Browser language detection made configurable with external language codes
* Fallback to selected language if language detection fails
* Admin interface language selection option per user

**Issue Queue for 8.x**  
[http://drupal.org/project/issues/drupal?text=&status=Open&priorities=All...](http://drupal.org/project/issues/drupal?text=&status=Open&priorities=All&categories=All&version=8.x&component=language.module)

### Locale (Interface Translation) module 

Located at [core/modules/locale/locale.module](https://api.drupal.org/api/drupal/core%21modules%21locale%21locale.module/8.6.x)

Translates the built-in user interface, your added modules and themes.

* Automated downloads & updates
* English customizable/removable, no more need to use English as the default language
* Built-in translation UI revamped for easier editing
* Plural version editable on an integrated interface
* Custom (local) translations are protected and exportable

### Content Translation module

Located at [core/modules/content\_translation/content\_translation.module](https://api.drupal.org/api/drupal/core%21modules%21content%5Ftranslation%21content%5Ftranslation.module/8.5.x)

Allow users to translate content entities.  
Allows you to translate your site content, including pages, taxonomy terms, blocks, etc., into different languages.

* Field-level configurability
* Applies to all content
* Views integrated
* Exposed language information via search API
* Per-language content access

### Configuration Translation

Located at [core/modules/config\_translation/config\_translation.module](https://api.drupal.org/api/drupal/core%21modules%21config%5Ftranslation%21config%5Ftranslation.module/8.5.x)

Provides a translation interface for configuration.  
Allows you to translate text that is part of the configuration, such as field labels, the text used in Views, etc.

* All configuration is translatable (roles, text formats, blocks, views, panels, etc.)
* Built-in responsive translation interface
* All shipped are pre-translatable on localize.drupal.org