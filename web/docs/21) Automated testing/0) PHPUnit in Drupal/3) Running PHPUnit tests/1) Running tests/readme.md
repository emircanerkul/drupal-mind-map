All example commands in this document assumes that you and the configuration file `phpunit.xml `are located in the `core` directory:

```php
cd core
```

To run \\Drupal\\Tests\\datetime\\Unit\\Plugin\\migrate\\field\\DateFieldTest, for example, your command would look like this:

```php
../vendor/bin/phpunit modules/datetime/tests/src/Unit/Plugin/migrate/field/DateFieldTest.php
```

Your path to the phpunit executable may be different than the above, see [Locate the PHPUnit binary](https://www.drupal.org/docs/automated-testing/phpunit-in-drupal/running-phpunit-tests#locate-phpunit).

To run a core test in the ddev container, use the following:

```php
$ ddev ssh
$ cd web
../vendor/bin/phpunit -c core core/modules/action

```

Successful execution with DDEV , looks like this:

```php
PHPUnit 9.5.23 #StandWithUkraine

Warning:       Your XML configuration validates against a deprecated schema.
Suggestion:    Migrate your XML configuration using "--migrate-configuration"!

Testing /var/www/html/web/core/modules/action
....S..                                                             7 / 7 (100%)

Time: 03:25.204, Memory: 8.00 MB

OK, but incomplete, skipped, or risky tests!
Tests: 7, Assertions: 229, Skipped: 1.

HTML output was generated
http://localhost/sites/simpletest/browser_output/Drupal_Tests_action_Functional_ActionListTest-1-51362070.html
http://localhost/sites/simpletest/browser_output/Drupal_Tests_action_Functional_ActionListTest-2-51362070.html
http://localhost/sites/simpletest/browser_output/Drupal_Tests_action_Functional_ActionListTest-3-51362070.html
http://localhost/sites/simpletest/browser_output/Drupal_Tests_action_Functional_ActionListTest-4-51362070.html
http://localhost/sites/simpletest/browser_output/Drupal_Tests_action_Functional_ActionUninstallTest-1-80829434.html
...
```

You can also run the test in the containers from the host with:

```php
$ ddev exec ./vendor/bin/phpunit -c web/core web/core/modules/action
```

Run all PHPUnit unit tests

To run the unit tests on OS X, Linux or other \*nix systems:

```php
../vendor/bin/phpunit --testsuite=unit 
```

**Note:** All tests, including those located in \[drupalroot\]/modules or \[drupalroot\]/sites/\*/modules, are run from the core folder with the ../vendor/bin/phpunit command

Note also that you don't need to have a working Drupal installation to run PHPUnit-based unit tests this way. PHPUnit tests are isolated from Drupal and don't need it in order to run.

On Windows, the symlink stored in `vendor/bin/phpunit` will not work. You need to use the full path to the PHPUnit executable:

```php
../vendor/phpunit/phpunit/phpunit
```

### Run kernel test and browser tests

For kernel tests, you need a working database connection. For browser tests, your Drupal installation needs to be reachable via a web server. However, you should never install Drupal yourself as the test handles this automatically. 

### Permission problems

Functional tests have to be invoked with a user in the same group as the webserver user. You can either configure Apache (or Nginx) to run as your own system user or run tests as a privileged user instead.

To develop locally, a straightforward - but also less secure - approach is to run tests as your own system user. To achieve that, change the default Apache user to run as your system user. Typically, you'd need to modify \`/etc/apache2/envvars\` on Linux or \`/etc/apache2/httpd.conf\` on Mac.

Example for Linux:

`export APACHE_RUN_USER=<your-user>
export APACHE_RUN_GROUP=<your-group>`

Example for Mac:

```php
User your-user
Group your-group

```

If the default user is e.g. \`www-data\`, the above functional tests will have to be invoked with sudo instead:

```php
export SIMPLETEST_DB='mysql://root@localhost/dev_d8'
export SIMPLETEST_BASE_URL='http://d8.dev'
sudo -u www-data -E ../vendor/bin/phpunit --testsuite functional
sudo -u www-data -E ../vendor/bin/phpunit --testsuite functional-javascript

```

### Run one specific test

Simply specify the file name, example;

```php
../vendor/bin/phpunit tests/Drupal/Tests/Core/Password/PasswordHashingTest.php 
```

### Run groups of tests

To facilitate running specific tests, test authors use annotations to place their tests in one or more groups.

List all tests groups:  
`../vendor/bin/phpunit --list-groups`

Run one group of tests:  
`../vendor/bin/phpunit --group Groupname`

Run multiple groups of tests:  
`../vendor/bin/phpunit --group Group1,Group2`

Exclude a group of tests:  
`../vendor/bin/phpunit --exclude-group Groupname`

### Run a specific method

`../vendor/bin/phpunit --filter=MyMethodTest`

### Generate a code coverage report

`../vendor/bin/phpunit --coverage-html /tmp/report`  
And then open `/tmp/report/index.html` in your browser to review.

For a complete discussion of command-line options when running tests, see PHPUnit's [The Command-Line Test Runner](http://phpunit.de/manual/3.7/en/textui.html)