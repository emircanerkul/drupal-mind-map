---
url: >-
  https://www.drupal.org/docs/upgrading-drupal/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/preparing-for-use-of-twig
description: >-
  The update from Drupal 8 to Drupal 9 includes updating the Twig dependency
  from Twig 1 to Twig 2. Unfortunately due to how composer dependencies work for
  Drupal 8 sites, we cannot update Drupal 8 to optionally allow Twig 2 support,
  even though the API is fully ready for that. So these changes can only be made
  currently in your Drupal 9 environment. Use Upgrade Status 8.x-2.x either on
  the UI or via Drush to check your Twig files for deprecated syntax use.
  Fortunately, the changes from Twig 1 to Twig 2 should be manageable for most
  users, and many projects will not require any changes.
published_time: '2019-07-29T13:44:57+00:00'
modified_time: '2020-08-18T18:02:36+00:00'
---
The update from Drupal 8 to Drupal 9 includes updating the Twig dependency from Twig 1 to Twig 2\. Unfortunately due to how composer dependencies work for Drupal 8 sites, we cannot update Drupal 8 to optionally allow Twig 2 support, even though the API is fully ready for that. So these changes can only be made currently in your Drupal 9 environment.

[Use Upgrade Status 8.x-2.x](https://www.drupal.org/project/upgrade%5Fstatus) either on the UI or via Drush to check your Twig files for deprecated syntax use. Fortunately, the changes from Twig 1 to Twig 2 should be manageable for most users, and many projects will not require any changes. 