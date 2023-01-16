You can [read more about other web server requirements](/requirements/webserver)

### Server configuration for Clean URLs on a dedicated server, with httpd.conf

Enabling clean URLs on a dedicated server involves these steps:

1. Enable mod\_rewrite for Apache. You can talk to your web host or consult the [Apache documentation](http://httpd.apache.org/docs/2.4/mod/mod%5Frewrite.html) for mod\_rewrite to get more information on how to do this. At a minimum, this will involve making sure that mod\_rewrite is enabled for your installation of Apache.  
To test if mod\_rewrite is available in Apache2, you can type the following at a command prompt, to list all installed Apache modules:  
```php  
apache2ctl -M  
```  
On some systems this command may be:  
```php  
apachectl -M  
```  
Or,  
```php  
httpd -M  
```
2. In the output, check to see if the `rewrite_module` is included in the list of modules.  
If the rewrite module is not in the list, it will have to be either compiled-in or made available as a loadable module. Generally speaking, you can tell Apache to load the module by including  
```php  
LoadModule rewrite_module modules/mod_rewrite.so  
AddModule mod_rewrite.c  
```  
in your Apache configuration file (see below for information on the configuration file). Be sure to uncomment AddModule mod\_rewrite.c, if it is in your configuration file but has been commented out. The following may work to enable the module without editing any files:  
```php  
a2enmod rewrite  
```  
Note that these approaches may not work for all combinations of operating system and Apache server -- consult the Apache documentation that came with your Apache software for the correct syntax.  
Remember to [restart Apache](http://httpd.apache.org/docs/2.4/stopping.html) for the new configuration to take effect.
3. The next step is to locate the appropriate Apache configuration file for your site. Depending on your server configuration, the appropriate Apache configuration file could be httpd.conf, a virtual-host-specific file (vhost.conf), a specific site file (e.g. "default"), or apache2.conf. They are usually located in `/etc/httpd/conf`, `/etc/apache2`, or a sub-directory; if not, try the command:  
```php  
find /etc -name httpd*  
```  
Or,  
```php  
find /etc -name apache2*  
```  
to find the file if it is located elsewhere in your file system.  
> If you do not have write permissions to these files, and Clean URLs are not working out-of-the-box for you, you may have to ask your systems administrator or hosting provider for help. You may still be able to _read_ these configuration files to [troubleshoot](http://drupal.org/node/54832) a little however.
4. The next step is to copy or include the Drupal-specific settings directly into your configuration file. There are instructions here for [how to include the Drupal directives](http://drupal.org/node/43788) in your configuration file. Consult the .htaccess file in Drupal for examples of rules, such as the following for Drupal 8:  
```php  
RewriteEngine on  
RewriteBase /  
RewriteCond %{REQUEST_FILENAME} !-f  
RewriteCond %{REQUEST_FILENAME} !-d  
RewriteCond %{REQUEST_URI} !=/favicon.ico  
RewriteRule ^ index.php [L]  
```  
Or this example on a Debian 8 + Apache2 + ISPConfig, using wildcard to match all sites installed:  
```php  
<Directory /var/www/clients/*/*/web/>  
  RewriteEngine on  
  RewriteBase /  
  RewriteCond %{REQUEST_FILENAME} !-f  
  RewriteCond %{REQUEST_FILENAME} !-d  
  RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]  
</Directory>  
```  
Make sure that you are looking at the .htaccess file for your major version of Drupal (i.e., 8.x).

Note: If you do not want to put the rewrite rules in your Apache configuration file, you can still simply use the Drupal .htaccess file (as you would if you were on shared hosting). You will need to have the Allow Override directive set in your Apache configuration file (this will allow local .htaccess overrides on your site):

```php
AllowOverride All
AccessFileName .htaccess
```

Read [Behind the scenes with Apache's .htaccess](http://brainstormsandraves.com/archives/2005/10/09/htaccess/) for a thorough review of .htaccess. You may also find it helpful to view [samples of Apache 2 AllowOverride directives](http://httpd.apache.org/docs/2.4/mod/core.html#allowoverride).

**Note Regarding MultiViews:** Apache supports a feature called "MultiViews" (more generally: "Content Negotiation"), which allows navigation to your pages without the need for file extensions. For instance, if you had a file called "evaluation.txt", a MultiViews-enabled site could access this file with the URL "example.com/evaluation". While MultiViews can be a handy feature when used knowingly, it can cause problems when Drupal's Clean URLs are enabled. Unless you know what you're doing, you should not use MultiViews if you plan to use the Clean URLs feature of Drupal. However, MultiViews is not enabled in a default Apache installation, so it is likely that this note will not apply. [Consult the Apache documentation for further information about MultiViews](http://httpd.apache.org/docs/mod/core.html#options).

### Server configuration for Clean URLs on a shared server, with .htaccess

The standard Drupal installation contains a sample .htaccess file which should be sufficient to get Clean URLs running. It is easy to miss copying this file, because of the leading "dot". So before trying to enable Clean URLs, make sure this file exists in your Drupal installation.

To check for this in terminal, use `ls -a` to make sure the "dot" files are also listed.

If you have this file installed, but Clean URLs still do not work, you can try some of the troubleshooting suggestions below. If you still cannot get Clean URLs to work, contact your hosting provider.