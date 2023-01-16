---
url: https://www.drupal.org/docs/8/modules/block-style-plugins/twig-templates
description: >-
  It can be useful to have your block style suggest a Twig template as a Theme
  Suggestion. Doing this allow for much greater control over a block's markup.
  Keep in mind that these are just theme "suggestions" if the template is not
  registered or another suggestion has higher priority the template may not
  apply. The easiest thing is to prefix the template with block__. Via the Yaml
  form By adding a template key you may specify a template theme suggestion of
  your choosing for the block.
published_time: '2018-12-06T00:41:31+00:00'
modified_time: '2018-12-06T00:41:31+00:00'
---
It can be useful to have your block style suggest a Twig template as a [Theme Suggestion](https://www.drupal.org/node/2354645). Doing this allow for much greater control over a block's markup. Keep in mind that these are just theme "suggestions" if the template is not registered or another suggestion has higher priority the template may not apply. The easiest thing is to prefix the template with `block__`.

### Via the Yaml form

By adding a `template` key you may specify a template theme suggestion of your choosing for the block.

```yaml
sample_block_style:
  label: 'Sample Block Style'
  template: block__my_custom_template
  form:
    field_use_template:
      '#type': 'checkbox'
      '#title': 'Select this to change the template'
```

The `block--my-custom-template.html.twig` will now be the top suggestion when Drupal renders the block.

### Via PHP method

For those looking for more power, a template can be suggested by overriding the **BlockStyleBase::themeSuggestion** **()** method.

```php
/**
 * {@inheritdoc}
 */
public function themeSuggestion(array $suggestions, array $variables) {
  // First get any suggestions set by parent classes.
  $suggestions = parent::themeSuggestion($suggestions, $variables);

  // Get all the styles set for this plugin.
  $styles = $this->getStylesFromVariables($variables);

  // Check to see if the checkbox field was checked.
  if (!empty($styles['field_use_template'])) {
    // Set our custom twig template suggestion.
    $suggestions[] = 'block__my_custom_template';
  }

  return $suggestions;
}
```