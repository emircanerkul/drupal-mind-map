1. Start a transaction and store the return value in a variable $transaction.
2. Perform the database procedures  
   * If an error occurs, call rollback() on the $transaction variable.
3. When processing is complete, unset() the $transaction variable, to commit the transaction to the database.

Note that if your transaction is nested inside of another, Drupal will track each transaction and only commit the outer-most transaction when the last transaction object has gone out out of scope (ie. all relevant queries completed successfully).