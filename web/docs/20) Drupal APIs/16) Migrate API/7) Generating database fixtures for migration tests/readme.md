---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/generating-database-fixtures-for-migration-tests
description: >-
  The workflow here is applicable to contrib, custom and core migrations. The
  examples given here refer to core migrations. When writing tests for Drupal 6
  / Drupal 7 core migrations, use the database fixtures that are included in
  Drupal core: core/modules/migrate_drupal/tests/fixtures/drupal6.php
  core/modules/migrate_drupal/tests/fixtures/drupal7.php This is your source
  data to write your tests against. If you need extra test data in these
  database sources, you can modify the fixture using the following method.
published_time: '2015-10-08T13:07:57+00:00'
modified_time: '2022-10-26T03:13:54+00:00'
---
The workflow here is applicable to contrib, custom and core migrations. The examples given here refer to core migrations.

When writing tests for Drupal 6 / Drupal 7 core migrations, use the database fixtures that are included in Drupal core:

* core/modules/migrate\_drupal/tests/fixtures/drupal6.php
* core/modules/migrate\_drupal/tests/fixtures/drupal7.php

This is your source data to write your tests against. If you need extra test data in these database sources, you can modify the fixture using the following method.