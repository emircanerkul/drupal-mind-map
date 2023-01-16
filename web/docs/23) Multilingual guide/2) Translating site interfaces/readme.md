---
url: https://www.drupal.org/docs/multilingual-guide/translating-site-interfaces
description: >-
  When enabled, the core Interface Translation ("Locale" in versions before
  Drupal 8) module allows you to present your Drupal site in a language other
  than the default (English). You can use it to set up a multilingual web site
  or to replace the elements of the interface text with text which has been
  customized for your site. Whenever the Interface Translation module encounters
  text, it tries to translate it into the currently selected language. If a
  translation is not available, the string is remembered, so you can look up
  untranslated strings easily.
published_time: '2002-11-07T17:27:19+00:00'
modified_time: '2021-09-06T16:16:51+00:00'
---
When enabled, the [core](/glossary#core) _Interface Translation_ ("Locale" in versions before Drupal 8) module allows you to present your Drupal site in a language other than the default (English).

You can use it to set up a multilingual web site or to replace the elements of the interface text with text which has been customized for your site. Whenever the _Interface Translation_ module encounters text, it tries to translate it into the currently selected language. If a translation is not available, the string is remembered, so you can look up untranslated strings easily.

The [Localization Update](/node/1412862) module can automatically retrieve translations from <https://localize.drupal.org>. For languages where translation has already been done, you do not have to do anything other than [set up](/node/1412862) this module. In Drupal 6 and 7, the Localization Update module is a contributed module. For Drupal 8 and later, it is part of the core.

The _Interface Translation_ module provides two options for providing translations. The first is the integrated web interface, which you can use to search for untranslated strings and to specify their translations. An easier and less time-consuming method is to import existing translations for your language. These translations are available as _GNU gettext Portable Object files_ (_.po_ files for short). You can download translation files from the [Drupal translations server](http://localize.drupal.org).

If an existing translation does not meet your needs, the _.po_ files are easily edited with special editing tools. The _Interface Translation_ module's import feature allows you to add strings from such files into your site's database. The export functionality enables you to share your translations with others, generating _Portable Object_ files from your site's strings.

Note: Enabling the _Interface Translation_ module itself does not create or add any translations to the site. You need to import translations or create string translations by using _Translate Interface_ option (provided by the _Content Translation_ module from Drupal core for Drupal 6 onwards).

Note that if you are creating a website with right-to-left text direction, you'll need a theme which supports this, like the Garland core theme.

### Register a string with the Translate interface UI

If you are expecting a string provided by a core or contributed module to show up in the _Translate interface_ UI and do not see it, it is often because the string has not yet been registered within Drupal.

So, if there exists an untranslated string, e.g. `'this text'`, you must visit the URL that displays the text in question with a non-default language. For example, if `'this text'` shows up at `/some/path`, switch to a different language and then visit `/some/path`. This will register the `'this text'` string so it can then be found using the _Translate interface_ UI at `admin/config/regional/translate`.

Also, read about [the security implications of translations from localize.drupal.org](https://localize.drupal.org/privacy-and-security).