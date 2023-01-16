---
url: https://www.drupal.org/docs/drupal-apis/migrate-api/migration-tests
description: >-
  This is a overview of the types of migration tests in Drupal core. Source
  plugin tests These are Kernel tests at
  core/modules/module_name/tests/src/Kernel/Plugin/migrate/source. If you are
  writing a source plugin tests then reading
  \Drupal\Tests\taxonomy\Kernel\Plugin\migrate\source\d7\VocabularyTest and
  \Drupal\Tests\taxonomy\Kernel\Plugin\migrate\source\d7\TermTest is a good
  place to start. Process plugin tests These can be Unit or Kernel tests. There
  core process plugin unit tests for the Migrate module are at
  core/migrate/tests/src/Unit/process.
published_time: '2015-07-17T17:52:10+00:00'
modified_time: '2022-10-11T03:43:17+00:00'
---
This is a overview of the types of migration tests in Drupal core.

### Source plugin tests

These are Kernel tests at core/modules/module\_name/tests/src/Kernel/Plugin/migrate/source. If you are writing a source plugin tests then reading [\\Drupal\\Tests\\taxonomy\\Kernel\\Plugin\\migrate\\source\\d7\\VocabularyTest](https://api.drupal.org/api/drupal/core%21modules%21taxonomy%21tests%21src%21Kernel%21Plugin%21migrate%21source%21d7%21VocabularyTest.php/9.2.x) and[ \\Drupal\\Tests\\taxonomy\\Kernel\\Plugin\\migrate\\source\\d7\\TermTest](https://api.drupal.org/api/drupal/core%21modules%21taxonomy%21tests%21src%21Kernel%21Plugin%21migrate%21source%21d7%21TermTest.php/9.2.x) is a good place to start.

### Process plugin tests

These can be Unit or Kernel tests. There core process plugin unit tests for the Migrate module are at core/migrate/tests/src/Unit/process. The [NullCoalesceTest](https://api.drupal.org/api/drupal/core%21modules%21migrate%21tests%21src%21Unit%21process%21NullCoalesceTest.php/9.2.x) is a good example to start with. There core process plugin Kernel tests for the Migrate module are at core/migrate/tests/src/Kernel/process.

### Migration tests

This name usually refers to a Kernel test of a config or content entity migration that loads a source test fixture and then runs all the dependent migrations before asserting the results. These tests use Drupal 6 and Drupal 7 database test fixtures, in the Migrate Drupal module. The tests of migration of node types, [\\Drupal\\Tests\\node\\Kernel\\Migrate\\d7\\MigrateNodeTypeTest](https://api.drupal.org/api/drupal/core%21modules%21node%21tests%21src%21Kernel%21Migrate%21d7%21MigrateNodeTypeTest.php/9.2.x), is a good example to start with.

### Migrate UI tests

These are functional tests of the Migrate UI. Currently that is the form at /upgrade. These tests use Drupal 6 and Drupal 7 database test fixtures, in the Migrate Drupal module. A test that runs the complete migration from the UI is [\\Drupal\\Tests\\migrate\_drupal\_ui\\Functional\\d7\\Upgrade7Test](http://api.drupal.org/api/drupal/core!modules!migrate%5Fdrupal%5Fui!tests!src!Functional!d7!Upgrade7Test.php/class/Upgrade7Test/9.2.x).