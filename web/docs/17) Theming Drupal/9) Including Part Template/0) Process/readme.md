Let's say you have created following file in your theme folder for the header:

```php
THEME_NAME/templates/includes/header.html.twig
```

And now you want to include this file in:

```php
page.html.twig
```

### The recommended method

The correct method for Drupal 8 themes is to use Twig namespaces to declare the current theme "templates" directory. Here is an example:

```php
{% include '@THEME_NAME/includes/header.html.twig' %}
```

_Below is an example taken from a working theme on Drupal.org called [Architect](https://www.drupal.org/project/architect)._ 
_"@architect" refers to /templates in the working theme (architect) directory._ 

```php
{% include '@architect/includes/header.html.twig' %}
```

A Twig namespace is created in Drupal 8 automatically when installing your theme, and it points to the /templates directory of your theme. Essentially, writing "@theme\_name" in a Twig include (like above) will reference the location "your\_site.com/themes/theme\_name/templates" on your server.

### Additional parameters

If you want to pass additional arguments for loop or for checking some variables to your included twig template you should write in this way

```php
{% include '@THEME_NAME/includes/form-block.html.twig' with {key: value} %}
```

Example:

```php
{% include '@mytheme/includes/form-block.html.twig' with {display_title: true} %}
```

### The not-recommended method

One possible (but not recommended) method is to use below code to include this file.

```php
{# NOT recommended #}
{% include directory ~ '/templates/includes/header.html.twig' %}

```

The above information may work however it will create a server error if used with a sub-theme.

### Extending namespace functionality

The [component libraries](https://www.drupal.org/project/components) contributed module allows more flexible and sophisticated twig template organization in Drupal 8, which can work with the [twig "embed"](https://twig.symfony.com/doc/1.x/tags/embed.html) statement.