---
url: https://www.drupal.org/docs/drupal-apis/database-api/general-concepts
description: >-
  The Drupal database layer is built on top of the PHP's PDO library. PDO
  provides a unified, object-oriented API for accessing different databases but
  it does not provide an abstraction for the different dialects of SQL used by
  different databases. Drivers Because different databases require different
  sorts of interaction, the Drupal database layer requires a driver for each
  database type. A driver consists of a series of files located in
  includes/database/driver, where driver is a string representing the unique key
  for that driver.
published_time: '2016-12-07T08:39:09+00:00'
modified_time: '2021-06-22T22:24:07+00:00'
---
The Drupal database layer is built on top of the PHP's [PDO](http://www.php.net/pdo) library. PDO provides a unified, object-oriented API for accessing different databases but it does not provide an abstraction for the different dialects of SQL used by different databases.

### Drivers

Because different databases require different sorts of interaction, the Drupal database layer requires a driver for each database type. A driver consists of a series of files located in includes/database/_driver_, where _driver_ is a string representing the unique key for that driver. In most cases the driver key is the lowercase version of the database name, such as "mysql", "pgsql", or "mycustomdriver".

Each driver consists of several classes derived from parent classes in the core database system. These driver-specific classes may override whatever behavior is needed to properly support that database type. Driver-specific classes are always named for their parent class followed by an underscore followed by the driver name. For example, the MySQL specific version of InsertQuery is named InsertQuery\_mysql.

### Connections

A connection is an object of class DatabaseConnection, which inherits from the PDO class. Every database to which Drupal connects has a single connection object associated with it. That connection object must be subclassed for each individual driver.

To access (and open if necessary) a connection object, use:

`$database = \Drupal::database(); // Or $database = \Drupal::service('database');`

If services are not yet available, \\Drupal\\Core\\Database\\Database::getConnection() can get a database connection.

For more information on Target and Connection Key, please see the documentation page on [Database configuration](https://www.drupal.org/docs/8/api/database-api/database-configuration).

To access the currently active connection, use:

```php
$conn = \Drupal\Core\Database\Database::getConnection();

```

This will get the default target of the active connection.

Note that in the vast majority of cases you will not need to request the connection object directly. Rather, the procedural wrappers will do so for you. The only reason you would ever need to access a connection object directly is if you are doing complex manipulation of more than one database and you do not want to change the active database.

To set the active connection, use:

```php
$conn = \Drupal\Core\Database\Database::setActiveConnection('external');


```

See the next section, [Database configuration](https://www.drupal.org/docs/8/api/database-api/database-configuration), for details of connection keys and targets.

### Queries

A query is an SQL statement that will be sent to a database connection. There are six types of queries supported by the database system: Static, Dynamic, Insert, Update, Delete, and Merge. Some queries are written as SQL string templates (prepared statements) while others use object-oriented query builders. A "query object" refers to an instance of a query builder for one of the various query types.

### Statements

A statement object is the result of a Select query. It will always be of type DatabaseStatement, or possibly a subclass of DatabaseStatement. DatabaseStatement extends the PDOStatement class.

Drupal uses prepared statements for all queries. A prepared statement is a template for a query into which values will be inserted for execution. Think of a prepared statement as the SQL equivalent of a function, which is then called with parameters to use.

In normal PDO, one must explicitly prepare a statement object and then execute it with certain values bound to placeholders in the query. The statement can then be iterated as a result set. Effectively a statement and a result set are synonymous, but only after a statement has been executed.

Drupal does not expose the prepared statement directly. Instead, a module developer will use a query object or a one-off SQL string to execute a query and the statement object for that query is returned. The terms "statement object" and "result set object" are therefore more or less synonymous.