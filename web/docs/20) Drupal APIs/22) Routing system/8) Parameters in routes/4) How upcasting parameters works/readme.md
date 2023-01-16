---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/parameters-in-routes/how-upcasting-parameters-works
description: >-
  There are a couple of tagged services ('route_enhancer') which changes the
  values in the request attributes. One example is the authentication, which
  authenticates users by incoming route, or the param converter.
  (Drupal\Core\ParamConverter\ParamConverterManager). The param converter
  manager basically runs all the raw values through a list of registered
  parameter converters of which the entity one
  (Drupal\Core\ParamConverter\EntityConverter) is the important one.
published_time: '2014-07-27T03:55:23+00:00'
modified_time: '2019-04-16T07:56:47+00:00'
---
There are a couple of tagged services ('route\_enhancer') which changes the values in the request attributes.  
One example is the authentication, which authenticates users by incoming route, or the **param converter**. (`Drupal\Core\ParamConverter\ParamConverterManager`).

The param converter manager basically runs all the raw values through a list of registered parameter converters of which the entity one (`Drupal\Core\ParamConverter\EntityConverter`) is the important one.  
`ParamConverterManager->convert()` calls the `EntityConverter->convert()` method with the NID as parameter and sets the result into the request attributes. This entity converter contains the logic to convert `{entity_type}` to the corresponding entity object, though you can configure it. For itself the EntityConverter just uses configuration, which looks like that:

```php
route_name:
  path: /foo/{bar}
  options:
    parameters:
      bar:
        type: entity:node

```

But on compile level the class `Drupal\Core\EventSubscriber\EntityRouteAlterSubscriber` takes care about setting this configuration, so the previous behavior is applied by default.

The route enhancers itself are managed by the dynamic router ('router.dynamic' service) and calls them right after finding the current route of the request: (DynamicRouter->match()).

In order to not run all converters for all routes for all attributes, the routing system stores which converters are used for which parameters on the compilation level of the routes. This system works on registering upon the route building alter event, see `Drupal\Core\EventSubscriber\ParamConverterSubscriber`, which calls the `ParamConverterManager->setRouteParameterConverters()`. This method asks all the param converters whether they apply for a certain route and just uses that information later on runtime.