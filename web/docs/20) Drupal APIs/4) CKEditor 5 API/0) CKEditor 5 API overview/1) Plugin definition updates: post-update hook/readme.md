When plugin definitions are updated, it's important to understand when which aspects of plugin definitions are evaluated:

1. Changes to `conditions` automatically get re-evaluated, because these are evaluated at runtime. For example, a CKEditor 5 plugin that was previously explicitly enabled thanks to a toolbar item that has been enabled will _not_ show up anymore if the plugin definition was modified to also have a `filter` condition and that filter is not enabled.
2. Changes to `elements` do not get automatically synced to `filter_html`'s allowed HTML tags, because that requires changes to the corresponding `FilterFormat` config entity's data.
3. _Generally speaking_ all plugin definition changes are applied _immediately_, with the sole exception of `elements`, because that requires those same elements to also be allowed by `filter_html` (if enabled), and that cannot be automatically updated.

You _can_ ensure that `elements` changes are propagated automatically to each text format/editor that uses this CKEditor 5 plugin: it's possible to update `filter_html` automatically. This can be done through a `MODULENAME.post_update.php` file that looks like this:

```php
<?php

use Drupal\editor\Entity\Editor;

/**
 * Your description here.
 */
function MYMODULE_post_update_DESCRIPTION() {
  _ckeditor5_plugin_supports_more_elements_append_to_filter_html_settings('mymodule_myplugin', '<span data-test>');
}

/**
 * Expands filter_html allowed tags for CKE5 plugin that supports more HTML.
 *
 * @param string $cke5_plugin_id
 *   The CKEditor 5 plugin ID which supports more HTML after an update.
 * @param string $allowed_html_to_append
 *   The string to append to `filter_html`'s `allowed_html` setting.
 */
function _ckeditor5_plugin_supports_more_elements_append_to_filter_html_settings(string $cke5_plugin_id, string $allowed_html_to_append) {
  $cke5_plugin_manager = \Drupal::service('plugin.manager.ckeditor5.plugin');
  assert($cke5_plugin_manager instanceof \Drupal\ckeditor5\Plugin\CKEditor5PluginManagerInterface);

  // 1. Determine which text editors use the updated CKEditor 5 plugin.
  $affected_editors = [];
  foreach (Editor::loadMultiple() as $editor) {
    // Text editors not using CKEditor 5 cannot be affected.
    if ($editor->getEditor() !== 'ckeditor5') {
      continue;
    }
    // Ask the plugin manager which CKEditor 5 plugins are enabled; this works
    // for every plugin, no matter if they have toolbar items or not, conditions
    // or not, et cetera.
    $enabled_cke5_plugin_ids = array_keys($cke5_plugin_manager->getEnabledDefinitions($editor));
    if (in_array($cke5_plugin_id, $enabled_cke5_plugin_ids, TRUE)) {
      $affected_editors[] = $editor;
    }
  }

  // 2. Update the corresponding text formats' `filter_html` configuration, if
  // they are using that filter plugin.
  foreach ($affected_editors as $editor) {
    $format = $editor->getFilterFormat();
    // Text formats not using `filter_html` filter do not need to be updated.
    if (!$format->filters('filter_html')->status) {
      continue;
    }
    // Append to "Allowed HTML tags" setting.
    $filter_html_config = $format->filters('filter_html')->getConfiguration();
    $filter_html_config['settings']['allowed_html'] .= ' ' . trim($allowed_html_to_append);
    $format->setFilterConfig('filter_html', $filter_html_config);
    // Save updated text format.
    $format->save();
  }
}
```

The `_ckeditor5_plugin_supports_more_elements_append_to_filter_html_settings()` helper does all the work for you. All you should need to do is update `MYMODULE_post_update_DESCRIPTION()` to match your module name, plugin ID, etc.