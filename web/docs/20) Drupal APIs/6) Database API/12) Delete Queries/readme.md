---
url: https://www.drupal.org/docs/8/api/database-api/delete-queries
description: >-
  Delete queries must always use a query builder object. They are started using
  the delete() method as follows: $query = $connection->delete('mytable',
  $options); That creates a delete query object that will delete records from
  the mytable table. Note that braces are not required around the table name as
  the query builder will handle that automatically. The delete query object uses
  a fluent API. That is, all methods (except execute()) return the query object
  itself allowing method calls to be chained. In many cases, this means the
  query object will not need to be saved to a variable at all.
published_time: '2017-07-12T19:12:09+00:00'
modified_time: '2017-08-03T14:58:43+00:00'
---
Delete queries must always use a query builder object. They are started using the delete() method as follows:

```php
$query = $connection->delete('mytable', $options);

```

That creates a delete query object that will delete records from the `mytable` table. Note that braces are not required around the table name as the query builder will handle that automatically.

The delete query object uses a fluent API. That is, all methods (except execute()) return the query object itself allowing method calls to be chained. In many cases, this means the query object will not need to be saved to a variable at all.

Delete queries are conceptually very simple, consisting of only a WHERE clause. The full structure of the WHERE clause is detailed in the section on [Conditional clauses](http://drupal.org/node/310086), and will only be touched on here.

A full Delete query will take the following form:

```php
$num_deleted = $connection->delete('mytable')
  ->condition('myfield', 5)
  ->execute();

```

The above query will delete all rows from the `{mytable}` table where the `myfield` column is 5\. It is equivalent to the following query:

`DELETE FROM {mytable} WHERE myfield=5;`

The execute() method will return the number of records that were deleted as a result of the query.