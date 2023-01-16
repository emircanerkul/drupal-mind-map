### Dot notation can be chained

```php
{% set classes = ['red', 'green', 'blue'] %}
{% set my_id = 'specific-id' %}
{% set image_src = 'https://www.drupal.org/files/powered-blue-135x42.png' %}

```

```php
<img{{ attributes.addClass(classes).removeClass('green').setAttribute('id', my_id).setAttribute('src', image_src) }}>

```

outputs `<img id="specific-id" class="red blue" src="https://www.drupal.org/files/powered-blue-135x42.png">`

### Using without filter

The twig filter `without` to retrieve part of attributes:

```php
<div class="myclass {{ attributes.class }}"{{ attributes|without('class') }}></div>

```

Note: In most cases code like the above should be avoided in favor of using addClass().

**Be extremely cautious when assigning attributes manually in twig templates**. Be sure to always enclose the attribute strings in double quotes or the site may be left open to an XSS attack. Twig will automatically escape the contents of the double quotes and protect from an XSS attack.

This twig template:

```php
<b class={{ attributes.class }}>Hello<b>
```

With user input:

```php
foo onclick=alert(bar)
```

Will result in this output:

```php
<b class=foo onclick=alert(bar)>Hello</b>
```

This twig template with double quotes:

```php
<b class="{{ attributes.class }}">Hello<b>
```

Double quotes will result in this output from the same input:

```php
<b class="foo &quot; onclick=&quot;alert(bar)">Hello</b>
```

### Modifying attributes without printing them

```php
{% set attributes = attributes.addClass('my-class') %}
<div{{ attributes }}></div>

```