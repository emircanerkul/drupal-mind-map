---
url: https://www.drupal.org/docs/multisite-drupal/set-up-a-multisite
description: >-
  The following guide will highlight the manual steps required to set up a
  Drupal multisite. This guide is a work in progress with only some example
  configurations presented. Other options are available, such as HTTPS, other
  Web servers and databases, and more refined virtual host configurations, etc.
  Alternatively use the Aegir hosting system. It does most of the heavy lifting
  and uses secure best practices, including automatically configuring virtual
  hosts for both Apache and Nginx, adding HTTPS support, running Composer
  commands, etc.
published_time: '2017-11-30T21:02:42+00:00'
modified_time: '2022-11-12T01:46:54+00:00'
---
The following guide will highlight the manual steps required to set up a Drupal multisite. This guide is a work in progress with only some example configurations presented. Other options are available, such as HTTPS, other Web servers and databases, and more refined virtual host configurations, etc.

> Alternatively use the [Aegir hosting system](https://www.aegirproject.org/ "Ægir Hosting System"). It does most of the heavy lifting and uses secure best practices, including automatically configuring virtual hosts for both Apache and Nginx, adding HTTPS support, running Composer commands, etc. See [the documentation for setting up a "platform"](https://docs.aegirproject.org/usage/platforms/ "Platforms - Aegir Hosting System"), Aegir-speak for a multisite codebase.

_Note: Official stable Aegir releases will not install on recent stable Debian or Ubuntu OSes until there's a new release available as support for these are only in development branches. See [#3246691: Create an Aegir 3.20 release for recent stable Debian & Ubuntu LTS](https://www.drupal.org/project/hostmaster/issues/3246691 "Status: Active, Assigned to: kienan") for details._

### Overview of the process

1. Install a Drupal instance that will act as the root site for our multisite instance. In our example, the root site will be called dmultisite, will be reachable at dmultisite.com, and will be installed at /var/www/dmultisite
2. Set up a site within the multisite called site1 which is reachable at site1.dmultisite.com
3. Configure site1 to have its own modules outside of the root site.

### Step 1: Instantiate the master site

To begin the process, install a supported version of Drupal 9 or later on your server. [Read the docs](https://www.drupal.org/docs/installing-drupal "Installing Drupal 8 | Drupal 8 guide on Drupal.org") on installing Drupal if you are not familiar.

In this example, we install Drupal with the following steps:

**1.1:** Create a database for the multisite root site, ex: dmultisite.

**1.2:** Download and extract a copy of Drupal into your web directory.

**1.3:** Create a virtual host definition for the root site. Read about [virtual host configurations](https://www.drupal.org/node/111238 "Installing virtual hosts for Drupal sites and subsites | Drupal.org"). An example of an Apache virtual host configuration is as follows. For Nginx, see [the official recipe](https://www.nginx.com/resources/wiki/start/topics/recipes/drupal/ "Drupal | NGINX").

```php
<VirtualHost *:80>

  # virtual host configuration for Drupal 8 multisite root site

  ServerAdmin me@domain.com
  DocumentRoot /var/www/dmultisite
  ServerName dmultisite.com
  ServerAlias www.dmultisite.com
  
  <Directory />
    Options FollowSymLinks
    AllowOverride None
  </Directory>
  
  <Directory /var/www/dmultisite>
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>

  ErrorLog ${APACHE_LOG_DIR}/dmultisite_error.log
  LogLevel warn
  CustomLog ${APACHE_LOG_DIR}/dmultisite_access.log combined

</VirtualHost>


```

**1.4:** Install Drupal by visiting dmultisite.com and follow the install UI.

### Step 2: Configure the first site for the multisite

Now that we have the root site set up, we can begin configuring our first site called site1\. Here are the steps in this process:

**2.1:** Create a folder for site1 in your multisite: /dmultisite/sites/site1.dmultisite.com

**2.2:** Create a database for site1, ex: dmultisite\_site1

**2.3:** Make a copy of /dmultisite/sites/example.sites.php called /dmultisite/sites/sites.php

**2.4:** Edit sites.php so the end of the file looks like this:

```php
# make the root drupal site aware of site1:
$sites['site1.dmultisite.com'] = 'site1.dmultisite.com';

```

**2.5:** Create a virtual host for site1\. Note that this virtual host should point to the root site, not the site's subdirectory. Note that you can also forego creating a new virtual host configuration for this site and just the new site as a ServerAlias to the root site. In this Apache example, we will, however, create a separate virtual host for site1:

```php
<VirtualHost *:80>
  ServerAdmin me@domain.com
  DocumentRoot /var/www/dmultisite
  ServerName site1.dmultisite.com
  
  <Directory />
    Options FollowSymLinks
    AllowOverride None
  </Directory>
  
  <Directory /var/www/dmultisite>
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>

  ErrorLog ${APACHE_LOG_DIR}/site1-dmultisite_error.log
  LogLevel warn
  CustomLog ${APACHE_LOG_DIR}/site1-dmultisite_error.log combined

</VirtualHost>


```

**2.6:** Copy /dmultisite/sites/default/default.settings.php to the new site's directory as settings.php:

```php
#from the drupal root folder
cp sites/default/default.settings.php sites/site1.dmultisite.com/settings.php
```

**2.7:** Finish the Drupal installation process for site1 by visiting the site's domain. If this shows up the first site you're not expecting, visit specifically '/core/install.php'.

You can repeat these steps each time you want to build a site in your multisite. You can also use domains like example.com and site1.anotherdomain.com. [More details on domains, URLs, and sites subdirectory names](https://www.drupal.org/docs/7/multisite-drupal/multi-site-sharing-the-same-code-base#domains-urls "Multi-site - Sharing the same code base | Drupal 7 guide on Drupal.org").

### Step 3: Enable per-site modules

In some cases, you may want one of your sites within your multisite to have its own modules. To enable this, you simply need to create the appropriate folders within the target site’s folder. See [Multisite folder structure in Drupal](https://www.drupal.org/docs/8/multisite/multisite-folder-structure-in-drupal-8).

In this example, we will enable site1 to have its own modules:

1. Create a ‘modules’ folder in site1’s subdirectory: /dmultisite/sites/site1.dmultisite.com/modules
2. Give apache write access to this folder with `chown www-data /dmultisite/sites/site1.dmultisite.com/modules` ` `
3. Test it out:  
   1. Move out of site1’s subdirectory (i.e. into the root site) and install the [Pathauto](https://www.drupal.org/project/pathauto "Project page on Drupal.org") module with drush `drush dl pathauto`  
   2. Move into site1’s subdirectory and install the ds module with drush `drush dl ds`  
   3. Visit both sites and confirm:  
         1. [Pathauto](https://www.drupal.org/project/pathauto "Project page on Drupal.org") is available in both sites  
         2. [Display Suite](https://www.drupal.org/project/ds "Project page on Drupal.org") is only available in site1

Note: The assumption here is that you can do this with themes, libraries, and files. More testing and documentation is needed here.

### Using drush in a multisite

You can use the _\-l_ option:

`drush -l example.com command`

or the site alias:

`drush @alias command`

To check what aliases are used, execute:

`drush site:alias`

An example of its output could be:

> '@sub1.dev':  
> root: /var/www/mydomain.com/web  
> uri: '<https://sub1.mydomain.com>'  
> '@default.dev':  
> root: /var/www/mydomain.com/web  
> uri: '<https://sub2.mydomain.com>'  
> '@third.dev':  
> root: /var/www/mydomain.com/web  
> uri: '<https://thirddomain.com>'

And the right drush command could be:

`drush @sub1 updb`  
_Note: we are not using the ".dev" in the alias_