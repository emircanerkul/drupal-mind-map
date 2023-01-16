Here is a four-step guide to switching from Drupal's default database. It is for Linux systems only.

### 1\. Install & configure the Syslog module

* Enable the module Syslog on the Extend page at admin/modules (Drupal 8)
* Configure the module on the 'Logging and errors' configuration page at admin/config/development/logging
* Select which Syslog facility to attach to the log messages. Choose one that is not in use by Syslog.
* Set the syslog identity (a string that will be prepended to every message logged to Syslog), for example `drupal_www_example_com`.

### 2\. Configure Syslog to log to a separate file (optional)

You can write the log messages to a separate file (If you dont the messages will most likely end up in `/var/log/messages`)

Edit the syslog configuration file at:

```php
/etc/syslog.conf

```

or

```php
/etc/rsyslog.conf

```

Add the following line at the bottom of the file:

```php
local0.* /var/log/drupal.log

```

Where _local0_ is the Syslog facility that you chose in the Syslog configuration (see Step 1)

How to restart the syslog daemon for most Unix/Linux systems:

```php
sudo service syslog restart

```

or

```php
sudo service rsyslog restart

```

or

```php
sudo systemctl restart rsyslog.service

```

[Here's how to restart syslog on Mac OS X.](http://robaldred.co.uk/2009/05/restarting-syslog-process-on-mac-osx/)

Check that you are seeing messages in the syslog:

```php
tail /var/log/drupal.log

```

This shows the bottom of the log file. To see the complete log file use:

```php
less /var/log/drupal.log

```

To see new log messages appearing in the log file use:

```php
tail -f /var/log/drupal.log

```

Exit using ctrl+c

### 3\. Disable the Database Logging (formerly, Watchdog) module (optional)

If you have the Database logging (dblog) enabled, disable it at on the Extend page _/admin/build/modules_.

### 4\. Configure Syslog to log to a separate file for each domain

You can use separate log files for each website.

Edit the syslog configuration file at:

```php
/etc/syslog.conf

```

or

```php
/etc/rsyslog.conf

```

and add:

**Note that the following syntax uses an if block (RainerScript) and is only available in rsyslog, not syslog.**

```php
if $programname == 'drupal_www_example_com' then /var/log/drupal/drupal_www_example_com.log
& ~

local0.* /var/log/drupal/others.log
& ~

```

_$programname drupal\_www\_example\_com_ is the Sylog identity that you have set in the _Logging and errors configuration page, (admin/config/development/logging)_, see step 1.

With the last line you are sure to put all Drupal log (if you choose facility local0) in one file.

The "strange" lines, `& ~`, omit to put the log record in other files (for example /var/log/syslog)

Note If you use rsyslog with a /etc/rsyslog.d/ folder, you can create a new file there, with the same content (preferred method).