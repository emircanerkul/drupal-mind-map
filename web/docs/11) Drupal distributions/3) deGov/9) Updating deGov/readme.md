---
url: https://www.drupal.org/docs/distributions/degov/updating-degov
description: >-
  It's highly recommended to create a database dump before any deGov update.
  Also code and configuration backups via Git commits are recommended, too. So
  you are able to return to your working version, if the update process is
  failing. Furthermore you might consider switching to the maintenance mode, to
  disallow the usage of dynamic parts of your site, during your update process.
  To update deGov, the following console commands are recommended. Make sure
  Drush and Composer are installed. This step is necessary, if you have already
  exported your Configuration to your config/sync folder.
published_time: '2018-12-24T07:29:33+00:00'
modified_time: '2019-05-08T10:02:21+00:00'
---
It's highly recommended to create a database dump before any deGov update. Also code and configuration backups via Git commits are recommended, too. So you are able to return to your working version, if the update process is failing. Furthermore you might consider switching to the [maintenance mode](https://www.drupal.org/docs/user%5Fguide/en/extend-maintenance.html), to disallow the usage of dynamic parts of your site, during your update process.

To update deGov, the following console commands are recommended. Make sure [Drush](https://www.drush.org/) and [Composer](https://getcomposer.org/) are installed.

1. This step is necessary, if you have already exported your Configuration to your config/sync folder. Otherwise you must ignore this command for not losing configuration:  
**drush cim** (imports the configuration from config/sync folder to your database. Needed to apply update hooks with current config state in database.)
2. **composer update degov/degov --with-dependencies** (updates code from PHP packages)
3. **drush locale-check** (searches for translations)
4. **drush locale-update** (applies found translation updates - also updates configuration)
5. **drush updb** (applies all update hooks from all Drupal modules)
6. **drush entup** (updates entity schema definitions)
7. **drush cex** (exports configuration from database to config/sync folder)
8. **drush cr** (clear the entire Drupal cache - browser cache flush might also be necessary to see latest state in admin interface)

### Updating deGov since version 6.3

You can execute the deGov update with only one command now:

```php
composer degov-update
```

If your project was created before 6.3 or without the [deGov project skeleton](https://bitbucket.org/publicplan/degov%5Fproject/src/master/), you can modify the "script" and "autoload-dev/psr-4" sections of your projects root composer.json file. You can use the composer.json file from the deGov project skeleton as an example. That way you can easily copy the relevant lines for the [Robo library](https://robo.li/), which is acting as a task runner for the deGov update.

Mind that you eventually need to extend the process timeout of composer. The update command needs more than 5 minutes:

```php
composer config --global process-timeout 2000
```