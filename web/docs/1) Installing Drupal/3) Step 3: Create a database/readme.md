---
url: https://www.drupal.org/docs/installing-drupal/step-3-create-a-database
description: >-
  If you are installing Drupal on a test site, then you can skip this step. When
  you run the installation script (next step) just supply the user name and
  password of a database user with permission to create a new database. If you
  are installing Drupal on a public web server, then you should create the
  database first, and give access to a less privileged user. The database user
  you specify during installation is the one that will connect to the database
  on every page load.
published_time: '2017-04-25T02:59:29+00:00'
modified_time: '2022-05-07T11:31:05+00:00'
---
If you are installing Drupal on a test site, then you can skip this step. When you run the installation script (next step) just supply the user name and password of a database user with permission to create a new database.

If you are installing Drupal on a public web server, then you should create the database first, and give access to a less privileged user. The database user you specify during installation is the one that will connect to the database on every page load.

This page provides direction for creating your Drupal database using one of the following methods:

* [Web browser-based control panel](#create-a-database-and-user-via-a-browser-based-control-panel) (such as "CPanel" or "Plesk")
* [phpMyAdmin](#create-a-database-and-user-using-phpmyadmin)
* [Using SQL commands](#create-a-database-from-the-command-line) (using the command line)  
   * [Using MySQL/MariaDB commands](#create-a-database-using-mysqlmariadb-commands)  
   * [Using PostgreSQL commands](#create-a-database-using-postgresql)

### Selection of characters in MySQL/MariaDB database name

* If you use capital letters in the database name, they will be converted to lower case.
* Allowed characters are a..z, 0..9, and "\_" (underscore).

### Create a database and user via a browser-based control panel

Most web hosting accounts provide a Web-based control panel to help you administer your site. These tools include easy-to-use features for creating a new database, and for creating a "user" with rights to the database. To create a database using a browser-based control panel consult the documentation or ask your web host service provider.

When you create the user for your database, you may see a page where you can specify the privileges that the user will have for various operations on the database. In most web control panels' "database wizard", if you simply check "All" privileges for the user you create (and then uncheck "Grant" if it is listed as a privilege) your user will be set up correctly.

Take note of the username, password, database name and hostname. (For example, are you installing in `http://example.com`, or in `http://drupal.example.com`, or `http://example.com/blog` etc.?) as you create the database. You will enter these items into fields in your browser when running the installation script

Note that in many cases when creating databases and users via a web-based interface, the username you use to log into your control panel is added as a prefix to the database name and possibly to the database username as well. For example, if you log into your site's control panel as "webadmin" and create a database named "drupaldb" and a user for that database named "dbuser", when running the installation script (next step) the database and user may need to be typed in as "webadmin\_drupaldb" and "webadmin\_dbuser". This is because many hosting accounts are on shared servers, and on one server each database and user name must be unique across all accounts on the server.

### Create a database and user using `phpMyAdmin`

The most secure method to use when creating a database with `phpMyAdmin` is to create a user that has all privileges to the new database, but no privileges to the other databases. This is more secure than using a general username and password for all of your sites on the same server, as it limits access to your databases if someone gets hold of your database logins.

**Note:** This procedure assumes that you have root access to `phpMyAdmin`, and that you're using `phpMyAdmin` 3.5.x.

1. Sign in to `phpMyAdmin` as the root user.
2. Click _Users_, and then click _Add user_.  
**Note:** You can use the root user credential as well.
3. In the _User name_ field, enter the username that you want to use.
4. In the _Host_ field, select _Local_, which is a more secure setting, unless you'll be accessing the database with this user from another server.
5. Enter or generate a password for the user.
6. In the _Database for User_ section, select _Create database with same name and grant all privileges_.
7. Make sure you select `utf8mb4_unicode_ci` or `utf8mb4_general_ci` for COLLATION.  
   * Note: The difference between the two collations is how much faster they are in character comparison and sorting. utf8mb4\_general\_ci is slightly faster however utf8mb4\_unicode\_ci is more accurate for a wider range of characters. If you are unsure use utf8mb4\_unicode\_ci.  
   * Note: If you do not have the option to select COLLATION during this routine, you can change it later. Select your database from the Databases menu, then click Operations. There you will find a section for Collation where you can select the desired setting.
8. Click _Go_ to create the user.

`phpMyAdmin` creates the new database with the same name as the user account. If you want to have a different name for the database and the user:

1. Click _Databases_, and then click the link for the database that you want to rename.
2. Click _Operations_.
3. In the _Rename database to_ section, enter the new database name.
4. Click _Go_ in the _Rename database to_ section.

If you need more details about using `phpMyAdmin`, check out [the official wiki](http://wiki.cihar.com/).

Take note of the username, password, database name and hostname. (For example, are you installing in `http://example.com`, or in `http://drupal.example.com`, or `http://example.com/blog`?) as you create the database. You will enter these items into fields in your browser when running the installation script.

In many cases, when creating databases and users using a web interface, the username that you use to sign in to your control panel is added as a prefix to the database name, and possibly to the database username as well. For example, if you sign in to your site's control panel as "webadmin" and create a database named "drupaldb" and a user for that database named "dbuser", when running the installation script the database and user may need to be typed in as "webadmin\_drupaldb" and "webadmin\_dbuser". This is because many hosting accounts are on shared servers, and on one server each database and username must be unique across all accounts on the server.

### Create a database from the command line

If you do not use a Web control panel or are experienced with and prefer to use MySQL, MariaDB or PostgreSQL commands, you can use the information in the following sections.

Additional information about privileges, and instructions to create a database using the command line are available in the `INSTALL.mysql.txt` file for MySQL/MariaDB and in the `INSTALL.pgsql.txt` file for PostgreSQL.

### Create a database using MySQL/MariaDB commands

**Note:** The database should be created with UTF-8 (Unicode) encoding (utf8mb4) and either _the utf8mb4\_unicode\_ci_ or _the utf8mb4\_general\_ci_ collation. The difference between the two collations relates to how fast they are in character comparison and sorting. _utf8mb4\_general\_ci_ is slightly faster however _utf8mb4\_unicode\_ci_ is more accurate for a wider range of characters. If you are unsure use _utf8mb4\_unicode\_ci_.

For information on installing and configuring MySQL see <http://dev.mysql.com/doc/refman/5.7/en/index.html>.

For information on installing and configuring MariaDB, see <https://mariadb.com/kb/en/>.

In the following examples, 'username' is an example MySQL/MariaDB user who will have the `CREATE` and `GRANT` privileges and 'databasename' is the name of the new database. Use the appropriate names for your system.

1. Create a new database for your site. (Change the `username` and `databasename`.)  
```php  
mysql -u username -p -e "CREATE DATABASE databasename CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";  
```  
MySQL/MariaDB prompts for the 'username' database password, and creates the initial database files.
2. Log in and set the access database rights:  
```php  
mysql -u username -p  
```  
MySQL/MariaDB prompts for the 'username' database password.
3. At the MySQL/MariaDB prompt, create the user and set the permissions using the following command (this will create the user and grant privileges):  
```php  
CREATE USER username@localhost IDENTIFIED BY 'password';  
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES ON databasename.* TO 'username'@'localhost' IDENTIFIED BY 'password';  
```  
For newer MySQL versions, the `IDENTIFIED BY 'password';` part of the query is not necessary.  
Be sure to use backticks ( `` ` `` ) around the database name if you used a MySQL or MariaDB escape character (`_` or `%`) in your database name. Additionally, since the underscore character is a wildcard, when you want to use an underscore character as part of a database name, you should specify it as `\_` in the GRANT statement. For example, `drupal_test_account.*` should be `` `drupal\_test\_account`.* `` for security; otherwise the underscores would match any character and could accidentally give access to other similarly named databases.  
Unless the database user/host combination for your Drupal installation has all of the privileges listed above (except possibly CREATE TEMPORARY TABLES, which is currently only used by Drupal core automated tests and some contributed modules), you will not be able to install or run Drupal.  
To be able to restore a database dump created by Drush, you need to add LOCK TABLES privilege to allow execution of `LOCK TABLES` and `UNLOCK TABLES`.  
For further information on the GRANT statement, see [GRANT Statement](https://dev.mysql.com/doc/refman/5.0/en/grant.html).  
   * 'databasename' is the name of your database  
   * 'username' is the username of your MySQL or MariaDB user account  
   * 'localhost' is the host where Drupal is installed  
   * 'password' is the password required for that username
4. If successful, MySQL/MariaDB will reply with:  
> Query OK, 0 rows affected
5. Flush the privileges to make sure the user has the active privileges by typing `FLUSH PRIVILEGES;` in the MySQL terminal.
6. Close the MYSQL/MariaDB terminal by typing `exit`. The server will answer with `Bye`.

### Create a database using PostgreSQL

The database must be created with UTF-8 (Unicode) encoding.

1. **Create a database user**  
 This step is only necessary if you don't already have a user setup (e.g. by your host) or you want to create a new user for use with Drupal only. The following command creates a new user named 'username' (you should substitute this with the desired username), and prompts for a password for that user:  
```php  
createuser --pwprompt --encrypted --no-adduser --no-createdb username  
```  
If everything works correctly, you'll see a `CREATE USER` notice.
2. **Create the database**  
This step is only necessary if you don't already have a database set up (e.g. by your host) or you want to create a new database to use it only with Drupal. The following command creates a new database named "databasename" (you should substitute this with the desired database name), which is owned by previously created "username".  
```php  
createdb --encoding=UNICODE --owner=username databasename  
```  
If everything works correctly, you'll see a `CREATE DATABASE` notice.