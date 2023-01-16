---
url: https://www.drupal.org/docs/multisite-drupal/multisite-drupal-considerations
description: >-
  The primary reason for using a multisite Drupal setup is to save your time
  when you manage more than one Drupal site running the same version of Drupal
  core. Each time a new Drupal core update is released, you would only have to
  perform that update on one codebase set instead of doing it for each site. But
  there are drawbacks. These are mitigated, however, if you're using the Aegir
  hosting system. Otherwise, the complexities and potential problems of trying
  to manage a multisite setup manually require fairly advanced technical skills.
published_time: '2017-07-09T16:15:04+00:00'
modified_time: '2021-09-23T13:37:18+00:00'
---
The primary reason for using a multisite Drupal setup is to save your time when you manage more than one Drupal site running the same version of Drupal core. Each time a new Drupal core update is released, you would only have to perform that update on one codebase set instead of doing it for each site. But there are drawbacks. These are mitigated, however, if you're using the [Aegir hosting system](https://www.aegirproject.org/).

Otherwise, the complexities and potential problems of trying to manage a multisite setup manually require fairly advanced technical skills. Users with that level of expertise are usually familiar with using the 'command line', and from the command line, you can update each site you administer in less than 2-minutes. With Aegir, it's even faster as all sites can be queued for updates in a point-and-click fashion by migrating the entire platform (Aegir-speak for a multisite codebase) to a newer one. Any sites that fail will be automatically rolled back.