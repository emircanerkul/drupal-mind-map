Ordered by most to least frequently used APIs:

CKEditor skins

Drupal 9's CKEditor uses the [Moono](http://ckeditor.com/addon/moono) skin by default. This is fine for most sites, since it's a fairly neutral skin. Some sites want to have perfect integration though, and in that case you may want to install [another skin](http://ckeditor.com/addons/skins/all) — perhaps even one you create yourself.  
 To do that, implement `hook_editor_js_settings_alter()`:

```php
function hook_editor_js_settings_alter(array &$settings) {
  foreach (array_keys($settings['editor']['formats']) as $text_format_id) {
    if ($settings['editor']['formats'][$text_format_id]['editor'] === 'ckeditor') {
      $settings['editor']['formats'][$text_format_id]['editorSettings']['skin'] = 'SKIN_NAME,ABSOLUTE_URL_TO_SKIN';
    }
  }
}
```

CKEditor iframe CSS

The CSS that is loaded into a CKEditor iframe instance, for example at `/node/add/article` (i.e. a CKEditor instance that is not used for in-place editing) may need to be customized so that CKEditor iframe instances match the styling on the front-end (for those who prefer WYSIWYG) or to make it show the structure (for those who prefer purely assistive text editors).

Front-end theme CSS

Virtually every front-end theme has CSS to style paragraphs, blockquotes, image captions and so on. **Therefore all front-end themes should tell CKEditor iframe instances to load the CSS for any content (text/markup) content creators can create.** They can do that by specifying a `ckeditor_stylesheets` key in their `*.info.yml` file. The CSS assets listed there will also be loaded into the iframe. See the [example in Bartik](https://api.drupal.org/api/drupal/core%21themes%21bartik%21bartik.info.yml/9). Also see the [How to make CKEditor match your front-end theme ("The WYSIWYG is a Lie")](https://thinkshout.com/blog/2017/08/the-wysiwyg-is-a-lie/) tutorial!

Module CSS

Modules that are loading CSS on the front end can use [hook\_ckeditor\_css\_alter() to also load this CSS in CKEditor iframe instances.](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21ckeditor.api.php/function/hook%5Fckeditor%5Fcss%5Falter/9)

CKEditor Plugin plugins

Add more functionality to CKEditor!

[\\Drupal\\ckeditor\\CKEditorPluginInterface](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21src%21CKEditorPluginInterface.php/interface/CKEditorPluginInterface/9): _Drupal plugins_ that correspond 1:1 to _CKEditor plugins_, to make Drupal _aware_ of the available CKEditor plugins. Hence the — at first sight — confusing name: CKEditor Plugin plugins, but it actually makes sense!
* There are four additional, optional interfaces you can implement  
   1. [\\Drupal\\ckeditor\\CKEditorPluginButtonsInterface](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21src%21CKEditorPluginButtonsInterface.php/interface/CKEditorPluginButtonsInterface/9) allows a CKEditor plugin to define which buttons it provides, so that users can configure a CKEditor toolbar instance via the [the drag-and-drop-based UI.](/documentation/modules/ckeditor)  
   _Example: `\Drupal\ckeditor\Plugin\CKEditorPlugin\StylesCombo` provides a CKEditor toolbar button (a dropdown even)._  
   2. [\\Drupal\\ckeditor\\CKEditorPluginContextualInterface](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21src%21CKEditorPluginContextualInterface.php/interface/CKEditorPluginContextualInterface/9) allows a CKEditor plugin to enable itself automatically based on the context: if some other CKEditor plugin's button is enabled, if some filter is enabled, if some CKEditor plugin's setting has a certain value, or a combination of all of the above.  
   _Example: `\Drupal\ckeditor\Plugin\CKEditorPlugin\DrupalImageCaption` enables itself if the Image button is present and the alignment or caption filter is enabled._  
   3. [\\Drupal\\ckeditor\\CKEditorPluginConfigurableInterface](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21src%21CKEditorPluginConfigurableInterface.php/interface/CKEditorPluginConfigurableInterface/9) allows a CKEditor plugin to define a settings form, for configuring any settings this CKEditor plugin may have.  
   _Example: the `\Drupal\ckeditor\Plugin\CKEditorPlugin\StylesCombo` plugin allows you to configure styles that can be applied._  
   4. [\\Drupal\\ckeditor\\CKEditorPluginCssInterface](https://api.drupal.org/apis/CKEditorPluginCssInterface)**since 8.1.0** allows a CKEditor plugin to define additional CSS to be loaded in iframe instances of CKEditor.  
   _Example: the `\Drupal\ckeditor\Plugin\CKEditorPlugin\DrupalImageCaption` plugin loads additional CSS._
* Plugin implementations must be annotated with the [@CKEditorPlugin](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21src%21Annotation%21CKEditorPlugin.php/class/CKEditorPlugin/9) annotation so they can be discovered.  
   * This includes the ckeditor plugin id; the id defined in the annotation must match the name of the plugin as defined in the plugin's javascript on the line that adds the plugin.

```php
// The annotation in of the plugin in the php must match what is defined here.
CKEDITOR.plugins.add('pluginId', { ... });
```

* Discovered plugins' annotation metadata can be altered using [hook\_ckeditor\_plugin\_info\_alter()](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21ckeditor.api.php/function/hook%5Fckeditor%5Fplugin%5Finfo%5Falter/9).
* [\\Drupal\\ckeditor\\CKEditorPluginBase](https://api.drupal.org/api/drupal/core%21modules%21ckeditor%21src%21CKEditorPluginBase.php/class/CKEditorPluginBase/9) provides a default implementation so CKEditor plugins don't need to implement every method. Which means it must optimize for the most common case: it is only useful for plugins that provide buttons.

Last but not least: when implementing a new text editor plugin, you probably also want to make sure the UX for configuring it is excellent. For that, see `ckeditor.drupalimage.admin.js` and `ckeditor.stylescombo.admin.js` for examples. _Note this aspect (and only this aspect!) is subject to be changed in <https://www.drupal.org/node/2567801>._

### Debugging

Drupal 9 includes a customized, optimized build of CKEditor. See `core/assets/vendor/ckeditor/build-config.js`. The documentation in that file also explains how to replace Drupal 9's included CKEditor build (which is optimized for production) with a build that is optimized for development (i.e. unminified).