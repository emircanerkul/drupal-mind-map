---
url: https://www.drupal.org/docs/drupal-apis/database-api/upsert-queries
description: >-
  Upsert queries must always use a query builder object. Certain databases
  require special handling for LOB (Large OBject, such as TEXT on MySQL) and
  BLOB (Binary Large OBject) fields, so a layer of abstraction is required to
  allow individual database drivers to implement whatever special handling they
  require.
published_time: '2021-09-05T11:02:06+00:00'
modified_time: '2022-07-26T15:47:30+00:00'
---
Upsert queries must always use a query builder object. Certain databases require special handling for LOB (Large OBject, such as TEXT on MySQL) and BLOB (Binary Large OBject) fields, so a layer of abstraction is required to allow individual database drivers to implement whatever special handling they require.

Upsert queries are started using the upsert() method as follows:

```php
/** @var \Drupal\Core\Database\Connection $connection */
$connection = \Drupal::service('database');
$query = $connection->upsert('mytable', $options);

```

This creates an upsert query object that will insert or modify one or more records to the 'mytable' table. Note that braces are not required around the table name as the query builder will handle that automatically.

The upsert query object uses a fluent API. That is, all methods (except execute()) return the query object itself allowing method calls to be chained. In many cases, that means the query object will not need to be saved to a variable at all.

Upsert queries are conceptually simple, consisting of a set of keys and then one or more key/value pairs for each key. Each set of key/value pairs is for a single row in the table.

The typical Upsert query is as follows.

```php
$upsert = $connection->upsert('mytable')
  ->fields(['field1', 'field2'])
  ->key('id');

  $upsert->values([
    'field1' => 3,
    'field2' => 5,
    'id' => 2,
  ]);

  $upsert->values([
    'field1' => 4,
    'field2' => 5,
    'id' => 3,
  ]);

  $result = $upsert->execute();

```

The above query will insert or update 2 records in the `mytable` table. The fields() method takes a single associative array that specifies which fields to set. The key() method takes a single associative array that specifies what fields are the key fields of the query. The key fields are used in the query to determine whether to `INSERT` or `UPDATE` a row in the table. This is done for each set of values. The values() method takes a single associative array that specifies what field values to set. Each field for the key() method and the fields() method must be set.

The above example is equivalent to the following query for MySQL:

`INSERT INTO {mytable} SET (field1, field2, id) VALUES (3,5,2), (4,5,3) ON DUPLICATE KEY UPDATE field1 = VALUES(field1), field2 = VALUES(field2)`

The above example is equivalent to the following query for PostgreSQL:

`INSERT INTO {mytable} SET (field1, field2, id) VALUES (3,5,2), (4,5,3) ON CONFLICT (id) DO UPDATE SET field1 = EXCLUDED.field1, field2 = EXCLUDED.field2`

The execute() method will return the number of rows affected by the query. Note that for MySQL the calculated number of rows is a bit different. Every inserted row counts as 1 and every updated row counts as 2 (every updated row has had an insert that failed). For more info: <https://dev.mysql.com/doc/c-api/8.0/en/mysql-affected-rows.html>