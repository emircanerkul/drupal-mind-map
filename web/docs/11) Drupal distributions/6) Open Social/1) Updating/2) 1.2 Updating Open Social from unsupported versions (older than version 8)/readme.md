**1\. Install 8\. version of Open Social**

If you are updating from a version older than version 8 you first need to update to version of Open Social 8\.   
This is because it's the latest version that supports features, in 9.0 we will drop feature support.   
This will ensure you can do one final feature revert and move from there.

`composer require goalgorilla/open_social:8.0.0 -w`

**2\. Clear caches.**

With Drush:

`drush cache-rebuild`

Or at: /admin/config/development/performance.

**3\. Run database updates.**

With Drush:

`drush updb`

Or run /update.php on your site.

**4\. Revert Features of bundle Social. (Only necessary for Open Social versions 8.0 and lower)**

With Drush:

`drush -y fra --bundle=social`

Or enable features\_ui module and go to /admin/config/development/features. Make sure to select the bundle 'Social' in the form. Now go to the 'Differences' tab and select which changes you would like to import.

Note: at the moment not all changes are imported correctly, e.g. block configuration when using a subtheme instead of the Social Base theme. If this is the case it is best to review all the changes and change configuration manually if needed.

**5\. Finalising installation.**

That's it! Open Social is updated to the latest version on your local environment. Depending on your own workflow you may want to re-do this on another environment or export the configuration and add the changes to version control.