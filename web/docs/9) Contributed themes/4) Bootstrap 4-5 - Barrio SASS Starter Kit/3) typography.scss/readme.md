---
url: >-
  https://www.drupal.org/docs/contributed-themes/bootstrap-4-sass-barrio-starter-kit/typographyscss
description: >-
  Personalization of typography settings. Import external fonts using @import on
  this file /* TYPOGRAPHY */ /* Google Fonts */ //@import
  url("https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic,900,900italic");
  //@import
  url("https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,800,900");
  // font families $font-lato: 'Lato', Arial, Verdana, sans-serif;
  $font-raleway: 'Raleway', Arial, Verdana, sans-serif; // Fonts // // Font,
  line-height, and color for body text, headings, and more.
published_time: '2018-02-17T03:39:17+00:00'
modified_time: '2020-08-05T16:01:50+00:00'
---
Personalization of typography settings.

Import external fonts using @import on this file

```php
/* TYPOGRAPHY */


/* Google Fonts */

//@import url("https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic,900,900italic");
//@import url("https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,800,900");
// font families
$font-lato: 'Lato',
Arial,
Verdana,
sans-serif;
$font-raleway: 'Raleway',
Arial,
Verdana,
sans-serif;
// Fonts
//
// Font, line-height, and color for body text, headings, and more.
$font-family-sans-serif: -apple-system,
system-ui,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
"Helvetica Neue",
Arial,
sans-serif !default;
$font-family-serif: Georgia,
"Times New Roman",
Times,
serif !default;
$font-family-monospace: Menlo,
Monaco,
Consolas,
"Liberation Mono",
"Courier New",
monospace;
$font-family-base: $font-family-sans-serif;
$font-size-base: 1rem; // Assumes the browser default, typically `16px`
$font-size-lg: 1.25rem;
$font-size-sm: .875rem;
$font-size-xs: .75rem;
$font-weight-normal: normal;
$font-weight-bold: bold;
$font-weight-base: $font-weight-normal;
$line-height-base: 1.5;
$font-size-h1: 2.5rem;
$font-size-h2: 2rem;
$font-size-h3: 1.75rem;
$font-size-h4: 1.5rem;
$font-size-h5: 1.25rem;
$font-size-h6: 1rem;

```