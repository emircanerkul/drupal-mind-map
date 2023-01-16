---
url: >-
  https://www.drupal.org/docs/converting-drupal-7-modules-to-drupal-8/d7-to-d8-tutorial-pathinfo-module
description: >-
  This is a live step-by-step tutorial of my process of porting pathinfo module
  from Drupal 7.x to Drupal 8.x as part of the global sprint weekend, March
  9th-10th, 2013. The commit of Drupal 8 I was working against is: * 957b556 -
  (HEAD, origin/HEAD, origin/8.x, 8.x) Issue #1932596 by ACF: Change site_name()
  into config in userpasswordreset.test and formtest. (4 hours ago)
  Prerequisites I installed a copy of Drupal 8 locally to test against.
published_time: '2013-03-09T18:59:36+00:00'
modified_time: '2016-12-20T12:36:26+00:00'
---
This is a live step-by-step tutorial of my process of porting [pathinfo](/project/pathinfo) module from Drupal 7.x to Drupal 8.x as part of the global sprint weekend, March 9th-10th, 2013.

The commit of Drupal 8 I was working against is:

```php
* 957b556 - (HEAD, origin/HEAD, origin/8.x, 8.x) Issue #1932596 by ACF: Change site_name() into config in userpasswordreset.test and formtest. (4 hours ago)

```