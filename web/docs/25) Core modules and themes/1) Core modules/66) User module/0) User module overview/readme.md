---
url: https://www.drupal.org/docs/8/core/modules/user/overview
description: >-
  The user module allows users to register, log in, and log out. Users benefit
  from being able to sign on because this associates content they create with
  their account and allows various permissions to be set for their roles. The
  user module supports user roles, which can be set up with fine-grained
  permissions allowing each role to do only what the administrator permits. Each
  user is assigned one or more roles.
published_time: '2001-03-31T12:18:02+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
The user module allows users to register, log in, and log out. Users benefit from being able to sign on because this associates content they create with their account and allows various permissions to be set for their roles.

The user module supports user roles, which can be set up with fine-grained permissions allowing each role to do only what the administrator permits. Each user is assigned one or more roles. By default there are three roles: _anonymous_ (a user who has not logged in) and _authenticated_ (a user who is registered), and _administrator_ (a signed in user who will be assigned site administrator permissions).

Users can use their own name or handle and can fine tune some personal configuration settings through their individual _my account_ page. Registered users need to authenticate by supplying their username and password, or alternately an [OpenID](/handbook/modules/openid) login.

A visitor accessing your website is assigned a unique ID, the so-called session ID, which is stored in a cookie. For security's sake, the cookie does not contain personal information but acts as a key to retrieving the information stored on your server.

**You can:**

* view your user page at `http://example.com/user` when you're logged in
* administer users at People (_**Administer > People**_) in Drupal 7 and 8, and (_**Administer > User**_) in previous versions.
* create new users on the People page through the _add user_ link in Drupal 7 and 8, and (_**Administer > User > Add user**_) in previous versions.
* configure user registration, user email, and user picture settings on the Account settings page (_**Administer > Configuration > People > Account settings**_) in Drupal 7 and 8 and (_**Administer > Settings > User**_) in previous versions.
* allow users to select themes in versions prior to Drupal 7 from their user account by enabling themes in (_**Administer > Themes**_).
* read user profile help at (_**Administer > Help > User**_).
* configure access permissions at (_**Administer > People > Permissions**_) in Drupal 7 and 8, and (_**Administer > Access control**_) in previous versions.

### Technical details for Drupal 7

Core module: Yes.  
Dependencies: None.  
Related Modules: None.  
Permissions: Administer people. Also see the API docs at [user permission](http://api.drupal.org/api/drupal/modules--user--user.module/function/user%5Fpermission/7).  
API Documentation:  
[user.admin.inc](http://api.drupal.org/api/drupal/modules--user--  user.admin.inc), [user.api.php](http://api.drupal.org/api/drupal/modules--user--user.api.php/7), [user.install](http://api.drupal.org/api/drupal/modules--user--user.install), [user.module](http://api.drupal.org/api/drupal/modules--user--user.module/7), [user\_form\_test.module](http://api.drupal.org/api/drupal/modules--user--tests--user%5Fform%5Ftest.module/7), [user.pages.inc](http://api.drupal.org/api/drupal/modules--user--user.pages.inc/7), [user.tokens.inc](http://api.drupal.org/api/drupal/modules--user--user.tokens.inc/7)  
Template files: [user-picture.tpl.php](http://api.drupal.org/api/drupal/modules--user--user-picture.tpl.php/7), [user-profile.tpl.php](http://api.drupal.org/api/drupal/modules--user--user-profile.tpl.php/7), [user-profile-category.tpl.php](http://api.drupal.org/api/drupal/modules--user--user-profile-category.tpl.php/7), [user-profile-item.tpl ](http://api.drupal.org/api/drupal/modules--user--user-profile-category.tpl.php/7)  
Other files: user.info, user.css, user-rtl.css, user.js, user.permissions.js  
Database tables (5): authmap, role\_permission, role, users, users\_roles. Also see the API docs at [user schema](http://api.drupal.org/api/drupal/modules--user--user.install/function/user%5Fschema/7)