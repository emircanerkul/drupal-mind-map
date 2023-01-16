---
url: >-
  https://www.drupal.org/docs/8/api/database-api/dynamic-queries/introduction-to-dynamic-queries
description: >-
  Dynamic queries refer to queries that are built dynamically by Drupal rather
  than provided as an explicit query string. All Insert, Update, Delete, and
  Merge queries must be dynamic. Select queries may be either static or dynamic.
  Therefore, "dynamic query" generally refers to a dynamic Select query. In 90%
  of the use cases you will have a static query. When performance is critical,
  query() should be used instead of select(). Dynamic queries should be used
  when the query parts vary or when they should be alterable.
published_time: '2017-07-13T20:17:39+00:00'
modified_time: '2022-02-26T12:16:52+00:00'
---
Dynamic queries refer to queries that are built dynamically by Drupal rather than provided as an explicit query string. All Insert, Update, Delete, and Merge queries must be dynamic. Select queries may be either static or dynamic. Therefore, "dynamic query" generally refers to a dynamic Select query.

<!-- note-tip -->
> TIP: In 90% of the use cases you will have a static query. When performance is critical, query() should be used instead of select(). Dynamic queries should be used when the query parts vary or when they should be alterable.

All dynamically built queries are constructed using a query object, requested from the appropriate database connection object. As with static queries, in the vast majority of cases the procedural wrapper may be used to request the object. Subsequent directives to the query, however, take the form of methods invoked on the query object.

Dynamic select queries are started using the `select()` method like in the following code.

```php
$database = \Drupal::database();
$query = $database->select('mytable', 'mt', $options);
$query->fields('mytable', ['field_1', 'field_2']);

```

In this case, `mytable` is the base table for the query, the table used from the `FROM` statement. Note that it should not have brackets around it. The query builder will handle that automatically. The second parameter is the table alias; if not specified, the name of the table will be used as alias.

The value returned by `$database->select()` is an instance of `Select`.

Dynamic select queries can be very simple or very complex. The next sections will describe the individual parts that make simple query; the following pages will describe more advanced techniques.

### Options Array

The `$options` parameter is optional and it's identical to the `$options` array for static queries. See [Static Queries Options](https://www.drupal.org/docs/drupal-apis/database-api/static-queries#query-options).