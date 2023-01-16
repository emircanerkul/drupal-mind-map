It is important to understand how your existing Drupal 6 or Drupal 7 site is built before you start your upgrade.

Identify the core and contributed modules that are enabled on your source Drupal 6 / 7 site. To do this, you can either look at the listed modules on the Modules admin page (Administer > Site building > Modules) or use the Available Updates page at admin/reports/updates.

Write down the complete list of modules enabled on your source site and use this as a checklist to plan your upgrade. For each module, answer the following questions:

* Do I still need this module on Drupal 9?
* Has the contributed module moved to core? For example Views is in core since Drupal 8.
* Does the contributed module have a Drupal 9 version available? If not, do I still need it? Are there other modules that I could use to achieve the same functionality?
* Please note that the Drupal 6/7 modules do not necessarily map one to one to Drupal 9 or higher modules. For example, the Block module in Drupal 6 and 7 was separated into the Block and Custom Block modules since Drupal 8\.

The Drupal upgrade web user interface shows a summary of which modules can be automatically upgraded and which ones cannot. Refer to [Upgrade using web browser](https://www.drupal.org/docs/8/upgrade/upgrade-using-web-browser#pre-upgrade-analysis) page for more information on this analysis.

You can use the [Upgrade Status](https://www.drupal.org/project/upgrade%5Fstatus) module to check the list of projects you have installed, and show their availability.