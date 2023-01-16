---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/functions-in-twig-templates
description: >-
  Twig provides a number of handy functions that can be used directly within
  Templates. List of Twig Functions Drupal core adds a handful of custom
  functions that are Drupal-specific. These are defined in the TwigExtension
  class. You can also define your own custom Twig functions in a custom module
  (but not in a theme). To find an example of how to do this, see this example
  in
  core/modules/system/tests/modules/twig_extension_test/src/TwigExtension/TestExtension.php.
  attach_library($library) Attaches an asset library to the template.
published_time: '2015-05-11T20:58:35+00:00'
modified_time: '2022-07-20T21:05:10+00:00'
---
Twig provides a number of handy functions that can be used directly within Templates.

[List of Twig Functions](https://twig.symfony.com/doc/2.x/functions/index.html)

Drupal core adds a handful of custom functions that are Drupal-specific. These are defined in the [TwigExtension class](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/class/TwigExtension/9).

You can also define your own custom Twig functions in a custom module (but not in a theme). To find an example of how to do this, see this example in [core/modules/system/tests/modules/twig\_extension\_test/src/TwigExtension/TestExtension.php](https://api.drupal.org/api/drupal/core%21modules%21system%21tests%21modules%21twig%5Fextension%5Ftest%21src%21TwigExtension%21TestExtension.php/9).

### attach\_library($library)

Attaches an asset library to the template.

`{{ attach_library('classy/node') }}`

### active\_theme()

Prints the machine name of the active theme.

```php
{{ active_theme() }} {# my_custom_theme #}
```

### active\_theme\_path()

Prints the relative path to the active theme.

```php
{{ active_theme_path() }} {# themes/custom/my_custom_theme #}

```

### create\_attribute($attributes)

Create new Attribute objects using the `create_attribute()` function inside a Twig template. These objects can then be manipulated like other Attribute objects coming into the Twig template.

<!-- note-version -->
> VERSION: Introduced in 8.3.x
See change record:&nbsp;https://www.drupal.org/node/2818293

```php
{% set my_attribute = create_attribute() %}
{%
  set my_classes = [
    'kittens',
    'llamas',
    'puppies',
  ]
%}
<div{{ my_attribute.addClass(my_classes).setAttribute('id', 'myUniqueId') }}>
  {{ content }}
</div>

```

```php
<div{{ create_attribute({'class': ['region', 'region--header']}) }}>
  {{ content }}
</div>

```

### render\_var($arg)

Convenience function around [render()](https://api.drupal.org/apis/render).

```twig
{{ render_var({ '#theme': 'foo_bar', '#title': 'baz' }) }}

```

### file\_url($uri)

This helper function accepts a URI to a file and creates a relative URL path to the file.

`{{ file_url(node.field_example_image.entity.uri.value) }}`

### link($text, $uri, $attributes)

This helper function accepts as the first parameter the **text** and as the second parameter the **URI**. The _optional_ third parameter is the **attributes** object that can be used to provide eg. additional CSS classes.

Note that this function handles the `<nolink>` and `<button>` options of Drupal _menu item text_ and generates `<span>` or `<button>` element instead of `<a>` when they are used. It also adds a `data-drupal-link-system-path` attribute and an `is-active` CSS class (in case the link is active) automatically if the **URI** parameter is a `\Drupal\Core\Url` object with its `set_active_class` option set to `TRUE`!

Examples:  
`{{ link(item.title, item.uri, { 'class':['foo', 'bar', 'baz']} ) }}`

### path($name, $parameters, $options)

Generates a \[relative\] URL path given a route name and parameters.

```php
{# Link to frontpage view. #}
<a href="{{ path('view.frontpage.page_1') }}">{{ 'View all content'|t }}</a>

{# Link to user entity/profile page. #}
<a href="{{ path('entity.user.canonical', {'user': user.id}) }}">{{ 'View user profile'|t }}</a>

{# Link to node page. #}
<a href="{{ path('entity.node.canonical', {'node': node.id}) }}">{{ 'View node page'|t }}</a>

{# Link to taxonomy term. #}
<a href="{{ path('entity.taxonomy_term.canonical', {'taxonomy_term': term.id}) }}">{{ 'View taxonomy term'|t }}</a>

{# Add a destination query parameter. Simple Example #}
<a href="{{ path('user.login', {}, {'query': {'destination': path('<current>') }}) }}">{{ 'View node page'|t }}</a>.

{# Add a destination query parameter. Advanced Example, event_user_sync.registration is a custom route from a custom module with the name event_user_sync #}
{% set redirect_path = path('event_user_sync.registration', {'node': node.id}) %}
<a href="{{ path('user.register',{},{'query':{'destination': redirect_path }}) }}">{{ 'Register'|t }}</a>


```

**The url and path function are defined in close parallel to those found in \\Symfony\\Bridge\\Twig\\Extension\\RoutingExtension.**

### url($name, $parameters, $options)

Generate an absolute URL given a route name and parameters:

```php
<a href="{{ url('view.frontpage.page_1') }}">{{ 'View all content'|t }}</a>

```

Generate an absolute URL to the current URL:

```php
<a href="{{ url('<current>') }}">{{ 'Reload'|t }}</a>
```

Generate an absolute URL to the front page:

```php
<a href="{{ url('<front>') }}">{{ 'Home'|t }}</a>
```

Generate an absolute URL to a specific node:

```php
<a href="{{ url('entity.node.canonical', { 'node': 123 }) }}">{{ 'Visit node 123'|t }}</a>
```

Generate an absolute URL to a specific taxonomy term:

```php
<a href="{{ url('entity.taxonomy_term.canonical', { 'taxonomy_term': 123 }) }}">{{ 'Visit taxonomy term 123'|t }}</a>
```

If you are working in a node template and have a `node` variable available, you can generate an absolute URL to the current node:

```php
<a href="{{ url('entity.node.canonical', { 'node': node.id() }) }}">{{ 'Visit this page'|t }}</a>
```