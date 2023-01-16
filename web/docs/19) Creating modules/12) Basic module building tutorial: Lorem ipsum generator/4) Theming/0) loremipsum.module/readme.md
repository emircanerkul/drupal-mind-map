```php
/**
 * Implements hook_theme().
 */
function loremipsum_theme($existing, $type, $theme, $path) {
  $variables = [
    'loremipsum' => [
      'variables' => [
        'source_text' => NULL,
      ],
      'template' => 'loremipsum',
    ],
  ];
  return $variables;
}
```

Another reason not to ditch the _.module_ file is because that's where _hook\_theme()_ goes. This one works pretty much like in D7: you declare an array containing your variables and template file, which should be saved in the correct location (the _templates_ folder) with the _.html.twig_ extension.

Then, right before handing your render array over to Twig, you can do some preprocessing. The following hook inserts random punctuation at the end of each sentence:

```php
/**
 * Template preprocess function for Lorem ipsum.
 *
 * @param array $variables
 *   An associative array containing:
 *   - source_text
 */
function template_preprocess_loremipsum(&$variables) {
  $punctuation = array('. ', '! ', '? ', '... ', ': ', '; ');
  for ($i = 0; $i < count($variables['source_text']); $i++) {
    $big_text = explode('. ', $variables['source_text'][$i]);
    for ($j = 0; $j < count($big_text) - 1; $j++) {
      $big_text[$j] .= $punctuation[floor(mt_rand(0, count($punctuation) - 1))];
    }
    $variables['source_text'][$i] = implode('', $big_text);
  }
}
```