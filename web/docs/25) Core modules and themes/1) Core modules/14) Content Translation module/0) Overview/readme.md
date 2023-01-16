---
url: https://www.drupal.org/docs/8/core/modules/content-translation/overview
description: >-
  The Content Translation module allows you to translate content, comments,
  custom blocks, taxonomy terms, users and other content entities. Together with
  the modules Language, Configuration Translation, and Interface Translation, it
  allows you to build multilingual websites. Uses Enabling translation In order
  to translate content, the website must have at least two languages. When that
  is the case, you can enable translation for the desired content entities on
  the Content language page.
published_time: '2017-11-01T04:16:26+00:00'
modified_time: '2022-11-09T03:31:03+00:00'
---
The Content Translation module allows you to translate content, comments, custom blocks, taxonomy terms, users and other content entities. Together with the modules [Language](https://www.drupal.org/es/docs/user%5Fguide/es/language-add.html), [Configuration Translation](https://www.drupal.org/docs/8/core/modules/config-translation), and [Interface Translation](https://www.drupal.org/docs/multilingual-guide/translating-site-interfaces), it allows you to build multilingual websites.

### Uses

Enabling translation

In order to translate content, the website must have at least two languages. When that is the case, you can enable translation for the desired content entities on the Content language page. When enabling translation you can choose the default language for content and decide whether to show the language selection field on the content editing forms.

Enabling field translation

You can define which fields of a content entity can be translated. For example, you might want to translate the title and body field while leaving the image field untranslated. If you exclude a field from being translated, it will still show up in the content editing form, but any changes made to that field will be applied to _all_ translations of that content.

Translating content

If translation is enabled you can translate a content entity via the Translate tab (or Translate link). The Translations page of a content entity gives an overview of the translation status for the current content and lets you add, edit, and delete its translations. This process is similar for every translatable content entity on your site.

Changing the source language for a translation

When you add a new translation, the original text you are translating is displayed in the edit form as the _source_. If at least one translation of the original content already exists when you add a new translation, you can choose either the original content (default) or one of the other translations as the source, using the select list in the Source language section. After saving the translation, the chosen source language is then listed on the Translate tab of the content.

Setting status of translations

If you edit a translation in one language you may want to set the status of the other translations as _out-of-date_. You can set this status by selecting the _Flag other translations as outdated_ checkbox in the Translation section of the content editing form. The status will be visible on the Translations page.