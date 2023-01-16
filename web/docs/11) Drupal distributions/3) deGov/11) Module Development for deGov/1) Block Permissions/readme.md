If your custom module provides one or more [blocks](https://www.drupal.org/docs/drupal-apis/block-api), you need to make sure you explicitly set permissions for these blocks for the role `system_configurator`.

`system_configurator` is a specialized utility role with permissions to change some theme settings and manage the block layout.

To not give the `system_configurator` blanket access to all blocks, the module [**Block permissions**](https://www.drupal.org/project/block%5Fpermissions) is used.

If the `system_configurator` should be able to manage a custom module's blocks, you need to grant them the `administer blocks provided by custom_module_machine_name` permission.