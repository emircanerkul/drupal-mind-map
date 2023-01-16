Updates should be tested. Ideally, they would be tested manually, and there would also be an automated test.

### Testing updates manually

To test your update code manually, or to see whether you need to write your own update code for a data model change:

* Start with a site that is running your old code, and add some data related to this code (content, configuration, etc.).
* Apply the code change or patch to the site.
* Visit the update.php page and run any available updates.
* Manually try using the data in the relevant parts of the UI (view the content, view pages that are generated from the configuration, etc.). See if it all works without error messages.

### Writing automated tests for updates

This is covered in the [child page about automated tests](/node/2536494).

example -:

```php
/**
 * Create new database table by update hook{custom_table}.
 */
function my_module_update_8206() {

  $database = \Drupal::database();
  $schema = $database->schema();
  $table_name = 'custom_table';

  $table_schema = [
    'description' => 'Use for capturing payment data',
    'fields' => [
      'id' => [
        'description' => 'Id.',
        'type' => 'serial',
        'unsigned' => TRUE,
        'not null' => TRUE,
      ],
      'club_id' => [
        'description' => 'Club id',
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
        'default' => 0,
      ],
      'month' => [
        'description' => 'Month',
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
        'default' => 0,
      ],
      'year' => [
        'description' => 'Year',
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
        'default' => 0,
      ],
     'payment_status' => [         
        'description' => '0 = not paid; 1 = paid ( Payment Status)',
        'type' => 'int',
        'size' => 'tiny',
        'not null' => TRUE,
        'default' => 0,
      ],
      'reason' => [
        'description' => 'Delay Reason',
        'type' => 'text',
        'null' => TRUE,
      ],
         
   ],
    'primary key' => ['id'],
  ];     

 $schema->createTable($table_name, $table_schema);

}

```