Use the method fetchField to return only one field with the query, e.g. as follows. (slightly silly example)

```php
$query = $connection->select('node', 'n');
$query->condition('n.nid', 123);
$query->addField('n', 'title');
$result = $query->execute();
return $result->fetchField();
```