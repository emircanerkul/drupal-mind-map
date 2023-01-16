```php
$result = $connection->insert('mytable')
  ->fields(['title', 'uid', 'created'])
  ->values([
    'title' => 'Example',
    'uid' => 1,
    'created' => \Drupal::time()->getRequestTime(),
  ])
  ->execute();

```

This is the somewhat more verbose equivalent of the previous query, and will have the exact same result.

```php
  ->fields(['title', 'uid', 'created'])

```

When fields() is called with an indexed array instead of an associative array, it sets only the fields (database columns) that will be used in the query without setting any values for them. That is useful for running a multi-insert query later.

```php
  ->values([
    'title' => 'Example',
    'uid' => 1,
    'created' => \Drupal::time()->getRequestTime(),
  ])

```

This method call specifies an associative array of field names to values to insert into those fields. The values() method may also take an indexed array instead. If an indexed array is used, the order of values must match the order of fields in the fields() method. If an associative array is used, it may be in any order. Generally the associative array is preferred for readability.

This query form is rarely used, as the compact form is preferred. In most cases the only reason to separate fields() and values() is when running a multi-insert query.