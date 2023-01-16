---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/parameters-in-routes/accessing-raw-parameter-values
description: >-
  If you need to access the unconverted data, like for example a user ID, you
  can access the data using
  $request->attributes->get('_raw_variables')->get('user') or better
  $route_match->getRawParameter('user'), which has the values before the param
  conversion. Similar to the $request object you can get the route match object
  by having a $route_match parameter on your controller method. In other
  contexts use the 'current_route_match' service.
published_time: '2014-07-27T03:54:44+00:00'
modified_time: '2023-01-06T20:35:37+00:00'
---
If you need to access the unconverted data, like for example a user ID, you can access the data using `$request->attributes->get('_raw_variables')->get('user')` or better `$route_match->getRawParameter('user')`, which has the values before the param conversion.

Similar to the `$request` object you can get the route match object by having a `$route_match` parameter on your controller method. In other contexts use the 'current\_route\_match' service.