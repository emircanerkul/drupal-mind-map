In the future, depending upon which files you change in your subtheme, different methods are required to get the change to apply to your Drupal 8 site.

**\*.info.yml**

If you change your '\*.info.yml' file, you will have to go the the 'Performance' page , and click the button "Clear all caches".  
 \["Manage" > "Configuration" > "Development" > "Performance"\]  
`[d8-root]/admin/config/development/performance`

With Drupal 7, it might have been sufficient to visit the 'Appearance' page after making changes to the '\*.info' file, but that is not the case for Drupal 8.

**\*.css and \*.js**

Note: The following is true of \*.css files, and I assume will be true for \*.js files also, but I can Not as yet confirm this for \*.js files because I have Not tried it.

**Changes that you make to CSS and JavaScript files will Not immediately display**, because a Drupal 8 site, by default, has CSS and JS files aggregated (multiple files combined together), and cached.

You have to temporarily turn off 'Aggregate CSS files' and 'Aggregate JavaScript files' after making CSS or JS changes to get those changes to display for you on your site.

Those two settings are on page `[D8-root]/admin/config/development/performance`

To adjust them,...

1. Click the administrative menu item "Configuration"
2. Under the heading 'Development', click "Performance".
3. Under the heading 'Bandwidth optimization', remove the check marks for both of:  
   * Aggregate CSS files  
   * Aggregate JavaScript files
4. Click the page bottom button "Save configuration".

After I have turned off the aggregation of CSS and JS, the next thing I always do is delete all of the existing files in the two folders 'css' and 'js' at `[D8-root]/sites/default/files/css` and `[D8-root]/sites/default/files/js`.

Those are the aggregated files that had been being used, but which will no longer be relevant after I again enable CSS and JS aggregation. And, unfortunately, clicking "Clear all caches" on the 'Configuration'>'Development':'Performance' page does not delete those files.

I must admit that I do not know if de-selecting 'Aggregate JavaScript files' is necessary for 'CSS-only changes', or whether de-selecting 'Aggregate CSS files' is necessary for 'JavaScript-only changes', but until I confirm that to myself, one way or the other, I always temporarily de-select both of them just to be on the 'safe' side of doubt.

After you de-select those two items, your site's pages will load more slowly, but that is just a temporary condition.

**After you make changes to a CSS or JS file, you do Not have to visit your 'Appearance' page, and you do Not have to 'Clear all caches'. All you have to do is just refresh the page you are viewing in your browser, and your new changes will display for you.**

When you are done testing your subtheme with any CSS or JS changes, return to the 'Performance' configuration page, check the boxes for CSS and JS aggregation, and click the button "Save configuration", to again enable them so that you site will perform more quickly.

**Other subtheme file types**

I do not have experience with any of the other subtheme file types, but I assume having CSS and JS aggregation disabled, and then clicking "Clear all caches", will be sufficient to get your site to recognize any changes you have made.

If that does Not work, then the only other thing I know to suggest, is that you simply visit the 'Appearance' page, which, with Drupal 7, automatically rebuilt the theme 'registry'.