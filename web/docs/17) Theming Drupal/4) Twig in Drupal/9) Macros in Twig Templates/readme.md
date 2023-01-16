---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/macros-in-twig-templates
description: >-
  From the official Twig documentation: "Macros are comparable with functions in
  regular programming languages. They are useful to put often used HTML idioms
  into reusable elements to not repeat yourself." {% macro input(name, value,
  type, size) %} {% endmacro %} Macros differ from native PHP functions in a few
  ways: Default argument values are defined by using the default filter in the
  macro body; Arguments of a macro are always optional. If extra positional
  arguments are passed to a macro, they end up in the special varargs variable
  as a list of values.
published_time: '2016-05-02T08:34:25+00:00'
modified_time: '2022-07-20T20:56:27+00:00'
---
From [the official Twig documentation](https://twig.symfony.com/doc/2.x/tags/macro.html): "Macros are comparable with functions in regular programming languages. They are useful to put often used HTML idioms into reusable elements to not repeat yourself."

```php
{% macro input(name, value, type, size) %}
  <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />
{% endmacro %}
```

Macros differ from native PHP functions in a few ways:

* Default argument values are defined by using the `default` filter in the macro body;
* Arguments of a macro are always optional.
* If extra positional arguments are passed to a macro, they end up in the special `varargs` variable as a list of values.

But as with PHP functions, macros don't have access to the current template variables. You can pass the whole context as an argument by using the special `_context` variable.