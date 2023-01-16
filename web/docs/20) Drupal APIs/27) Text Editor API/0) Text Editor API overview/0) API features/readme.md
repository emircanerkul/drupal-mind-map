Ordered by most to least frequently used APIs:

Text editor dialogs: the image and link dialogs

The image ([\\Drupal\\editor\\Form\\EditorImageDialog](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21Form%21EditorImageDialog.php/class/EditorImageDialog/8)) and link ([\\Drupal\\editor\\Form\\EditorLinkDialog](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21Form%21EditorLinkDialog.php/class/EditorLinkDialog/8)) dialogs can both be altered. Any new form elements under `$form['attributes']` will be respected by the corresponding JavaScript in the text editor, so that either the image (`<img>`) or link (`<a>`) will get the attributes with the values corresponding to any form elements you add by altering.

Text editor config entities

[\\Drupal\\editor\\Entity\\Editor config entity](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21Entity%21Editor.php/class/Editor/8): configure text editors, one text format can have one text editor

Every text editor out there has its own way of being set up, and therefore has a different kind of settings. No matter what they are, they end up being stored in the text editor config entity. See [\\Drupal\\editor\\EditorInterface::getSettings()](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21EditorInterface.php/interface/EditorInterface/8).

Text editor settings can be altered using [hook\_editor\_js\_settings\_alter()](https://api.drupal.org/api/drupal/core%21modules%21editor%21editor.api.php/function/hook%5Feditor%5Fjs%5Fsettings%5Falter/8).

Text editor plugins

[\\Drupal\\editor\\Plugin\\EditorPluginInterface](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21Plugin%21EditorPluginInterface.php/interface/EditorPluginInterface/8): text editor plugins, to provide additional text editors (assistive editors, WYSIWYG editors …) that are available to site builders to be used
* Plugin implementations must be annotated with the [@Editor](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21Annotation%21Editor.php/class/Editor/8) annotation so they can be discovered.
* Discovered plugins' annotation metadata can be altered using [hook\_editor\_info\_alter()](https://api.drupal.org/api/drupal/core%21modules%21editor%21editor.api.php/function/hook%5Feditor%5Finfo%5Falter/8).
* [\\Drupal\\editor\\Plugin\\EditorBase](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21Plugin%21EditorBase.php/class/EditorBase/8) provides a default implementation so text editor plugins don't need to implement every method.

The above allows Drupal to be aware of how to load and configure this text editor. The Text Editor module also has a JavaScript API that allows it to invoke the specific text editor plugin's JavaScript, to initialize the text editor. For that, implement `Drupal.editors`, see `Drupal.editors.ckeditor` for an example (in `core/modules/ckeditor/js/ckeditor.js`).

Last but not least: when implementing a new text editor plugin, you probably also want to make sure the UX for configuring it is excellent. For that, see `editor.admin.js`. _Note this aspect (and only this aspect!) is subject to be changed in <https://www.drupal.org/node/2567801>._

Text editor XSS filtering

To completely prevent a type of security vulnerability that was encountered several times in Drupal 7 and earlier versions when text editors were being used, the Text Editor module has an additional, special/narrow purpose layer to [guarantee safety for content editors](https://www.drupal.org/node/2099741). A text editor plugin can specify (in its annotation) whether its safe against XSS filtering or not. For example, a Markdown editor doesn't parse and display the raw content, which means it's guaranteed to be safe. But CKEditor actually rendered the entered HTML also, and thus extra measures are necessary.

99% of the time, the default implementation, [\\Drupal\\editor\\EditorXssFilter\\Standard](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21EditorXssFilter%21Standard.php/class/Standard/8) will be sufficient. In very advanced cases, you may want to use a custom implementation, by implementing [\\Drupal\\editor\\EditorXssFilterInterface](https://api.drupal.org/api/drupal/core%21modules%21editor%21src%21EditorXssFilterInterface.php/interface/EditorXssFilterInterface/8).

To make Drupal use a custom text editor XSS filter, implement [hook\_editor\_xss\_filter\_alter()](https://api.drupal.org/api/drupal/core%21modules%21editor%21editor.api.php/function/hook%5Feditor%5Fxss%5Ffilter%5Falter/8).