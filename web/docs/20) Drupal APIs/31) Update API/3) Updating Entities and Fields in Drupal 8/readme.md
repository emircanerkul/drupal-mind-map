---
url: >-
  https://www.drupal.org/docs/drupal-apis/update-api/updating-entities-and-fields-in-drupal-8
description: >-
  If your module is making a data model change related to entities and fields,
  then you will need to write a hook_update_N() function that will update the
  sites for existing users of your module who already had it installed before
  you made the change, so that they can continue to function. This is described
  below. General notes Some notes on hook_update_N() functions: The
  hook_update_N() skeleton section on the parent page tells how/where to create
  your hook_update_N() function.
published_time: '2015-07-18T00:18:08+00:00'
modified_time: '2022-08-09T18:35:42+00:00'
---
If your module is making a [data model change related to entities and fields](https://www.drupal.org/node/2535316), then you will need to write a `hook_update_N()` function that will update the sites for existing users of your module who already had it installed before you made the change, so that they can continue to function. This is described below.