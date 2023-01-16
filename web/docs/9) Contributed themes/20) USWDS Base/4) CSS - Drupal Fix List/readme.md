---
url: https://www.drupal.org/docs/contributed-themes/uswds-base/css-drupal-fix-list
description: >-
  This page will be an ever growing list of fixes/reference for using USWDS with
  Drupal. Please note, these items will also be included with the example base
  theme for current and future users. 1. Full Width: This CSS will expand the
  current theme out to almost the full page width versus the default centered
  box type look. /* EXAMPLE: Expand theme to full width */ @media (min-width:
  64em) { .usa-header--extended .usa-navbar , .usa-header--extended
  .usa-nav__inner { max-width: none; } } div.usa-banner__inner ,
  div.grid-container { max-width: none; } 2.
published_time: '2019-06-02T17:30:05+00:00'
modified_time: '2022-06-22T14:40:51+00:00'
---
### This page will be an ever growing list of fixes/reference for using USWDS with Drupal.

Please note, these items will also be included with the example base theme for current and future users.

#### 1\. Full Width: This CSS will expand the current theme out to almost the full page width versus the default centered box type look.

```php
/*

EXAMPLE: Expand theme to full width

 */
@media (min-width: 64em) {
    .usa-header--extended .usa-navbar
    , .usa-header--extended .usa-nav__inner {
        max-width: none;
    }
}

div.usa-banner__inner
, div.grid-container {
    max-width: none;
}

```

#### 2\. Form width (USWDS): Personally, I'm not a fan of how USWDS shrinks all form items to a small max-width. For some of my own special form interfaces, this is a big no-go. Here's a fix to help you move forward with styling.

```php
/*

EXAMPLE: Fix small USWDS form size issue

 */
@media (min-width: 30em) {
    .usa-form {
        max-width: none;
    }
}

```

#### 3\. Required Fields: add an asterisk to Required fields on forms.

```php
/*

EXAMPLE: add asterisk to any required field on a form, optionally add color

*/
.form-required::after {
  display: inline-block;
  margin-right: 0.15em;
  margin-left: 0.15em;
  content: "*";
  color: #d72222;  //optional: add a red color
}
```

#### 4\. Make skip link visible on focus as per '**WCAG 2.4.1 Bypass Blocks'**.

```php
/*

EXAMPLE: Add missing style to existing built-in class "focusable" 
To make skip links, for instance, visible on focus

*/
body a.usa-sr-only.focusable {
  background: #1e384b;
  color: #fff;
  left: 50%;
  padding: .5rem 1rem;
  position: absolute;
  transform: translateY(-100%);
}

body a.usa-sr-only.focusable:focus {
    transform: translateY(0%)
 }

```

#### 5\. Can't use certain classes in views

USWDS uses colons in the classes for breakpoints, e.g. .tablet:col-4, .mobile:padding-2

A known bug with Drupal removes the colon and any words that come before it from classes set in views. Best case would be that USWDS stops using colons. But in the meantime, check these issues for progress:

* <https://www.drupal.org/project/drupal/issues/3187258>
* <https://www.drupal.org/project/drupal/issues/2916377>