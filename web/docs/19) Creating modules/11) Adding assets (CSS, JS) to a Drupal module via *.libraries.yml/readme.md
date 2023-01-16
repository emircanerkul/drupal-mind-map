---
url: >-
  https://www.drupal.org/docs/develop/creating-modules/adding-assets-css-js-to-a-drupal-module-via-librariesyml
description: >-
  This documentation is for modules. For themes, see Adding stylesheets (CSS)
  and JavaScript (JS) to a Drupal theme. In Drupal 8 and later versions,
  stylesheets (CSS) and JavaScript (JS) are loaded through the same system for
  modules (code) and themes, for everything: asset libraries. Asset libraries
  can contain one or more CSS assets, one or more JS assets and one or more JS
  settings. Drupal uses a high-level principle: assets (CSS or JS) are still
  only loaded if you tell Drupal it should load them.
published_time: '2014-05-27T10:44:03+00:00'
modified_time: '2022-12-29T20:14:59+00:00'
---
**This documentation is for modules. For themes, see [Adding stylesheets (CSS) and JavaScript (JS) to a Drupal theme](/node/2216195)**.

In Drupal 8 and later versions, stylesheets (CSS) and JavaScript (JS) are loaded through the same system for modules (code) and themes, for everything: asset libraries. Asset libraries can contain one or more CSS assets, one or more JS assets and one or more JS settings.

**Drupal uses a high-level principle: assets (CSS or JS) are still only loaded if you tell Drupal it should load them. Drupal does not load all assets (CSS/JS) on all pages because this is bad for front-end performance.**