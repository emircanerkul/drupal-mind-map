---
url: https://www.drupal.org/docs/drupal-apis/database-api/functions-and-operators
description: >-
  Drupal's database layer does not provide cross-database abstraction of SQL
  functions. For portability across supported database engines your code should
  only use functions known to be part of the ANSI standard and supported across
  all databases that Drupal supports. The following is a still-incomplete list.
  The form used here is recommended as other syntax variants may not work on all
  databases. Note that the database layer does not whitelist operators, so you
  may pass a non-standard function, such as REPLACE(), and it will work for
  databases that support the syntax.
published_time: '2017-07-13T19:19:45+00:00'
modified_time: '2022-10-05T15:14:33+00:00'
---
Drupal's database layer does not provide cross-database abstraction of SQL functions. For portability across supported database engines your code should only use functions known to be part of the ANSI standard and supported across all databases that Drupal supports. The following is a still-incomplete list. The form used here is recommended as other syntax variants may not work on all databases.

_Note that the database layer does not whitelist operators, so you may pass a non-standard function, such as REPLACE(), and it will work for databases that support the syntax._