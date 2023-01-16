Here are examples of what to put into your hook\_update\_N() function to add a new index or primary key to an existing database table:

```php
 $spec = [
  // Example partial specification for a table:
  'fields' => [
    'myfield1' => [
      'description' => 'An example field',
      'type' => 'varchar',
      'length' => 32,
      'not null' => TRUE,
      'default' => '',
    ],
  ],
  'indexes' => [
    'myfield1_normal_index' => ['myfield1'],
  ],
 ];
 $fields = ['myfield1'];
 $schema = Database::getConnection()->schema();
 // A normal index.
 $schema->addIndex('mytable', 'myfield1_normal_index', $fields, $spec);

 // A primary key.
 $schema->addPrimaryKey('mytable', $fields);
 // A unique key.
 $schema->addUniqueKey('mytable', 'myfield1_unique_key', $fields);

```