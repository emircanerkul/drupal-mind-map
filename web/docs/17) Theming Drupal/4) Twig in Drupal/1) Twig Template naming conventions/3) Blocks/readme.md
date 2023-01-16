Pattern: _block--\[module|--\[delta\].html.twig_  
Base template: _block.html.twig_ (base location: core/modules/block/templates/block.html.twig)

1. block--\[_module_\]--\[_delta_\].html.twig
2. block--\[_module_\].html.twig
3. block.html.twig

"module" being the name of the module and "delta", the internal id assigned to the block by the module.

For example, _"block--block--1.html.twig"_ would be used for the first user-submitted block added from the block administration screen since it was created by the block module with the id of 1\. [Region-specific block templates are not available in Drupal 8](https://www.drupal.org/node/2011434).

If you had a block created by a custom module called "custom" and a delta of "my-block", the theme hook suggestion would be called "_block--custom--my-block.html.twig._"

Also one more example with Views, if you have a block created by views with a view name "front\_news" and display id "block\_1" then the theme hook suggestion would be: _block--views-block--front-news-block-1.html.twig_ (notice, when you have underscores in a display id or in a view name - you have to transform them in to a single dash)

Be aware that module names are case sensitive in this context. For instance if your module is called 'MyModule', the most general theme hook suggestion for this module would be "_block--MyModule.html.twig._"

See the [block.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!block!templates!block.html.twig/8).

### Layout builder blocks

For "custom blocks" created through the layout builder, the following template naming suggestions apply:

1. block--inline-block--\[block-type\].html.twig
2. block--inline-block.html.twig
3. block--\[block-type\].html.twig
4. block--layout-builder.html.twig
5. block.html.twig