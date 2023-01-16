---
url: https://www.drupal.org/docs/drupal-apis/database-api/static-queries
description: >-
  The most common SELECT queries in Drupal are static queries using the query()
  method of a database connection object. Static queries are passed to the
  database nearly verbatim. Example $database = \Drupal::database(); $query =
  $database->query("SELECT id, example FROM {mytable}"); $result =
  $query->fetchAll(); Only very simple SELECT queries should use the static
  query() method. You should use a dynamic query if you need more complex
  queries, dynamic query generation or alterability. Do not use this function
  for simple INSERT, UPDATE, or DELETE queries.
published_time: '2017-07-12T14:41:08+00:00'
modified_time: '2021-12-13T04:58:02+00:00'
---
The most common SELECT queries in Drupal are static queries using the `query()` method of a database connection object.  
Static queries are passed to the database nearly verbatim.

Example

```php
$database = \Drupal::database();
$query = $database->query("SELECT id, example FROM {mytable}");
$result = $query->fetchAll();
```

Only very simple SELECT queries should use the static `query()` method. You should use a [dynamic query](https://www.drupal.org/docs/8/api/database-api/dynamic-queries) if you need more complex queries, dynamic query generation or alterability. 

Do not use this function for simple INSERT, UPDATE, or DELETE queries. Those should be handled via [insert](https://www.drupal.org/docs/8/api/database-api/insert-queries)(), [update](https://www.drupal.org/docs/8/api/database-api/update-queries)() and [delete](https://www.drupal.org/docs/8/api/database-api/delete-queries)() respectively. For more complex DELETE queries on multiple tables, see [Complex DELETE queries](#Complex DELETE queries).

### Arguments

The `query()` method of a database connection object takes three arguments:

* **$query**: the query to run. Use placeholders where appropriate and denote all table names with curly braces.
* **$args**: an array of placeholder values to substitute into the query.
* **$options**: an array of options to control how the query operates (optional).

### Table name prefixing

In static queries, all table names must be wrapped in curly braces `{...}`.

Wrapping table names in curly braces flags them so that the database system can attach a prefix string to them if appropriate. Prefixing allows for running multiple sites from the same database or, in limited cases, for sharing selected tables between sites. It is also necessary to avoid data from the host site to leak into tests.

### Placeholders

Placeholders mark where a literal will be inserted into a query for execution. By separating them out from the query itself, we allow the database to differentiate between SQL syntax and user-provided values, thus avoiding SQL injection attacks.

```php
$query = $database->query("SELECT id, example FROM {mytable} WHERE created > :created", [
  ':created' => REQUEST_TIME - 3600,
]);
```

The above code will select all `mytable` ids and examples created within the past hour (3600 seconds). The placeholder `:created` will be dynamically replaced by whatever the value of `REQUEST_TIME - 3600` is at the point the query is run.

A query may have any number of placeholders, but all must have unique names even if they have the same value. Depending on the use case, the placeholders array may be specified inline (as above) or may be built beforehand and passed in. The order of the array does not matter.

Placeholders beginning with "db\_" are reserved for internal system use and should never be specified explicitly.

Note that **placeholders should _not_ be escaped or quoted** regardless of their type. Because they are passed to the database server separately, the server is able to differentiate between the query string and the value on its own.

```php
// WRONG (quotes around the :type placeholder)
$result = $database->query("SELECT example FROM {mytable} WHERE type = ':type'", [
  ':type' => 'mytype',
]);

// CORRECT (no quotes around the :type placeholder)
$result = $database->query("SELECT example FROM {mytable} WHERE type = :type", [
  ':type' => 'mytype',
]);


```

Placeholders cannot be used for column and table names. Instead, if these are derived from unsafe input, they should be run through `$database->escapeTable()`.

### Placeholder arrays

Drupal's database layer includes an extra feature of placeholders. If the value passed in for a placeholder is an array, it will be automatically expanded into a comma separated list as will the corresponding placeholder. That means developers do not need to worry about counting how many placeholders they will need.

An example should make this behavior more clear:

```php
$result = $database->query("SELECT * FROM {mytable} WHERE id IN (:ids[])", [':ids[]' => [13, 42, 144]]);
```

The following two statements are both equivalent to the statement above:

```php
$result = $database->query("SELECT * FROM {mytable} WHERE id IN (:ids_1, :ids_2, :ids_3)", [
  ':ids_1' => 13, 
  ':ids_2' => 42, 
  ':ids_3' => 144,
]);

$result = $database->query("SELECT * FROM {mytable} WHERE id IN (13, 42, 144)");

```

### Query options

The third parameter to the `query()` method of the database connection object is an array of options that direct how the query will behave. There are typically only two directives that will be used by most queries. The other values are mostly for internal use.

The "target" key specifies the target to use. If not specified, it defaults to "default". At present, the only other valid value is "replica", to indicate that a query should run against a replica server if one exists.

The "fetch" key specifies how records returned from that query will be retrieved. Legal values include PDO::FETCH\_OBJ, PDO::FETCH\_ASSOC, PDO::FETCH\_NUM, PDO::FETCH\_BOTH, or a string representing the name of a class. If a string is specified, each record will be fetched into a new object of that class. The behavior of all other values is defined by PDO, and will retrieve records as a stdClass object, an associative array, a numerical array, or an array keyed both numerically and associatively, respectively. See <http://php.net/manual/en/pdostatement.fetch.php>. The default is PDO::FETCH\_OBJ, which for consistency should be used unless there is a specific reason to do otherwise.

The following example will execute a query against a replica server if available and fetch records from the result set as an associative array.

```php
$database = \Drupal::service('database.replica');
$result = $database->query("SELECT id, example FROM {mytable}", [], [
  'fetch' => PDO::FETCH_ASSOC,
]);
```

The result object returned by a call to the `query()` method can be used to get each of the rows returned and then columns. In the following example, the `$result` variable has all the rows of the query returned, and then the individual rows are pulled one at a time into the `$row` variable using fetchAssoc():

```php
$sql = "SELECT name, quantity FROM {goods} WHERE vid = :vid";
$result = $database->query($sql, [':vid' => $vid]);
if ($result) {
  while ($row = $result->fetchAssoc()) {
    // Do something with:
    // $row['name']
    // $row['quantity']
  }
}
```

### Complex DELETE queries

Using a static query is a simple and compact way of expressing a delete query which involves deleting from multiple tables in a single expression.

Example:

```php
$database = \Drupal::database();
$database->query("DELETE {table1}, {table2} FROM {table1} INNER JOIN {table2} ON {table1}.id = {table2}.id WHERE {table1}.id=:recno", [":recno" => 2]);
```

(Deletes a row from both table1 and table2)