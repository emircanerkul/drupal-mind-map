Text format config entities

[\\Drupal\\filter\\Entity\\FilterFormat config entity](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Plugin%21migrate%21source%21d6%21FilterFormat.php/class/FilterFormat/8): configure text formats, one text format can have one [text editor](/documentation/modules/editor).

Every text format consists of an ordered list of filters (filter plugins), with settings for those filters that do have settings. When filtering text, these filters are invoked in order.

Filter plugins

[\\Drupal\\filter\\Plugin\\FilterInterface](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Plugin%21FilterInterface.php/interface/FilterInterface/8): filter plugins, to provide additional filters that are available to site builders to be used.
* Plugin implementations must be annotated with the [@Filter](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Annotation%21Filter.php/class/Filter/8) annotation so they can be discovered.
* Discovered plugins' annotation metadata can be altered using [hook\_filter\_info\_alter()](https://api.drupal.org/api/drupal/core%21modules%21filter%21filter.api.php/function/hook%5Ffilter%5Finfo%5Falter/8)
* [\\Drupal\\filter\\Plugin\\FilterBase](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Plugin%21FilterBase.php/class/FilterBase/8) provides a default implementation so filter plugins don't need to implement every method
* Every filter plugin must specify a filter type in its annotation. Filter types were [added](https://www.drupal.org/node/1782838) specifically to support in-place editing. There are four filter types:  
   1. `FilterInterface::TYPE_MARKUP_LANGUAGE` — _Non-HTML markup language filters that generate HTML._ The filter converts something that's not HTML to HTML in a way that is not compatible with WYSIWYG editing.  
   2. `FilterInterface::TYPE_HTML_RESTRICTOR` — _HTML tag and attribute restricting filters to prevent XSS attacks._ The filter restricts the HTML allowed, for example, to protect against XSS.  
   3. `FilterInterface::TYPE_TRANSFORM_REVERSIBLE` — _Reversible transformation filters._ The filter performs a transform for which a WYSIWYG plugin exists to perform the same transformation (and its reverse) client-side. For example, `<img data-caption="Druplicon">` may be (reversibly!) transformed to `<figure><img><figcaption>Druplicon</figcaption></figure>`.  
   4. `FilterInterface::TYPE_TRANSFORM_IRREVERSIBLE` — _Irreversible transformation filters._ The filter performs a transform for which a WYSIWYG plugin does not exist to perform the transformation client-side (especially, the reverse of it); instead, the WYSIWYG editor displays the unfiltered text. For example, [Token Filter](/project/token%5Ffilter).