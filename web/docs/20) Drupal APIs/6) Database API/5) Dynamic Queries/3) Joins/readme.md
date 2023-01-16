---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/joins
description: >-
  Joins To join against another table, use the join(), innerJoin(), leftJoin(),
  or addJoin() methods, like so: // Example of a SELECT query which joins the
  {node} table to both the {node_field_data} and {users} tables. $query =
  $connection->select('node', 'n', $options); $query->join('node_field_data',
  'nfd', 'n.nid = nfd.nid AND nfd.status = :status', array(':status' => 1));
  $table_alias = $query->join('users', 'u', 'n.uid = u.uid AND u.uid = :uid',
  array(':uid' => 5)); The above directive will add an INNER JOIN (the default
  join type) against the "user" table, which will get an alias of "u".
published_time: '2018-09-04T06:11:34+00:00'
modified_time: '2022-06-05T15:49:59+00:00'
---
