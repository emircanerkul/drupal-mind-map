---
url: >-
  https://www.drupal.org/docs/drupal-apis/routing-system/introductory-drupal-routes-and-controllers-example
description: >-
  This is a quick introduction to routes and controllers in Drupal. This guide
  demonstrates how to create a simple custom page with a user defined URL. We'll
  first see how to display a page by returning simple HTML markup in a render
  array, and in a second step add a Twig template to the custom page. If you're
  only modifying or extending existing functionality, you may not need to know
  about routes. However, if you want to expose content or functionality on your
  own URIs on a site, routing is an important part of writing your module.
published_time: '2013-10-21T13:14:00+00:00'
modified_time: '2022-10-05T15:00:58+00:00'
---
This is a quick introduction to routes and controllers in Drupal. This guide demonstrates how to create a simple custom page with a user defined URL. We'll first see how to display a page by returning simple HTML markup in a render array, and in a second step add a Twig template to the custom page.

If you're only modifying or extending existing functionality, you may not need to know about routes. However, if you want to expose content or functionality on your own URIs on a site, routing is an important part of writing your module. This can help provide functionality at specific URIs of a website or just modify or augment existing functionality.

**The typical steps involved:**

1. Create a module.
2. Add a `routing.yml` file.
3. Define the route path (a. k. a. the path alias).
4. Define the page controller (a. k. a. the callback function that'll be executed when the path is accessed).
5. Create the controller and return a render-able array that will be displayed on your page.

Instead of manually creating the files and defining the controller, you can invoke Drupal Console from the command line and let it create a skeleton `routing.yml` and route controller class for you: `drupal generate:controller.` [Find more details about generate:controller here](https://hechoendrupal.gitbooks.io/drupal-console/en/commands/generate-controller.html).