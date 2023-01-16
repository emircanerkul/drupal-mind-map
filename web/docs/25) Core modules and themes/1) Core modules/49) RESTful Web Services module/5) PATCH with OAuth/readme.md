---
url: https://www.drupal.org/docs/8/core/modules/rest/patch-with-oauth
description: >-
  Here is a practical example on how to update a node. Let's suppose that you
  have a node with id 56 whose title you want to update through a PATCH request,
  authenticating the request with OAuth. Setting up REST You need to enable the
  PATCH method with HAL format and OAuth authentication. This can be done easily
  using REST UI module. This is what the Content resource looks like after we
  make the changes at admin/config/services/rest: Then, you need to adjust
  permissions so authenticated users can access the content.
published_time: '2015-08-27T16:39:38+00:00'
modified_time: '2019-09-17T12:18:37+00:00'
---
Here is a practical example on how to update a node.

Let's suppose that you have a node with id 56 whose title you want to update through a PATCH request, authenticating the request with [OAuth](https://www.drupal.org/node/2110825 "OAuth authentication").