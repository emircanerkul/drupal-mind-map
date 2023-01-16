---
url: https://www.drupal.org/docs/updating-drupal/drupal-updates-and-deployments
description: >-
  This details the best practices around Drupal updates, deploying changes to an
  environment and configuration management. Drupal updates: the updates that run
  when you visit update.php or use drush updatedb Environments: are an instance
  of the Drupal install. Typically these are development, testing and
  production. Deployments: are the process of taking change from the development
  environment thorough testing and then to production. Configuration management:
  how Drupal can export and import a Drupal install's configuration. It is used
  to deploy configuration changes to different environments.
published_time: '2022-06-20T17:51:44+00:00'
modified_time: '2022-06-20T22:26:53+00:00'
---
This details the best practices around Drupal updates, deploying changes to an environment and configuration management.

* Drupal updates: the updates that run when you visit update.php or use drush updatedb
* Environments: are an instance of the Drupal install. Typically these are development, testing and production.
* Deployments: are the process of taking change from the development environment thorough testing and then to production.
* Configuration management: how Drupal can export and import a Drupal install's configuration. It is used to deploy configuration changes to different environments.

### A typical workflow

A developer is tasked with updating Drupal core, and changing a couple of views to use a new feature available in the new version. Here's the steps to accomplish this and deploy this change from development to testing and then to production.

#### In a development environment

1. Update Drupal core code ([composer](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer), [manually](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-manually))
2. [Run Drupal updates](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer#s-run-database-updates)
3. Make changes to views via the user interface
4. Export configuration ([user interface](https://www.drupal.org/docs/configuration-management/workflow-using-the-drupal-ui), [drush](https://www.drupal.org/docs/configuration-management/workflow-using-drush))
5. Store the changes, typically this would be using git to commit the changes to composer.lock and configuration. Note that the updates might have changed configuration!

#### To deploy this change to a new environment (testing or production)

1. Build the codebase from composer.lock (typically running composer install somewhere)
2. [Run Drupal updates](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer#s-run-database-updates)
3. Import configuration ([user interface](https://www.drupal.org/docs/configuration-management/workflow-using-the-drupal-ui), [drush](https://www.drupal.org/docs/configuration-management/workflow-using-drush)). **Note this is the opposite of development steps**.

The last two steps can be replaced by the [drush deploy](https://www.drush.org/latest/deploycommand/) command that wraps them up into a consistent command and adds useful features.  