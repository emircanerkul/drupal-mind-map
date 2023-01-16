---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/count-queries
description: >-
  Any query may have a corresponding "count query". The count query returns the
  number of rows in the original query. To obtain a count query from an existing
  query (which is a select query object implementing SelectInterface), use the
  countQuery() method. $count_query = $query->countQuery(); $count_query is now
  a new Dynamic Select query with no ordering restrictions that when executed
  will return a result set with only one value, the number of records that would
  be matched by the original query.
published_time: '2017-07-13T21:01:55+00:00'
modified_time: '2019-02-15T08:12:03+00:00'
---
Any query may have a corresponding "count query". The count query returns the number of rows in the original query. To obtain a count query from an existing query (which is a select query object implementing [SelectInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Database%21Query%21SelectInterface.php/interface/SelectInterface/8.2.x)), use the countQuery() method.

```php
$count_query = $query->countQuery();

```

$count\_query is now a new Dynamic Select query with no ordering restrictions that when executed will return a result set with only one value, the number of records that would be matched by the original query. Because PHP supports chaining methods on returned objects, the following idiom is a common approach:

```php
$num_rows = $query->countQuery()->execute()->fetchField();
```

For an entity query (implementing [QueryInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21Query%21QueryInterface.php/interface/QueryInterface/8.7.x)), the code is slightly different:

```php
$num_rows = $query->count()->execute();
```