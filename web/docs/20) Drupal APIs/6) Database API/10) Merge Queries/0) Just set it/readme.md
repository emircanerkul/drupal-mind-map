```php
$connection->merge('example')
  ->key('name', $name)
  ->fields([
      'field1' => $value1,
      'field2' => $value2,
  ])
  ->execute();

```

In the above example, we instruct the query to operate on the "example" table. We then specify one key field, 'name', with a value of $name. We then specify an array of values to set.

If a row already exists in which the field "name" has the value $name, then fields field1 and field2 will be set to the corresponding values in that existing row. If such a row does not exist, one will be created in which name has the value $name, field1 has the value $value1, and field2 has the value $value2\. Thus at the end of the query, the end result is the same regardless of whether or not the row already existed.