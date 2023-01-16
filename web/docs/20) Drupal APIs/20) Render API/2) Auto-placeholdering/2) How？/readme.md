An HTML page served by Drupal can be considered one big render tree, with the root of the tree being the entire page, the first level being the regions, the second level the blocks, the third level being the block contents, and so on.

Therefore, any subtree will be auto-placeholdered, if:

1. it is defined by a `#lazy_builder` (and not by a render array)
2. it meets the auto-placeholder conditions, which can happen in one of two ways:  
   1. it has a `#cache` value whose properties meet at least one of the auto-placeholder conditions  
   2. its `#lazy_builder` callback, when executed and rendered, results in the bubbling of cacheability metadata that meet at least one of the auto-placeholder conditions. The first time this happens, the bubbled cacheability metadata will be cached (see [PlaceholderingRenderCache](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21PlaceholderingRenderCache.php/class/PlaceholderingRenderCache/8)) so that future hits won't have to first execute and render the `#lazy_builder` to know it should be auto-placeholdered  
   _Note: auto-placeholdering based on a bubbled max-age does not yet work in 8.0.x, that's postponed to at least 9.5.0: <https://www.drupal.org/node/2559847>._ Auto-placeholdering for #lazy\_builder with bubbling of max-age.

Please be aware that for the moment the lazy builder callback should not return a render array based on the `#type` property. Instead, it should be one of the other ones, such as `#theme`, `#markup` or `#plain_text`. If you need to return a `#type`, wrap it into an array as a child. This issue is known and currently still debated in <https://www.drupal.org/project/drupal/issues/2609250>.

### Examples

See `CommentDefaultFormatter` (comment form), `BlockViewBuilder` (blocks), `NodeViewBuilder` (node links), `StatusMessages` (status messages).