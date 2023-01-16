Using the [Generic HTTP Purger](https://www.drupal.org/project/purge%5Fpurger%5Fhttp) module, you can go to the Purge configuration page (`admin/config/development/performance/purge`) and add an HTTP Purger.

Enter your Varnish server details (hostname, port, path, etc.), and under the 'Headers' configuration, enter a header with the following configuration:

* Header: `X-Cache-Tags`
* Value: `[invalidation:expression]`

Once you save this purger configuration and configure a cron job to process the Purge queue (`drush p-queue-work`), Varnish should start banning pages as soon as the purge queue triggers the bans!

Some of the notes in this documentation were adapted from the following sources:

* [Use Drupal 8 Cache Tags with Varnish and Purge](http://www.jeffgeerling.com/blog/2016/use-drupal-8-cache-tags-varnish-and-purge)
* [Add cache tag support to default Drupal VM Varnish config](https://github.com/geerlingguy/drupal-vm/issues/397)