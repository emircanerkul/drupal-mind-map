### Ensure Composer dependencies are installed

If you installed from a Drupal.org package you have three options:

1. Install [Composer](https://getcomposer.org/) and run `composer install` (or try `composer update` on an existing D8 or D9 root).
2. Use a development snapshot (for example, 9.0.x-dev) instead of a tagged release for your development site.
3. Install the development dependencies you need manually into Drupal's vendor directory or elsewhere.

If you installed using the [drupal/recommended-project](https://www.drupal.org/docs/develop/using-composer/starting-a-site-using-drupal-composer-project-templates#s-drupalrecommended-project) Composer template, development dependencies can be installed by [requiring drupal/core-dev as a dependency](https://www.drupal.org/docs/develop/using-composer/starting-a-site-using-drupal-composer-project-templates#s-adding-drupalcore-dev) in your project.

```php
$ composer require drupal/core-dev --dev --update-with-all-dependencies
```

If you installed using git then install [Composer](https://getcomposer.org/) and run `composer install`.

Remember that development dependencies should never be installed in a production or a publicly accessible server for security reasons. See the [announcement about our dev dependency packaging changes](https://www.drupal.org/blog/drupal-8-will-no-longer-include-dev-dependencies-in-release-packages) for more information.

Javascript tests have additional dependencies - see [Running PHPUnit Javascript tests](https://www.drupal.org/docs/8/phpunit/running-phpunit-javascript-tests).

### Configure PHPUnit

PHPUnit stores configuration in the `phpunit.xml` file. Drupal comes with a sample version of this, `core/phpunit.xml.dist`, which you should copy to get started.

Where you place this depends on your workflow:

* The PHPUnit executable expects to find the `phpunit.xml` file in the current directory. This can be overridden with the -c option.
* If you are using Composer to manage Drupal core, then updating core will overwrite the core/ folder and delete your`phpunit.xml` file.

In `phpunit.xml` make the following changes:

* Set the `SIMPLETEST_BASE_URL` variable to the URL of your site.
* Set the `SIMPLETEST_DB` variable to point to the URL of your Drupal database.
* If you are placing `phpunit.xml` somewhere other than `core`, change the value of the `phpunit` tag's 'bootstrap' attribute to reflect the new location.
* For kernel and functional tests, set the `BROWSERTEST_OUTPUT_DIRECTORY`.

The result should look something like this:

```php
<phpunit bootstrap="tests/bootstrap.php" colors="true"
         beStrictAboutTestsThatDoNotTestAnything="true"
         beStrictAboutOutputDuringTests="true"
         beStrictAboutChangesToGlobalState="true"
         printerClass="\Drupal\Tests\Listeners\HtmlOutputPrinter">

<php>
  <!-- Set error reporting to E_ALL. -->
  <ini name="error_reporting" value="32767"/>
  <!-- Do not limit the amount of memory tests take to run. -->
  <ini name="memory_limit" value="-1"/>
  <!-- Example SIMPLETEST_BASE_URL value: http://localhost -->
  <env name="SIMPLETEST_BASE_URL" value="http://drupal8.localhost"/>
  <!-- Example SIMPLETEST_DB value: mysql://username:password@localhost/databasename#table_prefix -->
  <env name="SIMPLETEST_DB" value="mysql://drupal8:drupal8@localhost/drupal8"/>
  <!-- Example BROWSERTEST_OUTPUT_DIRECTORY value: /path/to/webroot/sites/simpletest/browser_output -->
  <env name="BROWSERTEST_OUTPUT_DIRECTORY" value="/var/www/sites/simpletest/browser_output"/>
</php> 
</phpunit>
```

Once this is all done, you can run any test you want without doing all this configuration again.

Quickly search and replace the values with `sed` from the command line. Example values are for Lando, and assumes you and the configuration file `phpunit.xml` are located in the `core` directory. Adjust to match your set up:

```php
$ cd core
$ cp phpunit.xml.dist phpunit.xml
$ sed -i 's|name="SIMPLETEST_BASE_URL" value=""|name="SIMPLETEST_BASE_URL" value="http://d8dev\.lndo\.site"|g' phpunit.xml
$ sed -i 's|name="SIMPLETEST_DB" value=""|name="SIMPLETEST_DB" value="mysql://drupal8:drupal8@database/drupal8"|g' phpunit.xml
$ sed -i 's|name="BROWSERTEST_OUTPUT_DIRECTORY" value=""|name="BROWSERTEST_OUTPUT_DIRECTORY" value="../sites/simpletest/browser_output"|g' phpunit.xml
```

### 

Example values for DDEV

```php
  <php>
    <!-- Set error reporting to E_ALL. -->
    <ini name="error_reporting" value="32767"/>
    <!-- Do not limit the amount of memory tests take to run. -->
    <ini name="memory_limit" value="-1"/>
    <env name="SIMPLETEST_BASE_URL" value="http://localhost"/>
    <env name="SIMPLETEST_DB" value="mysql://db:db@db/db"/>
    <env name="BROWSERTEST_OUTPUT_DIRECTORY" value="/var/www/html/simpletest/browser_output"/>

```

### Create a directory for HTML output

Functional tests can output the HTML pages that the test running code sees. These are output as plain HTML files. To provide a location for these to be written to, create a directory called `sites/simpletest` and make sure that it is writable by the webserver. It's okay to make this directory "world-writable", i.e.:

```php
mkdir -p sites/simpletest/browser_output
chmod -R 777 sites/simpletest
```

### Locate the PHPUnit binary

The relative location of the PHPUnit binary depends on how you install Drupal.

* If you installed Drupal using a package then run `composer update`, the vendor directory is within the Drupal root (adjacent to 'core'). The instructions on this page assume this is your setup.
* If you installed using `composer require drupal/drupal`, you end up with a vendor directory outside the Drupal root (above 'core'). You may need to adjust the path to PHPUnit in the commands given on this page: `vendor/bin/phpunit` becomes `../vendor/bin/phpunit` and `../vendor/bin/phpunit` becomes `../../vendor/bin/phpunit`.

Depending on your development workflow, you may find it useful to soft link PHPUnit from /usr/local/bin ( `cd /usr/local/bin; ln -s /var/www/html/vendor/bin/phpunit`), or similar, or add vendor/bin to your PATH.

### Verify that runtime assertions are being checked

When running phpunit tests, it is important to make sure that runtime assertion statements are being checked. See the note on running tests locally on the [change notice about runtime assertions](/node/2569701) for more information.

### Lando + Drupal Contributions

If you use [Lando](https://lando.dev/), [Drupal Contributions](https://lando.dev/blog/2020/06/02/lando-drupal-contributions.html) automates the steps for configuration, as well as adds commands to run tests, reinstall the site with fresh database, pull down and apply a patch, revert a patch, and create a patch from the current branch. See the [repository](https://github.com/lando/drupal-contributions) for more details.