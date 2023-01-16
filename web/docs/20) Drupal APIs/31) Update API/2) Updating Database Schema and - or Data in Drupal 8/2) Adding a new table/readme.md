Here's an example of what to put into your hook\_update\_N() function to add a new database table:

```php
  $spec = [
    'description' => 'My description',
    'fields' => [
      'myfield1' => [
        'description' => 'Myfield1 description.',
        'type' => 'varchar',
        'length' => 255,
        'not null' => TRUE,
        'default' => '',
      ],
      'myfield2' => [
        'description' => 'Myfield2 description',
        'type' => 'text',
        'not null' => TRUE,
      ],
    ],
    'primary key' => ['myfield1'],
  ]; 
 $schema = Database::getConnection()->schema();
 $schema->createTable('mytable2', $spec);

```