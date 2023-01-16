---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/grouping
description: >-
  To group by a given field, use the groupBy() method. $query->groupBy('uid');
  The above code will instruct the query to group by the uid field. Note that
  the field name here should be the alias created by the addField() or
  addExpression() methods, so in most cases you will want to use the return
  value from those methods here to ensure the correct alias is used.
published_time: '2017-07-13T21:22:46+00:00'
modified_time: '2018-04-20T12:56:49+00:00'
---
To group by a given field, use the `groupBy()` method.

```php
$query->groupBy('uid');

```

The above code will instruct the query to group by the uid field. Note that the field name here should be the alias created by the `addField()` or `addExpression()` methods, so in most cases you will want to use the return value from those methods here to ensure the correct alias is used.

To obtain the count of rows that have been grouped by a field such as the uid, you could run the following:

```php
$query->addExpression('count(uid)', 'uid_node_count');

```

To group by multiple fields, simply call `groupBy()` multiple times in the order desired.