---
url: >-
  https://www.drupal.org/docs/drupal-apis/layout-api/how-to-upgrade-from-layout-plugin
description: >-
  At this time, Layout plugin and Layout discovery modules cannot be run at the
  same time in a Drupal 8.3.x instance. (See issue: [#2867795]) Try the
  following process to move from Layout plugin to Layout discovery: Remove or at
  least disable any contrib product that relies on Layout plugin; Disable (maybe
  even delete) layout plugin Update database schema. It is best to use the 4.x
  branch of the following modules when completing this transition: Display Suite
  8.3.x (beta version available). Panels 8.4.x (in development). Panelizer 8.4.x
  (beta version available).
published_time: '2017-04-05T17:20:23+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
At this time, [Layout plugin](drupal.org/project/layout%5Fplugin) and Layout discovery modules cannot be run at the same time in a Drupal 8.3.x instance. (See issue: [#2867795: White screen (WSOD @ Drupal 8.3) ERROR: Cannot use object of type as array ](https://www.drupal.org/project/layout%5Fplugin/issues/2867795 "Status: Closed (won't fix)"))

Try the following process to move from Layout plugin to Layout discovery:

1. Remove or at least disable any contrib product that relies on Layout plugin;
2. Disable (maybe even delete) layout plugin
3. Update database schema.

It is best to use the 4.x branch of the following modules when completing this transition:

* [Display Suite](https://www.drupal.org/project/ds) 8.3.x (beta version available).
* [Panels](https://www.drupal.org/project/panels) 8.4.x (in development).
* [Panelizer](https://www.drupal.org/project/panelizer) 8.4.x (beta version available).