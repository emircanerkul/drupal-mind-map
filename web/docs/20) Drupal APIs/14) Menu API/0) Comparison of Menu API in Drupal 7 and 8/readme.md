---
url: >-
  https://www.drupal.org/docs/8/api/menu-api/comparison-of-menu-api-in-drupal-7-and-8
description: >-
  The Drupal 7 menu system revolved around hook_menu(), which provided
  associations between paths and callback functions (controllers) and also
  served as a central place to provide menu items in different menus (mostly in
  the administration menu) associated with the paths, as well as providing tabs
  and action links on pages and contextual links for different paths. It also
  did access checking, entity loading, and so on and on. That is a lot to handle
  for one system. In Drupal 8, these areas of functionality are now separated
  into different systems.
published_time: '2013-10-28T13:37:13+00:00'
modified_time: '2016-10-13T16:51:40+00:00'
---
The Drupal 7 menu system revolved around `hook_menu()`, which provided associations between paths and callback functions (controllers) and also served as a central place to provide menu items in different menus (mostly in the administration menu) associated with the paths, as well as providing tabs and action links on pages and contextual links for different paths. It also did access checking, entity loading, and so on and on. That is a lot to handle for one system.

In Drupal 8, these areas of functionality are now separated into different systems. The association of a path with a controller, coupled with parameter upcasting and access checking, is now handled in [the routing system](https://drupal.org/node/2122071). This system serves as a basis for path access on a Drupal 8 site. The Drupal 8 menu system is now a collection of different APIs for menu items defined by modules as well as local tasks, actions and contextual links.