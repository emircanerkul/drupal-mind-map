To select multiple fields, call addField() multiple times in the order desired. Note that in most cases the order of fields should not matter, and if it does then there is likely a flaw in the business logic of the module.

As an alternate shorthand, you can use the fields() method to add multiple fields at once.

```php
$query->fields('n', ['nid', 'title', 'created', 'uid']);

```

The above method is equivalent to calling addField() four times, once for each field. However, fields() does not support specifying an alias for a field. It also returns the query object itself so that the method may be chained rather than returning any generated aliases. If you need to know the generated alias, either use addField() or use getFields() to access the raw internal fields structure.

Calling fields() with an empty second parameter will result in a "SELECT \*" query.

```php
// Either of these will return all fields for the aliased table.

$query->fields('n');

// or

$query->fields('n', []);
```

That will result in "n.\*" being included in the field list of the query. Note that no aliases will be generated. If a table using SELECT \* contains a field that is also specified directly from another table, it is possible for a field name collision to occur in the result set. In that case, the result set will only contain one of the fields with the common name. For that reason the SELECT \* usage is discouraged.