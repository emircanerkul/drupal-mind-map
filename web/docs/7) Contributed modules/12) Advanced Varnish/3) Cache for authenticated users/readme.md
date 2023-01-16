---
url: >-
  https://www.drupal.org/docs/contributed-modules/advanced-varnish/cache-for-authenticated-users
description: >-
  The main benefit of the module is support of caching for authenticated users,
  module support a cache based on user roles by default. This will allow you to
  serve the page content via Varnish even if user have an active session cookie.
  To achieve that you need to configure Drupal a bit. Let's see what should be
  done for that. First of all we need to enable cache support for authenticated
  users on module configuration page (admin/config/development/adv_varnish)
  After you'll click on "Save configuration" button, Varnish will start to cache
  content for authenticated users.
published_time: '2019-07-22T08:27:28+00:00'
modified_time: '2022-01-26T14:14:45+00:00'
---
The main benefit of the module is support of caching for authenticated users, module support a cache based on user roles by default.

This will allow you to serve the page content via Varnish even if user have an active session cookie. To achieve that you need to configure Drupal a bit. Let's see what should be done for that. First of all we need to enable cache support for authenticated users on module configuration page (admin/config/development/adv\_varnish)

![](https://www.drupal.org/files/adv_13.png)

After you'll click on "Save configuration" button, Varnish will start to cache content for authenticated users. But not all of the roles should work like that, for example, there is no sense usually to cache content for site modeartors/contributors etc. On the permissions page you can find a specific permission, so you need to set it for roles which are should not be covered by Varnish

![](https://www.drupal.org/files/adv_14.png)