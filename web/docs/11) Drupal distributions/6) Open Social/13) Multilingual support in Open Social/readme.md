---
url: >-
  https://www.drupal.org/docs/distributions/open-social/multilingual-support-in-open-social
description: >-
  In Open Social release 1.11 (better) multilingual support was added. Social
  Language module An optional module called Social Language was added to the
  distribution with some default configuration and permissions. Enabling the
  Social Language module will enable also the Language, Interface translation,
  Configuration Translation and Content translation modules. All of them
  together ensure that menu links, account settings and emails as well as basic
  site information can be translated by the Site Manager. These translations
  only become available when multiple languages are enabled.
published_time: '2018-02-21T14:34:57+00:00'
modified_time: '2018-02-27T09:18:15+00:00'
---
In Open Social release 1.11 (better) multilingual support was added.

### Social Language module

An optional module called **Social Language** was added to the distribution with some default configuration and permissions.

Enabling the Social Language module will enable also the Language, Interface translation, Configuration Translation and Content translation modules. All of them together ensure that menu links, account settings and emails as well as basic site information can be translated by the Site Manager. These translations only become available when multiple languages are enabled.

### Language negotation

Open Social has support for, at least, detecting languages via the URL code or the User preference. You can change this at /admin/config/regional/language/detection. Selecting detection via User preference enables a field on the users settings page where the user can change the language to the ones available on the website.

### Adding languages

The Site Manager does not have the permission to administer languages, this is something only the Administrator of the website can do.

### Tip: keep English enabled

We advice to always keep English enabled even though you do not need it. Removing the language can also remove the ability to change and translate account settings and emails as well basic site information.

If you would like your website to be in a different language than English, try the following steps:

* Keep English enabled
* Add the language of your choosing
* Set the other language to default
* Go to /admin/config/regional/language/detection and remove any checkbox but **Selected language**.