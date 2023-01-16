To join against another table, use the join(), innerJoin(), leftJoin(), or addJoin() methods, like so:

```php
// Example of a SELECT query which joins the {node} table to both the {node_field_data} and {users} tables.
$query = $connection->select('node', 'n', $options);
$query->join('node_field_data', 'nfd', 'n.nid = nfd.nid AND nfd.status = :status', array(':status' => 1));
$table_alias = $query->join('users', 'u', 'n.uid = u.uid AND u.uid = :uid', array(':uid' => 5));

```

The above directive will add an INNER JOIN (the default join type) against the "user" table, which will get an alias of "u". The join will be ON the condition " n.uid = u.uid AND u.uid = :uid", where :uid has a value of 5\. Note the use of a prepared statement fragment. That allows for the addition of variable join statements in a secure fashion. _Never_ put a literal value or variable directly into a query fragment, just as literals and variables should never be placed into a static query directly (they can lead to SQL injection vulnerabilities). The innerJoin(), leftJoin(), and addJoin() methods operate identically for their respective join types.

<!-- note-version -->
> VERSION: rightJoin is removed in Drupal 9.0.0
rightJoin()&nbsp;as of Drupal 8.1.x, will be removed in Drupal 9.0.0. Instead, change the query to use leftJoin() or addJoin($joinType, $table, $alias, $condition).

The return value of a join method is the alias of the table that was assigned. If an alias is specified it will be used except in the rare case that alias is already in use by a different table. In that case, the system will assign a different alias.

Note that in place of a literal such as 'user' for the table name, all of the join methods will accept a select query as their first argument. Example:

```php
$myselect = $query = $connection->select('mytable', 'mt')
  ->fields('mt', ['myfield1', 'myfield2'])
  ->condition('myfield1', 'myvalue');
$alias = $query->join($myselect, 'myalias', 'n.nid = myalias.nid');

```

Joins cannot be chained, so they have to be called separately (see [Chaining](http://drupal.org/node/1060924)). If you are chaining multiple functions together do it like this:

```php
$query = $connection->select('node', 'n', $options);
$query->join('node_field_data', 'nfd', 'n.nid = nfd.nid');
$query
  ->fields('n', array('nid'))
  ->fields('nfd', array('title'))
  ->condition('nfd.type', 'page')
  ->condition('nfd.status', '1')
  ->orderBy('nfd.created', 'DESC')
  ->addTag('node_access');

```