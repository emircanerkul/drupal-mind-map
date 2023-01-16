Edit the .info.yml (eg. mycustomtheme.info.yml) and update the following.

* name
* description

You can create a custom theme thumbnail image (we recommend 368 pixels × 321 pixels, 72DPI - or use the _themes/contrib/zurb\_foundation/images/screenshot.jpg_ image filed to get the right image dimensions). Place that image in your subtheme's images folder and name it **screenshot.jpg**

Around line 8 of the subtheme's .info.yml file, uncomment **screenshot** (ie. remove the # at the start of that line).

Clear the cache of your Drupal website and in the Appearance tab, you should see your subtheme has updated name, description and thumbnail image.