---
url: >-
  https://www.drupal.org/docs/8/themes/bootstrap-4-sass-barrio-starter-kit-0/variablesscss
description: >-
  This file contains Bootstrap variables most suitable for personalization. The
  variables are not to markup your site, but to generate a custom Bootstrap,
  mainly from the color pallete. Defining primary and accent colors will
  generate the whole color schema using Google Material Design color management
  concept.
published_time: '2018-02-17T03:31:13+00:00'
modified_time: '2018-04-20T11:03:52+00:00'
---
This file contains Bootstrap variables most suitable for personalization.

The variables are not to markup your site, but to generate a custom Bootstrap, mainly from the color pallete.

Defining primary and accent colors will generate the whole color schema using Google Material Design color management concept.

For typography use typography.scss and for markup style.scss

```php
/* VARIABLES */

// colors
$primary-shade: #A8CF45;
$primary-light: lighten($primary-shade, 37%);
$primary-dark: darken($primary-shade, 12%);
$accent-shade: #0079C0;
$accent-light: lighten($accent-shade, 37%);
$accent-dark: darken($accent-shade, 12%);
// Reassign color vars to semantic color scheme
$red: #dc3545;
$yellow: #ffc107;
$green: #28a745;
$cyan: #17a2b8;
$gray-100: #f8f9fa !default;
$gray-800: #343a40 !default;
$theme-colors: ( primary: $accent-shade, secondary: $primary-shade, success: $green, info: $cyan, warning: $yellow, danger: $red, light: $gray-100, dark: $gray-800);
$brand-primary: $accent-shade;
//$brand-success: $green;
//$brand-info: $teal;
//$brand-warning: $orange;
//$brand-danger: $red;
$brand-inverse: $primary-shade;
// Body
//
// Settings for the `<body>` element.
//$body-bg: $white;
//$body-color: $gray-dark;
$inverse-bg: $primary-shade;
//$inverse-color: $gray-lighter;
// Links
//
// Style anchor elements.
$link-color: $accent-shade;
$link-decoration: none;
$link-hover-color: $accent-dark;
$link-hover-decoration: underline;
// Comments
$comment-spacer-x: 1.25em;
$comment-spacer-y: 1.25em;
```