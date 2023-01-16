---
url: https://www.drupal.org/docs/system-requirements/database-server-requirements
description: >-
  MySQL, MariaDB, or Percona Server (Recommended) Supported versions for Drupal
  9 and 10 MariaDB 10.3.7+ MySQL/Percona 5.7.8+ Required configuration InnoDB as
  the primary storage engine The PDO database extension Note: Drupal itself will
  generally operate with a default MariaDB/MySQL configuration. A more complex
  site will likely require configuration changes for the database. You can solve
  these common configuration issues using this documentation. PostgreSQL Drupal
  9 Drupal 9 requires PostgreSQL 10.0 or higher. PostgreSQL 9.6 can be used with
  this contributed PostgreSQL driver.
published_time: '2017-07-02T19:34:19+00:00'
modified_time: '2022-04-29T11:40:15+00:00'
---
### MySQL, MariaDB, or Percona Server (Recommended)

#### Supported versions for Drupal 9 and 10

* MariaDB 10.3.7+
* MySQL/Percona 5.7.8+

#### Required configuration

* InnoDB as the primary storage engine
* The PDO database extension

Note: Drupal itself will generally operate with a default MariaDB/MySQL configuration. A more complex site will likely require configuration changes for the database. You can solve these common configuration issues using [this documentation](https://www.drupal.org/node/259580).

### PostgreSQL

#### Drupal 9

Drupal 9 requires PostgreSQL 10.0 or higher. PostgreSQL 9.6 can be used with this [contributed PostgreSQL driver](https://www.drupal.org/project/pgsql%5Ffallback).

The [pg\_trgm](https://www.postgresql.org/docs/current/pgtrgm.html) extension is recommended. It provides improved performance on PostgreSQL, [eg for case insensitive path matching](https://www.drupal.org/project/drupal/issues/2988018). To enable, `CREATE EXTENSION pg_trgm` as a user with appropriate permissions ([CREATE EXTENSION docs](https://www.postgresql.org/docs/current/sql-createextension.html)).

#### Drupal 10

Drupal 10 requires PostgreSQL 12 or higher with the pg\_trgm extension enabled.

[See remaining issues with PostgreSQL support in Drupal here](/project/drupal/issues/2564307).

Note: Some contributed modules include MySQL-specific code. Issue reports can be filed in the contributed modules' queues when this occurs.

### SQLite

#### Drupal 9

Drupal 9 supports SQLite 3.26 or higher. (PHP 7.4 does not use the system provided SQLite, so take extra care to make sure your PHP is compiled with at least this version.)

#### Drupal 10

Drupal 10 will require SQLite 3.26 or higher with the json1 extension enabled.

Note: Some contributed modules include MySQL-specific code. Issue reports can be filed in the contributed modules' queues when this occurs.

### Other database servers

[Microsoft SQL Server](http://drupal.org/project/sqlsrv) and [MongoDB](https://drupal.org/project/mongodb) are supported by contributed modules.