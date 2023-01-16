---
url: https://www.drupal.org/docs/updating-drupal/troubleshooting-database-updates
description: >-
  Before you begin troubleshooting a database update issue, always back up both
  your database and codebase. If there are any issues that prevent database
  updates from being run safely, update.php or drush updatedb will report an
  error. Read the error message carefully to troubleshoot the issue. Invalid
  modules or themes In some cases, update.php may report that there are invalid
  modules or themes. This happens when a module or theme is listed in the
  core.extension.yml configuration file, but is either missing or incompatible
  with the site.
published_time: '2020-03-06T17:49:30+00:00'
modified_time: '2022-12-19T23:45:52+00:00'
---
<!-- note-warning -->
> WARNING: Before you begin troubleshooting a database update issue,&nbsp;always back up both your database and codebase.

If there are any issues that prevent database updates from being run safely, `update.php` or `drush updatedb` will report an error.

<!-- note-tip -->
> TIP: Read the error message carefully to troubleshoot the issue.

### **Invalid modules or themes**

In some cases, `update.php` may report that there are invalid modules or themes. This happens when a module or theme is listed in the `core.extension.yml` configuration file, but is either missing or incompatible with the site.

When troubleshooting this issue, you should first check that you have not imported an incorrect version of `core.extension.yml` configuration. Then, troubleshoot further based on the specific message displayed. Re-run `update.php` once the issue is resolved.

#### The module or theme is missing

