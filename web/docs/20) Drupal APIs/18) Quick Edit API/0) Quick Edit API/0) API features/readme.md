Ordered by most to least frequently used APIs:

In-place editor plugins

[\\Drupal\\quickedit\\Plugin\\InPlaceEditorInterface](https://api.drupal.org/api/drupal/core%21modules%21quickedit%21src%21Plugin%21InPlaceEditorInterface.php/interface/InPlaceEditorInterface/8): in-place editor plugins, to provide additional in-place editors (i.e. optimized for certain fields, for example for images, dates …) to improve the in-place editing experience
* Plugin implementations must be annotated with the [@InPlaceEditor](https://api.drupal.org/api/drupal/core%21modules%21quickedit%21src%21Annotation%21InPlaceEditor.php/class/InPlaceEditor/8) annotation so they can be discovered.
* [\\Drupal\\quickedit\\Plugin\\InPlaceEditorBase](https://api.drupal.org/api/drupal/core%21modules%21quickedit%21src%21Plugin%21InPlaceEditorBase.php/class/InPlaceEditorBase/8) provides a default implementation so text editor plugins don't need to implement every method

Access control

Quick Edit doesn't have its own access control — for that, use the [Entity Access API](/docs/8/api/entity-api/access-on-entities-tbd). Note that you can alter this with hooks like `hook_entity_access()` and `hook_entity_field_access()`, for entities and fields, respectively.

Custom render pipeline

Sometimes, entities/fields are rendered not using the default Entity/Field API render pipeline, which uses entity view modes, field formatters, et cetera. In those cases where a custom render pipeline is used, and you still want to make it possible to do in-place editing, implement [hook\_quickedit\_render\_field()](https://api.drupal.org/api/drupal/core%21modules%21quickedit%21quickedit.api.php/function/hook%5Fquickedit%5Frender%5Ffield/8). For details, see the documentation there. This is something you will need to do only in the most esoteric modules: providing a custom render pipeline is a very, very rare case.