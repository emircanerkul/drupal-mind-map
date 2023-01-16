See [the phpinfo() page on Drupal.org](https://www.drupal.org/node/59680 "Viewing PHP settings using phpinfo() | Drupal.org") to learn how to use Phpinfo to get the details of your system. For example, Phpinfo will tell you if you have a database already installed and what versions of PHP, MySQL, etc. your system is running. Phpinfo will also tell you what PHP variables are set as well as many other helpful things.

It is often possible to update to a newer version of PHP that ships with your Linux distribution. Please read the documentation for your Linux distribution.

### Some notable points

* Be aware of the [limitations of 32-bit PHP](/docs/system-requirements/limitations-of-32-bit-php "Limitations of 32-bit PHP | Drupal guide on Drupal.org").
* The Drupal 9 Update manager can install/update modules and themes via SSH if the required libraries have been installed on the server. (On Debian the package is named "libssh2-php".)
* If the native opcache is enabled, settings `opcache.save_comments` must be enabled (set to 1 which is the default), otherwise Annotations will not be saved/loaded.