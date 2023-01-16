The field definition has to be repeated from the entity class, as the definition in the entity class can't be relied on during the update process:

```php
function example_update_8701() {
  $field_storage_definition = BaseFieldDefinition::create('boolean')
    ->setLabel(t('Revision translation affected'))
    ->setDescription(t('Indicates if the last edit of a translation belongs to current revision.'))
    ->setReadOnly(TRUE)
    ->setRevisionable(TRUE)
    ->setTranslatable(TRUE);

  \Drupal::entityDefinitionUpdateManager()
    ->installFieldStorageDefinition('revision_translation_affected', 'block_content', 'block_content', $field_storage_definition);
}

```