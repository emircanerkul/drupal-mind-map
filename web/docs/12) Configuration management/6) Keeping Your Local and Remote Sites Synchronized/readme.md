---
url: >-
  https://www.drupal.org/docs/configuration-management/keeping-your-local-and-remote-sites-synchronized
description: >-
  You have set up a Drupal 8 or higher site and want to put it on your server or
  You have set up a Drupal 8 or higher site on your remote server and want to
  work on it locally Configuration management Up to Drupal 7, this was a rather
  straightforward process: copy all files, copy the database, done. In Drupal 8
  or higher, CMI - Configuration management - gets into the mix and has to be
  taken care of. How to synchronize your site The process is the same if you
  mirror your site from local to server or the other direction.
published_time: '2013-12-19T15:21:05+00:00'
modified_time: '2021-12-16T04:05:45+00:00'
---
You have set up a Drupal 8 or higher site and want to put it on your server  
or  
You have set up a Drupal 8 or higher site on your remote server and want to work on it locally

### Configuration management

Up to Drupal 7, this was a rather straightforward process: copy all files, copy the database, done.  
In Drupal 8 or higher, CMI - Configuration management - gets into the mix and has to be taken care of.

### How to synchronize your site

The process is the same if you mirror your site from local to server or the other direction. I will describe the deployment from local to a remote server to simplify the explanation.

1. Install your site on your local Wamp, Xamp, Mamp or whatever webserver you are using.
2. Move all files inside your drupal directory to the server. You can do this with Version control (Git, SVN, etc.) or by using FTP.
3. Do not copy the file "settings.php" inside sites/default.
4. Create a fresh database on your remote server and do a fresh install of Drupal.
5. Export the configuration via /admin/config/development/configuration/full/export.  
[![Exporting configuration](/files/exporting_configuration.png)](/files/exporting%5Fconfiguration.png)
6. Import the config.tar.gz file you get from that via /admin/config/development/configuration/full/import.
7. Export the database from your local web server using PHPmyadmin or another tool. The preferred Drupal module for that is [Backup and Migrate](https://www.drupal.org/project/backup%5Fmigrate "Project page on Drupal.org").
8. Import the database using the same tool into the Drupal 8 or higher site on your remote server.
9. Voila! Everything should be synchronized. As long as you are not synchronizing content like nodes or users, you can also just use the CMI config.tar.gz file to synchronize. If in doubt or you are not a very versed Drupal user, always synchronize the database also.