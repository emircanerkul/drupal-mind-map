Using an SQLite database makes testing faster than with a DBMS like MySQL. Because the database is contained in just 1 file. Make sure that Drupal is not using your default database connection from the **settings.php** file.

A simple solution is to check the HTTP\_USER\_AGENT. E.g.:

```php
if ($_SERVER['HTTP_USER_AGENT'] !== 'Drupal command line') {

  $databases['default']['default'] = [
    'database' => 'MY-DATABASE',
    'username' => 'root',
    'password' => 'root',
    'prefix' => '',
    'host' => '127.0.0.1',
    'port' => '',
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'driver' => 'mysql',
    'unix_socket' => '/Applications/MAMP/tmp/mysql/mysql.sock',
  ];

}
```

In your **phpunit.xml** file specify your SQLite database connection (the file do not must exist before):

```php
<env name="SIMPLETEST_DB" value="sqlite://localhost/sites/default/files/db.sqlite"/>
```

Otherwise, you get errors like this:

```php
Exception: PDOException: SQLSTATE[HY000] [2002] Connection refused
```