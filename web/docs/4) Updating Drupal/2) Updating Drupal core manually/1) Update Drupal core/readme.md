Steps to update Drupal core using a manual installation and a command line (shell):

1. Back up both your files and database. Having a complete backup makes it easy to revert to the prior version if the update fails.  
Optionally, if you made manual modifications to files like _.htaccess_, _composer.json_, or _robots.txt_, copy them somewhere easy to find. Because after you've installed the new Drupal core, you will need to re-apply the changes. For example, Acquia Dev Desktop places a _.htaccess_ file in the top-level directory and without it, only the homepage on your site will work.  
<!-- note-warning -->  
> WARNING: Always revert to a backup if you get a fatal error in the update process.
2. Using Drupal, log in as any user with the permission _"Administer software updates"_.
3. Using Drupal, put your site into [maintenance mode](http://www.drupal.org/node/2827362/ "11.2. Enabling and Disabling Maintenance Mode | Drupal 8 User Guide guide on Drupal.org"). To do so:  
   1. Navigate the admin interface to _Administration > Configuration > Development > Maintenance mode_.  
   2. Check _"Put site into maintenance mode"_ checkbox.  
   3. Click on _"Save configuration"._
4. Choose one of the following two options to remove the files in the top-level directory as well as the 'core' and 'vendor' directories, leaving the 'modules', 'profiles', 'sites', 'themes' directories behind:  
   * **Using the shell**  
         1. Navigate into your Drupal installation.  
         ```php  
         cd /path/to/your/drupal/directory  
         ```  
         2. Remove the 'core' and 'vendor' directories.  
         ```php  
         rm -rf core vendor  
         ```  
         3. Remove all of the files in the top-level directory.  
         ```php  
         rm -f *.* .[a-z]*  
         ```  
   * **Using an FTP client**  
         1. Navigate to your Drupal directory.  
         2. Select all the files in the top-level directory (also hidden files starting with a dot) as well as the 'core' and 'vendor' directories, and delete them. Be sure not to delete the 'modules', 'profiles', 'sites', and 'themes' directories.
5. Optionally sometimes an update includes changes to _default.settings.php_ or _default.services.yml_ files. This will be noted in the release notes. You can find the release notes for your version at <https://www.drupal.org/project/drupal>. At bottom of the project page under the _"Downloads"_ section use the link for your version of Drupal to view the release notes. If your version is not listed, use the "_View all releases"_ link. From this page, you can scroll down or use the filter to find your version and its release notes. If the update includes changes to the _default.settings.php_ file, follow these steps:  
   1. Locate your _settings.php_ file in the _/sites/\*_ directory. (Typically sites/default.)  
   2. Make a backup copy of your _settings.php_ file, with a different file name.  
   3. Make a copy of the new _default.settings.php_ file, and name the copy _settings.php_ (overwriting your previous _settings.php_ file).  
   4. Copy the custom and site-specific entries from the backup you made into the new _settings.php_ file. You will definitely need the lines giving the database information, and you will also want to copy in any other customizations you have added.
6. Choose one of the following two options to get the new files into the top-level directory and the 'core' and 'vendor' directories:  
   * **Using shell**  
         1. On a typical Unix/Linux command line, use the following commands to download and extract:  
         ```php  
         wget https://ftp.drupal.org/files/projects/drupal-x.y.z.tar.gz  
         tar zxf drupal-x.y.z.tar.gz  
         ```  
         2. This command above created a new directory _drupal-x.y.z/_ containing all Drupal files and directories. Enter the new directory, and copy the 'core' and 'vendor' directory and the files in the top-level directory into your Drupal installation directory:  
         ```php  
         cd drupal-x.y.z  
         cp -R core vendor /path/to/your/drupal/directory  
         cp *.* .[a-z]* /path/to/your/drupal/directory  
         ```  
   * **Using the browser and FTP client**  
         1. Download the latest Drupal release from <https://www.drupal.org/download> to a directory outside of your webroot.  
         2. Extract the archive.  
         3. Use an [FTP client](https://www.google.com/search?q=FTP+client "FTP client - Google Search"), to upload the 'core' and 'vendor' directory and the files in the top-level directory to your Drupal directory.
7. Optionally, re-apply any manually modifications to files such as _.htaccess_, _composer.json_, or _robots.txt._
8. Using your browser, run update.php by visiting <http://www.example.com/update.php> (replacing [www.example.com](http://www.example.com) with your domain name). This will update the core database tables.  
   * Optionally, if you are _not_ logged in as a user with the "Administer Software Updates" permission, or the site maintenance account (as created during installation) you will be unable to access update.php. Here are the steps to bypass this restriction:  
         1. Open settings.php with a text editor.  
         2. Find this line:  
         ```php  
         $settings['update_free_access'] = FALSE;  
         ```  
         3. Change the FALSE value to TRUE:  
         ```php  
         $settings['update_free_access'] = TRUE;  
         ```  
         4. Visit the _/update.php_ page again.  
         5. After you are done with all of the steps above, for security, it is **important** to change the setting back to _FALSE._
9. Using your browser, log in your Drupal admin and navigate to _Administration > Reports > Status report_. Verify that everything is working as expected.
10. Still using your browser, log in your Drupal admin and navigate to _Administration > Configuration > Development > Maintenance mode_. Uncheck the _"Put site into maintenance mode"_ checkbox and click on the "Save" button.
11. After updating, remove the Drupal release you downloaded and extracted earlier:  
```php  
rm drupal-x.y.z.tar.gz  
rm -rf drupal-x.y.z/  
```
12. Done. You have successfully updated your Drupal core using a manual installation and the shell/browser. :)