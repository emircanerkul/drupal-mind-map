All bug fixes that get committed to Drupal 8 (or later) core will need to have test automation coverage. It is perfectly fine to contribute patches without tests if you're not familiar with test automation. This section is intended for advanced contributors who want to contribute with the tests.

The migrations need to be tested so that the testbot actually performs the migrations. When writing tests for core migrations, the database fixtures included in Drupal 8 (or later) core are used as the source data:

* core/modules/migrate\_drupal/tests/fixtures/drupal6.php
* core/modules/migrate\_drupal/tests/fixtures/drupal7.php
* [Read more about the migrate database fixtures](https://www.drupal.org/docs/8/api/migrate-api/generating-database-fixtures-for-d8-migrate-tests)

The actual tests are typically defined in Kernel tests of the module in question, for example tests for the migration of comments are found in in core/modules/comment/tests/src/Kernel/Migrate.