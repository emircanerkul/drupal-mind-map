---
url: >-
  https://www.drupal.org/docs/contributed-modules/admin-menu-swap/installing-and-configuring-admin-menu-swap
description: >-
  Install the Admin Menu Swap module like any Drupal module. While multiple
  methods are possible, installation via composer is recommend, especially sites
  where Drupal was installed via composer. Simply change into Drupal directory
  and use composer to install: cd $DRUPAL composer require drupal/amswap Basic
  Usage Once Admin Menu Swap is enabled and your menus and user roles are
  established, you can pair the appropriate menu and role together. For example,
  you could create a "Content Editor" menu that has links to just the Content,
  Media and Taxonomy administrative pages.
published_time: '2022-12-02T23:28:31+00:00'
modified_time: '2022-12-02T23:29:38+00:00'
---
Install the Admin Menu Swap module [like any Drupal module](https://www.drupal.org/docs/extending-drupal/installing-modules). While multiple methods are possible, installation via composer is recommend, especially sites where Drupal was installed via composer.

Simply change into Drupal directory and use composer to install:

```php
cd $DRUPAL
composer require drupal/amswap
```