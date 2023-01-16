---
url: https://www.drupal.org/docs/8/modules/guardr/a-note-about-real-name
description: >-
  Not all contributed modules pre-process usernames with functions like
  theme_username() before outputting the username value. For Drupal
  installations which consider the username to be confidential information, Real
  Name cannot perform a universal operation to hide the base username. To
  achieve more universal obscurity, change the authentication to use a system
  like LDAP, which can authenticate using one value and store a separate value
  for the Drupal username.
published_time: '2015-01-23T12:47:34+00:00'
modified_time: '2019-10-22T16:31:43+00:00'
---
Not all contributed modules pre-process usernames with functions like [theme\_username()](http://api.drupal.org/api/drupal/includes%21theme.inc/function/theme%5Fusername/7) before outputting the username value. For Drupal installations which consider the username to be confidential information, Real Name cannot perform a universal operation to hide the base username. To achieve more universal obscurity, change the authentication to use a system like [LDAP](http://drupal.org/project/ldap), which can authenticate using one value and store a separate value for the Drupal username.