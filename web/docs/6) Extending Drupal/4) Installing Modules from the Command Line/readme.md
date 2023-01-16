---
url: >-
  https://www.drupal.org/docs/extending-drupal/installing-modules-from-the-command-line
description: >-
  In addition to installing modules using the UI, you may also download and
  install modules from the command line: The recommended way to download modules
  (and themes) is with Composer. However, you may still use Drush 8 or Drupal
  Console to download the modules, but it does not adjust your composer.json
  file. Both Drush and Drupal Console will install modules and themes for you.
  (In Drupal 8 installing and enabling a module is the same.) Downloading and
  installing modules from the command line is the fastest way to extend your
  installation.
published_time: '2017-01-21T18:26:40+00:00'
modified_time: '2022-12-31T13:25:20+00:00'
---
In addition to installing modules using the UI, you may also download and install modules from the command line:

* The recommended way to [download modules (and themes) is with Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies#adding-modules). However, you may still use Drush 8 or Drupal Console to download the modules, but it does not adjust your composer.json file.
* Both [Drush](http://www.drush.org) and [Drupal Console](https://drupalconsole.com/) will install modules and themes for you. (In Drupal 8 installing and enabling a module is the same.)

Downloading and installing modules from the command line is the fastest way to extend your installation.

### Drush

In Drush 8 you can download a module using a command:

```php
drush dl module_name
```

To install a module using Drush, execute the command below:

```php
drush en module_name
```

Clear the cache using a command

```php
drush cr
```

Go to the browser refresh the page. You will see the functionality of the module is added to the site.

Be sure that your version of drush is appropriate for your version of drupal. Otherwise you might encounter errors. See the documentation on [installing drush](https://docs.drush.org/en/master/install/).

### Drupal Console

To install a module with Drupal console, execute the command below:

```php
drupal moi module_name
```

With Drupal Console, you can download a module using

```php
drupal mod module_name
```