To view the log messages when the site is down you need the core [syslog module](/documentation/modules/syslog) or drush.

The drush command to see log messages is `drush wd-show`. Check drush help wd-show for uses of the command. A particular useful way of using wd-show is with the --tail option: `drush wd-show --tail`.