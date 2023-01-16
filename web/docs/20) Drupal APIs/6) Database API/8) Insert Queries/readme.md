---
url: https://www.drupal.org/docs/drupal-apis/database-api/insert-queries
description: >-
  Insert queries must always use a query builder object. Certain databases
  require special handling for LOB (Large OBject, such as TEXT in MySQL) and
  BLOB (Binary Large OBject) fields, so a layer of abstraction is required to
  allow individual database drivers to implement whatever special handling they
  require.
published_time: '2017-07-12T18:51:58+00:00'
modified_time: '2021-04-08T15:43:35+00:00'
---
Insert queries must always use a query builder object. Certain databases require special handling for LOB (Large OBject, such as TEXT in MySQL) and BLOB (Binary Large OBject) fields, so a layer of abstraction is required to allow individual database drivers to implement whatever special handling they require.

Insert queries are started using the `insert()` method as follows:

```php
/** @var \Drupal\Core\Database\Connection $connection */
$connection = \Drupal::service('database');
$query = $connection->insert('mytable', $options);

```

That creates an insert query object that will insert one or more records to the `mytable` table. Note that braces are not required around the table name as the query builder will handle that automatically.

The insert query object uses a fluent API. That is, all methods (except execute()) return the query object itself allowing method calls to be chained. In many cases, that means the query object will not need to be saved to a variable at all.

The insert query object supports a number of different usage patterns to support different needs. In general, the workflow consists of specifying the fields that the query will insert into, specifying the values the query will insert for those fields, and executing the query. The most common recommended usage patterns are listed below.