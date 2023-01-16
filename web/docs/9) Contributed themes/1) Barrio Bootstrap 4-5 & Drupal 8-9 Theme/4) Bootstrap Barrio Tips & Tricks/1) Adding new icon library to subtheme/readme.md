---
url: >-
  https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-barrio-tips-tricks/adding-new-icon
description: >-
  Credit: gaspounet In YOURTHEME.libraries.yml, add these lines : fontawesome_5:
  version: VERSION css: component:
  //use.fontawesome.com/releases/v5.1.0/css/all.css: {} In YOURTHEME.theme,
  modify or add these lines : function
  YOURTHEME_form_system_theme_settings_alter(&$form, FormStateInterface
  $form_state) {
  $form['components']['navbar']['bootstrap_barrio_navbar_top_background']['#options']
  = array( 'bg-primary' => t('Primary'), 'bg-secondary' => t('Secondary'),
  'bg-light' => t('Light'), 'bg-dark' => t('Dark'), 'bg-white' => t('White'),
  'bg-transparent' => t('Transparent'), ); $form['com
published_time: '2018-06-25T16:19:50+00:00'
modified_time: '2020-05-25T13:27:26+00:00'
---
Credit: [gaspounet](https://www.drupal.org/u/gaspounet)

In YOURTHEME.libraries.yml, add these lines :

```php
fontawesome_5:
  version: VERSION
  css:
    component:
      //use.fontawesome.com/releases/v5.1.0/css/all.css: {}
```

In YOURTHEME.theme, modify or add these lines :

```php
function YOURTHEME_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $form['components']['navbar']['bootstrap_barrio_navbar_top_background']['#options'] = array(
      'bg-primary' => t('Primary'),
      'bg-secondary' => t('Secondary'),
      'bg-light' => t('Light'),
      'bg-dark' => t('Dark'),
      'bg-white' => t('White'),
      'bg-transparent' => t('Transparent'),
  );
  $form['components']['navbar']['bootstrap_barrio_navbar_background']['#options'] = array(
      'bg-primary' => t('Primary'),
      'bg-secondary' => t('Secondary'),
      'bg-light' => t('Light'),
      'bg-dark' => t('Dark'),
      'bg-white' => t('White'),
      'bg-transparent' => t('Transparent'),
  );
  
  $form['fonts']['icons']['bootstrap_barrio_icons']['#options']['fontawesome_5'] = 'Font Awesome 5';
  
}

function YOURTHEME_preprocess_page(&$variables)
{
  $icons = theme_get_setting('bootstrap_barrio_icons');
  if ($icons) {
    $variables['#attached']['library'][] = ( $icons == 'fontawesome_5' ? 'YOURTHEME' : 'bootstrap_barrio' ) . '/' . $icons;
  }
}
```

"Font Awesome 5" will now appear in your theme settings