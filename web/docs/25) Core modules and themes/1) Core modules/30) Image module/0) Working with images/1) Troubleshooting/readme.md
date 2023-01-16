To know more about your problem, log into your site as an administrator and go to Reports → "Recent log messages" (/admin/reports/dblog).

### The image doesn't show up

This may be a **directory permission problem**. When everything works fine, images seem to be generated when uploaded, when the node is saved or when a new image style is created. If you have a multisite installation and your website directory is sites/example.com/ , Drupal generates subdirectories and files inside sites/example.com/files/styles/ , for instance sites/example.com/files/styles/medium/public/field/image/landscape.jpg . (In a single site installation, it would be sites/default/files/styles/medium/public/field/image/landscape.jpg ). So check whether sites/example.com/files/styles belongs to the web server user and whether this user has all permissions on it. In Mageia 3, the webserver user is called "apache". Other typical names for it are "\_www" and "www-data", depending on your operating system and distribution. To ensure that the directory "styles" is owned by the user apache and that the latter has all permissions on it, you can go to sites/example.com/files directory and run, in Linux:

```php
$ su
# chown apache styles
# chmod u+rwx styles
```

(Or use "sudo".)

In some cases, you might have trouble with tokens. See Drupal 7.20's [release notes](https://drupal.org/drupal-7.20-release-notes), especially the last paragraph "Overall mitigation steps".

### Troubleshooting image & gallery settings

In some circumstances, functions like adding images to galleries don't work unless Clean URLs are activated. (You get no result from attempting to add to galleries) [More info on Clean URLs.](http://drupal.org/node/15365) \[[Related bug report](http://drupal.org/node/1045502)\]