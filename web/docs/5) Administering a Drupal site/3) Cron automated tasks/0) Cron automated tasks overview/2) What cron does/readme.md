A properly configured cron job executes, initiates, or manages a variety of tasks. For example, cron:

* Updates the index of site content used by the [Search](https://www.drupal.org/docs/8/core/modules/search "Search module | Drupal 8 guide on Drupal.org") module.
* Queues feeds to be updated by the [Aggregator](https://www.drupal.org/docs/8/core/modules/aggregator "Aggregator module | Drupal 8 guide on Drupal.org") module.
* Checks for available updates for the [Update Manager](https://www.drupal.org/docs/8/core/modules/update-manager "Update Manager module | Drupal 8 guide on Drupal.org") module.
* Performs routine maintenance tasks, such as removing older rows from logs, for the [System](https://www.drupal.org/docs/8/core/modules/system "System module | Drupal 8 guide on Drupal.org") module.
* And more.

For those curious to know what cron does, just **temporarily** enable "Detailed cron logging" checkbox at example.com/admin/config/system/cron. Then press the Run cron button on that page. Then see what it did at example.com/admin/reports/dblog or from your database watchdog table. Do this temporarily to prevent your database from filling up.