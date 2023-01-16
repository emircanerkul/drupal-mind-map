This is a relatively simple query for the _users_ table.

Let's say we want to create a dynamic query which is roughly equivalent to the following static query.

```php
$result = $database->query("SELECT uid, name, status, created, access FROM {users_field_data} u WHERE uid <> 0 LIMIT 50 OFFSET 0");

```

The dynamic query would use the following code.

```php
// Create an object of type Select and directly add extra detail
// to this query object: a condition, fields and a range.
$query = $database->select('users_field_data', 'u')
  ->condition('u.uid', 0, '<>')
  ->fields('u', ['uid', 'name', 'status', 'created', 'access'])
  ->range(0, 50);

```