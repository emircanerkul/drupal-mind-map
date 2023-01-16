**Note:** As entities are complex data, they have to follow the ComplexDataInterface. From a Typed Data perspective, all contained typed data elements in a complex data object are properties. This limitation/naming enforcement might still be removed.

```php
// Checks whether an entity has a certain field.
$entity->hasField('field_tags');

// Returns an array with named keys for all fields and their
// definitions. For example the ‘image’ field.
$field_definitions = $entity->getFieldDefinitions();

// Returns an array with name keys for all field item properties and their
// definitions of the image field. For example the ‘file_id’ and ‘alt’ properties.
$property_definitions = $entity->image->getFieldDefinition()->getPropertyDefinitions();

// Returns only definition for the ‘alt’ property.
$alt_definition = $entity->image->getFieldDefinition()->getPropertyDefinition('alt');

// Entity field definitions can also be requested from the entity manager,
// the following returns all fields that are available for all bundles.
\Drupal::service('entity_field.manager')->getFieldStorageDefinitions($entity_type);

// The following returns fields that are available for the given bundle.
\Drupal::service('entity_field.manager')->getFieldDefinitions($entity_type, $bundle);

```