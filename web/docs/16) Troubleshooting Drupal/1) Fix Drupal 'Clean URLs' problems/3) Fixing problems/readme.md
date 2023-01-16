### Check if .htaccess is being used

Apache needs to be explicitly told to respect the instructions in your sites .htaccess file. This is off by default, though most hosts will have turned it on. That is what the `AllowOverride All` directive above does - it makes .htaccess start working.

To check if your host is reading the .htaccess file, you can (temporarily) add some garbage string to the file in an attempt to break it. Your site should immediately start returning a "500 Server Error" when you load a page from that directory due to this misconfiguration. (Remove the garbage string immediately.)

If you do this, and your site _does not_ break - then .htaccess is being ignored and you will not be able to use clean URLs until you get support from your hosts, or enable it in httpd.conf as described above. Some hosts allow you to enable this option through their site management control panel, so look there first.

### RewriteBase setting

The main configuration option which may need to be changed for your site is the `RewriteBase`. This can be specified in the Drupal .htaccess file or in the httpd.conf file, depending on where you are putting the Drupal rewrite directives (see above). By default, the RewriteBase setting is commented out of the Drupal .htaccess file, and that works well for many configurations.

If you are having trouble getting Clean URLs to work, you may need to change this setting. For example, if your Apache DocumentRoot is `/var/www/` (i.e., /var/www/index.html is what is displayed when you point your browser at `http://www.example.com/`) and your Drupal installation is installed in the subdirectory `/var/www/mysite/`, then the RewriteBase could be set to

```php
RewriteBase /mysite 
```

and that might help. In some configurations, setting

```php
RewriteBase / 
```

will allow clean URLs to work.

### (d7) $base\_url

You may need to manually set the $base\_url variable in the settings.php file if not already set. It's currently known that servers running FastCGI can run into problems if the $base\_url variable is left commented out (see <http://bugs.php.net/bug.php?id=19656>).

### Multi-site

`RewriteBase` works when your Drupal installation serves only one site, or when all the sites it serves are in the same subdirectory of their domains. For example,


```php
RewriteBase / 
```

will work for the following sites:

<http://www.example.com/>  
<http://www.example2.com/>  
<http://www.example3.com/>


```php
RewriteBase /mysite 
```

will work for the following sites:

<http://www.example.com/mysite>  
<http://www.example2.com/mysite>  
<http://www.example3.com/mysite>

However, if your sites are in different subdirectories, `RewriteBase` will not work. You will need to create a special rule for each subdirectory. For example, your Drupal installation may serve the following sites:

<http://www.example.com/>  
<http://www.example.com/mysite>

In order to enable clean URLs for both sites, you will need to add

```php
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} ^/mysite/
RewriteRule ^ /mysite/index.php [L]
```

before the existing rewrite rules.

### Location of index.php

For some server configurations, another change to the Drupal .htaccess file may be necessary. Find a line that looks like this, near the end of your Drupal .htaccess file:

```php
RewriteRule ^ index.php [L] 
```

You may need to replace `index.php` with the URL path to your Drupal installation's index.php file (only the part after the base URL). For instance, if your site's home page URL is `http://example.com/subdir/`, you might need to use `/subdir/index.php` instead of `index.php`. If your site's home page URL is `http://example.com/`, you might need to use `/index.php` instead of `index.php`. This is necessary on some, but not all server configurations.