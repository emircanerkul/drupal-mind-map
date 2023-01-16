Plugins using annotations are registered in PHP files using the [PSR-4 standard](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md), which is followed by Drupal core.

To register your plugin, put a file in a folder relative to your Drupal module root:

* either: `src/Plugin/$plugin_type/$plugin_name.php`, e.g.: `core/modules/ckeditor/src/Plugin/CKEditorPlugin/Internal.php`
* or: `src/Plugin/$vendor/$plugin_type/$plugin_name.php`, e.g.: `core/modules/ckeditor/src/Plugin/views/argument/Fid.php`

where `$vendor` is the module defining the plugin type.