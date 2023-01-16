---
url: >-
  https://www.drupal.org/docs/drupal-apis/form-api/configformbase-with-simple-configuration-api
description: >-
  This type of form is used to create forms for configuration pages on your
  Drupal website. You can set up configuration forms that allow you to make
  changes to features or views or other configuration entities. Configuration
  forms can greatly help you to understand the workings of the Simple
  Configuration API for Drupal 8. In Drupal 8, you do not use the {variables}
  table and variable_get/set/delete() because configuration is stored in the
  database and synced with YML files on the disk for deployment purposes.
published_time: '2014-02-27T11:15:55+00:00'
modified_time: '2022-04-06T23:22:57+00:00'
---
This type of form is used to create forms for configuration pages on your Drupal website. You can set up configuration forms that allow you to make changes to features or views or other configuration entities.

Configuration forms can greatly help you to understand the workings of the Simple Configuration API for Drupal 8\. In Drupal 8, you do not use the {variables} table and variable\_get/set/delete() because configuration is stored in the database and synced with YML files on the disk for deployment purposes. It is possible to disable use of the database for config storage entirely but it comes with a performance hit with most filesystems.

The Simple Configuration API enables using objects like $config objects to communicate with a YML file. The $config object handles CRUD (Create/Read/Update/Delete) for YML files, so you simply use ::get(), ::set(), and ::save() methods and your data will be stored in the {module}.settings.yml file.