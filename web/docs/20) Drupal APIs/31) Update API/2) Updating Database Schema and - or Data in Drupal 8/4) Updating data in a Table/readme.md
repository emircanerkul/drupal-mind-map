Sometimes your data model changes mean that you need to update the data within a table, rather than (or in addition to) changing the database schema itself. Here's an example of what you'd put in your hook\_update\_N() function in this case:

```php
$schema = Database::getConnection()->query(  [your query goes here] );

```

You could also use other [Connection class methods](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Database!Connection.php/class/Connection/8) such as `update()`.