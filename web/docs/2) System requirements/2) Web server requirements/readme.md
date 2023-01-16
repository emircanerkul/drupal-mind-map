---
url: https://www.drupal.org/docs/system-requirements/web-server-requirements
description: >-
  Drupal 8 and later versions work on any web server with a version of PHP that
  meets the PHP version requirements. Many hosting providers offer PHP version
  options. The default PHP version might be less than the version required for
  Drupal, so check the current version in your host’s control panel, and change
  it to the latest supported version (if needed). PHP has occasional security
  releases, watch for them at php.net and upgrade/patch your servers as needed,
  or work with a hosting provider that handles PHP updates.
published_time: '2016-11-20T04:52:19+00:00'
modified_time: '2021-12-05T02:11:03+00:00'
---
Drupal 8 and later versions work on any [web server](http://en.wikipedia.org/wiki/Web%5Fserver) with a version of PHP that meets the [PHP version requirements](https://www.drupal.org/docs/8/system-requirements/php).

Many hosting providers offer PHP version options. The default PHP version might be less than the version required for Drupal, so check the current version in your host’s control panel, and change it to the latest supported version (if needed).

PHP has occasional security releases, watch for them at [php.net](https://secure.php.net) and upgrade/patch your servers as needed, or work with a [hosting provider](https://www.drupal.org/hosting) that handles PHP updates.

If you want to create and develop Drupal sites on your computer, you can install everything needed locally.

<!-- note-warning -->
> WARNING: Security note: Some security features are only provided for Apache and (to a lesser extent) IIS through the use of .htaccess and web.config files. You are responsible for recreating these features when not using Apache.

### File and folder permissions

Drupal and PHP should have read and write access to the _/sites/default/files_ directory. This area is used to store cached files (compressed CSS and JavaScript) and any file uploads through the Drupal interface

<!-- note-warning -->
> WARNING: Security note: Universal permission like 0777 is not secure and usage of such is discouraged.

### Apache

[Apache](http://httpd.apache.org/) is the most commonly used web server for Drupal. Drupal will work on Apache 2.x hosted on UNIX/Linux, OS X, or Windows. Drupal 9 requires at least Apache 2.4.7.

The majority of Drupal development and deployment is done on Apache, so there is more community experience and testing performed on Apache than on other web servers.

The Apache 'mod\_rewrite' extension is required. It is used for [clean URLs](/docs/troubleshooting-drupal/fix-drupal-clean-urls-problems).

The Apache Virtualhost configuration must contain the directive `AllowOverride All` to allow Drupal's .htaccess file to be used.

If the Apache server has `Options +MultiViews` enabled by default, then the Apache Virtualhost configuration should also contain `Options -MultiViews` (or have -MultiViews added to the existing Options directive).

On some systems, particularly OpenSuse distributions you may have to add SymLink settings to the .htaccess file. Depending on security settings, you may need to add either +FollowSymLinks or +SymLinksIfOwnerMatch (especially on shared hosts). If this is required, the on-screen error messages may be unhelpful, but the error logs identify the problem correctly in both cases. If you edit the .htaccess file remember that you have to re-edit after updates which overwrite the file!

### Nginx

[Nginx](http://nginx.org/) is a commonly used web server that focuses on high concurrency, performance and low memory usage.

Drupal will work on Nginx legacy versions (0.7.x, 0.8.x, 1.0.x, 1.2.x), stable 1.8.x versions, and mainline 1.9.x versions hosted on UNIX/Linux, OS X, or Windows. Nginx is a popular alternative to Apache, so there is also significant community experience and testing performed on Nginx.

The Nginx web site contains a [Drupal Nginx configuration file](https://www.nginx.com/resources/wiki/start/topics/recipes/drupal/) that can be used to configure Drupal websites.

### Microsoft IIS

[Microsoft IIS](https://www.iis.net/) is a web server and a set of feature extension modules for use with Microsoft Windows.

Drupal core will work with IIS 5, IIS 6, IIS 7, IIS 8 or IIS 10 if PHP is configured correctly.

To achieve clean URLs you may need to use a third-party product. For IIS 7 or 8 you can use the Microsoft URL Rewrite Module or a third-party solution.

On IIS 7 Drupal requires [Windows 2008 Server SP2](http://technet.microsoft.com/en-us/windowsserver/dd262148.aspx) or later for fastCGI support.

### PHP Built-in Web Server (Development Only)

[PHP Built-in Web Server](http://php.net/manual/en/features.commandline.webserver.php "PHP Built-in Web Server") is included as a CLI SAPI tool in PHP versions 5.4.0 and above.

PHP web server was designed to aid in application development. It may also be useful for testing purposes or for application demonstrations that are run in controlled environments. It is not intended to be a full-featured web server, therefore, it should not be used as a production server for public use.

This web server can be started using the [Drupal quick-start command](/docs/8/install/drupal-8-quick-start-command).