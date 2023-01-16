---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/create-custom-twig-templates-for-custom-module
description: >-
  The general idea in Drupal 8 is that you want to avoid creating html directly
  in the PHP code of your custom module. You want this to go into twig
  templates. To create new twig templates in your module, go through the
  following steps. Step #1: Define hook_theme in .module file Create a
  [module].module file if it doesn't already exist in your module, and add code
  that defines each of your twig templates. The key of each item in the array is
  what you will need to call the template later. Do not use dashes in the file
  name. /** * Implements hook_theme().
published_time: '2015-12-24T02:51:00+00:00'
modified_time: '2020-05-24T14:07:45+00:00'
---
The general idea in Drupal 8 is that you want to avoid creating html directly in the PHP code of your custom module. You want this to go into twig templates. To create new twig templates in your module, go through the following steps.