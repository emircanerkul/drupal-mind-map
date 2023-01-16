---
url: >-
  https://www.drupal.org/docs/8/core/themes/claro-theme/claro-css-coding-standards
description: >-
  Claro is following the coding standards and core gates already defined for
  Drupal Core. However, for some parts, we have defined stricter rules on top of
  these rules. Variables We agreed to move variables that are only used by a
  single component to the component itself. We will define those variables in
  the :root scope, so they have to still remain somewhat specific to not overlap
  with other components. Variables that are used by multiple components will
  remain in the variables.css.
published_time: '2019-11-20T15:45:20+00:00'
modified_time: '2019-11-20T16:01:59+00:00'
---
Claro is following the [coding standards](https://www.drupal.org/docs/develop/standards/css/css-coding-standards) and [core gates](https://www.drupal.org/core/gates#frontend) already defined for Drupal Core. However, for some parts, we have defined stricter rules on top of these rules.