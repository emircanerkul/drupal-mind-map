---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/twig-template-naming-conventions
description: >-
  Drupal loads templates based on certain naming conventions. This allows you to
  override templates by adding them to your theme and giving them specific
  names. After adding a template you must rebuild the cache in order for Drupal
  to discover your new template. You can debug Twig templates to figure out
  which templates are being used to output the markup for any given element.
  More about Twig debugging here. This page lists the conventions used for the
  base html structure, the page, regions, blocks, nodes, fields, and other core
  components.
published_time: '2014-10-11T09:24:18+00:00'
modified_time: '2020-08-20T13:32:06+00:00'
---
Drupal loads templates based on certain naming conventions. This allows you to [override templates by adding them to your theme and giving them specific names](/node/2186401).

After adding a template you must [rebuild the cache](/node/42055) in order for Drupal to discover your new template.

You can [debug Twig templates to figure out which templates are being used to output the markup](/node/2358785) for any given element. [More about Twig debugging here](https://www.drupal.org/node/1906392).

This page lists the conventions used for the base html structure, the page, regions, blocks, nodes, fields, and other core components. (It's good to know that it is possible to create custom template name suggestions using [function hook\_theme\_suggestions\_HOOK\_alter](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/function/hook%5Ftheme%5Fsuggestions%5FHOOK%5Falter/8 "Drupal API page of the function").)