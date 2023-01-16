---
url: https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer
description: >-
  This section covers only composer-specific steps of updating a Drupal site to
  a new patch or minor version. More detailed update instructions are also
  provided in the next section. For upgrading Drupal to a new major version, see
  Upgrading from Drupal 8 (or later) to a newer major version To understand how
  Composer manages Drupal dependencies, see Using Composer with Drupal and
  compare the available options. If this is an existing Drupal site, where
  Composer has never been used before, make sure it's ready for Composer first.
published_time: '2016-04-06T10:12:11+00:00'
modified_time: '2022-06-24T19:49:06+00:00'
---
This section covers only composer-specific steps of updating a Drupal site to a new patch or minor version. [More detailed update instructions ](#update-all-steps)are also provided in the next section. For _upgrading_ Drupal to a new major version, see [Upgrading from Drupal 8 (or later) to a newer major version](https://www.drupal.org/docs/upgrading-drupal/drupal-8-and-higher)

To understand how Composer manages Drupal dependencies, see [Using Composer with Drupal](/docs/develop/using-composer/using-composer-with-drupal "Using Composer with Drupal | Develop guide on Drupal.org") and compare the [available options](/docs/8/update/introduction#before-you-begin "Updating Drupal 8 - overview of options | Drupal 8 guide on Drupal.org"). If this is an existing Drupal site, where Composer has never been used before, make sure it's [ready for Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies#managing-existing-site) first.

<!-- note-warning -->
> WARNING: If you are updating from a Drupal version earlier than 8.8.0, you will likely need to make some one-time changes. Follow the guide Migrate composer project for Drupal earlier than 8.8.0.
If you did not install Drupal via composer and it is not yet converted to a composer managed project, you'll need to do so by following the Add Composer to existing sites guide.