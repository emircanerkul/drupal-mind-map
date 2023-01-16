---
url: >-
  https://www.drupal.org/docs/drupal-apis/update-api/updating-database-schema-andor-data-in-drupal-8
description: >-
  If your module is making a data model change related to database schema that
  your module defines with hook_schema(), then you need to properly update your
  data model. The two steps are: Update your hook_schema() code so that it
  reflects your new data model if the database table and field definitions have
  changed. This will make sure that people that install your module after you
  made the change will install the correct database tables. See the Schema API
  documentation for details on that. Write a hook_update_N() function.
published_time: '2015-07-17T19:25:02+00:00'
modified_time: '2021-10-08T08:02:05+00:00'
---
If your module is making a [data model change related to database schema that your module defines with hook\_schema()](https://www.drupal.org/node/2535316), then you need to properly update your data model. The two steps are:

1. Update your hook\_schema() code so that it reflects your new data model if the database table and field definitions have changed. This will make sure that people that install your module after you made the change will install the correct database tables. See the [Schema API documentation](https://www.drupal.org/developing/api/schema) for details on that.
2. Write a hook\_update\_N() function. This will update the database for existing users of your module who already had it installed before you made the change so that they can continue to function. This is described below.