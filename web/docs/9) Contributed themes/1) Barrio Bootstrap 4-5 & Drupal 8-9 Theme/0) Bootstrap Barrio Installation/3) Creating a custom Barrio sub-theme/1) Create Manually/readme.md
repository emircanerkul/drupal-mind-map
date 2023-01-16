Copy the `subtheme`folder on your `/themes/custom` directory.

Rename the `subtheme`folder to your custom theme name, for example `yourname`

Rename the following files from `bootstrap_barrio_subtheme` to `yourname`:  
`bootstrap_barrio_subtheme.theme` to `yourname.theme`  
`bootstrap_barrio_subtheme.info.yml `to `yourname.info.yml`  
`bootstrap_barrio_subtheme.libraries.yml`to `yourname.libraries.yml`  
`/config/install/bootstrap_barrio_subtheme.settings.yml`to `/config/install/yourname.settings.yml`  
`/config/schema/bootstrap_barrio_subtheme.schema.yml`to `/config/schema/yourname.schema.yml`

**Edit the file yourname.info.yml**

`name: YourName
type: theme
description: 'Your Description.'
version: VERSION
core: 8.x
base theme: bootstrap_barrio
libraries:
- yourname/bootstrap_cdn
- yourname/global-styling`

Make sure that `yourname/bootstrap_cdn` is the [Bootstrap library you want](https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-libraries-load) (CDN or local).

**Delete the following:**

```php
# Information added by Drupal.org packaging script on 2018-08-09
version: '8.x-4.17'
core: '8.x'
project: 'bootstrap_barrio'
datestamp: 1533828192
```

**Edit /config/schema/yourname.schema.yml**

```php
# Schema for the configuration files of the Bootstrap Barrio Subtheme.

yourname.settings:
type: theme_settings
label: 'Yourname settings'
```

**Edit /js/global.js line 10:**

`Drupal.behaviors.yourname = {`

**Edit /color/color.inc**

line 117:

`// Preview files.
'preview_library' => 'yourname/color.preview',
'preview_html' => 'color/preview.html',`

line 126:

`'logo' => theme_get_setting('logo.url', 'yourname'), `

**Edit /color/preview.html line 5**

Change image source from:

`<div class="color-preview-logo"><img src="../../../themes/bootstrap_barrio_subtheme/logo.svg" alt="Site Logo" /> `

to:

`<div class="color-preview-logo"><img src="../../../themes/yourname/logo.svg" alt="Site Logo" /> `

Note: If your theme is placed in `contrib` folder, the path should reflect it:

`<div class="color-preview-logo"><img src="../../../themes/contrib/yourname/logo.svg" alt="Site Logo" /> `

**Edit yourname.theme**

Rename the function from:

`function bootstrap_barrio_subtheme_form_system_theme_settings_alter(&$form, FormStateInterface $form_state)`

to:

`function yourname_form_system_theme_settings_alter(&$form, FormStateInterface $form_state)`

For a complete explanation on how to write sub-themes on Drupal 8 please refer to the [Creating a Drupal 8 sub-theme Guide](https://www.drupal.org/docs/8/theming-drupal-8/creating-a-drupal-8-sub-theme-or-sub-theme-of-sub-theme)