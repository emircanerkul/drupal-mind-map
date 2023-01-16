Extensions used by Drupal core are defined in Core's composer.json file - see for example [the file for Drupal 9.1.x](https://git.drupalcode.org/project/drupal/blob/9.1.x/core/composer.json "core/composer.json · 8.7.x · project / drupal · GitLab"). Look at the "require" section and the keys starting with "ext-".

**Note**: Adding a PHP extension to your system, at least on Linux (and Mac), means finding and installing the relevant PHP package using your package manager. Typically the package name for the Foo extension is named "php-foo" or "php7-foo", but this isn't always the case. Some extensions are part of the core PHP package and hence are enabled by default. 

### Database extensions 

The [PHP Data Objects (PDO)](/node/549702 "What is PDO? | Drupal 7 guide on Drupal.org") extension must be activated for Drupal 9 and higher to install and run correctly. The PECL version of PDO is not compatible with Drupal 9 and cannot be used. In addition, a PHP extension for connecting to your chosen database must be installed and enabled.

Drupal's currently supported database connectors are [SQLite](https://www.php.net/manual/en/book.sqlite3.php "SQLite - Manual"), [mysql](https://www.php.net/manual/en/ref.mysql.php "MySQL Functions - Manual") (the original MySQL extension), [mysqli](https://www.php.net/manual/en/mysqli.summary.php " The MySQLi Extension Function Summary - Manual") (an improved connector for newer MySQL installations), and [pgsql](https://www.php.net/manual/en/ref.pgsql.php " PostgreSQL Functions - Manual") (for PostgreSQL).

### XML extension 

PHP [XML extension](https://www.php.net/manual/en/ref.xml.php " XML Parser Functions - Manual") (for Blog API, Drupal, and Ping modules). This extension is [enabled by default](https://www.php.net/manual/en/ref.xml.php#xml.installation " XML Parser Functions - Manual") in a standard PHP installation; the Windows version of PHP has built-in support for this extension. Enabling the XML extension also enables PHP DOM. DOM is now a systems requirement.

### Image library 

An image library for PHP such as the [GD library](https://www.php.net/gd " GD - Manual") is a _required_ extension in Drupal 9 and higher, and is needed for image manipulation (resizing user pictures, image and image cache modules). [ImageMagick](https://www.imagemagick.org/script/index.php "ImageMagick - Convert, Edit, or Compose Bitmap Images") is also supported for basic image manipulations in Drupal core but there is much less support from contributed modules.

### OpenSSL 

The [PHP OpenSSL](https://php.net/manual/en/book.openssl.php " OpenSSL - Manual") extension is recommended to allow Drupal to make outgoing requests using HTTPS and is required when using the Update Manager. Read [PHP OpenSSL requirements](/node/3170647) for more information.

### JSON 

Drupal 9 and higher require PHP compiled with JSON. JSON support is normally compiled as part of PHP core, but in case you're getting errors like `PHP Fatal error: Call to undefined function Drupal\\Component\\Serialization\\json_encode() in ... core/lib/Drupal/Component/Serialization/Json.php` try [adding the JSON extension](https://www.php.net/manual/en/json.installation.php " Installation - Manual").

### cURL 

The [PHP cURL](https://www.php.net/manual/en/book.curl.php " cURL - Manual") extension is required for automated testing in Drupal 9 and higher, as well as Aggregator and some contributed modules. Many Linux distributions and development stacks will have it enabled by default, but if your system doesn't either enable it in php.ini (typically on Windows) or install it using your package manager (typically on Linux).

### Mbstring 

The [PHP mbstring](https://php.net/manual/en/intro.mbstring.php " Introduction - Manual") extension provides multibyte specific string functions used for Drupal installation in other languages except for English and also multilingual sites in Drupal. It helps deal with multibyte encodings in PHP and also handles Unicode based encoding like UTF-8 or UCS-2.