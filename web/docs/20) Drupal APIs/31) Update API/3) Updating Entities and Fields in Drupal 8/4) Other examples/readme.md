#### Updating a base field type

If you need to update the type of a custom BaseFieldDefinition the general process is:

1. Store the existing values for the field  
   * Include revision values if the field is revisionable - for brevity and clarity an example of this is not included here, see [https://drupal.stackexchange.com/questions/311803/how-to-change-a-custom...](https://drupal.stackexchange.com/questions/311803/how-to-change-a-custom-entity-field-type-with-revisions/311804#311804) for more information.
2. Clear out the values from the field (required to uninstall a field)
3. Uninstall the field
4. Create a new BaseFieldDefinition
5. Install the new definition
6. Restore the values from step 1

For example, changing the type from \`boolean\` to \`string\`:

```php
$database = \Drupal::database();
$transaction = $database->startTransaction();

$entity_type_manager = \Drupal::entityTypeManager();
$bundle_of = 'node';

$storage = $entity_type_manager->getStorage($bundle_of);
$bundle_definition = $entity_type_manager->getDefinition($bundle_of);
// Sometimes the primary key isn't 'id'. e.g. 'eid' or 'item_id'.
$id_key = $bundle_definition->getKey('id');
// If there is no data table defined then use the base table.
$table_name = $storage->getDataTable() ?: $storage->getBaseTable();
$definition_manager = \Drupal::entityDefinitionUpdateManager();

// Store the existing values.
$status_values = $database->select($table_name)
  ->fields($table_name, [$id_key, 'status_field'])
  ->execute()
  ->fetchAllKeyed();

// Clear out the values.
$database->update($table_name)
  ->fields(['status_field' => NULL])
  ->execute();

// Uninstall the field.
$field_storage_definition = $definition_manager->getFieldStorageDefinition('status_field', $bundle_of);
$definition_manager->uninstallFieldStorageDefinition($field_storage_definition);

// Create a new field definition.
$new_status_field = BaseFieldDefinition::create('string')
  ->setLabel(t('Status field'))
  ->setDescription(t('The status - either no, yes or skip.'))
  ->setDefaultValue('no')
  ->setRevisionable(FALSE)
  ->setTranslatable(FALSE);

// Install the new definition.
$definition_manager->installFieldStorageDefinition('status_field', $bundle_of, $bundle_of, $new_status_field);

// Restore the values.
$value_map = [
  '1' => 'yes',
  '0' => 'no',
];
foreach ($status_values as $id => $value) {
  $database->update($table_name)
    ->fields(['status_field' => $value_map[$value]])
    ->condition($id_key, $id)
    ->execute();
}

// Commit transaction.
unset($transaction);

```

#### Deleting a base field type

If you need to delete a custom field from a BaseFieldDefinition the general process is:

1. Delete the code from the EntityClass::BaseFieldDefinition
2. Delete the field from `entity_keys` in entity definition notation if it is defined there
3. Uninstall the field
4. Run cron

For example:

```php
  $update_manager = \Drupal::entityDefinitionUpdateManager();
  $definition = $update_manager->getFieldStorageDefinition('name_of_old_field_to_delete', 'entity_type');
  $update_manager->uninstallFieldStorageDefinition($definition);


```

Note that while the field data will be gone from the database, the field widget may still show up on entity edit pages until you've run cron.

See the change record on [Write update functions for entity schema updates, automation removed](https://www.drupal.org/node/2554097) for other similar examples.