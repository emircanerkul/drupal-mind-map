---
url: >-
  https://www.drupal.org/docs/contributed-modules/backup-and-migrate/setup-guide-for-backup-and-migrate
description: >-
  The Backup and Migrate module simplifies the task of backing up and restoring
  Drupal databases or copying databases from one Drupal site to another. It
  supports gzip, bzip and zip compression as well as automatic scheduled
  backups. This module dumps some or all database tables to a file, which is
  then either instantly downloaded or saved to the server. It also restores from
  an uploaded or previously saved database dump. Choose which tables and data to
  backup. Cache data is excluded by default. It can also backup private and/or
  public files.
published_time: '2018-08-01T13:41:43+00:00'
modified_time: '2022-12-31T20:08:33+00:00'
---
The [Backup and Migrate](/project/backup%5Fmigrate) module simplifies the task of backing up and restoring Drupal databases or copying databases from one Drupal site to another. It supports gzip, bzip and zip compression as well as automatic scheduled backups.

This module dumps some or all database tables to a file, which is then either instantly downloaded or saved to the server. It also restores from an uploaded or previously saved database dump. Choose which tables and data to backup. Cache data is excluded by default. It can also backup private and/or public files.

**Enabling Backup and Migrate**

1. Navigate to _Extend_ (or _Administration > Extend_)
2. Select Backup and Migrate in the Other block
3. Scroll to the bottom of the page and click _Install_

### Configuring Backup and Migrate

Navigate to _Configuration > Backup and Migrate_ (or _Administration > Configuration > Development > Backup and Migrate_)

Download a backup of the default (Drupal) database by clicking Backup now. For occasional manual backups no further information is required.

**Always** download a backup prior to updating or installing modules.

### Backup to Server

Backup and Migrate uses the default Drupal private directory to store backups on the server. If you haven't set up the private directory yet, here's how:

1. **Create a directory** \- Create a directory, writable by the server, outside the Drupal installation, and not accessible over the web.  
   * Example 1: If Drupal is installed in `/root/sitename/public_html` or `/root/username/public_html/drupal`, the private directory would be located at `/root/sitename/private` or `/root/username/private`.  
   * Example 2: If Drupal is installed in `/var/www/html/example.org/web`, the private directory would be located at `/var/www/html/example.org/private`.  
   * Note: **Do not** put your private files directory in `/sites/default/files` or it won't be private.
2. **Update the settings file** \- In the Drupal settings file, update the file\_private\_path variable to include the **absolute** path to the directory created in step 1.  
   * Example 1: If the private directory is located at `/root/sitename/private`, add `$settings['file_private_path'] = '/root/sitename/private';` to the settings.php file.  
   * Example 2: If the private directory is located at `/var/www/html/example.org/private`, add `$settings['file_private_path'] = '/var/www/html/example.org/private';` to the settings.php file.  
   * Note: You can also put these changes in the settings.local.php file, if the settings.php file is changed to allow loading the settings.local.php file.
3. **Clear Drupal's caches** \- Navigate to _Configuration > Performance_ (or _Administration > Configuration > Development > Performance_) and click _Clear all caches_ so the file streams are updated.
4. **Check the settings** \- Navigate to _Configuration > File system_ (or _Administration > Configuration > Media > File system_ to confirm that the settings are correct.
5. **Set up Backup and Migrate** \- Navigate to _Configuration > Development > Backup and Migrate > Settings > Destinations_. Click _Edit_ to edit the Private Files Directory destination. Update the _Directory Path_ with one of the following options:  
   * Use `private://backup_migrate` (the most common option when using the private file system) and click Save. This option will keep your backup files together in a backup\_migrate subdirectory and separate from files created by other modules that may also use Drupal's private file system.  
   * OR  
   * Use the full path to your backup directory such as `/root/sitename/private/backup` and click Save. This option will save your backup files to the directory you specify.

### Scheduled Backups

Enable (and edit the frequency) for the default Daily Schedule, or add your own schedule. Each cron run, enabled schedules are checked.

### Restoring from Backups

Check with an experienced admin before attempting to restore from backups.

### Settings Profile

You can define Settings Profile to make quick backups with configurations predefined:

1. Go to _Administration > Configuration > Development > Backup and Migrate -> Settings_
2. Create a Settings Profile with the configurations you want
3. In quick backup page (_Administration > Configuration > Development > Backup and Migrate_) you can see the option Settings Profile defined.