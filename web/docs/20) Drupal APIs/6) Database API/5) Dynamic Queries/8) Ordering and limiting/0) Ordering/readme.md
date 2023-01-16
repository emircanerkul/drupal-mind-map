To add an order to the dynamic query, use the orderBy() method:

`$query->orderBy('timestamp');`

By default, this creates an ascending order on the given field. To add a descending order, specify the second parameter:

`$query->orderBy('timestamp', 'DESC');`

If called multiple times, the query will order by each specified field in the order this method is called. To order by an expression, add the expression with addExpression() first and then use the alias to order on.

To get the results in a random order, use the orderRandom() method:

`$query->orderRandom();`