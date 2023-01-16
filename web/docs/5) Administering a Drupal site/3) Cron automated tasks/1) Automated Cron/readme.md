---
url: >-
  https://www.drupal.org/docs/administering-a-drupal-site/cron-automated-tasks/automated-cron
description: >-
  Drupal 8 and later versions provide an Automated Cron module. Earlier versions
  of Drupal referred to this as Poor Man's Cron. We can find this core module in
  the core/modules/automated_cron directory of the Drupal installation. It is
  installed by default in a standard installation and be configured on the Cron
  page in system configuration section.
published_time: '2015-10-01T16:59:09+00:00'
modified_time: '2022-09-26T11:30:18+00:00'
---
Drupal 8 and later versions provide an Automated Cron module. Earlier versions of Drupal referred to this as Poor Man's Cron.

We can find this core module in the **core/modules/automated\_cron** directory of the Drupal installation.

It is installed by default in a standard installation and be configured on the Cron page in system configuration section.

**Home > Administration > Configuration >System**   
_/admin/config/system/cron_

A site is configured with an interval of time (in seconds) that Drupal will then run all cron hooks, in configuration this setting can be seen at:

```yaml
automated_cron.settings interval
```