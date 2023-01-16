Multiple `condition()` methods may be added to further filter the query.

```php
$query->condition('bundle', 'article', '=');
$query->condition('status', 1, '=');
```

When multiple `condition()`s exist, as in the example above, all conditions must be met for a record to appear in the query result (i.e. The conditions are `AND`ed together).

<!-- note-tip -->
> TIP: Tip: To achieve a query with only OR conditions, use one orConditionGroup.