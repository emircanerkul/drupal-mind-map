---
url: >-
  https://www.drupal.org/docs/automated-testing/converting-simpletests-to-phpunit-tests
description: >-
  Some notes on converting SimpleTest-based tests to PHPUnit tests. Directories
  and Namespaces In Drupal 7, SimpleTest-based tests are in the modulename.test
  file. This file is expected to contain all the test classes. There are no
  unique namespaces. Early versions of Drupal 8 also had SimpleTest-based tests,
  under module_name/src/Tests. Drupal 8 and later now uses PHPUnit for testing
  and namespaced classes, in named subdirectories, to organize code and enable
  PSR-4 autoloading. Simpletest based tests are deprecated.
published_time: '2014-01-04T00:05:08+00:00'
modified_time: '2021-10-17T05:32:46+00:00'
---
Some notes on converting SimpleTest-based tests to PHPUnit tests.