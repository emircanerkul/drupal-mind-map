To start a transaction in procedural code, use:

```php
$transaction = \Drupal::database()->startTransaction();
```

In object oriented code, inject the `database` service as $this->database, and use:

```php
$transaction = $this->database->startTransaction();
```

**You must assign the return value of `$connection->startTransaction();` to a variable, as in the example.** If you call the method without assigning the return value to a variable, your transaction will commit instantly, making it useless.

To roll back a transaction, call the `rollBack()` method on the transaction (eg `$transaction->rollBack()`).

Example:

```php
// Start the transaction. Make sure to store the result in a variable, else the
// transaction will be written to the database immediately, rendering it useless.
$transaction = $connection->startTransaction();

try {
  // Do some thing that writes to the database, such as creating an entity.
  $media->save();

  // Do another database write that depends upon the first.
  $node->save();
}
catch (Exception $e) {
  // There was an error in writing to the database, so the database is rolled back
  // to the state when the transaction was started.
  $transaction->rollBack();
}

// Commit the transaction by unsetting the $transaction variable.
unset($transaction);


```

### Warning

The database connection object also has a `rollBack()` method (`$connection->rollBack()`), however it should be avoided in most situations, and the `rollBack()` method on the transaction (`$transaction->rollBack()`) should be used as explained above. The reason this should be done via the transaction's `rollBack() `method is because it rolls back that transaction based on its name, where `$connection->rollBack() `defaults the name to `drupal_transaction `and may yield undesirable results when used with nested transactions.