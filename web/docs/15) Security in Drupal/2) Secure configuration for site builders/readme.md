---
url: >-
  https://www.drupal.org/docs/security-in-drupal/secure-configuration-for-site-builders
description: >-
  When Drupal is first installed, a lot of its configuration is geared towards
  ease of use for certain use cases: for example, a community-led website, that
  needs authenticated contributions of some sort, will need to permit site
  visitors to create their own (low-privilege) accounts. However, you might want
  to limit the number of accounts on your website, and therefore to turn that
  off. Here are a few things you can do to "lock down" a new Drupal website.
  Prevent site visitors from creating their own accounts. This will mean that
  only site administrators can create accounts.
published_time: '2016-10-11T16:08:59+00:00'
modified_time: '2021-03-09T14:47:27+00:00'
---
When Drupal is first installed, a lot of its configuration is geared towards ease of use for certain use cases: for example, a community-led website, that needs authenticated contributions of some sort, will need to permit site visitors to create their own (low-privilege) accounts. However, you might want to limit the number of accounts on your website, and therefore to turn that off.

Here are a few things you can do to "lock down" a new Drupal website.

* [Prevent site visitors from creating their own accounts.](https://www.drupal.org/docs/user%5Fguide/en/config-user.html) This will mean that only site administrators can create accounts.
* [Secure the user with UID=1.](https://www.drupal.org/node/947312) This first account on the site [has special privileges, at the time of writing](https://www.drupal.org/node/540008), but is rarely required. Most administrative tasks that this account can do, are possible using another account with the relevant permissions, or through Drush.
* **Check roles have no more permissions than they require.** You can do this infrequently, not just when the site is first installed. Under People > Permissions, ensure that the "authenticated user" and "anonymous user" roles only have the permissions you would like them to have.
* **Keep the site up to date.** To subscribe to security announcements through your preferred notification service (email, RSS, Twitter etc.) see the sidebar on the [Security advisories page](https://www.drupal.org/security).
* **Disable, or don't enable the Testing (simpletest) module.**. If some users have permission to run tests, they could maliciously run them over and over. Also, make sure Composer-based dev tools are not installed, using `composer install --no-dev`.
* [Further security advice is available](https://www.drupal.org/security/secure-configuration), especially if you have access to the server your site is running on.