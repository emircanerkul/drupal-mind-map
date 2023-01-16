The automated cron module has the disadvantage that it is triggered by a request, and the unlucky user who sends the request may experience a fairly long delay. For this reason, the automated cron is typically used by smaller sites that are unable to create a cron job manually, e.g. using the Linux crontab. If crontab is desired, Drupal console command may be used to simplify the configuration (rather than curling the long URL show in /admin/config/system/cron. Here is an example crontab entry (using [Drupal Console](https://drupalconsole.com/docs/en/commands/cron-execute)):

```php
30 * * * * web_user /var/www/html/vendor/bin/drupal --root=/var/www/html/docroot cron:execute > /dev/null 2>&1
```

This would execute Drupal cron once per hour at 30 minutes after the hour.

[Drush](https://docs.drush.org/en/9.x/cron/) may also be used to execute the cron in the crontab entry.

```php
30 * * * * web_user cd /var/www/html/docroot && /usr/bin/env PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin COLUMNS=72 ../vendor/bin/drush --uri=your.drupalsite.org --quiet cron
```