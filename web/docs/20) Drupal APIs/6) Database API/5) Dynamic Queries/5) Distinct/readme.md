---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/distinct
description: >-
  Some SQL queries may produce duplicate results. In such cases, duplicate rows
  may be filtered out using the "DISTINCT" keyword in a static query. In a
  dynamic query, use the distinct() method. // Force filtering of duplicate
  records in the result set. $connection = \Drupal::database(); $query =
  $connection->select('my_table', 'mt'); $query->fields('mt', ['my_fields']);
  $query->distinct()->execute()->fetchAll(); Note that DISTINCT can introduce a
  performance penalty, so do not use it unless there is no other way to restrict
  the result set to avoid duplicates.
published_time: '2017-07-13T21:03:56+00:00'
modified_time: '2022-03-18T19:01:02+00:00'
---
Some SQL queries may produce duplicate results. In such cases, duplicate rows may be filtered out using the "DISTINCT" keyword in a static query. In a dynamic query, use the distinct() method.

```php
// Force filtering of duplicate records in the result set.
$connection = \Drupal::database();
$query = $connection->select('my_table', 'mt');
$query->fields('mt', ['my_fields']);
$query->distinct()->execute()->fetchAll();

```

Note that DISTINCT can introduce a performance penalty, so do not use it unless there is no other way to restrict the result set to avoid duplicates.