---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/discovering-and-inspecting-variables-in-twig-templates
description: >-
  When working with a Twig template file most variables are documented in the
  comments for the template file. However, when they are not, or when themes or
  modules introduce new variables we need a way to discover all the variables
  available within the scope of a template. Twig provides the dump() function
  for discovering and inspecting variables in template files. The dump()
  function will not display any output unless debugging is enabled. Learn how to
  enable Twig debugging. Once enabled, the dump() function can be used to output
  information about a variable or variables within a template.
published_time: '2013-02-03T18:02:03+00:00'
modified_time: '2022-12-25T14:31:01+00:00'
---
When working with a Twig template file most variables are documented in the comments for the template file. However, when they are not, or when themes or modules introduce new variables we need a way to discover all the variables available within the scope of a template. Twig provides the `dump()` function for discovering and inspecting variables in template files.

The `dump()` function will not display any output unless debugging is enabled. [Learn how to enable Twig debugging](https://www.drupal.org/node/1903374).

Once enabled, the `dump()` function can be used to output information about a variable or variables within a template.

### Inspecting a single variable

If your template has a `title` variable available, the following will dump its contents to your template:

```php
{{ dump(title) }}

```

### Discovering all available variables in a template

To dump all available variables and their contents in a template, add the following to your template (after enabling debugging):

```php
{{ dump() }}

```

To dump only the available variable keys use:

```php
{{ dump(_context|keys) }}

```

There are additional [global variables](http://twig.sensiolabs.org/doc/templates.html#global-variables) available in all Twig templates:

* `_self` references the current template and contains advanced information about a template, i.e. the compiled template class name and information about the Twig environment. [\_self was deprecated and removed from Twig version 2.x.](http://twig.sensiolabs.org/doc/deprecated.html#globals)
* `_context` references the current context and contains all variables passed to the template such as variables sent from theme(), prepared by preprocess, or set in the template. Adding `{{ dump() }}` without specifying a variable is equivalent to `{{ dump(_context) }}`.
* `_charset` references the current character set.

These techniques will only dump keys for non-computed values. For example, you might have an ID at `node.field_main_image.target_id`. You can access the entity at `node.field_main_image.entity`, but the `entity` key will not appear in lists of keys because it is a computed value.

### Beware of `dump()`

If you want to see all variables, but dump() results in exhausted memory because of recursion or the like, you can loop through \_context to see all the keys in it:

```php
<ol>
  {% for key, value in _context  %}
    <li>{{ key }}</li>
  {% endfor %}
</ol>

```

Then use a conditional to check (for example `{% if loop.index == 2 %}`), and dump that value only if necessary.