Here's an example of what to put into your hook\_update\_N() function to add a new column to an existing database table:

```php
  $spec = [
    'type' => 'varchar',
    'description' => "New Col",
    'length' => 20,
    'not null' => FALSE,
  ]; 
 $schema = Database::getConnection()->schema();
 $schema->addField('mytable1', 'newcol', $spec);

```