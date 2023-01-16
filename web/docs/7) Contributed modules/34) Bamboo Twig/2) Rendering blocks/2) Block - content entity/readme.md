Those kind of block are configured on _[admin/structure/block/block-content](http://admin/structure/block/block-content)_.  
These **content blocks entity** are just content entities like _node_, _user_, _taxonomy_ & _comment_. Their provider (`block_content module`) also offers a plugin to display them in blocks.

The simplest way to render **content entity block** is to use the `bamboo_render_entity(entity_type, <id>)` . This function belongs to `bamboo_loader` submodule.

So having created a content block through administrative interface you can print it using the following code.

* `entity_type` string.
* `id` int (optional).

```php
{# Render the Block content ID 2 #}
{{ bamboo_render_entity('block_content', 2) }}
```