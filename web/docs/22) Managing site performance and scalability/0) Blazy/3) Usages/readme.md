Be sure to enable Blazy UI which can be uninstalled at production later.

* Go to Manage display page, e.g.: _admin/structure/types/manage/page/display_
* Find "**Blazy**" formatter under "**Manage display**".
* Go to "_admin/config/media/blazy_" to manage few global options, including enabling support for lazyloading core Responsive image.

For custom usages:

* Add a class "b-lazy" along with a "data-src" attribute refers to an expected image or iframe URL, or to any supported element:
* IMG, IFRAME or DIV/BODY, etc.  
 Non-media element, DIV/BODY/etc., will have background image lazyloaded instead.
* Wrap the parent container with \[data-blazy\] attribute containing the expected options to limit the scope.
* And load the blazy library accordingly.