---
url: https://www.drupal.org/docs/multilingual-guide/install-a-language
description: >-
  Add a language Enable the Interface Translation module Go to the language
  configuration page: Configuration > Regional and language > Languages
  (admin/config/regional/language) On that page: Add the languages you want Set
  a default language. Never change the default language, otherwise things will
  break! Continue with the Automatic or Manual method below to update your
  translations. Update translations (automatic method) Make sure the "Update
  manager" module is enabled. This module also takes care of updating
  translations.
published_time: '2016-09-07T20:02:22+00:00'
modified_time: '2022-11-14T09:55:05+00:00'
---
### Add a language

1. Enable the Interface Translation module
2. Go to the language configuration page:  
   * _Configuration > Regional and language > Languages_  
    (`admin/config/regional/language`)  
On that page:
3. Add the languages you want
4. Set a default language.  
**Never change the default language, otherwise things will break!**
5. Continue with the Automatic or Manual method below to update your translations.

### Update translations (automatic method)

1. Make sure the "Update manager" module is enabled. This module also takes care of updating translations.
2. Go to Reports > Available Translation Updates (`admin/reports/translations`).
3. Click the link "Check manually". This will compile a list of all available translations. This can take a few minutes.

### Update translations (manual method)

1. Download the translation files you want from [localize.drupal.org](http://localize.drupal.org).
2. Upload the translation files to your site:  
   * _Configuration > Regional and language > Translate Interface > Import_  
    (`admin/config/regional/translate/import`)