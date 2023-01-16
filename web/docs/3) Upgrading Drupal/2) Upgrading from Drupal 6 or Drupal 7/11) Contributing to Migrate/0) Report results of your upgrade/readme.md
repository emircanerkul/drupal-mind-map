When you are upgrading your Drupal 6 or Drupal 7 site to Drupal 8 (or later) make sure to test and verify your results thoroughly. It is possible that you will find something which did not upgrade as you expected. When this happens: 

* First check if the issue is listed at [Known issues when upgrading from Drupal 6 or 7 to Drupal 8 (or later)](https://www.drupal.org/docs/8/upgrade/known-issues-when-upgrading-from-drupal-6-or-7-to-drupal-8)
* If your issue is not listed there, search for [open Drupal 6 - Drupal 8 (or later) migration issues \[30 issues\]](https://www.drupal.org/project/issues/search/drupal?project%5Fissue%5Ffollowers=&status%5B%5D=1&status%5B%5D=13&status%5B%5D=8&status%5B%5D=14&status%5B%5D=15&status%5B%5D=4&issue%5Ftags%5Fop=%3D&issue%5Ftags=migrate-d6-d8) or [Drupal 7 - Drupal 8 (or later) migration issues \[57 issues\]](https://www.drupal.org/project/issues/search/drupal?project%5Fissue%5Ffollowers=&status%5B%5D=1&status%5B%5D=13&status%5B%5D=8&status%5B%5D=14&status%5B%5D=15&status%5B%5D=4&issue%5Ftags%5Fop=%3D&issue%5Ftags=migrate-d7-d8).
* If you don’t find an existing issue for the problem you're facing, please create a new issue to [core migration system issue queue](https://www.drupal.org/project/issues/drupal?text=&status=Open&priorities=All&categories=All&version=All&component=migration+system). Reporting a new migration bug is already a very valuable contribution and helps getting the migrations stable!

When reporting new issues, they go to the 'migration system' component. It is extremely important that you provide as much and as much detailed information that as possible.

* Please provide screenshots of before, from Drupal 6 or Drupal 7, and after, Drupal 8 (or later) where applicable.
* Describe the problem as specifically as possible.
* Provide additional details on your site that you think might be relevant to this issue.
* Example of a good issue report: <https://www.drupal.org/node/2853872>  
   * The short description, screenshot and the bullet points under the screenshot were created in the original issue report  
   * The issue summary was then later updated several times as more and more information was found during the analysis.  
   * Keeping the issue summary updated is _extremely_ important part of fixing process. Migrate bugs can sometime be very complex and making sure the issue summaries are up to date will significantly help migrate maintainers and other contributors!  
   * Don’t be shy - your best effort to write as detailed bug report as you can will be appreciated!