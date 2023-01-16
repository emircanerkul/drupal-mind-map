To examine the SQL query the query object produces, print the query object. To examine the arguments, look at the array returned by `arguments()`.

```php
echo $query;
print_r((string) $query);
print_r($query->arguments());
```