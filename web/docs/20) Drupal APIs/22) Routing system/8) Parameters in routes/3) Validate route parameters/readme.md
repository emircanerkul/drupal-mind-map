---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/parameters-in-routes/validate-route-parameters
description: >-
  Drupal 8's routes placeholder values (i.e., parameters passed in the URL) may
  be validated using the routing system. Placeholder values could be of type
  string, integer, or any pattern that can be validated with a regular
  expression. If validation of the parameters fails, then a page not found is
  returned. We can define constraints for the values of the placeholders as
  regular expressions. For example in example.routing.yml: {name} placeholder
  should string and contains only uppercase and lowercase alphabet.
published_time: '2014-12-28T18:34:01+00:00'
modified_time: '2019-04-16T07:51:48+00:00'
---
Drupal 8's routes placeholder values (i.e., parameters passed in the URL) may be validated using the routing system. Placeholder values could be of type string, integer, or any pattern that can be validated with a regular expression. If validation of the parameters fails, then a page not found is returned.

We can define constraints for the values of the placeholders as regular expressions.  
For example in `example.routing.yml`:  
`{name}` placeholder should string and contains only uppercase and lowercase alphabet.

```php
example.user
  path: '/example/{name}'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::content'
  requirements:
    _permission: 'access content'
    name: '[a-zA-Z]+'

```

In the case the validation fails, by default the return will be a 404 page.