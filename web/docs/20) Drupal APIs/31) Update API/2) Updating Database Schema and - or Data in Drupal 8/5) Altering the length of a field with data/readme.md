You cannot change the specification of an existing field when it already has content. The reason is that the content itself might also need to be altered. Consider, if you wanted to decrease the size of a field, but had data that was longer than the new size; or possibly, you wanted to change the field to not allow nulls, while it still had NULL values. Drupal 8 makes the decision to automatically prevent this by checking for schema changes and throwing an exception.

There are some simple changes, though, that this prevents, such as simply increasing the size of a varchar field. Here's an example of how you might do it.

```php
/**
 * Change length of a varchar entity field with data, safe with entity-updates.
 *
 * This updates the storage schema, the database schema, and the last
 * installed schema.
 *
 * The entity schema must also be changed in code in the entities
 * baseFieldDefinitions() or in an alter.
 *
 * @param string $entity_type_id
 *   The entity type.
 * @param string $field_name
 *   The field name to change.
 * @param int $field_length
 *   The new length of the field, must be larger than the previous value.
 */
function db_change_varchar_field($entity_type_id, $field_name, $field_length) {
  /** @var \Drupal\Core\Entity\EntityLastInstalledSchemaRepositoryInterface $schema_repository */
  $schema_repository = \Drupal::service('entity.last_installed_schema.repository');
  /** @var \Drupal\Core\Entity\EntityFieldManager $entity_field_manager */
  $entity_field_manager = \Drupal::service('entity_field.manager');
  $base_field_definitions = $entity_field_manager->getBaseFieldDefinitions($entity_type_id);
  $schema_repository->setLastInstalledFieldStorageDefinition($base_field_definitions[$field_name]);
  $field_storage_definitions = $schema_repository->getLastInstalledFieldStorageDefinitions($entity_type_id);

  // Update the serialized schema property.
  $rc = new \ReflectionClass($field_storage_definitions[$field_name]);
  $schema_property = $rc->getProperty('schema');
  $schema_property->setAccessible(TRUE);
  $schema = $schema_property->getValue($field_storage_definitions[$field_name]);
  $schema['columns']['value']['length'] = $field_length;
  $schema_property->setValue($field_storage_definitions[$field_name], $schema);

  // Update the field definition in the last installed schema repository.
  $schema_repository->setLastInstalledFieldStorageDefinitions($entity_type_id, $field_storage_definitions);

  // Update the storage schema.
  $key_value = \Drupal::keyValue('entity.storage_schema.sql');
  $key_name = $entity_type_id . '.field_schema_data.' . $field_name;
  $storage_schema = $key_value->get($key_name);
  // Update all tables where the field is present.
  foreach ($storage_schema as &$table_schema) {
    $table_schema['fields'][$field_name]['length'] = $field_length;
  }
  $key_value->set($key_name, $storage_schema);

  // Update the database tables where the field is part of.
  $db = Drupal::database();
  foreach ($storage_schema as $table_name => $table_schema) {
    $db->schema()->changeField($table_name, $field_name, $field_name, $table_schema['fields'][$field_name]);
  }
}

```