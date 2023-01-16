---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/routing-related-objects-route-currentroutematch-routematch-url
description: >-
  Route, CurrentRouteMatch, RouteMatch, Url are objects used for routing in
  Drupal 8. A Route object is just the routing YML in PHP form. It doesn't have
  any methods you need to use, only getters (such objects are called value
  objects). This is not an object you should retrieve or work with most of the
  time, most use cases have methods that take the route name (and parameters)
  instead.
published_time: '2014-08-13T07:31:26+00:00'
modified_time: '2016-10-13T17:36:02+00:00'
---
Route, CurrentRouteMatch, RouteMatch, Url are objects used for routing in Drupal 8.

* **A Route object is just the routing YML in PHP form.** It doesn't have any methods you need to use, only getters (such objects are called value objects). This is not an object you should retrieve or work with most of the time, most use cases have methods that take the route name (and parameters) instead.
* A **RouteMatch** (`\Drupal\Core\Routing\RouteMatchInterface`) object contains the name of the route (which, as the previous point notes, is more important than the route object itself), the route object, the parameters and the raw parameters as relevant for the match.  
For example, if the match is for `node/123` then the route will contain the route object for `/node/{node}`, the raw parameters will be `[1 => 123]`, but the parameters will be `[1 => Node::load(123)]`. A `RouteMatch` doesn't have any useful methods either besides getters.
* The **CurrentRouteMatch** (`\Drupal\Core\Routing\CurrentRouteMatch`) object is also a `RouteMatch` but specifically contains the current route object. It is accessible via the current\_route\_match service and is sent to every `hook_help` method. Again, you can only run getters on this.
* The **Url** object currently contains the route name and parameters and options for generating the URL, like 'absolute' or 'query' (unlike RouteMatch which has converted parameters and no options). This one has useful methods like getting the system path or a render array that can be added to a #type href render array.

Glossary:

* RouteMatch: `\Drupal\Core\Routing\RouteMatchInterface`
* CurrentRouteMatch: `\Drupal\Core\Routing\CurrentRouteMatch`