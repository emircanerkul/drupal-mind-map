---
url: https://www.drupal.org/docs/drupal-apis/database-api/update-queries
description: >-
  Update queries must always use a query builder object. Certain databases
  require special handling for LOB (Large OBject, such as TEXT on MySQL) and
  BLOB (Binary Large OBject) fields, so a layer of abstraction is required to
  allow individual database drivers to implement whatever special handling they
  require. Update queries are started using the update() method as follows:
  $query = $connection->update('mytable', $options); This creates an update
  query object that will modify one or more records to the 'mytable' table.
published_time: '2017-07-12T18:56:17+00:00'
modified_time: '2021-11-09T21:30:27+00:00'
---
Update queries must always use a query builder object. Certain databases require special handling for LOB (Large OBject, such as TEXT on MySQL) and BLOB (Binary Large OBject) fields, so a layer of abstraction is required to allow individual database drivers to implement whatever special handling they require.

Update queries are started using the update() method as follows:

```php
$query = $connection->update('mytable', $options);

```

This creates an update query object that will modify one or more records to the 'mytable' table. Note that braces are not required around the table name as the query builder will handle that automatically.

The update query object uses a fluent API. That is, all methods (except execute()) return the query object itself allowing method calls to be chained. In many cases, that means the query object will not need to be saved to a variable at all.

Update queries are conceptually simple, consisting of a set of key/value pairs to set and a WHERE clause. The full structure of the WHERE clause is detailed in the section on [Conditional clauses](http://drupal.org/node/310086), and will only be touched on here.

The typical Update query is as follows.

```php
$num_updated = $connection->update('mytable')
  ->fields([
    'field1' => 5,
    'field2' => 1,
  ])
  ->condition('created', REQUEST_TIME - 3600, '>=')
  ->execute();

```

The above query will update all records in the `mytable` table created within the last hour and set their `field1` field to 5 and `field2` field to 1\. The fields() method takes a single associative array that specifies what fields to set to what values when the specified conditions are met. Note that unlike Insert queries, UpdateQuery::fields() only accepts an associative array. Also, the order of fields in the array and the order in which methods are called are irrelevant.

The above example is equivalent to the following query:

`UPDATE {mytable} SET field1=5, field2=1 WHERE created >= 1221717405;`

The execute() method will return the number of rows affected by the query. Note that _affected_ is not the same as _matched_. In the above query, an existing record that already has a `field1` of 5 and `field2` of 1 will be matched, but since the data in it does not change it will not be affected by the query and therefore not be counted in the return value. As a side effect, that makes Update queries ineffective for determining if a given record already exists.

```php
<?php
$query = $connection->update('mytable');
// Conditions etc.
$affected_rows = $query->execute();
?>

```

To apply Where conditions:

```php
$query = $connection->update('mytable')
  ->condition('module', 'my_module')
  ->where(
    'SUBSTR(delta, 1, 14) <> :module_key',
    ['module_key' => 'my_module-key_']
  )
  ->expression('delta', "REPLACE(delta, :old_value, :new_value)", [
    ':old_value' => 'my_module-other_',
    ':new_value' => 'my_module-thing_',
  ])
  ->execute();

```

To use string functions in conditions:

```php
$query = $connection->update('mytable')
  ->condition('module', 'my_module')
  ->condition('SUBSTR(delta, 1, 14)', 'my_module-key_', '<>') // causes error.
  ->expression('delta', "REPLACE(delta, :old_value, :new_value)", [
    ':old_value' => 'my_module-other_',
    ':new_value' => 'my_module-thing_',
  ])
  ->execute();
```