Here are some of the helpful methods you can use with the Attribute object:

### `attributes.addClass()`

Adds classes or merges them on to an array of existing CSS classes.

#### Single class:

```php
<div{{ attributes.addClass('my-class') }}></div>

```

#### Multiple classes:

```php
{%
  set classes = [
    'red',
    'green',
  ]
%}
<div{{ attributes.addClass(classes) }}></div>

```

outputs `<div class="red green"></div>`.

### `attributes.removeClass()`

Removes a class from an Attribute object. Used similarly to `addClass`. Let's say you get the classes variable from somewhere else like a preprocess function.

```php
{% set classes = [ 'red', 'green', 'blue' ] %}

<div{{ attributes.addClass(classes).removeClass('green') }}></div>

```

outputs `<div class="red blue"></div>`.

### `attributes.setAttribute($attribute, $value)`

Sets values for an attribute key.

```php
<div{{ attributes.setAttribute('id', 'myID') }}></div>

```

outputs `<div id="myID"></div>`

### `attributes.removeAttribute($attribute)`

Removes an attribute from an Attribute object.

```php
<div{{ attributes.removeAttribute('id') }}></div>

```

### `attributes.hasClass($class)`

Checks if the class array has the given CSS class.

```php
{% if attributes.hasClass('myClass') %}
  {# do stuff #}
{% endif %}

```

### `attributes.key`

If the key is associated with a value, the value is returned. It acts a lot like one might expect a getAttribute() function to work. (Note that there is no getAttribute() function, and that this syntax is equivalent to `offsetGet()`.)

```php
<div style="{{ attributes.style }}"></div>
```

Depending on the key, you may have to use brackets instead of a dot. This is the case if the key contains a hyphen as with most data attributes.

```php
{% if attributes['data-my-data'] %}
  {# do stuff #}
{% endif %}

```

### Create Attributes in Twig

As of Drupal 8.3.x, there is a new Twig function `create_attribute()` See the change record: <https://www.drupal.org/node/2818293>

This provides a new blank Attribute object to use to build up attributes.

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