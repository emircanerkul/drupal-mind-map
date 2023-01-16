If your JavaScript depends on any other resources, like jQuery (included with Drupal) or Drupal settings you can use dependencies:

```yaml
example:
  version: 1.x
  js:
    js/example.js: {}
  dependencies:
    - core/jquery
    - core/drupalSettings
```

If you wished to quickly add to `drupalSettings` before it gets passed to the library, you could modify it like so:

```php
function d8_module_page_attachments(array &$attachments) {
  $attachments['#attached']['library'][] = 'example/example';
  $attachments['#attached']['drupalSettings']['example']['foo'] = 'bar';
}
```