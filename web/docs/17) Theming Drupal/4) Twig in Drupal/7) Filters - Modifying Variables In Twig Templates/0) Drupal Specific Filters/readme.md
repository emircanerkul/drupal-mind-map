These are declared in [TwigExtension::getFilters()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/function/TwigExtension%3A%3AgetFilters/9).

### Translation filters

#### [trans](#trans)

This filter (alternatively, `t`) will run the variable through the Drupal `t()` function, which will return a translated string. This filter should be used for any interface strings manually placed in the template that will appear for users.

Example:  
`<a href="{{ url('<front>') }}" title="{{ 'Home'|t }}" rel="home" class="site-logo"></a>`

An example with replacements (see documentation for the [t() function](https://api.drupal.org/api/drupal/core%21includes%21bootstrap.inc/function/t/9) for more details):

`{% set name = '@label Introduction' |t({'@label': node.title.value}) %}`

#### [placeholder](#placeholder)

This filter escapes content to HTML and formats it using `drupal_placeholder()`, which makes it display as _emphasized_ text.

Example:  
`{% trans %}Submitted on {{ date|placeholder }}{% endtrans %}`

#### Unsafe translation

_Some patterns are unsafe and should not be used because they pass a variable directly to translation._ This not only inflates the list of strings for translation but is also a potential vulnerability, particularly if the output can be entered by a user. Some examples of improper translation:

```php
{# DO NOT DO THIS #}
{{ var1|t }}
{{ var1|placeholder }}
{% trans %}{{ var1 }}{% endtrans %}
```

### Additional filters

#### [clean\_class](#clean%5Fclass)

This filter prepares a string for use as a valid HTML class name. See [Html::getClass()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Html.php/function/Html%3A%3AgetClass/9)

#### [clean\_id](#clean%5Fid)

This filter prepares a string for use as a valid HTML ID. See [Html::getID()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Html.php/function/Html%3A%3AgetId/9)

#### [format\_date](#format%5Fdate)

This filter prepares a timestamp for use as a formatted date string. See [DateFormatter::format()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Datetime!DateFormatter.php/function/DateFormatter%3A%3Aformat/9)

* To format timestamp: `{{ created|format_date }}`
* To format using specific date type: `{{ created|format_date('short') }}`
* To format using a custom date type with PHP style formatting: `{{ created|format_date('custom', 'M j, Y') }}`

#### [raw](#raw)

This filter should be avoided whenever possible, particularly if you're outputting data that could be user-entered. See [this page](https://www.drupal.org/node/2296163) for more information on auto-escape in Drupal 8.

In Drupal 9 Twig 2, the `raw` tag is deprecated in favor of `verbatim`. (Note: the `|raw` filter is still fine.)

#### [render](#render)

This filter is a wrapper for the `render()` function. It takes a render array and outputs rendered HTML markup. This can be useful if you want to apply an additional filter (such as stripping tags), or if you want to make a conditional based on the rendered output (for example, if you have a non-empty render array that returns an empty string). It also can be used on strings and certain objects, mainly those implementing the `toString()` method.

#### [safe\_join](#safe%5Fjoin)

The `safe_join` filter joins several strings together with a supplied separator. See [TwigExtension::safeJoin()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/function/TwigExtension%3A%3AsafeJoin/9).

Example:  
`{{ items|safe_join(', ') }}`  
This will output each string in the items variable concatenated together with a comma separating each item.

#### [without](#without)

The `without` filter creates a copy of the renderable array and removes child elements by key specified through arguments passed to the filter. The copy can be printed without these elements. The original renderable array is still available and can be used to print child elements in their entirety in the twig template. See [twig\_without](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/function/TwigExtension%3A%3AwithoutFilter/9).

Examples:

`{{ content|without('links') }}`  
This prints everything in the `content` variable except `content.links`.

`{{ content|without('links', 'field_some_data') }}`  
Example of excluding two elements from display. This will exclude 'links' and 'field\_some\_data'.