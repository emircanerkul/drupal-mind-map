### Memory requirements

PHP memory requirements can vary significantly depending on the modules in use on your site. The minimum required memory size is _**64MB**_.

Warning messages will be shown if the PHP configuration does not meet these requirements. However, while these values may be sufficient for a default Drupal installation, a production site with a number of commonly used modules enabled could require more memory. _Typically 128 MB or 256 MB are found in production systems._ Some installations may require much more, especially with media-rich implementations. If you are using a hosting service it is important to verify that your host can provide sufficient memory for the set of modules you are deploying or may deploy in the future. (See the [Increase PHP memory limit](https://www.drupal.org/docs/7/managing-site-performance-and-scalability/changing-php-memory-limits "Changing PHP memory limits | Drupal 7 guide on Drupal.org") page in the _Troubleshooting FAQ_ for additional information on modifying the PHP memory limit.)

### .htaccess settings

Some of the memory settings are contained in the default .htaccess file that ships with Drupal, so you shouldn't need to set them explicitly. Note, however, that setting PHP configuration options from .htaccess only works under the following conditions:

* With Apache (or a compatible webserver)
* If the .htaccess file is actually read, i.e. [AllowOverride All](https://httpd.apache.org/docs/current/mod/core.html#allowoverride "core - Apache HTTP Server Version 2.4") in the main Apache configuration (usually httpd.conf) is enabled
* If PHP is installed as an Apache module

In some shared hosting environments, access to these settings is restricted. If you cannot make these changes yourself, please ask your hosting provider to adjust them for you.

### Other interfaces

See the [PHP manual](https://www.php.net/manual/en/configuration.changes.php#configuration.changes.other " How to change configuration settings - Manual") for how to change configuration settings for other interfaces to PHP.

### Xdebug

If using [Xdebug](https://xdebug.org/ "Xdebug - Debugger and Profiler Tool for PHP"):

Setting: **xdebug.show\_exception\_trace = 0**  
Reason: Could cause Drupal's installer to crash.

Using Xdebug with Drupal 9:

Setting: **xdebug.collect\_params = ?**  
Reason: Setting _xdebug.collect\_params_ too high will prevent Drupal 9 from installing and working properly.

Setting: **xdebug.max\_nesting\_level = 256**  
Reason: Using the default _max\_nesting\_level_ of 100 (in xdebug versions < 2.3) causes some pages to crash.

### PHP from different sources

Drupal is designed to work with PHP as distributed on [PHP.net](https://www.php.net/ " Hypertext Preprocessor"). Every effort is made to make it work with PHP versions from other sources but this is only done on a best effort basis. In particular, [Suhosin](https://suhosin.org "About | SUHOSIN") is known to break certain features; and some operating systems move core components into other packages.