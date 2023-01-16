---
url: https://www.drupal.org/docs/drupal-apis/database-api/result-sets
description: >-
  A Select query will always return a result set object of zero or more records.
  There are several ways to then retrieve data from that result set, depending
  on the use case. The records are fetched as objects by default unless you
  change the fetch mode (See: setFetchMode) The most common case is to iterate
  over the result set with a foreach() loop.
published_time: '2017-07-12T15:25:23+00:00'
modified_time: '2022-04-29T16:04:47+00:00'
---
A Select query will always return a result set object of zero or more records. There are several ways to then retrieve data from that result set, depending on the use case. The records are fetched as objects by default unless you change the fetch mode (See: [setFetchMode](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Database%21StatementInterface.php/function/StatementInterface%3A%3AsetFetchMode/8.5.x))

The most common case is to iterate over the result set with a foreach() loop.

```php
// Static query:
$result = $connection->query("SELECT field1, field2 FROM {mytable}");
foreach ($result as $record) {
  // Do something with each $record
}

// Dynamic query
$result = $query->execute();
foreach ($result as $record) {
  // Do something with each $record.
}

```

Depending on what the results are needed for, however, there are a number of other ways to retrieve the records.

To explicitly fetch the next record, use:

```php
$record = $result->fetch();            // Use the default fetch mode.
$record = $result->fetchObject();  // Fetch as a stdClass object.
$record = $result->fetchAssoc();   // Fetch as an associative array.

```

If there is no next record, FALSE will be returned. fetch() should generally be avoided in favor of fetchObject() and fetchAssoc(), as the latter are more self-documenting. If you need to use some other PDO-supported fetch mode, then use fetch().

To fetch just a single field out of the result set, use:

```php
$record = $result->fetchField($column_index);

```

The default value of $column\_index is 0, for the first field.

To count the number of rows returned from a DELETE, INSERT or UPDATE statement use:

```php
$number_of_rows = $result->rowCount();

```

  
To count the number of rows returned from a SELECT statement use:

```php
$number_of_rows = $connection->select('mytable')->countQuery()->execute()->fetchField();

```

  
To fetch all records at once into a single array, use one of the following:

```php
// Retrieve all records into an indexed array of stdClass objects.
$result->fetchAll();

// Retrieve all records into an associative array keyed by the field in the result specified.
$result->fetchAllAssoc($field);

// Retrieve a 2-column result set as an associative array of field 0 => field 1.
$result->fetchAllKeyed();
// You can also specify which two fields to use by specifying the column numbers for each field
$result->fetchAllKeyed(0,2); // would be field 0 => field 2
$result->fetchAllKeyed(1,0); // would be field 1 => field 0
// If you need an array where keys and values contain the same field (e.g. for creating a 'checkboxes' form element), the following is a perfectly valid method:
$result->fetchAllKeyed(0,0); // would be field 0 => field 0, e.g. [article] => [article]

// Retrieve a 1-column result set as one single array.
$result->fetchCol();
// Column number can be specified otherwise defaults to first column
$result->fetchCol($column_index);

```

Note that fetchAll() and fetchAllAssoc() will by default fetch using whatever fetch mode was set on the query (numeric array, associative array, or object). That can be modified by passing in a [new fetch mode constant](http://php.net/manual/en/pdostatement.fetch.php). For fetchAll(), it is the first parameter. For fetchAllAssoc(), it is the second parameter. Examples:

```php
// Get an array of arrays keyed on the field 'id'.
$result->fetchAllAssoc('id', PDO::FETCH_ASSOC);
// Get an array of arrays with both numeric and associative keys.
$result->fetchAll(PDO::FETCH_BOTH);

```

  
Because PHP supports chaining method calls on returned objects, it is very common to skip the $result variable entirely, like so:

```php
// Get an associative array of ids to titles.
$examples = $connection->query("SELECT id, title FROM {mytable}")->fetchAllKeyed();

// Get a single record out of the database.
$myobj = $connection->query("SELECT * FROM {mytable} WHERE example = :example", [':example' => $example])->fetchObject();

// Get a single value out of the database.
$myval = $connection->query("SELECT example FROM {mytable} WHERE id = :id", [':id' => $id])->fetchField();

```

If what you want is a simple array like `[1, 2, 3, 4, 5]` you will have to settle for something more like \[`1=>1, 2=>2, 3=>3, 4=>4, 5=>5]`. You can get this by using

```php
$ids = $connection->query("SELECT id FROM {example}")->fetchAllKeyed(0,0);
```