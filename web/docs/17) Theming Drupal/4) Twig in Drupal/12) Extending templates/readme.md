---
url: https://www.drupal.org/docs/theming-drupal/twig-in-drupal/extending-templates
description: >-
  Twig templates can be extended with the following syntax - {% extends
  'example.html.twig' %} Drupal modules and themes are automatically namespaced.
  To extend a template from another theme or module (e.g. here from the classy
  theme), use the machine name: {% extends
  "@classy/block/block--system-menu-block.html.twig" %} See more at
  https://symfony.com/doc/current/templates.html#template-inheritance-and-layouts
published_time: '2018-09-07T21:15:07+00:00'
modified_time: '2021-09-04T14:23:01+00:00'
---
Twig templates can be extended with the following syntax -

```php
{% extends 'example.html.twig' %}
```

Drupal modules and themes are [automatically namespaced](https://www.drupal.org/docs/contributed-modules/components/understanding-twig-namespaces). To extend a template from another theme or module (e.g. here from the classy theme), use the machine name:

```php
{% extends "@classy/block/block--system-menu-block.html.twig" %}
```

See more at <https://symfony.com/doc/current/templates.html#template-inheritance-and-layouts>