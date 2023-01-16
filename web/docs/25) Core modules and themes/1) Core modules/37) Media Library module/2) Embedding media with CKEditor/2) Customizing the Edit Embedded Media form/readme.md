Please note: **this technique is not officially supported by Drupal core.** It may break in minor releases.

If you need to add extra fields to the Edit form, such as manually entered classes; options to hide on mobile; and so forth, you can do this in the following way.

First, implement `hook_form_FORM_ID_alter()` for the `editor_media_dialog` form in a custom module or theme. Here's an example of adding a text field to allow extra CSS classes and an extra `data-attribute` option to the rendered output.

```php
use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter().
 */
function MY_MODULE_form_editor_media_dialog_alter(array &$form, FormStateInterface $form_state) {
  if (isset($form_state->getUserInput()['editor_object'])) {
    $editor_object = $form_state->getUserInput()['editor_object'];
    $media_embed_element = $editor_object['attributes'];
  } else {
    // Retrieve the user input from form state.
    $media_embed_element = $form_state->get('media_embed_element');
  }

  $form['extra_classes'] = [
    '#title' => t('Extra Classes'),
    '#type' => 'textfield',
    '#step' => '1',
    '#default_value' => empty($media_embed_element['class']) ? '' : $media_embed_element['class'],
    '#parents' => ['attributes', 'class'],
  ];
  $form['data-my-data'] = [
    '#title' => t('Extra Data Attribute'),
    '#type' => 'textfield',
    '#step' => '1',
    '#default_value' => empty($media_embed_element['data-my-data']) ? '' : $media_embed_element['data-my-data'],
    '#parents' => ['attributes', 'data-my-data'],
  ];
}
```

After enabling your new module and clearing all caches, you should see two new fields in the Edit Media dialog box.

Note the `#parents` property. This ensures that the extra attributes will be added to the `drupal-media` tag, e.g.:

```php
<drupal-media class="MY-EXTRA-CLASS MY-EXTRA-CLASS2" data-align="right" data-entity-type="media" data-entity-uuid="f060a7bd-a588-43c6-84d4-be7c1ff0167d" data-my-data="MY-VALUE-HERE"></drupal-media>
```

Make sure to add any extra attributes to the relevant format, so that they won't be removed by the HTML filter. You can do this in the same way you need to add the standard extra attributes for embedded media.

These extra attributes will be added to the `Attributes` object when the embedded media is rendered. They can be retrieved from the `Attributes` object during processing.

Some examples of this are:

The `class` attribute: you probably don't need any more code. Normally this gets passed along to the standard template for embedded media.

The `data-my-data` attribute, you can deal with in either the appropriate preprocess function, or directly in the relevant Twig template (e.g. `media--image.html.twig`), like:

```php
{% if attributes['data-my-data'] %}
  {# do stuff #}
{% endif %}
```