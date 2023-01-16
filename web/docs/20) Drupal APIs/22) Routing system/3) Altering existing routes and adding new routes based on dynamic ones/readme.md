---
url: >-
  https://www.drupal.org/docs/drupal-apis/routing-system/altering-existing-routes-and-adding-new-routes-based-on-dynamic-ones
description: >-
  Any route - whether statically defined in a YAML file, as seen in the
  introductory example, or a dynamic route as described in Providing dynamic
  routes - can be altered. You can do so by modifying a RouteCollection using an
  EventSubscriber triggered by the RoutingEvents::ALTER event. Altering existing
  routes After building routes (e.g. when a module is enabled or when caches are
  cleared), the RoutingEvents::ALTER event triggers the route alter process. The
  \Drupal\Core\Routing\RouteSubscriberBase class contains an event listener that
  listens to this event.
published_time: '2014-02-03T11:54:20+00:00'
modified_time: '2020-07-27T14:02:50+00:00'
---
Any route - whether statically defined in a YAML file, as seen in the [introductory example](https://drupal.org/node/2116767), or a dynamic route as described in [Providing dynamic routes](https://drupal.org/node/2122201) \- can be altered. You can do so by modifying a RouteCollection using an EventSubscriber triggered by the `RoutingEvents::ALTER` event.