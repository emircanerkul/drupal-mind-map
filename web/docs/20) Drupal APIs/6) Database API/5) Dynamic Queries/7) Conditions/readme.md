---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/conditions
description: >-
  To add a WHERE clause to a dynamic query, use the condition() method:
  $query->condition('bundle', 'article', '='); The above code will instruct the
  query to filter results to the article bundle. Note that the field name here
  should be the alias created by the addField() or addExpression() methods.
  Condition Parameters The condition() method accepts three parameters: $field -
  The field on which to make the comparison (required). $value - The value to
  compare (optional, defaults to NULL).
published_time: '2019-01-25T13:54:15+00:00'
modified_time: '2022-07-21T00:23:29+00:00'
---
To add a WHERE clause to a dynamic query, use the `condition() `method:

`$query->condition('bundle', 'article', '=');`

The above code will instruct the query to filter results to the article bundle. Note that the field name here should be the alias created by the `addField()` or `addExpression()` methods.