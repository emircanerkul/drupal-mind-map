Attaching a library can be done in several ways depending on your needs. Remember that the library is always registered by its module or theme name followed by the library name. In this case, it would be 'example/example'.

* module: [hook\_element\_info\_alter()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Felement%5Finfo%5Falter/8.3.x)
* module: [hook\_page\_attachments](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Fpage%5Fattachments/8.3.x)()
* theme: [template\_preprocess\_HOOK](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Fpreprocess%5FHOOK/8.3.x)()
* twig: `{{ attach_library('example/example') }}`

`hook_page_attachments()` and `template_preprocess_HOOK()` operate exactly the same way as seen in this example:

```php
function example_preprocess_node__page(array &$variables) : void {
  // Theme name: 'example', library name: 'example'. 
  $variables['#attached']['library'][] = 'example/example';
}
```

In the case of `hook_element_info_alter()` you would need to specify the type you would like the JavaScript library to always be attached to. If you wanted a library attached to all cases where radio buttons are used you could do:

```php
function d8_theme_element_info_alter(array &$info) : void {
  if (isset($info['radio'])) {
    $info['radio']['#attached']['library'][] = 'example/example';
  }
}
```