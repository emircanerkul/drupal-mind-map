---
url: https://www.drupal.org/docs/8/core/modules/update/overview
description: >-
  The Update manager (Drupal 8) module periodically checks for new versions of
  your site's software (including contributed modules and themes), and alert you
  to available updates. The log of available updates will indicate when new
  releases are ready for download, and you may configure various options,
  including frequency of update checking and notification options (which are
  performed during cron runs), at the respective module settings page if you
  have administration permissions.
published_time: '2007-09-26T13:39:44+00:00'
modified_time: '2019-08-07T14:55:30+00:00'
---
The Update manager (Drupal 8) module periodically checks for new versions of your site's software (including contributed modules and themes), and alert you to available updates.

The log of available updates will indicate when new releases are ready for download, and you may configure various options, including frequency of update checking and notification options (which are performed during [**cron**](/docs/user%5Fguide/en/security-cron.html) runs), at the respective module settings page if you have administration permissions.

Please note that in order to provide this information, anonymous usage statistics (consisting of a unique key and a list of versions of the software your site is running) are sent to Drupal.org. If desired, you may disable the Update status module from the module administration page. This will result in a warning on the status report page.

If you have checked out Drupal code via Git instead of installing a release tar.gz archive you downloaded from drupal.org, you will need to install and enable the [**Git Deploy**](/project/git%5Fdeploy) module.

If you installed Drupal with Composer, you will need to update with [Composer](/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies).

For a full guide on keeping your Drupal 8 website up to date see the [Drupal 8 User Guide 13.3\. Concept: Security and Regular Updates](https://www.drupal.org/docs/user%5Fguide/en/security-concept.html).