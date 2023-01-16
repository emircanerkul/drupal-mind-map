---
url: https://www.drupal.org/docs/8/core/modules/testing/testing-module-overview
description: >-
  The Testing module provides a framework for running automated unit and
  functional tests in Drupal. It can be used to verify a working state of Drupal
  before and after any code changes, or as a means for developers to write and
  execute tests for their modules. The original module was based on the
  SimpleTest PHP library. Visit Administration >> Configuration >> Development
  >> Testing to display a list of available tests. For comprehensive testing,
  select all tests, or individually select tests for more targeted testing.
published_time: '2017-04-28T18:44:23+00:00'
modified_time: '2017-06-14T22:15:45+00:00'
---
The Testing module provides a framework for running automated unit and functional tests in Drupal. It can be used to verify a working state of Drupal before and after any code changes, or as a means for developers to write and execute tests for their modules. The original module was based on the [SimpleTest PHP library](http://www.simpletest.org/).

Visit **Administration >> Configuration >> Development >> Testing** to display a list of available tests. For comprehensive testing, select all tests, or individually select tests for more targeted testing. (Note: In Drupal 8.x you may need to increase your max\_input\_vars setting to 2000 in your php.ini file for the Testing admin page to load. There are far too many tests to run all locally. For a full coverage test, use testbot. Once you have identified the test or group that is failing, run those tests locally.)

After the tests have run, a message will be displayed next to each test group indicating whether tests within it passed, failed, or had exceptions. A pass means that a test returned the expected results, while fail means that it did not. An exception normally indicates an error outside of the test, such as a PHP warning or notice. If there were fails or exceptions, the results are expanded, and the tests that had issues will be indicated in red or pink rows. Use these results to refine your code and tests until all tests return a pass.