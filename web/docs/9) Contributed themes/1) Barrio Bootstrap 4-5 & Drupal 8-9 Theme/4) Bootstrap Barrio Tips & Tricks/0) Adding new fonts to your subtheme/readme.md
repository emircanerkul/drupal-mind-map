---
url: >-
  https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-barrio-tips-tricks/adding-new-fonts-to-your-subtheme
description: >-
  Credit: gaspounet In YOURTHEME.libraries.yml, add the google font or fonts you
  want, for example, OPEN SANS: open_sans: version: VERSION css: component:
  fonts/open_sans.css: {}
  //fonts.googleapis.com/css?family=Open+Sans:300,400,600,700: { type: external
  } In YOURTHEME.theme, modify or add these lines : function
  YOURTHEME_form_system_theme_settings_alter(&$form, FormStateInterface
  $form_state) {
  $form['components']['navbar']['bootstrap_barrio_navbar_top_background']['#options']
  = array( 'bg-primary' => t('Primary'), 'bg-secondary' => t('Secondary'),
  'bg-light' => t('Light'), 'bg-dark' =
published_time: '2018-06-25T16:22:10+00:00'
modified_time: '2022-08-02T15:18:29+00:00'
---
Credit: [gaspounet](https://www.drupal.org/u/gaspounet)

In YOURTHEME.libraries.yml, add the google font or fonts you want, for example, OPEN SANS:

```php
open_sans:
  version: VERSION
  css:
    component:
      fonts/open_sans.css: {}
      //fonts.googleapis.com/css?family=Open+Sans:300,400,600,700: { type: external }
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

  $form['fonts']['fonts']['bootstrap_barrio_google_fonts']['#options']['open_sans'] = 'Open Sans';
  $form['fonts']['fonts']['bootstrap_barrio_google_fonts']['#options']['roboto'] = 'Roboto';
  $form['fonts']['fonts']['bootstrap_barrio_google_fonts']['#options']['sansita_swashed'] = 'Sansita Swashed';
  
}

function YOURTHEME_preprocess_page(&$variables)
{
  $fonts = theme_get_setting('bootstrap_barrio_google_fonts');
  if ($fonts)
    $variables['#attached']['library'][] = (in_array($fonts, ['open_sans', 'roboto', 'sansita_swashed']) ? 'YOURTHEME' : 'bootstrap_barrio' ) . '/' . $fonts;
}
```

Create a folder "fonts" in YOURTHEME folder and create a file for every font combination selection, such as open\_sans.css where you can put these lines (just as an example) :

```php
h1, h2, h1 a, h2 a {
    font-family: 'Open Sans', sans-serif;
}
h1, h1 a {
	font-weight: 700;
    }
h2, h2 a {
	font-weight: 700;
    }
h3, h4, h5, h6, h3 a {
    font-family: 'Open Sans', sans-serif;
}
h3, h3 a {
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    }
body, p, a, li {
    font-family: 'Open Sans', sans-serif;
}
```

"Open Sans" and more of your additions will now appear in the fonts list in your theme settings.