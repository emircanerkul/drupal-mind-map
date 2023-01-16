---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/parameters-in-routes/using-parameters-in-routes
description: >-
  In order to pass dynamic values from the URI to the controller you can use
  parameters. Parameters are defined in the route path using curly braces. For
  example if the path is defined as '/node/{node}/edit', then a request to the
  /node/1234/edit URI would make the node object with ID 1234 available in the
  controller as the $node argument. Example A common use case for parameters is
  to refer to a content or configuration entity type in the route path.
published_time: '2014-07-27T03:50:45+00:00'
modified_time: '2022-12-04T14:50:24+00:00'
---
In order to pass dynamic values from the URI to the controller you can use parameters. Parameters are defined in the route path using curly braces. For example if the path is defined as `'/node/{node}/edit'`, then a request to the `/node/1234/edit` URI would make the node object with ID 1234 available in the controller as the `$node` argument.