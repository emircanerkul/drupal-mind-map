Additionally, Media Library provides a "Media library" view mode and form mode to further customize the display of media items. See the [Display Modes documentation](https://www.drupal.org/docs/8/api/entity-api/display-modes-view-modes-and-form-modes) for more information about configuring display modes.

### Media library view mode

For example, customize the display of the Media library view mode display at URLs like: /admin/structure/media/manage/document/display/media\_library (where "document" is the machine name of the media type).

![Media Library display mode admin page](https://www.drupal.org/files/media-library-display-mode.jpg)

The Media library view mode is enabled by default under the default display mode.

![Media Library display mode enabled](https://www.drupal.org/files/media-library-enabled-display.jpg)

Easily add fields to the media entity's display using the Media library view mode as in the example below:

![Media Library view mode admin](https://www.drupal.org/files/media-library-view-mode-admin.jpg)

The Media library view mode is displayed by default in the provided Media Library grid view, so the administration page will automatically display the fields you have selected.

![Media Library customized view mode output](https://www.drupal.org/files/media-library-customized-grid_0.jpg)

### Media library form mode

The Media library form mode is customizable by visiting a URL such as /admin/structure/media/manage/image/form-display, where "image" is the media type. Here, you may add or enable additional fields to be displayed on the modal media upload form. For example, you might want the ability to use the Name field for your images. Simply drag any desired field from the "Disabled" list to the top of the form, and save your changes.

![Name field highlighted on Media Library form mode configuration.](https://www.drupal.org/files/media-library-form-mode.jpg)

Your enabled fields will then be visible on the media upload modal window, as illustrated below. Note that this window is shown **_after_** the media file is uploaded in the media library widget.

![Media Library upload modal with Name field enabled](https://www.drupal.org/files/media-library-form-display.jpg)