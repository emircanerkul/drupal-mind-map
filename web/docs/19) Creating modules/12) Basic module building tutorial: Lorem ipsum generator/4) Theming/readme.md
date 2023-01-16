---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/step-by-step-tutorial/theming
description: >-
  Part III of A practical guide to building basic Drupal 8 modules From .info to
  tests, just the basics loremipsum.module /** * Implements hook_theme(). */
  function loremipsum_theme($existing, $type, $theme, $path) { $variables = [
  'loremipsum' => [ 'variables' => [ 'source_text' => NULL, ], 'template' =>
  'loremipsum', ], ]; return $variables; } Another reason not to ditch the
  .module file is because that's where hook_theme() goes.
published_time: '2015-08-31T16:45:07+00:00'
modified_time: '2021-03-09T15:07:30+00:00'
---
_Part III of [A](https://www.drupal.org/docs/8/creating-custom-modules/a-practical-guide-to-building-basic-drupal-8-modules)_[ practical guide to building basic Drupal 8 modules](https://www.drupal.org/docs/8/creating-custom-modules/a-practical-guide-to-building-basic-drupal-8-modules)  
_From .info to tests, just the basics_