---
url: https://www.drupal.org/docs/8/api/database-api/merge-queries
description: >-
  Merge queries are a special type of hybrid query. Although a syntax is defined
  for them in the SQL 2003 specification, virtually no database supports the
  standard syntax. Most, however, provide some alternate implementation using a
  database-specific syntax. The Merge query builder in Drupal abstracts the
  concept of a Merge query out into a structured object that can be compiled
  down to the appropriate syntax for each database. These are sometimes called
  "UPSERT" queries, a combination of UPDATE and INSERT.
published_time: '2017-07-12T19:38:02+00:00'
modified_time: '2019-04-01T15:46:36+00:00'
---
Merge queries are a special type of hybrid query. Although a syntax is defined for them in the SQL 2003 specification, virtually no database supports the standard syntax. Most, however, provide some alternate implementation using a database-specific syntax. The Merge query builder in Drupal abstracts the concept of a Merge query out into a structured object that can be compiled down to the appropriate syntax for each database. These are sometimes called "UPSERT" queries, a combination of UPDATE and INSERT.

In the general sense, a Merge query is a combination of an Insert query and an Update query. If a given condition is met, such as a row with a given primary key already existing, then an Update query is run. If not, an Insert query is run. In the most common case, it is equivalent to:

```php
if ($connection->query("SELECT COUNT(*) FROM {example} WHERE id = :id", [':id' => $id])->fetchField()) {
  // Run an update using WHERE id = $id
}
else {
  // Run an insert, inserting $id for id 
}

```

The actual implementation varies widely from database to database. Note that while Merge queries are conceptually an atomic operation, they may or may not be truly atomic depending on the implementation for a specific database. The MySQL implementation is a single atomic query, for example, but the degenerate case (above) is not.

The most common idioms for Merge queries are listed below.