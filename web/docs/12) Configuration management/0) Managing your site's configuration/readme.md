---
url: >-
  https://www.drupal.org/docs/configuration-management/managing-your-sites-configuration
description: >-
  Drupal stores site configuration data in a consistent manner, everything from
  the list of enabled modules, through to content types, taxonomy vocabularies,
  fields, and views. Making configuration changes on a live site is not
  recommended. The system is designed to make it easy to take the live
  configuration, test changes locally, export them to files, and deploy to
  production. Your site's configuration can be stored as part of your codebase
  and integrated with version control. By default, the "active" configuration is
  stored in the database ("config" table).
published_time: '2012-10-26T00:13:42+00:00'
modified_time: '2021-12-16T03:54:22+00:00'
---
Drupal stores site configuration data in a consistent manner, everything from the list of enabled modules, through to content types, taxonomy vocabularies, fields, and views.

Making configuration changes on a live site is not recommended. The system is designed to make it easy to take the live configuration, test changes locally, export them to files, and deploy to production. Your site's configuration can be stored as part of your codebase and integrated with version control.

By default, the "active" configuration is stored in the database ("config" table). This is for [performance and security reasons](https://www.drupal.org/node/2241059 "Default active config changed from file storage to DB storage | Drupal.org"). This is the complete configuration for the entire site at that moment. Configuration can be exported and imported as YAML files, either in its entirety, or a single piece of configuration, using **Drush** and/or **Drupal Console** config commands or the **Configuration Manager**. (See below for more details.)

Exporting and importing configuration changes between a Drupal installation in different environments, such as Development, Staging, and Production, allows you to make and verify your changes with a comfortable distance from your site's live environment.

This allows you to deploy a configuration from one environment to another (as a precaution, Drupal checks the site is the same before importing, by comparing its UUID).