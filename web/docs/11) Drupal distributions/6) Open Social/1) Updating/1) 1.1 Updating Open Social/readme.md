There will be a supported update path for Open Social.  
It is best to update Open Social first on a local development environment to test potential issues. Before you push to production you should make sure everything is enabled properly and your configuration changes are still implemented.

Note that the update process is very similar to [Drupal Core](https://www.drupal.org/docs/7/updating-your-drupal-site/update-procedure-in-drupal-8).

**1\. Get the latest code.**

If you are using Composer you should be able to update to the latest version with this command:

`composer update`

<!-- note-warning -->
> WARNING: Make sure your composer.json file is up to date with the changes required for composer&nbsp;2.0
Your composer.json file should include:
"enable-patching": true
In some rare cases patches supplied in the Open Social composer.json file are not applied to your project when updating.
If you run into issues please make sure the supplied patches are being applied correctly.
You can verify this by checking the patches in the&nbsp;composer.json file from Open Social and running composer update.
If not all patches are applied you can still do this manually using the git apply command.

**2\. Clear caches.**

With Drush:

`drush cache-rebuild`

Or at: /admin/config/development/performance.

**3\. Run database updates.**

With Drush:

`drush updb`

Or run /update.php on your site.

**4\. Finalising installation.**

That's it! Open Social is updated to the latest version on your local environment. Depending on your own workflow you may want to re-do this on another environment or export the configuration and add the changes to version control.