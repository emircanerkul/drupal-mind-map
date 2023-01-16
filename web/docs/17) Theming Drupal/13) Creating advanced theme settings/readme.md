---
url: >-
  https://www.drupal.org/docs/8/theming-drupal-8/creating-advanced-theme-settings
description: >-
  In the Drupal administration section, each theme has its own settings page at
  admin/appearance/settings/themeName. This page has a form with standard
  settings like “Logo image settings” and “Shortcut icon settings.” In Drupal 8,
  themes can modify the entire theme settings form by adding a PHP function to
  either the THEMENAME.theme file or to a theme-settings.php file. In one of
  those files, a theme should use
  THEMENAME_form_system_theme_settings_alter(&$form, $form_state) hook function.
published_time: '2015-11-26T20:12:55+00:00'
modified_time: '2022-11-29T05:04:22+00:00'
---
In the Drupal administration section, each theme has its own settings page at `admin/appearance/settings/themeName`. This page has a form with standard settings like “Logo image settings” and “Shortcut icon settings.”

In Drupal 8, themes can modify the entire theme settings form by adding a PHP function to either the `THEMENAME.theme` file or to a `theme-settings.php` file. In one of those files, a theme should use [THEMENAME\_form\_system\_theme\_settings\_alter(&$form, $form\_state)](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/function/hook%5Fform%5Fsystem%5Ftheme%5Fsettings%5Falter/8) hook function. See the [“Form API in Drupal 8”](https://www.drupal.org/node/2117411) and the complete list of [Form and render elements](https://api.drupal.org/api/drupal/elements/8), as well as the [hook\_form\_FORM\_ID\_alter() docs](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Form!form.api.php/function/hook%5Fform%5FFORM%5FID%5Falter/8) to learn the full flexibility of Forms API.

Here’s an example if you had a `foo` theme and wanted to add a textfield whose default value was `blue bikeshed`. Add the following to the `foo/foo.theme` file **or** to the `foo/theme-settings.php` file:

```php
function foo_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $form['foo_example'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Widget'),
    '#default_value' => theme_get_setting('foo_example'),
    '#description'   => t("Place this text in the widget spot on your site."),
  );
}

```

In order to set the default value for any form element you add, you’ll need to add a `config/install/THEME.settings.yml` file with a simple line: `SETTING_NAME: DEFAULT_VALUE`.

For our foo theme, you’d need to edit the `foo/config/install/foo.settings.yml` file and add this line:

```php
foo_example: blue bikeshed

```

In any of your theme’s PHP files, you can retrieve the value the user set by calling:

```php
$foo_example = theme_get_setting('foo_example');

```

Note that theme authors can create complex, dynamic forms using advanced Forms API (auto-completion, collapsible fieldsets etc.)

Note that when sub-themes installed - they do not inherit parent theme's settings set in `YOURPARENTTHEME.settings.yml` file. Sub-themes are expected to provide their own settings config files.