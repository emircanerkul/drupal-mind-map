Modules integrating with CKEditor can ship with code that directly utilizes CKEditor APIs. The module could be either providing integration to one of the CKEditor 4 community plugins, or it could provide a fully custom CKEditor 4 plugin.

### For plugins that have a CKEditor 5 equivalent available:

For modules that provide a CKEditor 4 community plugin, a CKEditor 5 equivalent may be available. The CKEditor 5 equivalent plugin could be available as:

* **A part of the CKEditor 5 package**: The CKEditor5 package offers plugins that aren’t available in Drupal by default, but can be made available by registering a plugin definition that invokes the desired plugin. See the [CKEditor 5 Drupal module API documentation](https://api.drupal.org/api/drupal/core%21modules%21ckeditor5%21ckeditor5.api.php/group/ckeditor5%5Farchitecture/9.3.x) on how to define plugins, and ckeditor5.ckeditor5.yml for examples of creating Drupal Ckeditor 5 plugins from code made available via the CKEditor 5 JavaScript Package.
* **A plugin that is managed on Github or elsewhere outside of the CKEditor organization**: In these instance, it’s probably best to start with the CKEditor 5 starter template found in the ckeditor5\_plugin\_starter\_template directory of the [CKEditor 5 Dev Tools module](https://www.drupal.org/project/ckeditor5%5Fdev)

### For custom plugins (or ones that don’t yet have a CKEditor 5 equivalent):

These plugins will need to be upgraded to use the CKEditor 5 API. More information on CKEditor 5 instructions for migrating from CKEditor 4\. The tooling needed to make these plugins available to Drupal can be found in the CKEditor 5 starter template included with the [CKEditor 5 Dev Tools module](https://www.drupal.org/project/ckeditor5%5Fdev), in the `/ckeditor5_plugin_starter_template` directory.

### Updating usages of hook\_form\_alter for CKEditor forms

Unlike CKEditor 4, CKEditor 5 has no integration with Drupal’s Form API. With CKEditor 4, the link creation and image upload forms were alterable via `hook_form_editor_link_dialog_alter` and `hook_form_editor_image_dialog_alter` respectively. With CKEditor 5, these forms must be altered within the plugin itself.  
An example of an issue where `hook_form_editor_link_dialog_alter` needed to be converted into JavaScript directly interacting with the CKEditor 5 API can be found in [Linkit](https://www.drupal.org/project/linkit/issues/3232190) and [Editor Advanced Link](https://www.drupal.org/project/editor%5Fadvanced%5Flink/issues/3232052) modules. In CKEditor 5 these forms are rendered on the frontend, meaning that they cannot be extended using Drupal's form API.

### Migrating plugin configuration from CKEditor 4 to CKEditor 5

If a module supports both CKEditor 4 and 5, it is possible to migrate existing CKEditor 4 migration to its CKEditor 5 equivalent for when an existing text format switches from 4 to 5\. This is accomplished by creating an instance of a `\Drupal\ckeditor5\Annotation\CKEditor4To5Upgrade` plugin that extends `\Drupal\ckeditor5\Plugin\CKEditor4To5UpgradePluginInterface`. Consult the interface docblocks for details on how it is used.