---
url: >-
  https://www.drupal.org/docs/drupal-apis/update-api/updating-configuration-in-drupal-8
description: >-
  If your module is making a data model change related to configuration, then
  you need to properly update your data model. The four steps are: Update your
  configuration schema YML file so that it reflects your new data model. This
  will make sure that people who install your module after you made the change
  will get the correct schema. See the Configuration Schema documentation for
  details on that. Make sure any configuration items provided by your module in
  the config/install and config/optional directories have been updated, so that
  people installing your module will get correct configuration.
published_time: '2015-07-17T22:26:05+00:00'
modified_time: '2020-08-24T04:16:01+00:00'
---
If your module is making a [data model change related to configuration](https://www.drupal.org/node/2535316), then you need to properly update your data model. The four steps are:

1. Update your configuration schema YML file so that it reflects your new data model. This will make sure that people who install your module after you made the change will get the correct schema. See the [Configuration Schema documentation](https://www.drupal.org/node/1905070) for details on that.
2. Make sure any configuration items provided by your module in the config/install and config/optional directories have been updated, so that people installing your module will get correct configuration.
3. Write a hook\_update\_N() function. This will update configuration items for existing users of your module who already had it installed before you made the change so that they can continue to function. This is described below.
4. Write tests to ensure the code in your hook\_update\_N() correctly modifies the configuration. This will make sure that people who have an older version of your module installed can successfully update to the newer version. See <https://www.drupal.org/docs/8/api/update-api/writing-automated-update-tests-for-drupal-8> for details.