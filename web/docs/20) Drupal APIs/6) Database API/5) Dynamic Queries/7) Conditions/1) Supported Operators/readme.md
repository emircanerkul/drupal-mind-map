Common comparison operators of `'=', '<>', '<', '<=', '>', '>='` are supported in all supported database types.

### Using IN, NOT IN

The operators IN and NOT IN accept an array in $value and will compare the field value with the values of the array.

```php
$users = [2,5,17,22];
$query->condition('uid', $users, 'IN');
//
$query->condition('uid', $users, 'NOT IN');

```

In the first example, the query will return records where uid is one of 2, 5, 17, or 22.

In the second example, the query will return records where uid is NOT one of 2, 5, 17, or 22.

### Using BETWEEN and NOT BETWEEN

The operators BETWEEN and NOT BETWEEN accept an array of two values for the comparison.

```php
$query->condition('count', [5,10], 'BETWEEN');
```

In this example, the query will return records where count is between 5 and 10.

### Using IS NULL, IS NOT NULL, EXISTS, and NOT EXISTS

By convention, use the following rather using the condition() method:

```php
$query->isNull($field);
$query->isNotNull($field);
$query->exists($field);
$query->notExists($field);
```

While a condition such as `$query->condition($field, NULL, 'IS NOT NULL');` should work, the above convention is recommended.

### Other Operators

Other operators such as BINARY or others specific to the database system in use, may or may not work. Be aware of this when developing modules which may be used on different systems. 