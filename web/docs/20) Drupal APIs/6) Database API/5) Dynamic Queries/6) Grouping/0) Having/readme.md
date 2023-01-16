It's possible to add a condition on aggregated values.

```php
$query->having('COUNT(uid) >= :matches', [':matches' => $limit]);

```

This example would find instances where the count of uids is greater than or equal to the `$limit`. Note that the first parameter to having is not filtered before sending it to the database, so user supplied values should be passed in via the second parameter.