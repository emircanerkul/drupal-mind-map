---
url: >-
  https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/creating-distributions
description: >-
  A Drupal distribution is a special kind of install profile. Marking a profile
  as a distribution allows it to have the following additional features and
  capabilities: The distribution's name and version number replace 'Drupal' and
  the core version number in the installer, and in the welcome message when the
  user first loads the new site. Distributions are exclusive: only one should be
  present during installation.
published_time: '2016-10-17T21:57:59+00:00'
modified_time: '2022-12-05T08:31:48+00:00'
---
A Drupal _distribution_ is a special kind of install profile. Marking a profile as a distribution allows it to have the following additional features and capabilities:

* The distribution's name and version number replace 'Drupal' and the core version number in the installer, and in the welcome message when the user first loads the new site.
* Distributions are exclusive: only one should be present during installation.
* If a profile marked as a distribution is present in the codebase, the profile selection step of the installer will be skipped during installation and the distribution profile will always be installed. (This can be overridden when installing via the command line with Drush of course)
* Distributions contain files listing all modules, themes, and JavaScript libraries used by the distribution. drupal.org uses these lists to generate an archive containing those dependencies, in addition to Drupal core.