![](https://www.drupal.org/files/missing_modules.png)

1. If `update.php` reports that a module or theme is missing and the correct `core.extension.yml` is in use, check to make sure the module or theme is present in the site's codebase.  
   * For example, if a Drupal module is missing, look in `[site-root]/modules` and `[site-root]/sites/all/modules` for a folder that matches the missing module name. `[site-root]/modules` takes precedence over `[site-root]/sites/all/modules`, but both are scanned for modules.  
   * If update.php or drush updatedb complains about a missing Drupal theme, make sure that your themes folder e.g. `[site-root]/themes` or `[site-root]/themes/contrib` contains a folder matching the missing theme.
2. If the folder is completely missing, [search for the module on Drupal.org](https://www.drupal.org/project/project%5Fmodule) and try re-downloading it to your modules folder. Make sure to download a version that is compatible with your version of Drupal.
3. If the folder is present, it might be missing files or otherwise have damaged contents. You can also [search for the module on Drupal.org](https://www.drupal.org/project/project%5Fmodule) and try re-downloading it in this case. Make sure to download a version that is compatible with your version of Drupal. Overwrite the existing folder with the newly downloaded version.
4. If the module was not downloaded from Drupal.org, try to locate its original source.  
   * If the module is specific to your site or application, try to locate its original version and re-add it to the modules folder.  
   * If the module was created by a third party, but is not hosted on Drupal.org (e.g., provided on [GitHub](https://github.com/)), try to locate a valid version and re-download it.
5. As a last resort, **if the original code of a module or theme cannot be located**, you can remove the theme or module "manually" from your site's database. See section [Manually removing a missing theme or module](#s-manually-removing-a-missing-theme-or-module) for details. **Be aware that this could cause other fatal errors on the site**.
6. Once the module is restored, re-run `update.php` or `drush updatedb`.

#### The module or theme is incompatible with the installed version of Drupal

![](https://www.drupal.org/files/theme_incompatible.jpg)

1. If `update.php` reports that a module or theme is incompatible with the installed version of Drupal, you will need to either update Drupal, or update the module or theme.
2. First, [check which version of Drupal core is installed](https://www.drupal.org/docs/8/understanding-drupal-8/understanding-drupal-version-numbers/which-version-of-drupal-am-i).
3. Then, check which version of the module or theme is installed by reading the `modules/modulename/modulename.info.yml` file. You should see at least one of the following lines near the top of the file:  
   * ```php  
   core: 8.x  
   core_version_requirement: ^8.8 || ^9  
   ```  
   This means the module is compatible with both Drupal 8.8+ and Drupal 9\. The `core: 8.x` key is optional in this case and may or may not be present. ([More information on the core\_version\_requirement](https://www.drupal.org/node/3070687) key.)  
   * ```php  
   core_version_requirement: ^9  
   ```  
   This means the module is only compatible with Drupal 9\. ([More information on the core\_version\_requirement](https://www.drupal.org/node/3070687) key.)  
   * ```php  
   core: 8.x  
   ```  
   This means the module is only compatible with Drupal 8.  
   * ```php  
   core: 7.x  
   ```  
   This means the module is only compatible with Drupal 7.
4. If the version of _Drupal core_ is too low for the installed module, download an update for Drupal core.
5. If the version of the _module_ is too low for the version of Drupal core, download or install an updated version of the module.
6. If a compatible version of the module or core is not available, you may need to restore a previous version from backup.
7. Once compatible versions of both Drupal core and the module or theme are present in the codebase, re-run `update.php`.

#### The module or theme is incompatible with the installed version of PHP

![](https://www.drupal.org/files/incompatible_modules.jpg)

1. If the module or theme is incompatible with the installed version of PHP, look in the `modules/modulename/modulename.info.yml` for a line like:  
```php  
php: 7.3  
```
2. Option 1: Install a version of the module or theme that supports your site's PHP version.
3. Option 2: Change your site's PHP version to a version that is compatible with the module.
4. Once compatible versions of PHP and the affected module or theme are present in the codebase, re-run `update.php`.

#### If non of the above options work you can use the missing module fixer

Note that the Module Missing Message Fixer can only automatically correct problems with missing or broken Drupal modules. If you run into problems with an unsupported or broken theme, you will have to use one of the manual aproaches explained above.

[https://www.drupal.org/project/module\_missing\_message\_fixer](http://www.drupal.org/project/module%5Fmissing%5Fmessage%5Ffixer)

### Manually removing a missing theme or module

If for any reason, you can't get hold of a copy of a missing theme or module you can either manually remove that theme from the Drupal database or - as a less intrusive approach - create a dummy module or theme and use Drupal's built-in uninstall functions. 

Basically the same approach applies for modules and themes alike. The dummy is an "empty" module or theme with a system name that matches the missing package's system name. A problem with this approach is, that the dummy is missing the uninstall hooks of the original module or theme. This can lead to abandoned settings and other leftovers in your database. Usually those settings can easily be found and removed from the database.

A real world example with more details can be found in the article [How to manually remove broken or missing Drupal modules from the database](https://www.lowfidelity.at/blog/manually-removing-drupal-modules) on the [.lowfidelity HEAVY INDUSTRIES](https://www.lowfidelity.at) website.

#### Manually removing a missing theme

* Start by identifying the missing theme's system name. The error messages from `update.php` or `drush updatedb` will display the missing theme's system name.
* Create a dummy theme named exactly like the original theme. To create a dummy theme you don't need more than a directory and the info.yml file. See [Defining a theme with an .info.yml file](https://www.drupal.org/docs/theming-drupal/defining-a-theme-with-an-infoyml-file) for a complete guide.
* Visit `/admin/appearance` or run drush pml to check if Drupal recognizes the dummy theme.
* Uninstall the theme via the UI or run `drush pmu your_dummy_theme_name`.
* Clear all caches.

The problematic theme should be removed by then, but this approach can lead to abandoned settings and leftovers in your database. See [Removing abandoned settings from the database](#s-removing-abandoned-settings-from-the-database). 

#### Manually removing a missing module

The approach with creating a dummy works for themes and modules alike. Still, removing modules straight from the database is a little less tricky, than removing a theme. If you feel comfortable with manipulating the database, skip the creation of a dummy and jump right to [Removing abandoned settings from the database](#s-removing-abandoned-settings-from-the-database).

* Start by identifying the missing module's system name. The error messages from `update.php` or `drush updatedb` will display the missing module's system name.
* Create a dummy module named exactly like the original module. See [Let Drupal know about your module with an .info.yml](https://www.drupal.org/docs/creating-modules/let-drupal-know-about-your-module-with-an-infoyml-file) file for examples and details.
* Visit `/admin/modules` or run drush pml to check if Drupal recognizes the dummy module.
* Uninstall the module via the UI `/admin/modules/uninstall` or run `drush pmu your_dummy_module_name`.
* Clear all caches.

See [Removing abandoned settings from the database](#s-removing-abandoned-settings-from-the-database) to find out, how to remove abandoned settings of a manually removed module.

#### Removing abandoned settings from the database

Modules and themes can leave their traces in different tables. A good spot to find module leftovers are the tables

* config / config\_export
* key\_value
* locales\_location / locales\_source
* and sometimes the cache tables.

Use a tool like [phpMyAdmin](https://www.phpmyadmin.net/) that allows searching through all tables of your database comfortably and remove rows that hold your module's or theme's system name.

In this example the missing module's system name is **user\_points**.

![Remove missing module from Drupal database.](https://www.drupal.org/files/drupal_remove_module_from_database.png)

The search reveals some tables, that hold references to the user\_point module. A click on the table name displays all matching rows.

![REMOVING THE MODULE LEFTOVERS FROM THE DATABASE](https://www.drupal.org/files/drupal_remove_module_from_database2.png)

Edit or remove the matching rows.

![REMOVING THE MODULE LEFTOVERS FROM THE DATABASE](https://www.drupal.org/files/drupal_remove_module_from_database3.png)

Make sure not to remove entries that store more than your missing module's configuration. E.g. in the table `config` the row with name `core.extension` stores settings in a BLOB. Don't remove the entire row, rather edit the BLOB in the data column and remove only traces of your missing module.

If you prefer working on the command line, in order to find references to missing or corrupted modules or themes, you could export your Drupal database `drush sql-dump > mysite.sql` and grep for the module's name `grep module_system_name mysite.sql`. If a match shows up, open the database dump in a text editor and search for the module's system name, to see which tables hold relicts of old modules. Then either manipulate the database dump and run `drush` `sql:cli < mysite.sql` or use `drush sql:cli` to edit or remove the rows.