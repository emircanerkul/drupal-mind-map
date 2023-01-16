Once the query is built, call `execute()` to compile and run the query.

```php
$result = $query->execute();

```

The `execute()` method will return a result set / statement object that is identical to that returned by `$database->query()`; it may be iterated or fetched in exactly the same way.

```php
$result = $query->execute();
foreach ($result as $record) {
  // Do something with each $record.
  // A field named `field_1` in $record is accessible via `$record->field_1`.
}

```

See [the section on result sets](https://www.drupal.org/docs/8/api/database-api/result-sets) for more details.

<!-- note-tip -->
> TIP: Be careful when using the following methods with a multi-column, dynamic query:

fetchField()
fetchAllKeyed()
fetchCol()

These methods currently require numeric column indices instead of table aliases. However, the query builder does not currently guarantee any specific order for the returned fields; the data columns may not be in the order that you expect. In particular, expressions are always added&nbsp;after&nbsp;fields, even if you add them to your query first. (This issue does not apply to&nbsp;static queries, which always return the data columns in the order you specify.)