---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/filters-modifying-variables-in-twig-templates
description: >-
  Filters in Twig can be used to modify variables. Filters are separated from
  the variable by a pipe symbol. They may have optional arguments in
  parentheses. Multiple filters can be chained. The output of one filter is
  applied to the next. Example: {{ content|safe_join(", ")|lower }} You may have
  to render an item before you filter it: {{ item|render|filter }} Twig comes
  with many filters built into it, which you can review in their official
  documentation. Drupal has a variety of filters native to it. Drupal 9 changes
  are listed here.
published_time: '2014-10-16T01:08:52+00:00'
modified_time: '2022-07-05T20:58:23+00:00'
---
Filters in Twig can be used to modify variables. Filters are separated from the variable by a pipe symbol. They may have optional arguments in parentheses. Multiple filters can be chained. The output of one filter is applied to the next.

Example:  
`{{ content|safe_join(", ")|lower }}`

You may have to render an item before you filter it:  
`{{ item|render|filter }}`

Twig comes with many filters built into it, which you can review in their [official documentation](https://twig.symfony.com/doc/1.x/). Drupal has a variety of filters native to it.

Drupal 9 changes are listed [here](https://www.drupal.org/docs/upgrading-drupal/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/preparing-for-use-of-twig).