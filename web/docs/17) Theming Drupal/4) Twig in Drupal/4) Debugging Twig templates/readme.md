---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/debugging-twig-templates
description: >-
  The Twig template engine offers a debug tool. The Drupal 8 implementation also
  adds an additional tool that allows you to locate the template that outputs
  the markup. Warning: turning on Twig debug can break some parts of the site,
  especially Views. See this issue. Enable debugging You enable Twig Debugging
  in sites/default/services.yml. Set the debug variable to true. And clear
  cache. parameters: twig.config: debug: true If services.yml does not yet
  exist; copy default.services.yml to services.yml.
published_time: '2013-02-02T22:45:24+00:00'
modified_time: '2022-12-25T15:37:00+00:00'
---
The Twig template engine offers a debug tool.

The Drupal 8 implementation also adds an additional tool that allows you to [locate the template that outputs the markup](/node/2358785).

**Warning**: turning on Twig debug can break some parts of the site, especially Views. See [this issue](https://www.drupal.org/node/2914733).