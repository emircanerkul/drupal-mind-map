The composer.json file that shipped with the tarballs downloaded from <https://www.drupal.org/download> before Drupal 8.8.0 was not meant to be used with a composer managed site.

If you want to switch from manual management to using Composer to install and update Drupal core and contributed modules, you will have to modify your site's composer.json file first.

Typical Composer error messages that can indicate a bad composer.json file are:

```php
Nothing to install or update (even though updates exist)

Installation request for drupal/drupal No version set (parsed as 1.0.0) -> satisfiable by drupal/drupal[No version set (parsed as 1.0.0)].

don't install drupal/core 8.x.x | remove drupal/drupal No version set (parsed as 1.0.0)

Your requirements could not be resolved to an installable set of packages.
```

Sometimes problems with Composer templates can be solved by removing the composer lock file and the vendors directory (`composer.lock` and `vendor/`) before running `composer update`, but converting your existing Drupal site to a project managed with the Composer template suggested in the Drupal installation guide ([3.5\. Using Composer to Download and Update Files](https://www.drupal.org/docs/user%5Fguide/en/install-composer.html)) will be a more sustainable solution to problems when updating Drupal.

The tools [gocomposer](https://github.com/WebKings-ca/gocomposer) and [composerize drupal](https://github.com/grasmash/composerize-drupal) try to automate the process of converting old sites to Composer projects, but converting manually is pretty straightforward even for extensive sites and does not require a lot of time.

At the end of the process, your project will have the currently recommended directory structure. Composer configuration (`composer.json`, `composer.lock`, etc.), `drush`, and the vendors directory will be placed outside of your webroot. Your original webroot will contain a new folder called `web/`, where the actual website resides. If your project currently uses a different directory layout, you will have to update your webserver configuration to point to the new `web/` directory. We will get into this again later.

### TL;DR?

1. [Install new Drupal site](https://www.drupal.org/docs/user%5Fguide/en/install-composer.html) using the current Composer template in a new directory.
2. Copy all custom themes, modules, files, and settings to the new project. (Double-check the directory structure.)
3. Transfer settings to the new project.
4. Add all contributed modules to the new `composer.json` file and run `composer install`.
5. Update database and clear cache (`drush updb;drush cr`)
6. Update web server configuration.

### THE FULL STORY

These instructions assume that your existing web site is in the directory `/var/www/sites/html/` and that you will create a new site at `/var/www/sites/new_html/`. Adjust the paths for your actual directories.

#### Before you begin

If you're about to "composerize" an older Drupal site, that site's core and contrib modules will probably not be at their latest available versions. If you blindly follow this guide, Drupal core and all modules will be updated to their latest versions. This is probably exactly what you want, but take some time to think about your site's configuration. Are there any good reasons not to update all modules or core to their latest versions? Maybe you got a setup that depends on an older version of a library or contributed module and must not be updated.

If you want to **update everything to its latest version** just follow this guide and fix problems when you're finished upgrading. After the update, you'll probably see some errors or at least warnings which are related to newer versions of the modules. Just google the error messages and see if there are any patches or fixes for that problem.

If you rather want to **stick with your original versions** and perform an update later using Composer, you'll have to make sure you're installing the same versions of Drupal core and contrib modules as were used by your old site. See the manuals for composer create-project and composer require on how to download a [specific version of core](https://drupal.stackexchange.com/questions/283212/how-to-install-a-specific-version-of-drupal-using-composer) or a [specific version of contrib modules](https://getcomposer.org/doc/03-cli.md#require). Finally, make sure you're specifying those versions before running `composer create-project` or when executing `composer require.` (I. e. `composer require vendor/package:version`)

#### 1\. Install new Drupal site

Create a **new Drupal project** from the [drupal/recommended-project](https://github.com/drupal/recommended-project) template:

```php
cd /var/www/sites 
composer create-project drupal/recommended-project:~8.8.0 new_html --stability dev --no-interaction
```

This will create the directory **new\_html/** in the current directory holding the vendors and web (= webroot) directories and your `composer.json`, files, etc. If your old project did not use this directory structure, then you might want to get used to being able to run drush and composer right from this directory and not just from inside your webroot.

<!-- note-tip -->
> TIP: These instructions formerly suggested using drupal-composer/drupal-project, which has now been deprecated in favor of the officially supported: drupal/recommended-project template.

#### 2\. Copy files to the new Composer project

<!-- note-warning -->
> WARNING: Note: The following instructions should only be required for sites created with a version of Drupal before version 8.8.0.

If your project was created before version Drupal 8.8.0, you must now **copy your custom modules, theme and libraries** from your old project directory to the new project. Make sure you put the files in the right directories in your new project, as your old folder structure might differ.

The right paths can be found in your `composer.json`'s "**installer-paths**" section:

```yaml
"extra": {
        "composer-exit-on-patch-failure": ...
        "patchLevel": {
            ...
        },
        "installer-paths": {
            "web/core": ["type:drupal-core"],
            "web/libraries/{$name}": ["type:drupal-library"],
            "web/modules/contrib/{$name}": ["type:drupal-module"],
            "web/profiles/contrib/{$name}": ["type:drupal-profile"],
            "web/themes/contrib/{$name}": ["type:drupal-theme"],
            "drush/Commands/{$name}": ["type:drupal-drush"]
        },
        "drupal-scaffold": {
            ...
        }
    }
```

In your old site, modules were probably found in `/var/www/sites/html/modules/`. In the new site, they will have to be placed in the directory mentioned in the **installer-paths section** above: `/var/www/sites/new_html/web/modules/`.

* Custom **themes** go to `/var/www/sites/new_html/web/themes/custom/`
* Custom **modules** go to `/var/www/sites/new_html/web/modules/custom/`
* **Libraries** go to `/var/www/sites/new_html/web/libraries/`
* Your **uploaded files and images** go to `/var/www/sites/new_html/web/sites/default/files/`

Double-check that the webserver has write permissions for the files directory, just like you do when installing a new Drupal site. Read through [Securing file permissions and ownership](https://www.drupal.org/node/244924) if you want to know more about directory permissions.

Assume that your web server user is **www-data** and that your FTP server user is **vftp**. You should run something like this from your command prompt to set the file and directory permissions:


```php
#Set group of the files folder to the webserver user
sudo chown -R vftp:www-data /var/www/sites/new_html/web/sites/default/files 

#Allow the webserver user group to edit and access folders in the files directory
sudo find /var/www/sites/new_html/web/sites/default/files -type d -exec chmod u=rwx,g=rwx,o= '{}' \; 

#Allow the webserver user group to edit all files in the files directory.
sudo find /var/www/sites/new_html/web/sites/default/files -type f -exec chmod u=rw,g=rw,o= '{}' \;
```

Your files directory holds all files your users uploaded to your old site and also some folders with **temporary files** like compressed stylesheets or cached twig templates.

If you copied these **folders holding temporary files** from your old site to your new files directory, make sure to **remove them manually**. Those folders are usually **php/**, **js/**, and **css/** inside your new `/var/www/sites/new_html/web/sites/default/files` directory. Normally these files are automatically generated after clearing the cache (drush cr) and visiting the site with your browser, so you don't need to worry when deleting them. But as always, make sure you got a backup of those files somewhere before you remove them ;-) .

#### 3\. Transfer settings.php to the new project

Copy **database connection information** etc. from your old **settings.php** to the new project. Basically this will be the `$databases['default']['default']`, your `$settings['hash_salt']` and `$settings['trusted_host_patterns']` arrays and probably some **custom settings** you made. Just diff the two `settings.php` files to see what you need to copy.

Also, make sure `$config_directories['sync']` points to an existing directory. This should probably be outside your webroot, where `composer.json` is found. If you installed Drupal another way, this might also point to some file in your `sites/default/files/` directory. Double check, that the path defined in `$config_directories['sync']` really exists and is writeable by your webserver user.

Also, don't forget to copy your development settings files `settings.local.php` and `development.services.yml` to the new project.

#### 4\. Add contributed modules to new Composer config

Now you need to **add all your project's modules to the new composer.json** file in your new webroot.

You can either add the modules manually to your composer.json or use _composer require_ to add the latest versions of all modules to your site.

##### 4.1 Getting a list of modules of your site

If you have **not used Composer to manage that site before**, your old _composer.json_ does not show a list of modules in the 'require' section. In that case, you will have to manually collect a list of all contributed (not custom) modules.

You could achieve that by getting a directory listing of your old site's `modules/contrib/` or `modules/` directory (depending on your setup). In the `composer.json` you will just prepend `drupal/` to each of the modules' directory name. For example, `modules/contrib/devel/` becomes `drupal/devel`.

Make sure you place development packages like `drupal/devel` or `drupal/kint` in the "require-dev" section, where you should already find `webflo/drupal-core-require-dev`.

##### 4.2 Manually adding modules to composer.json

Edit `composer.json` in your new project root (e.g., `/var/www/sites/new_html`) and copy the list of packages from your old `composer.json`'s "require" and "require-dev" sections to the new `composer.json`file. Using the manual approach you'll have to care for the proper versions of the modules yourself.

##### 4.3 Using composer require to install modules

**Instead of adding the module names and versions manually** to composer.json you could also run `composer require drupal/<module name>` for each of the required modules. You can add all your modules at once using `composer require drupal/module-name-1 drupal/module-name-2 drupal/module-name-i`. Use `composer require --dev drupal/<module name>` to add a module to the require-dev section of the `composer.json` file.

##### 4.4 Finalize Composer installation

Run `composer install` from your project directory (e.g., `/var/www/sites/new_html/`). This will download all modules that you added to `composer.json` before. If you are having trouble, just remove `composer.lock` and the vendors directory and try again.

You'll not have to enable all the modules manually because you're either using the database of your old site or are going to import the database from your old site anyway.

Make sure to do steps 4.1-4.3 if you are using any contributed themes.

#### 5\. Update database and clear cache

Make sure to apply all available database updates by running `drush updb`.

Then clear your Drupal caches by running `drush cr` from the project directory (`/var/www/sites/new_html`).

If you're seeing the error `Missing $settings['hash_salt'] in settings.php` when you run `drush updb` refer to the Troubleshooting section below. You probably just forgot to copy some values from your old site's settings.php file.

#### 6\. Update web server configuration

Update your webserver configuration to point to the new webroot. In our example, `/var/www/sites/new_html/web/`. If you're using some php-fpm setup, also make sure to update the php-fpm settings (e.g., `/etc/php/7.2/fpm/pool.d/yoursite.conf`) to point to the new webroot. Do not forget to reload or restart services after updating configs.

#### 7\. Troubleshooting

##### 7.1 Warnings or errors on the reports page

Check your site's reports to make sure you're not seeing a bunch of warnings or error messages. If you're following this guide without updating your old site to the latest Drupal version before you begin, you'll probably update core and all contributed modules to it's latest version. This can obviously lead to errors or warnings that haven't been seen on your old site. Just fix them as you would fix them after a "normal" Drupal update.

##### 7.2 Missing Hash Salt

![Missing $settings['hash_salt'] in settings.php](https://www.drupal.org/files/drupal_missing_hash_salt.png)

If you're seeing the error `Missing $settings['hash_salt'] in settings.php` when you run `drush updb` or `drush cr` you probably just forgot to copy some values from your old site's settings.php. In this case the $settings\['hash\_salt'\] value. Either copy the hash\_salt from your old settings.php or generate a new salt by running this command in your sites root directory:

```php
drush php-eval 'echo \Drupal\Component\Utility\Crypt::randomBytesBase64(55) . "\n"'
```

It will output a new hash value that can simply be copied into your new settings.php file.