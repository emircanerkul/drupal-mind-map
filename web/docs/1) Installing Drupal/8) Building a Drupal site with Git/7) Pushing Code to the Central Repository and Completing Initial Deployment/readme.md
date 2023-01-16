Now, you can push your code up to the origin remote on your server:

(On your local development environment)

```php
$ git push origin fooproject

```

This command copies your local branch **fooproject** to a branch of the same name in your remote repository **origin**.

You can now provision your other tiers with this code from the repository. Log into your server and provision a development environment from the code you’ve committed:

(On your remote server)

```php
$ git clone --branch fooproject ssh://fooproject@fooproject.com/home/users/fooproject/fooproject.git fooproject_dev

```

Now, you have a **fooproject\_dev** directory that you can use as the root of a new virtual host. You can proceed through the normal Drupal installation process using this development copy of your site and a separate database for it. Repeat this process for the Staging and Production environments- we'll assume that they live on the same server in directories **fooproject\_stg** and **fooproject\_prod**.

In Drupal 8 or higher the site should be installed only once (rather than repeating the install for dev, staging and production sites), and the different versions of the site should be created with databases set up using a dump of the database from the first copy of the site. This is because each install creates a distinct site with a site UUID, which would prevent import of configuration between the dev, staging and production versions of the site (subject to [#1613424: \[META\] Allow a site to be installed from existing configuration](https://www.drupal.org/project/drupal/issues/1613424 "Status: Closed (fixed)") being solved). After copying a site's database, it will be necessary to clear the caches (which can be done from Manage > Configuration > Performance, or using drush from command line).

Because the install is only run on the first copy of the site, it will also be necessary to open settings.php on each version of the site, and manually adjust the database settings in it to use the relevant copy of the database for each version of the site. Naming the databases similarly to the code directories, such as **fooproject\_dev**, **fooproject\_stg**, **fooproject\_prod**, can help avoid confusion .

If you have set up a default .gitignore which excludes the sites/\*/default folder before copying the code to each version of the site using git, settings.php and the config directory (assuming it is still in the default location) will not have been copied when copying the code with git. In that case, so you would need to manually copy settings.php to each version of the site, and you would need to either manually copy the config directory or rebuild it, in order to get the copies of the site working. For troubleshooting after copying a site see <https://www.drupal.org/documentation/rebuild>.