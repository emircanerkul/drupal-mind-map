The following code counts the number of nodes per uid:

```php
$query = $connection->select('node', 'n')
  ->fields('n', ['uid']);
$query->addExpression('count(uid)', 'uid_node_count');
$query->groupBy("n.uid");
$query->execute();

```

The next block of code takes the previous example of counting nodes per uid and limits the results to uids that have at least 2 records.

```php
$query = $connection->select('node', 'n')
    ->fields('n',['uid']);
$query->addExpression('count(uid)', 'uid_node_count');
$query->groupBy("n.uid");
$query->having('COUNT(uid) >= :matches', [':matches' => 2]);
$results = $query->execute();
```