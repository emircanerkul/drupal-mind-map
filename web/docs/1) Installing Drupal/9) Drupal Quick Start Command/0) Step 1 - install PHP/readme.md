Drupal 10 requires at least PHP 8.1, see [PHP requirements](https://www.drupal.org/docs/system-requirements/php-requirements) for details.

### macOS

macOS 10.13 (High Sierra, released Sep 25, 2017) and later (10.14 Mojave and 10.15 Catalina) come with PHP 7 out of the box. They need to be upgraded to support the latest version of Drupal.

macOS 10.12 (Sierra, released Sep 20, 2016) and earlier come with PHP 5.x. They will need to be [updated to PHP 7](https://charles4code.blogspot.com/2018/06/upgrade-php-version-from-56-to-72-on.html) to support Drupal.

### Linux

Install PHP 8.1 or later, and required extensions. On a Debian-based Linux platform, including Ubuntu 22.04 which comes with PHP 8.1, use the following command:

```php
sudo apt install php-cli php-curl php-gd php-mbstring php-sqlite3 php-xml php-mysql
```

For Ubuntu 20.04 and below, see [How To Install PHP 8.1 on Ubuntu 22.04|20.04|18.04](https://computingforgeeks.com/how-to-install-php-on-ubuntu-linux-system/).

### Windows

Typically PHP is installed as part of an AMP. You'll find a list of choices for AMP on the [local server setup pages for Windows](https://www.drupal.org/node/263). NB! If you decide to install just [PHP for Windows](https://windows.php.net/download/), there is a lot of [manual configuration](https://www.jeffgeerling.com/blog/2018/installing-php-7-and-composer-on-windows-10).