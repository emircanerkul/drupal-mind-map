Create a `[module].module` file if it doesn't already exist in your module, and add code that defines each of your twig templates. The key of each item in the array is what you will need to call the template later. Do not use dashes in the file name.

```php
/**
 * Implements hook_theme().
 */
function [module]_theme($existing, $type, $theme, $path) {
  return [
    'my_template' => [
      'variables' => ['test_var' => NULL],
    ],
  ];
}

```

See the documentation for [hook\_theme()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Ftheme/8).