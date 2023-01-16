Often named "Custom block", plugins blocks are essentially PHP `Class` with a specific YAML annotation (`@Block`).  
For newcomers, you may read this guide [How to create a custom block](https://www.drupal.org/docs/8/creating-custom-modules/create-a-custom-block).

The simplest way to render a **plugin** **block** is to use the `bamboo_render_block(block_id, <params>)`. This function belongs to `bamboo_loader` submodule.

* `block_id` string.
* `params` array (optional).

```php
{# Render the 'system_powered_by_block' block #}
{{ bamboo_render_block('system_powered_by_block') }}

```