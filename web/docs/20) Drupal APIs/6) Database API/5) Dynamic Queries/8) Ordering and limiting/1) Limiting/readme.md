By using the range() method, you can control the range of selectable records. The method has two parameters: the first is the start position of the range, and the second is the number of selectable records from the beginning of the range.

```php
// Limit the result to 10 records
// where 0 is offset and 10 is limit
$query->range(0, 10);

```

The following example will instruct the result set to start at the 6th record found (the count starts at 0) rather than the first and to return only 10 records.

```php
$query->range(5, 10);

```

Calling the range() method a second time will overwrite previous values. Calling it with no parameters will remove all range restrictions on the query.