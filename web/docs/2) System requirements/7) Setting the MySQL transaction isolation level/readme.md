---
url: >-
  https://www.drupal.org/docs/system-requirements/setting-the-mysql-transaction-isolation-level
description: >-
  The default transaction isolation level for MySQL, MariaDB and equivalent
  databases is "REPEATABLE READ". This setting with Drupal can result in
  deadlocks on tables, which will result in the site becoming very slow or not
  responding at all. The recommended transaction isolation level for Drupal
  sites is 'READ COMMITTED'. The 'REPEATABLE READ' option is supported but can
  result in deadlocks, the other 2 options are 'READ UNCOMMITTED' and
  'SERIALIZABLE'. They are available but not supported; use them at your own
  risk.
published_time: '2022-06-15T09:24:28+00:00'
modified_time: '2023-01-12T22:51:50+00:00'
---
The default transaction isolation level for MySQL, MariaDB and equivalent databases is "REPEATABLE READ". This setting with Drupal can result in deadlocks on tables, which will result in the site becoming very slow or not responding at all.

The recommended transaction isolation level for Drupal sites is 'READ COMMITTED'. The 'REPEATABLE READ' option is supported but can result in deadlocks, the other 2 options are 'READ UNCOMMITTED' and 'SERIALIZABLE'. They are available but not supported; use them at your own risk.

Drupal will generate a warning on the Status report page (`admin/reports/status)` when a MySQL, MariaDB or equivalent database is used with the transaction isolation level set to "REPEATABLE READ".

If a site requires to explicitly set the transaction isolation level to 'READ COMMITTED' two methods can be used:

**The preferred way to change the transaction isolation level**

The first one is to run a database query that sets the transaction isolation level for every session on the database. The query is:

```php
SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED
```

This query can only be run by a database user that has superuser privileges.

You can check the value has been set by running the [mysql command below](#confirm%5Ftransaction%5Fisolation).

**The alternative way to change the transaction isolation level**

The second method is to update the `settings.php` file. The default location for the file is `sites/default/settings.php`. The file is created during the installation of your Drupal site.

At the end of the `settings.php` file is usually the database connection array found. Something like:

```php
$databases['default']['default'] = array(
  'database' => 'databasename',
  'username' => 'sqlusername',
  'password' => 'sqlpassword',
  'host' => 'localhost',
  'driver' => 'mysql',
  'prefix' => '',
  'port' => '3306',
);
```

To change the database transaction isolation level to "READ COMMITTED" add the following to the database connection array:

```php
  'init_commands' => [
    'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
  ],

```

The database connection array with the added setting will be something like:

```php
$databases['default']['default'] = array(
  'database' => 'databasename',
  'username' => 'sqlusername',
  'password' => 'sqlpassword',
  'host' => 'localhost',
  'driver' => 'mysql',
  'prefix' => '',
  'port' => '3306',
  'init_commands' => [
    'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
  ],
);

```

**To confirm that the setting has been made correctly you can run the mysql command**:

`show variables WHERE Variable_name LIKE "%_isolation";`

You should see the following output:

```php
mysql> show variables WHERE Variable_name LIKE "%isolation";
+-----------------------+-----------------+
| Variable_name         | Value           |
+-----------------------+-----------------+
| transaction_isolation | READ-COMMITTED  |
+-----------------------+-----------------+
1 row in set (0.00 sec)
```

For more information about isolation levels see the [MySQL Transaction Isolation Levels documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html).