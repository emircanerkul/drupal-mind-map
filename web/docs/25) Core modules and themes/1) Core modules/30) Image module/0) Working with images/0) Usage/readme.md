### Adding an image field to a content type

In a default installation, only Articles have an image field, but this type of field can be added to other content types (e.g. Basic page or custom content types) as well. An image field can also be added to a user profile, a comment, or a taxonomy term. An unlimited number of image fields can be added, each with a variety of settings such as allowed extensions, maximum file size and default directory for storing the images.

To control the way the image is displayed you must define [styles](#styles) (see below).

To add an image field to a content type:

1. Choose the content type via _Administration > Structure > Content types_.
2. Choose "Manage fields".
3. Enter a label for the field, e.g. "Product picture", define a field name and choose "Image".
4. Decide if there should be a limit on how many images can be attached (defaults to 1).
5. Choose a default image for this field (optional).
6. Define further settings, such as allowed extensions, maximum file size and default directory for storing the image files.
7. Save the settings.

### Add images to content

To add images to content:

1. Choose _Administration > Add content > \[Content type\]_.
2. The image field will be displayed in the list of fields once you've added it to the content type (see above). Click 'Browse', then select and upload the desired image.
3. [Enter alternate text to improve accessibility](https://drupal.org/node/464496) and optimize it for search engines.
4. Save the article.

Images can be added and removed from the node's Edit tab. If the node is deleted, all associated images are deleted with it.

### Adding images inline

To use images attached to nodes via the Image module inline (ie. in your node body text) you can use the [Insert module](http://drupal.org/project/insert). It provides a button to easily add an `img` tag with the path to the image in the `src` attribute and styles of your choosing. Creating image styles (see below) with inline images in mind, combined with some CSS to set the float property, can give users the option to easily set content to display to the left or right of the document text.

You'll want to go to "Manage display" for your content type to ensure the image is set to hidden, otherwise it will be displayed twice.

### Adding and changing styles

Using image styles you can scale, crop, resize, convert image type, rotate and desaturate images without affecting the original image. By default three sizes are defined: 'thumbnail,' 'medium', and 'large'. The thumbnail style, for example, is shown with the teaser for image posts and when browsing image galleries.

When you change an image style, the module automatically refreshes all created images. Every image style must have a name, which will be used in the URL of the generated images.

To create or change image styles:

1. Choose _Administration > Configuration > Media > Image styles_.
2. Add or select a style to edit its settings.
3. When configuring styles you can add effects: crop, scale, resize, rotate, and desaturate (other contributed modules provide additional effects). For example, by combining effects as crop, scale, and desaturate, you can create square, grayscale thumbnails.
4. Save the settings.

To start using the defined styles they must be assigned to the display of a content type. For each display (e.g. "default" or "teaser"), a different style can chosen.

To assign a style:

1. Choose _Administer > Structure > Content types > Manage display_.
2. Choose the display (e.g. "default" or "teaser") via the tab buttons.
3. Click the gear wheel button to choose an image style; you are also able to link the image to the node.
4. Save the settings.
5. Check the content that contains the image style in question to see your new styles at work.

### Setting image quality

You can specifically define the image quality on your site. Take into account that better image quality means bigger files.

1. Navigate to _Administration > Configuration > Media > Image toolkit_.
2. Enter the desired quality in the field JPEG quality.
3. Save the settings.