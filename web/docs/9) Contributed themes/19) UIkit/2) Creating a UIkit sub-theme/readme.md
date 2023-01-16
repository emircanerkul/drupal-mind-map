---
url: >-
  https://www.drupal.org/docs/contributed-themes/uikit/creating-a-uikit-sub-theme
description: >-
  This guide provides easy-to-follow instructions on how to use Drush to create
  a UIkit sub-theme. Note: These instructions do not work when using Drush 9.
  See bug report Command "uikit-sk" is not defined. Drush integration does not
  work with Drush 9. Drush is a command line shell and Unix scripting interface
  for Drupal. Drush core ships with lots of useful commands for interacting with
  code like modules/themes/profiles. Similarly, it runs update.php, executes sql
  queries and DB migrations, and misc utilities like run cron or clear cache.
  Drush can be extended by 3rd party commandfiles.
published_time: '2017-05-29T20:58:22+00:00'
modified_time: '2018-09-28T01:52:39+00:00'
---
This guide provides easy-to-follow instructions on how to use Drush to create a UIkit sub-theme.

_**Note:** These instructions do not work when using Drush 9\. See bug report [Command "](https://www.drupal.org/project/uikit/issues/2965782)_ _[uikit](https://www.drupal.org/project/uikit/issues/2965782)_ _[\-](https://www.drupal.org/project/uikit/issues/2965782)_ _[sk](https://www.drupal.org/project/uikit/issues/2965782)_ _[" is not defined. Drush integration does not work with Drush 9](https://www.drupal.org/project/uikit/issues/2965782)._

Drush is a command line shell and Unix scripting interface for Drupal. Drush core ships with lots of useful commands for interacting with code like modules/themes/profiles. Similarly, it runs update.php, executes sql queries and DB migrations, and misc utilities like run cron or clear cache. Drush can be extended by [3rd party commandfiles](https://www.drupal.org/project/project%5Fmodule?f[2]=im%5Fvid%5F3%3A4654). To learn more about Drush, including how to install it, visit [Drush docs](http://docs.drush.org/en/8.x/).

We have added Drush integration to all four development branches to support generating a UIkit sub-theme from the command line. The Drush command `uikit-starterkit` (alias `uikit-sk`) uses the STARTERKIT now included with the project.

#### Usage example

```php
drush uikit-sk machine_name "Theme name" --path=sites/default/themes --description="Awesome theme description."
```

`machine_name`, `--path` and `--description` are all optional; only the theme name (wrapped in double-quotes) is required. Use `drush uikit-sk --help` to view more detailed help information. If Drush reports it cannot find the command, be sure to run `drush cc drush` to clear Drush's cache.

Once the sub-theme has been created you can begin customizing the sub-theme. The file structure for the sub-theme mirrors the file structure [Drupal recommends](https://www.drupal.org/docs/8/theming-drupal-8/drupal-8-theme-folder-structure) to make it easy to find the files and functions you want to edit. The only main difference is where common theme functions are located, which is discussed in the next section.

### Theme functions

Common themeing functions have been split up and placed into relative include files in order to make it easier to locate a function you wish to edit/create. All theme functions (template\_preprocess\_HOOK(), hook\_HOOK\_alter(), theme\_HOOK(), etc.) can be found under the `includes` directory of the sub-theme.

#### Sub-theme `includes` directory structure:

```php
|-includes
  |  |-alter.inc
  |  |-preprocess.inc
  |  |-process.inc
  |  |-theme.inc
```

The filename of each include file makes it easy to understand which themeing functions are located where. Common functions you will utilize during development already exist in some of these files, although they are commented out by default.

To enable the use of these functions, simply change:

```php
/**
 * Implements hook_theme().
 */
/* -- Delete this line if you want to use this function
function amazing_name_theme($existing, $type, $theme, $path) {
}
// */
```

to

```php
/**
 * Implements hook_theme().
 */
function amazing_name_theme($existing, $type, $theme, $path) {
}
```

Be sure to clear the cache in order for the function you uncommented to be recognized by Drupal.

To learn more about what you can do with your UIkit sub-theme, read the [Themeing Drupal 8](https://www.drupal.org/docs/8/theming) documentation guide.