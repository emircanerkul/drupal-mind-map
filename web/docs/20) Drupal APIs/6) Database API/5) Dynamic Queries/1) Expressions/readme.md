---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/expressions
description: >-
  The Select query builder supports the use of expressions in the field list.
  Examples of expressions include "twice the age field", "a count of all name
  fields", and a substring of the title field. Be aware that many expressions
  may use SQL functions, and not all SQL functions are standardized across all
  databases. It is up to the module developer to ensure that only cross-database
  compatible expressions are used. (Refer to the list of functions and
  operators) To add an expression to a query, use the addExpression() method.
published_time: '2017-07-13T21:05:56+00:00'
modified_time: '2022-12-05T12:54:02+00:00'
---
The Select query builder supports the use of expressions in the field list. Examples of expressions include "twice the age field", "a count of all name fields", and a substring of the title field. Be aware that many expressions may use SQL functions, and not all SQL functions are standardized across all databases. It is up to the module developer to ensure that only cross-database compatible expressions are used. (Refer to [the list of functions and operators](https://www.drupal.org/docs/8/api/database-api/functions-and-operators))

To add an expression to a query, use the `addExpression()` method.

```php
$count_alias = $query->addExpression('COUNT(uid)', 'uid_count');
$count_alias = $query->addExpression('created - :offset', 'timestamp', array(':offset' => 3600));

```

The first line above will add "`COUNT(uid) AS uid_count`" to the query. The second parameter is the alias for the field. In the rare case that alias is already in use, a new one will be generated and the return value of `addExpression()` will be the alias used. If no alias is specified, a default of "`expression`" (or `expression_2`, `expression_3`, etc.) will be generated.

The optional third parameter is an associative array of placeholder values to use as part of the expression.

Note that some SQL expressions may not function unless accompanied by a `GROUP BY` clause added with `$query->groupBy()`. It is up to the developer to ensure that the query that is generated is in fact valid.