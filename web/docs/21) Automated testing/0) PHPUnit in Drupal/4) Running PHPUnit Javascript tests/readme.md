---
url: >-
  https://www.drupal.org/docs/automated-testing/phpunit-in-drupal/running-phpunit-javascript-tests
description: >-
  Running functional JavaScript tests with WebDriver As of Drupal 8.5.0 or later
  we can now use WebDriver for functional JavaScript testing. Requirements: Base
  install of Drupal 9 or higher. Google Chrome or Chromium. chromedriver (tested
  with 2.45). PHP 7.1 or higher. See Running PHPUnit tests for how to set up
  your own phpunit.xml for testing. Note that beyond the database and site URL
  information no other customizations are necessary.
published_time: '2019-02-08T23:09:07+00:00'
modified_time: '2022-11-04T16:31:19+00:00'
---
### Running functional JavaScript tests with WebDriver

As of Drupal 8.5.0 or later we can now use WebDriver for functional JavaScript testing.

Requirements:

* Base install of Drupal 9 or higher.
* Google Chrome or Chromium.
* [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) (tested with 2.45).
* PHP 7.1 or higher.

See [Running PHPUnit tests](/docs/8/phpunit/running-phpunit-tests) for how to set up your own `phpunit.xml` for testing. Note that beyond the database and site URL information no other customizations are necessary.

SIMPLETEST\_BASE\_URL domain name could not be incomplete domain, for example _localhost_ when run Javascript tests, otherwise it will throw

_unable to set cookies_ exception. You can use a complete domain name like this:

```php
<env name="SIMPLETEST_BASE_URL" value="http://drupal8.localhost"/>
```

Move the chromedriver to /usr/local/bin and you should be able to run chromedriver from any directory.

Start chromedriver using port 4444 and keep it running.

```php
$ chromedriver --port=4444
ChromeDriver 2.45.615355 (d5698f682d8b2742017df6c81e0bd8e6a3063189) on port 4444
Only local connections are allowed.

```

In a server environment (or in WSL) where X Windows is not available, install `xvfb` and run `xvfb-run chromedriver --port=4444`

### Running tests

You can now run tests on the command line using PHPUnit, for example:

```php
./vendor/bin/phpunit -v -c ./core/phpunit.xml ./core/modules/system/tests/src/FunctionalJavascript/FrameworkTest.php
```

Note: this assumes you're running the tests from the root directory of a Drupal checkout, that your `phpunit.xml` file lives in the `core` subdirectory, and that your `vendor` directory is "next to" `core`. The specific paths might vary based on your workflow. See the [Configure PHPUnit](/docs/8/phpunit/running-phpunit-tests#configure-phpunit) and [Locate the PHPUnit binary](/docs/8/phpunit/running-phpunit-tests#locate-phpunit) sections of the [Running PHPUnit tests](/docs/8/phpunit/running-phpunit-tests) page for details.

Do not use `core/scripts/run-tests.sh` for Javascript tests. When ChromeDriver is not running, it will say tests passed when in fact they did not run.

### Debugging Tests

If your test is having a strange problem, you can add a line like this just before the failure, which will basically stop the test in Chrome and let you play with the test site and look around:

`$this->assertSession()->waitForElementVisible('css', '.test-wait', 100000000000000000000000000);`

### Other ways to install and run chromedriver

#### Docker compose based chromedriver

To run chromedriver in a docker-compose setup, the following will suffice in your docker-compose.yml:

```yaml
  chrome:
    image: drupalci/webdriver-chromedriver:production
    ulimits:
      core:
        soft: -1
        hard: -1
    ports:
      - "4444:4444"
      - "9515:9515"
    entrypoint:
      - chromedriver
      - "--log-path=/tmp/chromedriver.log"
      - "--verbose"
      - "--allowed-ips="
      - "--allowed-origins=*"
```

You must adjust your /etc/hosts file to map chrome to 127.0.0.1.

Then configure your driver args in your phpunit.xml like so

```php
<env name="MINK_DRIVER_ARGS_WEBDRIVER" value='["chrome", {"browserName":"chrome","chromeOptions":{"args":["--disable-gpu","--headless", "--no-sandbox", "--disable-dev-shm-usage"]}}, "http://chrome:9515"]'/>
```