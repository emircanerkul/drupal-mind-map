The preferred form for most Insert queries is the compact form:

```php
$result = $connection->insert('mytable')
  ->fields([
    'title' => 'Example',
    'uid' => 1,
    'created' => \Drupal::time()->getRequestTime(),
  ])
  ->execute();

```

This will result in the equivalent of the following query:

`INSERT INTO {mytable} (title, uid, created) VALUES ('Example', 1, 1221717405);`

The above snippet chains together the key parts of the insert process.

```php
$connection->insert('mytable')

```

This line creates a new insert query object for the `mytable` table.

```php
  ->fields([
    'title' => 'Example',
    'uid' => 1,
    'created' => \Drupal::time()->getRequestTime(),
  ])

```

The fields() method takes several forms of parameters, but a single associative array is the most common. The keys of the array are the table columns into which to insert and the values are the corresponding values to insert. That will result in a single insert query against the specified table.

```php
  ->execute();

```

The execute() method tells the query to run. Unless this method is called, the query does not execute.

Unlike other methods on the Insert query object, which return the query object itself, execute() returns the value of an auto-increment (serial type in [hook\_schema()](http://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook%5Fschema/7)) field that was populated by the Insert query, if any. That's why the return value from it is assigned to `$result` in the example above. If there is no auto-increment field, the return value from execute() is undefined and should not be trusted.

In the typical case, this is the preferred format for Insert queries.