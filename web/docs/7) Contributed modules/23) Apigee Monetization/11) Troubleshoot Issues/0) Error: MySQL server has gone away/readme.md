If you attempt to enable the Apigee Monetization Add Credit module after configuring your Drupal 8 developer portal and its database server, you may encounter the following database error:

`PDOException: SQLSTATE[HY000]: General error: 2006 MySQL server has gone away in /home/D8/web/core/lib/Drupal/Core/Database/Statement.php:59`

If the default database system variable `max_allowed_packet` is set too low, you may need to increase the value in the default configuration file and restart the MySQL or MariaDB service to avoid this error.

You can increase the `max_allowed_packet` value when you start your MySQL server by using a command like this, where the packet size is set to 128MB:

`shell> mysqld --max_allowed_packet=128M`

Using this command will reset the value to 128MB until MySQL restarts, allowing you to confirm that the increased value solves the issue. If so, you can persist the change by modifying the `max_allowed_packet` value in the `[mysqld]` and `[mysqldump]` sections of the `my.cnf` file.

For more discussion regarding increasing the `max_allowed_packet` value, see the [Drupal Community documentation](https://www.drupal.org/node/259580).