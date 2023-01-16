---
url: https://www.drupal.org/docs/8/theming-drupal-8/using-attributes-in-templates
description: >-
  Many Twig templates will have one or more Attribute objects passed in as
  variables. The job of the Attribute object is to store a set of HTML
  attributes, providing the developer helpful methods to interact with that data
  and allow for easy printing of the attributes. For example,
  attributes.addClass('myclass') makes it easier to add one class without
  worrying about precise string concatenation. Generally, attributes in a
  template should look something like this: There should not be any space
  between the tag name and the Twig syntax.
published_time: '2015-06-28T21:33:42+00:00'
modified_time: '2020-06-20T22:28:22+00:00'
---
Many Twig templates will have one or more Attribute objects passed in as variables. The job of the Attribute object is to store a set of HTML attributes, providing the developer helpful methods to interact with that data and allow for easy printing of the attributes. For example, `attributes.addClass('myclass')` makes it easier to add one class without worrying about precise string concatenation.

Generally, attributes in a template should look something like this:

```php
<div{{ attributes }}></div>

```

There should not be any space between the tag name and the Twig syntax. The "stable" theme included with Drupal 8 core has many examples of attributes to examine.

By default, the following attribute object variables are available to all templates: `attributes`, `title_attributes`, and `content_attributes`.

You can use your debug helper of choice (`kint()`, `dump()`, `dpm()`, etc) to inspect what's available. Below is an example of using `{{ kint(attributes) }}` in node.html.twig

[![{{ kint(attributes) }} on a node](/files/kint-attributes-object.png)](/files/kint-attributes-object.png)