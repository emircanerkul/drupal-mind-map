---
url: https://www.drupal.org/docs/8/api/database-api/fetching-into-a-custom-class
description: >-
  Queries can be fetched into objects based on custom classes. For example, if
  we have a class named ExampleClass the following query will return objects of
  the type exampleClass. $result = $connection->query("SELECT id, title FROM
  {example_table}", [], [ 'fetch' => 'ExampleClass', ]); If the class has a
  __construct() method the objects will be created, the properties will be added
  to the object, and then the __construct() method will be called. For example,
  if you have the following class and query.
published_time: '2017-07-13T19:09:51+00:00'
modified_time: '2017-08-03T15:03:56+00:00'
---
Queries can be fetched into objects based on custom classes. For example, if we have a class named ExampleClass the following query will return objects of the type exampleClass.

```php
$result = $connection->query("SELECT id, title FROM {example_table}", [], [
  'fetch' => 'ExampleClass',
]);

```

If the class has a \_\_construct() method the objects will be created, the properties will be added to the object, and then the \_\_construct() method will be called. For example, if you have the following class and query.

```php
class ExampleClass {
  function __construct() {
    // Do something
  }
}

$result = $connection->query("SELECT id, title FROM {example_table}", [], [
  'fetch' => 'ExampleClass',
]);

```

The object will be created, the id and title properties will be added to the object, and then \_\_construct() will be executed. The order of these events is due to a [bug in PHP](http://bugs.php.net/bug.php?id=46139) for versions less than 5.2.

If there is a \_\_construct() method on the object and that needs to be executed before the properties are added to the object the following example shows how to do this.

```php
$result = $connection->query("SELECT id, title FROM {example_table}");
foreach ($result->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'ExampleClass') as $record) {
  // Do something
}

```

The arguments passed into fetchAll can be used in fetch the same way. PDO::FETCH\_CLASS tells fetchAll to take the returned result set and add the values as properties to the object of type ExampleClass (the second argument). PDO::FETCH\_PROPS\_LATE tells fetchAll to add the result set as properties to the object after \_\_construct() is called.