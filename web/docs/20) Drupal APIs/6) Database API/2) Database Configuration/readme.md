---
url: https://www.drupal.org/docs/8/api/database-api/database-configuration
description: >-
  The primary means of defining a database connection is via the $databases
  array in settings.php. As its name suggests, $databases allows for the
  definition of multiple database connections. It also supports the definition
  of multiple targets. A database connection is not opened (the connection
  object is not created) until the first time some piece of code tries to run a
  query against that database. Connection key $databases['default'] // The
  database connection. A connection key is a unique identifier for a given
  database connection.
published_time: '2017-07-11T19:20:09+00:00'
modified_time: '2018-05-16T08:27:10+00:00'
---
The primary means of defining a database connection is via the $databases array in settings.php. As its name suggests, $databases allows for the definition of multiple database connections. It also supports the definition of multiple targets. A database connection is not opened (the connection object is not created) until the first time some piece of code tries to run a query against that database.

**Connection key**

```php
$databases['default'] // The database connection.
```

A connection key is a unique identifier for a given database connection. The connection key must be unique for a given site, and there must always be a connection of "default" that will be the primary Drupal database. On most sites, it will be the only connection defined.

**Target**

```php
$databases['default']['default'] // The database target.
```

A given connection key must have one or more targets. A target is a database that may be used if available. A target of "default" must always be defined for each connection key. If the requested target is not defined, the system will silently fall back to "default".

The primary use of targets is for primary/replica replication. The "default" target is the primary SQL server. One or more "replica" targets may then be defined (note that in some situations, "replica" is the only valid alternative target, e.g. in [static queries](https://www.drupal.org/node/310072#query-options)). Queries that are flagged to try and use a replica server if available will attempt to access the "replica" target. If one is available, that connection will be opened (if it is not already) and the query will run against the replica server. If not, the query will run against the "default" (primary) server instead. That allows for a transparent fallback, so the code can be written to take advantage of a replica server if it is available but will still run without one with no modification.

**$databases syntax**

The $databases array is a nested array of at least three levels. The first level defines the database keys. The second defines the database targets. The value of each target is the connection information for that key/target. Some examples should make that clearer.

```php
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'drupaldb',
  'username' => 'username',
  'password' => 'secret',
  'host' => 'localhost',
);

```

The above $databases array defines a single connection key ("default"), with a single target ("default"). That connection uses a MySQL database (the "driver" key) on localhost named "drupaldb" with a username of "username" and a password of "secret". The above example is the typical case for a single-SQL server Drupal install, and will be sufficient for the vast majority of sites.

For a primary/replica configuration, one would define the following:

```php
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'drupaldb1',
  'username' => 'username',
  'password' => 'secret',
  'host' => 'dbserver1',
);
$databases['default']['replica'][] = array(
  'driver' => 'mysql',
  'database' => 'drupaldb2',
  'username' => 'username',
  'password' => 'secret',
  'host' => 'dbserver2',
);
$databases['default']['replica'][] = array(
  'driver' => 'mysql',
  'database' => 'drupaldb3',
  'username' => 'username',
  'password' => 'secret',
  'host' => 'dbserver3',
);

```

This definition provides a single "default" server and two "replica" servers. Note that the "replica" key is an array. If any target is defined as an array of connection information, one of the defined servers will be selected at random for that target for each page request. That is, on one page request, all replica queries will be sent to dbserver2 while on the next they may all be sent to dbserver3.

```php
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'drupaldb1',
  'username' => 'username',
  'password' => 'secret',
  'host' => 'dbserver1',
);
$databases['extra']['default'] = array(
  'driver' => 'sqlite',
  'database' => 'files/extradb.sqlite',
);

```

This configuration defines a single main Drupal database and one additional database labelled "extra" that uses SQLite. Note that the SQLite connection information is structured differently than MySQL's. Each driver may have a different configuration depending on what is appropriate for it.

Remember that no matter how many connections you define, Drupal will not open a connection to that database until it is actually used.

### PDO Required

Since PHP's [PDO](http://www.php.net/pdo) library is now required by the Drupal database layer, you will need a hosting plan that includes it to run Drupal.

### PDO Options

[PDO options](http://www.php.net/manual/en/pdo.constants.php) and [driver specific PDO options](http://php.net/manual/en/pdo.drivers.php) can be specified in the database array with the key of 'pdo' like:

```php
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'drupaldb',
  'username' => 'username',
  'password' => 'secret',
  'host' => 'dbserver1',
  'pdo' => array(PDO::ATTR_TIMEOUT => 2.0, PDO::MYSQL_ATTR_COMPRESS => 1),
);
```