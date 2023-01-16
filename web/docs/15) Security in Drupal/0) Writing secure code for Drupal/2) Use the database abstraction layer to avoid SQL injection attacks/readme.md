<!-- note-warning -->
> WARNING: Bad practice:
For example, never concatenate data directly into SQL queries.
\Database::getConnection()-&gt;query('SELECT foo FROM {table} t WHERE t.name = '. $_GET['user']);

**Good Practice:**

Use proper argument substitution. The database layer works on top of PHP PDO, and uses an array of named placeholders:

```php
\Database::getConnection()->query('SELECT foo FROM {table} t WHERE t.name = :name', [':name' => $_GET['user']]);

```

For a variable number of argument, use an array of arguments or use the select() method:

```php
$users = ['joe', 'poe', $_GET['user']];
\Database::getConnection()->query('SELECT f.bar FROM {foo} f WHERE f.bar IN (:users[])',  [':users[]' => $users]);

```

```php
$users = ['joe', 'poe', $_GET['user']];
$result = \Database::getConnection()->select('foo', 'f')
  ->fields('f', ['bar'])
  ->condition('f.bar', $users)
  ->execute();

```

When forming a LIKE query, make sure that you escape condition values to ensure they don't contain wildcard characters like "%":

```php
db_select('table', 't')
  ->condition('t.field', '%_' . db_like($user), 'LIKE')
  ->execute();

```

Make sure that users cannot provide any operator to a query's condition. For example, this is unsafe:

```php
db_select('table', 't')
  ->condition('t.field', $user, $user_input)
  ->execute();

```

Instead, set a list of allowed operators and only allow users to use those.

db\_query, db\_select, and db\_like are deprecated and will be removed in Drupal 9 - instead you should use a database connection object and call the query, select, and escapeLike methods on it (the parameters are the same).