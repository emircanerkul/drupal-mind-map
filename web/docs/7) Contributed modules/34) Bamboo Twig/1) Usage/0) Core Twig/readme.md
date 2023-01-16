Drupal core already adds a [handful of custom functions](https://www.drupal.org/docs/8/theming/twig/functions-in-twig-templates) that are Drupal specific.

### i18n

The `trans` tag to translate string. See the following [link](http://getlevelten.com/blog/mark-carver/drupal-8-twig-templates-and-translations) for more details.

### Urls

The `path` functions returns a relative URL given a route name and parameters.

* `route` string.
* `params` (optional) array.
* `options` (optional) array.

```php
{# Generates URL from route 'entity.user.canonical'. #}
<a href="{{ path('entity.user.canonical', {'user': user.id}) }}">View user profile</a>

```

The `link` functions return `<a>` tag for the URL.

* `text` string.
* `url` string.
* `params` (optional) array.

```php
{# Create a link with markup. #}
{{ link('Homepage', item.url, { 'class':['foo', 'bar', 'baz']} ) }}

```

The `file_url` function returns a relative url of a given URI or path to a file.

* `uri` string - URI or string path to a file.

```php
{# Generate a relative URI path to the file. #}
{{ file_url('public://antistatique.jpg') }}

```

### Attachments

The `attach_library` function Attaches an asset library to the template,  
and hence to the response.

* `library` string.

```php
{# Attaches an asset library to the template. #}
{{ attach_library('classy/node') }}

```