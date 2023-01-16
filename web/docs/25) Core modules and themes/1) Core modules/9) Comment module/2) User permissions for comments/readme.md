---
url: >-
  https://www.drupal.org/docs/8/core/modules/comment/user-permissions-for-comments
description: >-
  To configure user permissions for commenting you must be logged in as either
  User 1 (the administrative user) or as a user with the "User: Administer
  permissions" permission: Navigate to the Permissions administration page
  (Administer > People > Permissions or
  http://example.com/admin/people/permissions).
published_time: '2017-04-28T16:36:56+00:00'
modified_time: '2017-06-13T20:09:32+00:00'
---
To configure user permissions for commenting you must be logged in as either User 1 (the administrative user) or as a user with the "User: Administer permissions" permission:

1. Navigate to the Permissions administration page (_Administer > People > Permissions_ or `http://example.com/admin/people/permissions`).
2. In the Comments section, enable or disable the permissions for each role:  
   * Administer comments and comment settings  
   * View comments  
   * Post comments (If a user has this and _not_ the "Skip comment approval" permission, their comments will show in the "Unapproved comments" list until someone with the "Administer comments and comment settings" approves them.)  
   * Skip comment approval (Comments are published immediately and do not need to be approved.  
   * Edit own comments (This does not allow the user to delete comments, only users with the "Administer comments and comment settings" can delete comments because if comments are threaded, replies to a comment are deleted with it.)

_Note: Granting anonymous users the permission to post comments can dramatically increase the amount of spam. It is recommended that you set up a spam filtering module if you choose to allow anonymous comments._