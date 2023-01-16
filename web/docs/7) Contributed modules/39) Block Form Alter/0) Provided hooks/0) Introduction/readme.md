The Block Form Alter module provides functions to alter block forms consistently across implementing plugins:

* `hook_block_plugin_form_alter()`
* `hook_block_type_form_alter()`

Block forms are rendered by implementing plugins, which may require duplicate code in some instances where a developer desires to alter a given block form. This is particularly true when altering forms rendered by Layout Builder.

### hook\_block\_plugin\_form\_alter()

The `hook_block_plugin_form_alter()` function allows for block forms to be targeted by plugin id. Block forms rendered by the 'block\_content' and 'inline\_block' plugins must be altered with `hook_block_type_form_alter()`.

Example:

```php
/**
 * Alter block forms per block plugin.
 *
 * Block forms for the 'block_content' and 'inline_content' plugins must use
 * hook_block_type_form_alter().
 *
 * @param array $form
 *   Nested array of form elements that comprise the form.
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 *   The form state.
 * @param string $plugin
 *   The machine name of the plugin implementing the block.
 */
function hook_block_plugin_form_alter(array &$form, FormStateInterface &$form_state, string $plugin) {
  if ($plugin == 'webform_block') {
    $form['settings']['redirect']['#default_value'] = TRUE;
    $form['settings']['redirect']['#disabled'] = TRUE;
  }
}
```

### hook\_block\_type\_form\_alter()

The `hook_block_type_form_alter()` function modifies block forms rendered by both Block Content ('block\_content' plugin) and Layout Builder ('inline\_block' plugin).

Example:

```php
/**
 * Alter custom block forms rendered by Block Content and Layout Builder.
 *
 * E.g. Alter block forms for 'block_content' and 'inline_block' plugins.
 *
 * @param array $form
 *   Nested array of form elements that comprise the form.
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 *   The form state.
 * @param string $block_type
 *   The machine name of the custom block bundle.
 */
function hook_block_type_form_alter(array &$form, FormStateInterface &$form_state, string $block_type) {
  if ($block_type == 'accordion') {
    $form['example_field']['widget'][0]['value']['#default_value'] = 'A better default value';
  }
}
```