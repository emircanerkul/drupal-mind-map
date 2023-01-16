When a site is acting strangely, or displays bizarre errors, or displays a blank page, particularly just after enabling a new module, the first thing to do is refresh the page.

After that, it is often found that 'running the update script', followed by 'clearing all caches', solves majority of the problems.

Of the two, 'Clear all caches' is an easier, and quicker 'fix' to try, and is at times effective but, the steps below will start with 'running the update script', because that is the first thing to do whenever any website is giving trouble.

The following two steps below seems to be the most logical thing to do first when addressing any site problems, and you should feel free to run the update script, or clear all caches, anytime you want.

* **Clear all caches**

`[d8-root]/admin/config/development/performance`

Click the button "Clear all caches".

* **Run Cron**  
Go to the page 'Reports' > 'Status Reports' and click 'Run cron' near the top of the page.
* **rebuild.php**  
Try running "rebuild.php" in the same manner that you ran the update script with "update.php" above
* **[View the Syslog](https://www.drupal.org/docs/8/core/modules/syslog/overview "Syslog module overview | Drupal 8 guide on Drupal.org")**

Try the search at your preferred search engine including the first portion of the error message. You can also add quotation marks around the error message in your search query.

When your site shows a blank page and you cannot see the problem in the browser or log page, run the 'Drush command' below to clear caches and you will see errors in the output terminal.

`drush cache:clear`

To clear cache and truncate table cache in your database, follow:

```php
drush sqlq "TRUNCATE cache_default;TRUNCATE cache_bootstrap;TRUNCATE cache_container;TRUNCATE cache_discovery;TRUNCATE cache_data;" -l <uri> --no-interaction
```