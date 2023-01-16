1. Ensure cron is not running.
2. Run this command and replace DIRECTORY with the directory of your choice this is where Open Social will be installed. The Drupal Root directory is DIRECTORY/html.  
```php  
composer create-project goalgorilla/social_template:dev-master DIRECTORY --no-interaction  
```
3. You can install drupal through the browser as any other drupal installation or use drush site-install to install the profile:

```php
drush -y site-install social --db-url=mysql://root:root@db:3306/social

```

That's it, the site is installed! Now you can turn back cron again.

**Note:** Please go to _admin/report/status_ and use the [Rebuild permissions](admin/report/status/rebuild) link to rebuild node access permissions