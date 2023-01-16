### PHP configuration

For file uploads to work, PHP must be configured properly. The following PHP configuration variables may need to be set or configured, in your PHP php.ini file, .htaccess file, or settings.php files.

* `file_uploads = On` must be set to "On"
* `upload_max_filesize = 24M` can't be larger than `post_max_size`
* `max_input_time = 300` small values may cause timeouts for large file uploads
* `memory_limit = 64M` small values may cause out of memory errors for large file uploads
* `max_execution_time = 180` small values may cause timeouts for large file uploads
* `post_max_size = 24M` limits the size of input submitted to the website (including attached files)

**Top Tip:** Make sure you're editing the correct php.ini file by going to YOURSITE/admin/reports/status/php. This will display information about your current PHP setup which is being used for Drupal (in essence it's running phpinfo()). Now look for the 'Loaded Configuration File' section, this will list the php.ini file you need to edit.

### Clearing the Cache

It is recommended you clear the cache after making these updates. If you don't, then Drupal is likely to complain that the private files area is not protected.

### Further Reference

* [Securing file permissions and ownership](http://drupal.org/node/244924)