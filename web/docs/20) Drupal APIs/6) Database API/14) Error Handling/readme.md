---
url: https://www.drupal.org/docs/8/api/database-api/error-handling
description: >-
  The Database API throws exceptions on error, which can be picked up by
  wrapping your database operations in try {} catch() {} blocks, as shown in
  this example: // The transaction opens here. $txn =
  $connection->startTransaction(); try { $id = $connection->insert('example')
  ->fields([ 'field1' => 'mystring', 'field2' => 5, ]) ->execute();
  my_other_function($id); return $id; } catch (Exception $e) { // Something went
  wrong somewhere, so roll back now. $txn->rollBack(); // Log the exception to
  watchdog. \Drupal::logger('type')->error($e->getMessage()); }
published_time: '2017-07-13T19:54:03+00:00'
modified_time: '2019-07-25T21:31:28+00:00'
---
The Database API throws exceptions on error, which can be picked up by wrapping your database operations in `try {} catch() {} ` blocks, as shown in this example:

```php
// The transaction opens here.
$txn = $connection->startTransaction();
try {
  $id = $connection->insert('example')
    ->fields([
      'field1' => 'mystring',
      'field2' => 5,
    ])
    ->execute();

  my_other_function($id);

  return $id;
}
catch (Exception $e) {
  // Something went wrong somewhere, so roll back now.
  $txn->rollBack();
  // Log the exception to watchdog.
  \Drupal::logger('type')->error($e->getMessage());
}
```