---
url: >-
  https://www.drupal.org/docs/automated-testing/phpunit-in-drupal/running-phpunit-tests-within-phpstorm
description: >-
  Duplicate the /core/phpunit.xml.dist file and rename the copy to
  /core/phpunit.xml. Edit /core/phpunit.xml and add the site's database
  credentials in the SIMPLETEST_DB variable. (Without this step all tests that
  require a database will be ignored.) Open to PhpStorm's settings/preferences.
  On Mac OS, press cmd + ,. On Linux or Windows, press ctrl + alt + s or go to
  File > Settings. Create a Test Framework configuration by navigating to
  Languages & Frameworks > PHP > Test Frameworks. Click "+" button, select
  "PHPUnit local" from dropdown.
published_time: '2014-06-18T17:54:27+00:00'
modified_time: '2021-12-22T16:20:54+00:00'
---
1. Duplicate the `/core/phpunit.xml.dist` file and rename the copy to `/core/phpunit.xml`.
2. Edit `/core/phpunit.xml` and add the site's database credentials in the `SIMPLETEST_DB` variable. (Without this step all tests that require a database will be ignored.)
3. Open to PhpStorm's settings/preferences.  
 On Mac OS, press **cmd** \+ **,**. On Linux or Windows, press **ctrl** \+ **alt** \+ **s** or go to **File** \> **Settings**.
4. Create a Test Framework configuration by navigating to **Languages & Frameworks** \> **PHP** \> **Test Frameworks.** Click "**+**" button, select "PHPUnit local" from dropdown.  
 (Earlier versions of PHPStorm place this configuration at: PhpStorm v8-9.x: **Project settings** \> **PHP** \> **PHPUnit**, PhpStorm v10.x **Languages & Frameworks** \> **PHP** \> **PHPUnit)**
5. Select _Use Composer autoloader_. (Earlier versions of PhpStorm call this option: _Use custom autoloader_ or _Use custom autoloader)_.
6. For _Path to script_, enter the path to your Drupal root directory, followed by `/vendor/autoload.php`. You can also set the _Default configuration file_ directly to your Drupal root directory, followed by `/core/phpunit.xml`. This allows you to debug directly out of the file, without setting up a custom configuration.
7. Click _OK_.
8. Go to **Run** \> **Edit Configurations**.
9. Click the plus sign in the top left corner of the screen and select _PHPUnit_.
10. In the _Test runner_ section: for the _Test scope_ option, select _Defined in the configuration file_, tick the _Use alternative configuration file_ checkbox, and enter the path to your Drupal root directory, followed by `/core/phpunit.xml`.
11. Click _OK_.
12. Run the test suite by going to _Run_ \> _Run ..._, or press **ctrl** \+ **R** on Mac OS, or **shift** \+ **F10** on Linux.

If you run your Drupal installation in a Virtual Machine (Vagrant) your configuration has to be a little different, just replace the first steps for these (This functionality is PHPStorm v.8 exclusively):

1. Configure PHPStorm to know where your Vagrant following this configuration: [https://confluence.jetbrains.com/display/PhpStorm/Getting+started+with+V...](https://confluence.jetbrains.com/display/PhpStorm/Getting+started+with+Vagrant+in+PhpStorm)
2. Add a remote PHP interpreter to your PHPStorm Configuration [https://confluence.jetbrains.com/display/PhpStorm/Working+with+Remote+PH...](https://confluence.jetbrains.com/display/PhpStorm/Working+with+Remote+PHP+Interpreters+in+PhpStorm)
3. Configure the PHPUnit tests to run over SSH on your Vagrant: [https://confluence.jetbrains.com/display/PhpStorm/Running+PHPUnit+tests+...](https://confluence.jetbrains.com/display/PhpStorm/Running+PHPUnit+tests+over+SSH+on+a+remote+server+with+PhpStorm)
4. You need to add an extra step to the previous process; On the remote PHPUnit configuration: The _Path to script_ ensure that it is the path to the mounted folder (local vagrant folder) to your Drupal installation plus `autoload.php` and check the _Default configuration file_ and use your Drupal Vagrant path plus `core/phpunit.xml`.

Now you can run the tests as shown in step 11, previously

You can limit the tests run to a single group of tests by adding the `--group` parameter to the _Test Runner options_. For example, `--group Views` will run only the Views unit tests.