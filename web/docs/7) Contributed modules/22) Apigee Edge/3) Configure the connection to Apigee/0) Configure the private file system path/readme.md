The private file system path defines the location to store private files that are created by Drupal. The private file system path should be writable by Drupal and not accessible over the web.

Before configuring the connection to Apigee, you need to ensure that you have configured the **Private File Path** value in `web/sites/default/settings.php` file, as described in the following procedure. See also [Private file system settings in Drupal 8](https://www.drupal.org/docs/8/core/modules/file/overview#private-file-system).

**Note**: The **Private File Path** value might be configured automatically by your hosting provider.

To configure the private file system path:

1. Confirm whether the private file system path is set:  
   1. Select **Configuration > Media > File system** in the Drupal administration menu.  
   2. Check whether the **Private file system path** is set.  
    This value matches the **Private File Path** value that is set in the `settings.php` file.  
   3. If the field is not set, proceed to step 2\.  
    If the field is set, you can skip the rest of the steps in this procedure.
2. Change permissions on `web/sites/default` directory and files to make them writeable. For example:  
`chmod -R 775 web/sites/default`
3. Open the `web/sites/default/settings.php` file in your favorite editor.
4. Search for **Private file path** in the file and set the value to the location of your private file directory. For example:  
```php  
$settings['file_private_path']= '/var/www/private';  
```  
If you are using Lando or another tool to run a local web server inside a Docker container, you may need to create a `private` directory at the root of your project. Then, set the value of the **Private file path** in your settings.php. For example:  
```php  
$settings['file_private_path']= '/app/private';  
```  
**Note**: Ensure that you uncomment the line in the file.
5. Save the `settings.php` file.
6. [Clear Drupal cache](https://www.drupal.org/docs/user%5Fguide/en/prevent-cache-clear.html) by going to _Configuration_ \> _Development_ \> _Performance_ (_admin/config/development/performance_) and clicking _Clear all caches_.
7. Repeat step 1 to confirm that the **Private file system path** is set in Drupal.