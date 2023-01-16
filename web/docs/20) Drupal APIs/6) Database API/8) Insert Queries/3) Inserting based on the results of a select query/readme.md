If you want to populate a table with results from other tables, you either need to SELECT from the source tables, iterate over the data in PHP and insert it into the new table, or you can do an INSERT INTO...SELECT FROM query in which every record which is returned from the SELECT query gets fed into the INSERT query.

In this example, we want to build a table `mytable` which has a `nid` and a user name for all nodes in the system which are of the `page` type.

```php
<?php
// Build the SELECT query.
$query = $connection->select('node', 'n');
// Join to the users table.
$query->join('users', 'u', 'n.uid = u.uid');
// Add the fields we want.
$query->addField('n','nid');
$query->addField('u','name');
// Add a condition to only get page nodes.
$query->condition('type', 'page');

// Perform the insert.
$connection->insert('mytable')
  ->from($query)
  ->execute();
?>

```