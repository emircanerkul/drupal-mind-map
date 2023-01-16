### How to discover a 'block plugin id'

It might be frustrating at first trying to figure out how to get a block's plugin id. In a theme's **themename.theme** file just preprocess a block. One of the variables available is the plugin\_id.

```php
/**
 * Implements hook_preprocess_block().
 */
function themename_preprocess_block(array $variables) {
  // Get the plugin id
  $plugin_id = $variables['plugin_id'];
  print '<pre>' . $plugin_id . '</pre>';
}
```

### How to discover the name of a "block content type"

All blocks created from block content types show the same base plugin id `block_content`. Thus, a the block's content type is it's machine name.

Go to `/admin/structure/block/block-content/types` and "Edit" one of the block types shown. To the right of the label will be a "Machine name". For example the "Basic block" type created by the Standard profile has a machine name `basic`. 