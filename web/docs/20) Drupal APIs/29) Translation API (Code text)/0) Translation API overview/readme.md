---
url: https://www.drupal.org/docs/8/api/translation-api/overview
description: >-
  When you include text in code, and the text will be displayed in the Drupal
  user interface, it needs to be internationalized (prepared properly) so that
  it can be localized (translated), so that users can make Drupal sites that are
  completely displayed in different languages. In Drupal, all interface text
  must use English as its default language, as in previous versions of Drupal.
published_time: '2013-11-11T16:27:51+00:00'
modified_time: '2022-08-05T15:19:57+00:00'
---
When you include text in code, and the text will be displayed in the Drupal user interface, it needs to be internationalized (prepared properly) so that it can be localized (translated), so that users can make Drupal sites that are completely displayed in different languages.

In Drupal, all interface text must use English as its default language, as in previous versions of Drupal. Also, as in previous versions of Drupal, the project uses automatic mechanisms to extract translatable text strings from the code base, so that translation teams can use **[Drupal translations](https://localize.drupal.org)** to translate the text of Drupal Core and contributed projects.

This page describes how to put interface text into the code base so that it can be successfully extracted and translated, for Drupal 8\. The process for Drupal 7 and previous versions is described on [Localization API](https://www.drupal.org/developing/api/localization)

### PHP code: still use t() – with caveats

The [t() function](https://api.drupal.org/api/drupal/core%21includes%21bootstrap.inc/function/t/8) is still present in Drupal 8, as it was in Drupal 7 and previous versions of Drupal. In procedural code, you should still use t() to translate user interface text, or [formatPlural()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21StringTranslationTrait.php/function/StringTranslationTrait%3A%3AformatPlural/8.8.x) if plurals are involved.

However, the function has changed in Drupal 8: the back end is now a pluggable service and is backed by the [TranslationManager class](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21TranslationManager.php/class/TranslationManager/8). Thanks to this being a pluggable service, long standing feature requests like language fallbacks, support for informal/formal translations will be possible in contrib. These are not implemented in core.

This means that in most Drupal 8 object-oriented code (controllers, listeners, plugins, etc.), instead of using the global t() function, you should instead use dependency injection to obtain the translation service, define methods [t()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21StringTranslationTrait.php/function/StringTranslationTrait%3A%3At/8.8.x) and [formatPlural()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21StringTranslationTrait.php/function/StringTranslationTrait%3A%3AformatPlural/8.8.x) on your class, and call them to translate your code. Most base classes for plugins etc. include a `t()` method that relies on a local reference to a `TranslationManager`. For example, [ControllerBase::t()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21StringTranslationTrait.php/function/StringTranslationTrait%3A%3At/8), which actually comes from StringTranslationTrait (see below), is one of those methods.

**Note: Translatable string extraction relies on the translation method names being t() and formatPlural()!** For example, this will not work:

```php
// NOT WORKING CODE!
$this->stringTranslation->translate('Something');

```

because the translatable string extractor on <https://localize.drupal.org/> will only find your translatable strings based on the known patterns of t() and formatPlural().

### If there is no suitable base class

If there is no suitable base class for your task with a `t()` method, you can use the [StringTranslationTrait](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21StringTranslationTrait.php/8) to get t() and formatPlural() methods. Example:

```php
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\StringTranslation\TranslationInterface;
class MyClass {
  use StringTranslationTrait;

  /**
   * Constructs a MyClass object.
   *
   * @param \Drupal\Core\StringTranslation\TranslationInterface $string_translation
   *   The string translation service.
   */
  public function __construct(TranslationInterface $string_translation) {
    // You can skip injecting this service, the trait will fall back to \Drupal::translation()
    // but it is recommended to do so, for easier testability,
    $this->stringTranslation = $string_translation;
  }

  /**
   * Does something.
   */
  public function doSth() {
    // ...
    $string = $this->t('Something');
    // ...
  }

}

```

### Variables in user interface text

For the most part, you cannot use variables inside t() calls, because the pattern matching used to extract translatable text will not know what the variable values are, and therefore the text will not be translated. So, these calls will not work:

```php
// NON-WORKING CODE.
t($variable);
$this->t($prefix . ' something else ' . $suffix);

```

There are exceptions where you could call t($variable):  
\- If all possible values of the $variable have previously been passed into t() as literal strings.  
\- If the value of the $variable is coming from a recognized source of translatable text (see sections below), such as a YML or Twig file.

Note: If you need to substitute text into a string at run-time, t() and formatPlural()/format\_plural() functions and methods do support variable substitution. See [t()](https://api.drupal.org/api/drupal/core!includes!bootstrap.inc/function/t) and [formatPlural()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21TranslationInterface.php/function/TranslationInterface%3A%3AformatPlural) function/method documentation for details.

### Context in Drupal.t() and Drupal.formatPlural()

`t()` and `format_plural()` let you provide little bits of additional information to specify the context for shorter strings, so translators know how to translate ambiguous text. This feature is now extended to their Javascript counterparts `Drupal.t()` and `Drupal.formatPlural()`. You can retrieve the long month name translation of May (as opposed to the short version) with:

`Drupal.t('May', {}, {context: "Long month name"});`

### Translation in Javascript files

Like in Drupal 7, we still have here the `Drupal.t()` and `Drupal.formatPlural() `functions to translate our interface text. To be able to use them you need to require the `core/drupal` library as a dependency in your library entry.

```yaml
mymodule.mylibrary:
  version: VERSION
  js:
    myepic.js: {}
  dependencies:
    - core/drupal
```

After this, you need to follow some rules to work properly with your code. Because Drupal for performance reasons, will cache your translations and translatable text in a separate js file, you need to make sure the lookup mechanism can find your translatable text. For this some rules:

1. Don't make an alias for `Drupal.t` or `Drupal.formatPlural` functions, because the string directly looking for this as a beginning of a translation text. This also means you can't use packed (minified) files if you compile your code from i.e. ES6\. Allow Drupal to handle the aggregation and minification of the js files.
2. Use explicit strings in the functions.
3. If a parameter is not needed for your operation, use `{}` instead of `null`, because `null `is not accepted by the lookup mechanism.
4. If we need to use a parameter, the values and keys should be defined in the function, using a variable is not accepted by the lookup mechanism.
5. The lookup mechanism is triggered only at the cache rebuild.

According to the above rules some examples:

```php
// BAD, alias is not recognised.
const t = (str, args, options) => {
  Drupal.t(str, args, options);
}
t('Something to translate');

// BAD, dynamic text can't be translated. (* Predefinition required, see down.)
var x = 'Something to translate';
Drupal.t(x);

// BAD, variables are not recognized.
var args = {'@type': typeName};
Drupal.t('Comments to @type posts', args);

// BAD, null is not recognized.
Drupal.t('Something to translate', null, {context: 'Javascript'});

// GOOD.
Drupal.t('Something to translate');
Drupal.t('Comments to @type posts', {'@type': typeName});
Drupal.t('Something to translate', {}, {context: 'Javascript'});

// If it's needed to use a dynamic variable for the translation, then it's
// possible to do it in the following case if the possible strings are known.
Drupal.t('First text to translate');
Drupal.t('Second text to translate');
Drupal.t('Third text to translate');

var x;

// Here the x should be one of the previously declared text.
Drupal.t(x);
```

### Translatable text in various YML files

In Drupal 8, you can put text in certain defined places in various YML files, and it will be picked up as translatable strings and translated automatically:

1. Module names and descriptions in `*.info.yml` files are still found as translatable
2. `_title` (coupled with optional `_title_context`) key values under the `defaults` section of `*.routing.yml` files are found as translatable
3. `title` (coupled with optional `title_context`) key values in `*.links.action.yml`, `*.links.task.yml` and `*.links.contextual.yml` files are found as translatable

That these strings are found as translatable (and later on `t()`\-ed in the process of handling them) also means that any code generating them dynamically should take care of not translating them too soon. For example, if you need dynamic titles in your local tasks or actions, extend the base class and override the `getTitle()` method to run the translation the right way. [Check out an example with local actions](https://drupal.org/node/2133247).

### Translation in annotation text

Classes with [annotations](https://api.drupal.org/api/drupal/core%21modules%21system%21core.api.php/group/annotation/8) serve to define entity types, plugins and so on. Annotations are not executable code as-is, so we need a specific syntax to mark strings to be translated. The `@Translation()` wrapper serves this purpose. It will run the text through `t()` when the annotation is evaluated. For example:

```php
/**
 * Defines the file entity class.
 *
 * @EntityType(
 *   id = "file",
 *   label = @Translation("File"),
 *   ....
 */
class File {
 }

```

It is also possible to provide context for annotation strings, with an additional context option: `@Translation("Text in context", context="Name of context")`. See the [Plugin API documentation](https://drupal.org/node/1882526) for more information about annotations.

### Translation in Twig templates

Drupal 8 incorporates a new templating system for HTML output generation called [Twig](http://twig.sensiolabs.org/) – see the [Drupal 8 theme guide](https://drupal.org/theme-guide/8). Twig does not use a native PHP format, so it needs its own solutions for string translations.

Simple text translation is possible with the `'t'` (or `'trans'`) filter, while a whole `{% trans %}` block is supported (as defined by the Twig i18n extension) for more complex scenarios, such as strings with placeholders and singular/plural combinations.

These two do the same; they run the text through `t()`:

```php
{{ 'Hello Earth.'|trans }}
{{ 'Hello Earth.'|t }}
```

The `'t'` filter supports placeholders in the same way as the PHP t() function:

```php
{{ 'Hello @username.'|t({'@username': username}) }}
```

although using the `{% trans %}` tag is more succint:

```php
{% trans %}Hello {{username}}.{% endtrans %}
```

Singular/plural pairs are possible. This will use `format_plural()`:

```php
{% set count = 1 %}
{% trans %}
  Hello star.
{% plural count %}
  Hello {{ count }} stars.
{% endtrans %}
```

Values are escaped by default. The `'raw'` filter can be used to skip escaping. The `'placeholder'` filter can be used to form a placeholder. The default behavior is equivalent to `@` in `t()`, while `'raw'` matches `!` and `'placeholder'` matches `%`:

```php
{% set string = '&"<>' %}
{% trans %}
  Escaped: {{ string }}
{% endtrans %}
{% trans %}
  Raw: {{ string|raw }}
{% endtrans %}
{% trans %}
  Placeholder: {{ string|placeholder }}
{% endtrans %}
```

These will translate `Escaped: @string`, `Raw: !string` and `Placeholder: %string` respectively.

Providing string context and specific languages are also possible. These are essentially passed on as arguments to `t()` and `format_plural()` respectively.

```php
{% trans with {'context': 'Long month name', 'langcode': 'hu'} %}
  May
{% endtrans %}
{% trans 'May' with {'context': 'Long month name', 'langcode': 'hu'} %}

```

This will translate _May_ as a long month name into Hungarian specifically.

### Translation for shipped configuration and configuration schemas

The default configuration is also shipped with Drupal core and Drupal 8 projects in the YAML file format. Most if not all default elements are shipped with this system, so your default menus, content types, fields, contact categories, vocabularies, views, and so on are included in the package this way.

Drupal 8 needed a way to extract translatable text out of these files, so a description format was added to describe the structure of these files: the configuration schema format. The schema has labels, structure and type information about the configuration data it defines. The labels become translatable pieces and part of the data becomes translatable based on the structure description and types applied. This is how Drupal can translate views, content types or vocabulary names and descriptions.

A simple example of default configuration is the default maintenance message in `system.maintenance.yml`:

```php
enabled: '0'
message: '@site is currently under maintenance. We should be back shortly. Thank you for your patience.'
langcode: en
```

This is described by the configuration schema system as follows (also in the YAML format):

```php
system.maintenance:
  type: mapping
  label: 'Maintenance mode'
  mapping:
    enabled:
      type: boolean
      label: 'Put site into maintenance mode'
    message:
      type: text
      label: 'Message to display when in maintenance mode'
    langcode:
      type: string
      label: 'Default language'

```

The schema describes `system.maintenance.yml` as a mapping of key-value pairs, the keys being enabled, message and langcode. Then each of those keys gets their types and labels associated. The labels in the schema become translatable and the message defined as type 'text' also carries on translatability from its type definition, so the shipped default message is available for translation as well on your site.

Read a lot more information about configuration schema, see the [configuration schema documentation](https://drupal.org/node/1905070).