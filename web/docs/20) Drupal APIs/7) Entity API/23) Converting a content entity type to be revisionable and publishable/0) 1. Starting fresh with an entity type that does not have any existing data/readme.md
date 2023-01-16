In terms of code complexity, this is the easiest scenario to deal with and there are just a few things that you need to take care of:

\- The entity type definition needs to have the following entity keys defined: `revision` and `published`.

<!-- note-warning -->
> WARNING: Value of revision key is the entity field name. Make sure the value&nbsp;does not conflict with any existing fields i.e. "revision" = "revision" would throw an exception.

\- The entity type definition needs to include an entry for the revision metadata fields.  
  
\- The entity type definition needs to have the `revision_table` specified. If your entity type is translatable, it needs to define the `revision_data_table` as well.  
  
\- The entity class should extend from `EditorialContentEntityBase` and use its `baseFieldDefinitions()` method in order to have all the standard base fields ('id', 'revision', 'published', etc.) by default.

\- When you enable revision support for an entity type, you most likely want some base fields to become revisionable as well. This is as simple as calling `setRevisionable(TRUE)` on the base field definition.

That's it! The steps above will make your entity type revisionable and publishable so you can now apply editorial workflows to it. Here's how your entity class should look like after completing all the steps:

```php
/**
 * Defines the my_entity entity class.
 *
 * @ContentEntityType(
 *
 *   ...
 *
 *   revision_table = "my_entity_revision",
 *   revision_data_table = "my_entity_field_revision",
 *
 *   ...
 *
 *   entity_keys = {
 *     ...
 *
 *     "revision" = "revision_id",
 *     "published" = "status",
 *
 *     ...
 *   },
 *
 *   ...
 *
 *   revision_metadata_keys = {
 *     "revision_user" = "revision_user",
 *     "revision_created" = "revision_created",
 *     "revision_log_message" = "revision_log_message",
 *   },
 *
 *   ...
 * )
 */
class MyEntity extends EditorialContentEntityBase implements MyEntityInterface {

  ...

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    // Add your custom base fields to the $fields array.
    $fields['changed'] = BaseFieldDefinition::create('changed')
      ->setLabel(t('Changed'))
      ->setDescription(t('The time that the term was last edited.'))
      ->setTranslatable(TRUE);
      
    // Enable revision support for the 'changed' field.
    $fields['changed']->setRevisionable(TRUE);

    return $fields;
  }

  ...

}
```