The Insert query object may also take multiple value sets. That is, values() may be called multiple times to enqueue several insert statements together. Exactly how that happens will depend on the capabilities of the database in question. On most databases, multiple insert statements will be executed together inside a transaction for greater data integrity and speed. In MySQL, it will use MySQL's multi-value insert syntax.

```php
$values = [
  [
    'title' => 'Example',
    'uid' => 1,
    'created' => \Drupal::time()->getRequestTime(),
  ],
  [
    'title' => 'Example 2',
    'uid' => 1,
    'created' => \Drupal::time()->getRequestTime(),
  ],
  [
    'title' => 'Example 3',
    'uid' => 2,
    'created' => \Drupal::time()->getRequestTime(),
  ],
];
$query = $connection->insert('mytable')->fields(['title', 'uid', 'created']);
foreach ($values as $record) {
  $query->values($record);
}
$query->execute();

```

The above example will execute three insert statements together as a single unit, using the most efficient method for the particular database driver in use. Note that here we have saved the query object to a variable so that we can loop on $values and call the values() method repeatedly.

In the degenerate case, the above example is equivalent to the following three queries:

`INSERT INTO {mytable} (title, uid, created) VALUES ('Example', 1, 1221717405);`  
`INSERT INTO {mytable} (title, uid, created) VALUES ('Example2', 1, 1221717405);`  
`INSERT INTO {mytable} (title, uid, created) VALUES ('Example3', 2, 1221717405);`

Note that on a multi-insert query the return value from execute() is undefined and should not be trusted, as it may vary depending on the database driver.