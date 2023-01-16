In most cases, the installation script creates the files directory for you. If Drupal can't create the directory (which most probably is due to lack of required permissions), then follow the instructions below.

In the directory `sites/default` create a new subdirectory called `files/`. Grant read, write and execute permissions on the new directory to the web server (usually `apache` or `nginx`). Most FTP programs will allow you to create the new directory and set its permissions.

### Troubleshooting Apache-based web servers

If the directory `files` is not "owned" by the webserver there are two ways to proceed. These instructions assume you have shell access to the server and that you are using `apache` as the webserver. If you do not have shell access, then you should be able to change the directory permissions using an FTP program.

On a Unix-like server you can verify "who" the webserver is running as by issuing the following commands.

For Apache 2.x:

```php
$ ps aux | grep apache
```

For Apache 1.x:

```php
$ ps aux | grep httpd 
```

Depending on your web server, one of these commands will return a series of lines like this:

```php
www-data 13612 0.1 0.9 50640 20340 ? S 12:29 0:08 /usr/sbin/apache2 -k start 
```

The first column is the "user" that your web server is operating as. In this case the user is `www-data`. To make your files directory writeable by the webserver you can change its ownership using the command:

```php
$ chown -R www-data sites/default/files
```

If you do not have sufficient permissions on your server to change the ownership of the folder, the next best option is to provide group-write access to the folder with the following command:

```php
$ chmod -R 0770 sites/default/files 
```