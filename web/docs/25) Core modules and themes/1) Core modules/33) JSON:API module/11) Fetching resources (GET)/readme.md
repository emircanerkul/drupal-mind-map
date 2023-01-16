---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/fetching-resources-get
description: >-
  This page shows examples of various GET requests for the JSON:API module. In
  all examples below, no request headers are required. No authentication is
  required if anonymous users can access content entities. For config entities
  like menu's see last section(s). Note that in all cases, when an id is needed,
  it is always the entity's uuid, not the entity id. Accept header Make sure you
  always send the accept header: Accept: application/vnd.api+json. curl \
  --header 'Accept: application/vnd.api+json' \ ....
published_time: '2016-09-26T14:36:23+00:00'
modified_time: '2020-10-08T18:48:50+00:00'
---
This page shows examples of various GET requests for the [JSON:API module](https://www.drupal.org/project/jsonapi).

In all examples below, no request headers are required. No authentication is required if anonymous users can access content entities. For config entities like menu's see last section(s).

Note that in all cases, when an id is needed, it is always the entity's uuid, not the entity id.