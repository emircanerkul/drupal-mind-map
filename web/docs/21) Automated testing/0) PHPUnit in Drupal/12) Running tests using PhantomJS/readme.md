---
url: >-
  https://www.drupal.org/docs/automated-testing/phpunit-in-drupal/running-tests-using-phantomjs
description: >-
  PhantomJS As part of 8.1.x we introduced a way to test Javascript code in an
  end-to-end testing way. This means the entire Drupal site (exactly like in
  WebTestBase / BrowserTestBase) is set up.
published_time: '2019-02-08T23:30:17+00:00'
modified_time: '2020-08-21T07:58:16+00:00'
---
### PhantomJS

As part of 8.1.x we introduced a way to test Javascript code in an end-to-end testing way. This means the entire Drupal site (exactly like in WebTestBase / BrowserTestBase) is set up.

### Component Diagram

[![PHPUnit Javascript testing Component Diagram](/files/PHPUnit%20Javascript%20testing%20Component%20Diagram.png)](https://www.drupal.org/files/PHPUnit%20Javascript%20testing%20Component%20Diagram.png)

**Image source:** [Drupadocs](https://github.com/drupadocs/drupal-core/tree/master/testing)

### Execute tests

In order to run it, you need to install [Phantomjs](http://phantomjs.org/download.html), and then, from the root of your Drupal install, execute the following command to start PhantomJS:

```php
phantomjs --ssl-protocol=any --ignore-ssl-errors=true ./vendor/jcalderonzumba/gastonjs/src/Client/main.js 8510 1024 768 >/dev/null 2>&1 &

```

The following options can be added right after -ignore-ssl-errors=true.

| **Option**                       | **Description**                                                                                |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| \--cookies-file=/tmp/cookies.txt | Enables settings cookies in PhantomJS                                                          |
| \--debug=true                    | Makes the phantomJS more verbose. Only useful if you don't add 2>&1 >> /dev/null & at the end. |

The next step is to set up some environment variables. Therefore copy the file core/phpunit.xml.distto core/phpunit.xml and edit the lines that set the values for SIMPLETEST\_DB and SIMPLETEST\_BASE\_URL. For example, if you are using an SQLite database and the base URL of your site is [http://drupal8.dev](http://drupal8.dev/), this might be:

```php
<env name="SIMPLETEST_DB" value="sqlite://localhost/sites/default/files/.ht.sqlite"></env>
<env name="SIMPLETEST_BASE_URL" value="http://drupal8.dev"></env>

```

There are a number of ways to now run the tests:

* you can execute tests using PHPUnit. (\_www is the user of the webserver, needed for permission issues. On other systems this might be, for example, www-data.)

```php
sudo -u _www ./vendor/bin/phpunit -c core core/modules/toolbar/tests/src/FunctionalJavascript/ToolbarIntegrationTest.php

```

* run the test is using run-tests.sh. This is more like the Drupal test-bot runs the tests but is much less verbose. If your tests pass using PHPUnit but fail on drupal.org, try running your test using the following method:

```php
sudo -u _www php ./core/scripts/run-tests.sh --verbose --sqlite [Valid path, eg: /tmp/test.sqlite] --url [Valid URL, eg: http://drupal.dev] --class "[Class including namespace to test]"
```

* If you use PHPStorm, you can also run the tests straight from PHPStorm. Follow the setup guide [here](https://www.drupal.org/docs/8/phpunit/running-phpunit-tests-within-phpstorm).