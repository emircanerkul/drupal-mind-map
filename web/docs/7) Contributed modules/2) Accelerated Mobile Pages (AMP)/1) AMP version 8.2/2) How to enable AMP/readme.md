* Install at least one AMP subtheme, which can be the ExAMPle subtheme included in amptheme or a custom AMP theme you create. The AMP subthemes should have AMP Base set as their base theme; because of this, you do not need to manually enable AMP Base.  
   * To install an AMP subtheme through the user interface, go to /admin/appearance.  
   * To install an AMP subtheme through the command line with Drush, enter the command `drush en ampsubtheme_example` or `drush en YOUR_SUBTHEME_NAME`.  
   * Do not make any AMP themes the default theme. AMP themes are only used on AMP pages.  
   * Go to the theme settings page, `/admin/appearance/settings/{AMP-SUBTHEME-NAME}`. Uncheck the box to use the theme's default logo and upload a logo for the AMP subtheme, then save that change.
* Enable the AMP module. Note that this should be done after the AMP themes have been installed.

### Provide initial AMP configuration

* Go to `/admin/config/content/amp` and select your AMP configuration options:

#### Theme

* Select a theme for the AMP pages. Don't select the AMP Base theme. The subtheme you installed in the previous step should appear as an option and that is the one you should select.
* Select and save the options.

#### Content Types

* Find the list of your content types at the top of the AMP Configuration page.
* Click the link to "Enable AMP in Custom Display Settings".
* Open "Custom Display Settings" fieldset, check AMP, click Save button (this brings you back to the AMP config form).
* Click "Configure AMP view mode".
* The AMP view mode is where you can control which fields will display on the AMP page for each content type. You might only want a title, image, and body.
* There are special formatters for text, image, and iframe fields in order to output AMP components, so be sure to use them in the AMP view mode. Make sure to use the AMP Text formatter for the body field.
* Click Save button (this brings you back to the AMP config form).
* To change these later, go to `/admin/structure/types/manage/{CONTENT-TYPE}/display/amp`and set up the fields for the AMP version of each content type.

#### Analytics (optional)

* Enter your Google Analytics Web Property ID and click save.
* This will automatically be added to the AMP version of your pages.

#### Adsense (optional)

* Enter your Google AdSense Publisher ID and click save.
* Visit `/admin/structure/block` to add and configure Adsense blocks to your layout.
* Each block requires a Width, Height, and Data-slot.

#### DoubleClick (optional)

* Enter your Google DoubleClick for Publishers Network ID and click save.
* Visit `/admin/structure/block` to add and configure add DoubleClick blocks to your layout.
* Each block requires a Width, Height, and Data-slot.

#### AMP Pixel (optional)

* Check the "Enable amp-pixel" checkbox.
* Fill out the domain name and query path boxes.
* Click save.

### Set up blocks for AMP pages

* Go to `/admin/structure/block/list/{AMP-SUBTHEME-NAME}`and set up the blocks for the AMP page.  
   * The AMP page is a simple page, with a header, content area, and footer. You should remove most blocks from this theme. We suggest just displaying the branding, title and content on the page. Start simple and add more elements later if desired.  
   * If you want ads on your AMP pages, add AMP Ad blocks as desired. The ads will use the IDs provided in your AMP configuration.

### How to configure Structured Data for AMP

* Install and follow instructions for the [Schema.org Metatag module](https://www.drupal.org/project/schema%5Fmetatag).
* When you view source on that node, you should see JSON in the head section of your HTML.
* Compare the JSON with the guidelines available at <https://developers.google.com/search/docs/data-types/articles>.
* You can copy the script element into the Structured Data Testing tool to verify that all information meets the requirements: <https://search.google.com/structured-data/testing-tool>.