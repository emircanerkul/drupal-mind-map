---
url: >-
  https://www.drupal.org/docs/contributed-themes/bulma/how-to-install-bulma-theme
description: >-
  Install Bulma theme as usual in Drupal 8 (see Drupal 8 docs). Create your own
  subtheme with drush command (please note this no longer works with Drush 9 or
  later, see [#2960328]) drush bulma "my sub-theme" or step-by-step, see
  documentation Customize Sass (SCSS files) inside your sub-theme which you have
  created. (Not inside base theme) By default, Bulma uses a CDN. If you wish to
  instead use a local version, download the latest Bulma release and install it
  at libraries/bulma.
published_time: '2017-06-28T16:35:39+00:00'
modified_time: '2021-05-11T12:52:00+00:00'
---
1. Install [Bulma theme](https://drupal.org/project/bulma) as usual in Drupal 8 (see [Drupal 8 docs](https://www.drupal.org/docs/8/extending-drupal-8/installing-themes)).
2. Create your own subtheme with drush command (please note this no longer works with Drush 9 or later, see [#2960328: Update Bulma Drush commands to Drush 9](https://www.drupal.org/project/bulma/issues/2960328 "Status: Closed (won't fix)"))  
```php  
drush bulma "my sub-theme"  
```  
or step-by-step, see [documentation](https://www.drupal.org/docs/8/themes/bulma-css/how-to-create-a-bulma-subtheme)
3. Customize Sass (SCSS files) inside your sub-theme which you have created. _(Not inside base theme)_
4. By default, Bulma uses a CDN. If you wish to instead use a local version, [download](https://github.com/jgthms/bulma/releases) the latest Bulma release and install it at libraries/bulma. If using a custom Bulmaswatch theme (see the theme settings), you may also [download](https://github.com/jenil/bulmaswatch/releases) the latest Bulmaswatch release to libraries/bulmaswatch.

Additionally, check theme settings page to activate specific features.