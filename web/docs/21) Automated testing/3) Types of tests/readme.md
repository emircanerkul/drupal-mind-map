---
url: https://www.drupal.org/docs/automated-testing/types-of-tests
description: >-
  Drupal supports unit, integration, and system/functional testing using the
  PHPUnit framework. Most testing in current versions of Drupal is done under
  the PHPUnit framework. In Drupal, we have 4 types of PHPUnit tests: Unit:
  PHPUnit-based tests with minimal dependencies. Base class:
  Drupal\Tests\UnitTestCase class. Kernel: PHPUnit-based tests with a
  bootstrapped kernel, and a minimal number of extensions enabled. Base class:
  Drupal\KernelTests\KernelTestBase class. Functional: PHPUnit-based tests with
  a full booted Drupal instance. Base class: Drupal\Tests\BrowserTestBase.
published_time: '2017-02-21T10:06:49+00:00'
modified_time: '2021-02-28T17:01:04+00:00'
---
Drupal supports unit, integration, and system/functional testing using the PHPUnit framework.

Most testing in current versions of Drupal is done under the [PHPUnit framework](https://phpunit.readthedocs.io/). In Drupal, we have 4 types of PHPUnit tests:

* Unit: PHPUnit-based tests with minimal dependencies. Base class: Drupal\\Tests\\UnitTestCase class.
* Kernel: PHPUnit-based tests with a bootstrapped kernel, and a minimal number of extensions enabled. Base class: Drupal\\KernelTests\\KernelTestBase class.
* Functional: PHPUnit-based tests with a full booted Drupal instance. Base class: Drupal\\Tests\\BrowserTestBase.
* FunctionalJavascript: PHPUnit-based tests that use Webdriver to perform tests of Javascript and Ajax functionality in the browser. Base class: Drupal\\FunctionalJavascriptTests\\WebDriverTestBase.

In addition, the Drupal project has some tests for JavaScript, written in JavaScript, that use the [Nightwatch framework](/docs/testing/javascript-testing-using-nightwatch).