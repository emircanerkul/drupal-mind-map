---
url: https://www.drupal.org/docs/drupal-apis/routing-system/routing-system-overview
description: >-
  Drupal 8's routing system is heavily based on Symfony's. Drupal's routing
  system can do everything Symfony's can (and more), and both use the same
  syntax to define routes. To learn the basics of Drupal 8's routing system, the
  Symfony Routing component's documentation is an excellent place to start. The
  documentation here does not go into every aspect of Symfony's routing system,
  so if you're stuck on something it's a good idea to check the Symfony
  documentation as well. Specific version(s) The Drupal 8 routing system
  replaces the Drupal 7 hook_menu().
published_time: '2013-10-28T09:38:10+00:00'
modified_time: '2022-08-18T23:16:43+00:00'
---
Drupal 8's routing system is heavily based on Symfony's. Drupal's routing system can do everything Symfony's can (and more), and both use the same syntax to define routes.

To learn the basics of Drupal 8's routing system, [**the Symfony Routing component's documentation**](http://symfony.com/doc/current/book/routing.html) is an excellent place to start. The documentation here does not go into every aspect of Symfony's routing system, so if you're stuck on something it's a good idea to check the Symfony documentation as well.

<!-- note-version -->
> VERSION: Specific version(s)
The Drupal 8 routing system replaces the Drupal 7 hook_menu(). For more information see the comparison of Menu API in Drupal 7 and 8.

### Overview

A **route** is a path which is defined for Drupal to return some sort of content on. For example, the default front page, '/node' is a route. When Drupal receives a request, it tries to match the requested path to a route it knows about. If the route is found, then the route's definition is used to return content. Otherwise, Drupal returns a 404.

### Routes and controllers

Drupal's routing system works with the Symfony HTTP Kernel. However, you don't need to know very much about the Symfony HTTP Kernel to do basic route operations. This is how the components relate to each other:

![Drupal8Routing.png](https://www.drupal.org/files/Drupal8Routing.png)

The routing system is responsible for matching paths to controllers, and you define those relations in routes. You can pass on additional information to your controllers in the route. Access checking is integrated as well.

### Checking available routes

By using the [Devel module](https://www.drupal.org/project/devel) you can go to `/devel/routes` to get a full list of registered routes for the site. This is handy if you for example want to have a link to a Drupal admin page within a module. 

### Parameters in routes

Drupal 8's routes may include placeholder elements which designate places where the URL contains dynamic values. In the controller method, this value is available when a variable with the same name is used in the controller method. For example in example.routing.yml:

```php
example.name:
  path: '/example/{name}'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::content'
  requirements:
    _permission: 'access content'
```

The {name} element in the URL is called a slug and is available as a $name in the controller method. [More on parameters in routes](https://www.drupal.org/docs/8/api/routing-system/using-parameters-in-routes)