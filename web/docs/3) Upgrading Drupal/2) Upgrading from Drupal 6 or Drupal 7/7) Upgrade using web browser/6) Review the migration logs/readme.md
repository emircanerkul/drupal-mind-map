All of these messages shown during the upgrade can be reviewed later. Once the process is finished, you are directed to the site's frontpage with messages summarizing the results:

![Results of the Drupal Upgrade process](https://www.drupal.org/files/DrupalUpgradeResults.png)

Here you have a chance to review the messages that were logged and inspect any errors found. The module uses the built-in logging system of Drupal, so in a default setup you can just review the logs stored in the database, which is where the link leads to:

![Logs from the Drupal Upgrade process](https://www.drupal.org/files/DrupalUpgradeLogs.png)

You can filter the list of messages to show notices (used for positive feedback) or errors (used for reporting problems found in the migration). If something breaks, you've either found a bug (in which case, check the issue queue or contact the Migration team) or your data set is too large (in which case, try running the [upgrade with Drush](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush)).