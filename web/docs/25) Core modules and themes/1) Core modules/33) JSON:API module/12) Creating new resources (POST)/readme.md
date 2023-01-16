---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/creating-new-resources-post
description: >-
  This page shows examples of various POST requests for the JSON:API module.
  POST requests are used to create new resources. If you need to modify
  resources, you want to PATCH them. The JSON:API specification (and therefore
  the JSON:API module) only supports creating one resource per POST request. For
  Drupal, this means that it is not possible (with this module alone) to create
  multiple entities in one request. You may want to do this if you would like to
  create referenced entities at the same time as a parent entity.
published_time: '2016-09-26T14:44:46+00:00'
modified_time: '2020-10-11T16:42:31+00:00'
---
This page shows examples of various POST requests for the [JSON:API module](https://www.drupal.org/project/jsonapi).

POST requests are used to _create new resources._ If you need to _modify_ resources, you want to PATCH them.

The JSON:API specification (and therefore the JSON:API module) only supports creating one resource per POST request. For Drupal, this means that it is not possible (with this module alone) to create multiple entities in one request. You may want to do this if you would like to create referenced entities at the same time as a parent entity. While JSON:API cannot support that behavior, modules like [Subrequests](/project/subrequests) can help with those requirements.