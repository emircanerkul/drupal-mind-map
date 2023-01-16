---
url: >-
  https://www.drupal.org/docs/8/api/database-api/dynamic-queries/ordering-and-limiting
description: >-
  Ordering To add an order to the dynamic query, use the orderBy() method:
  $query->orderBy('timestamp'); By default, this creates an ascending order on
  the given field. To add a descending order, specify the second parameter:
  $query->orderBy('timestamp', 'DESC'); If called multiple times, the query will
  order by each specified field in the order this method is called. To order by
  an expression, add the expression with addExpression() first and then use the
  alias to order on.
published_time: '2019-05-15T13:02:34+00:00'
modified_time: '2022-04-29T22:30:34+00:00'
---
