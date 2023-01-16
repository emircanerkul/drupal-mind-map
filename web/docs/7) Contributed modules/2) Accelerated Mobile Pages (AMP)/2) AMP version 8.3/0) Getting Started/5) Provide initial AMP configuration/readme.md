Go to \`/admin/config/services/amp\` and select your AMP configuration options:

### Theme

* Select a theme for the AMP pages. The subtheme you installed in the previous step should appear as an option and that is the one you should select.
* Select and save the options.

### Content Types

* Find the list of your content types at the top of the AMP Configuration page.
* Click the link to "enable".
* Open "Custom Display Settings" fieldset, check AMP, click Save button (this brings you back to the AMP config form).
* Click "configure" for that content type, which take you back to the AMP view mode field settings page.
* The AMP view mode is where you can control which fields will display on the AMP page for each content type. You might only want a title, image, and body in that view mode, for instance.
* There are special formatters for text, image, and iframe fields in order to output AMP components, so be sure to use them in the AMP view mode. Make sure to use the AMP Text formatter for the body field if there is any chance the body will contain invalid elements, like images or Facebook posts.
* Click Save button (this brings you back to the AMP config form).
* To change these later, go to \`/admin/structure/types/manage/{CONTENT-TYPE}/display/amp\` and set up the fields for the AMP version of each content type.

### Set up blocks for AMP pages

Go to \`/admin/structure/block/list/{AMP-SUBTHEME-NAME}\` and set up the blocks for the AMP page.

**Important!** Be sure to remove the core system branding block from the AMP theme and instead use the AMP system branding block.

Remove any blocks that might affect validation of the AMP page, like the search block. There is an issue about supporting forms in AMP, but until that is done any form on the page will prevent it from validating. There might be other elements on the page that create problems, you'll want to check any validation error messages to tell.