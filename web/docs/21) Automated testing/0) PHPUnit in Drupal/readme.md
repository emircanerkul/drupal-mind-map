---
url: https://www.drupal.org/docs/automated-testing/phpunit-in-drupal
description: >-
  It is highly recommended to first read the official PHPUnit documentation. The
  testing framework PHPUnit was added to Drupal 8 and is the standard for
  testing in Drupal 8, 9, and 10. SimpleTest was deprecated in Drupal 8 and
  removed in Drupal 9. It is recommended to write new tests using the PHPUnit
  base classes UnitTestCase, KernelTestBase, BrowserTestBase (web tests) or
  WebDriverTestBase (JavaScript-enabled web tests using WebDriver). We use
  multiple versions of PHPUnit in DrupalCI on drupal.org.
published_time: '2016-09-22T09:57:59+00:00'
modified_time: '2022-07-24T05:25:59+00:00'
---
It is highly recommended to first read the [official PHPUnit documentation](https://phpunit.readthedocs.io/).

The testing framework PHPUnit was [added to Drupal 8](/node/2012184) and is the standard for testing in Drupal 8, 9, and 10\. SimpleTest was deprecated in Drupal 8 and removed in Drupal 9.

It is recommended to write new tests using the PHPUnit base classes `UnitTestCase`, `KernelTestBase`, `BrowserTestBase` (web tests) or `WebDriverTestBase` (JavaScript-enabled web tests using WebDriver).

We use multiple versions of PHPUnit in DrupalCI on drupal.org. It is discouraged to use end-of-life PHP versions in production ([documentation on supported PHP versions](https://www.php.net/supported-versions.php)).