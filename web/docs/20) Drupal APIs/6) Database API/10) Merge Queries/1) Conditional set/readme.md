In some cases, you may want to set values differently depending on whether or not the record, as identified by the key() fields, already existed. There are two ways to do that.

```php
$connection->merge('example')
  ->insertFields([
      'field1' => $value1,
      'field2' => $value2,
  ])
  ->updateFields([
    'field1' => $alternate1,
  ])
  ->key('name', $name)
  ->execute();

```

The above example will behave the same as the first, except that if the record already exists and we are updating it, field1 will be set to $alternate1 instead of $value1 and field2 will not be affected. The updateFields() method accepts either a single associative array of values or two parallel numeric arrays, one of fields, one of values, that must be in the same order.

```php
$connection->merge('example')
  ->key('name', $name)
  ->fields([
      'field1' => $value1,
      'field2' => $value2,
  ])
  ->expression('field1', 'field1 + :inc', [':inc' => 1])
  ->execute();

```

In this example, if the record already exists then field1 will be set to its current value plus 1\. That makes it very useful for "counter queries", where you want to increment some counter in the database every time a certain event happens. field2 will still be set to the same value regardless of whether the record exists or not.

Note that expression() may be called multiple times, once for each field that should be set to an expression if the record already exists. The first parameter is the field, the second is an SQL fragment indicating the expression the field should be set to, and the optional third parameter is an array of placeholder values to insert into the expression.

There is also no requirement that a field used in expression() be already present in fields().