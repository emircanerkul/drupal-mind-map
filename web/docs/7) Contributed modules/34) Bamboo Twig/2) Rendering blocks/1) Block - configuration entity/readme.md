Those kind of block are configured on [admin/structure/block](http://admin/structure/block).  
The purpose of this configuration entities is to store plugin IDs (which block ID) referenced to a theme and region where the block should be printed.

_Those additional informations are not used by Bamboo Twig, you can print any configuration entity block anywhere._ 

The simplest way to render **configuration entity block** is to use the `bamboo_render_entity(entity_type, <id>)` . This function belongs to `bamboo_loader` submodule.

So having configured a block through administrative interface you can print it using the following code.

* `entity_type` string.
* `id` int (optional).

```php
{# Render the `stark_messages` Block entity #}
{{ bamboo_render_entity('block', 'stark_messages') }}
```

Note that _id_ here has nothing to do with _block\_id_ we discussed before. It is an ID (machine\_name) of block configuration entity. You may copy it from the block configuration form.