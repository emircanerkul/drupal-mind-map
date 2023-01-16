First, check if the site's PHP has OpenSSL enabled at all:

Administration > Reports > Status

Click on the "more information" link under PHP version (/admin/reports/status/php)

There should be a section called "openssl" and you should see something like:

`OpenSSL support: enabled`

If not, you'll have to consult the [PHP openssl extension](https://www.php.net/manual/en/openssl.installation.php) documentation on how to enable this extension in your `php.ini` configuration file. Basically, you'll need to uncomment or add a line like this: `extension=php_openssl.so` and probably restart your web server daemon (e.g. Apache). The details will vary depending on your hosting environment. If you're unsure, check with your system administrator or hosting provider.