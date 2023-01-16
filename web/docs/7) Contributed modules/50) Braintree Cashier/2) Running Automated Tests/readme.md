---
url: >-
  https://www.drupal.org/docs/8/modules/braintree-cashier/running-automated-tests
description: >-
  The automated function tests included with Braintree Cashier are located in
  tests/src/. They extend Drupal's
  \Drupal\FunctionalJavascriptTests\JavascriptTestBase and
  \Drupal\Tests\BrowserTestBase. Running these tests requires Braintree sandbox
  API credentials, so they can't be run on drupal.org infrastructure. Here are
  instructions for running them locally. Setup Braintree Sandbox The tests
  expect certain things to exist in the Braintree Sandbox.
published_time: '2018-02-13T18:54:05+00:00'
modified_time: '2018-11-21T18:48:50+00:00'
---
The automated function tests included with Braintree Cashier are located in `tests/src/`. They extend Drupal's `\Drupal\FunctionalJavascriptTests\JavascriptTestBase` and `\Drupal\Tests\BrowserTestBase`. Running these tests requires Braintree sandbox API credentials, so they can't be run on drupal.org infrastructure. Here are instructions for running them locally.