_Expressions_ are useful to do aggregate functions, like `MAX`, `MIN`, `AVG`

```php
$select = $this->database->select('node__body', 't');
$select->addExpression('MAX(entity_id)');
$last = $select->execute()->fetchField();
```