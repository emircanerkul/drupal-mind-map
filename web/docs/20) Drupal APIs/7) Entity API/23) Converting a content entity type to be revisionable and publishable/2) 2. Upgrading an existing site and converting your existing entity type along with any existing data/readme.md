If you are updating the code for an existing site and your entity type already contains some data, you will also need to provide an upgrade path in addition to the changes explained in part 1\. The upgrade path is composed of two things

\- An update function that needs to add all the new base fields for your entity type  
\- A post\_update function that will handle migrating the existing data to the new revisionable table structure

Let's start with the first part, the update function, by looking at a complete example implementation. This code will go in the `my_module.install` file.

```php
/**
 * Implements hook_update_dependencies().
 */
function my_module_update_dependencies() {
  // The update function that adds the status field must run after
  // content_translation_update_8400() which fixes NULL values for the
  // 'content_translation_status' field.
  if (\Drupal::moduleHandler()->moduleExists('content_translation')) {
    $dependencies['my_module'][8400] = [
      'content_translation' => 8400,
    ];

    return $dependencies;
  }
}

/**
 * Add the 'published' and revisionable metadata fields to my_entity.
 */
function my_module_update_8400() {
  $definition_update_manager = \Drupal::entityDefinitionUpdateManager();

  // Add the published entity key and revisionable metadata fields to the
  // my_entity entity type.
  $entity_type = $definition_update_manager->getEntityType('my_entity');
  $entity_type_id = $entity_type->id();

  $entity_keys = $entity_type->getKeys();
  $entity_keys['published'] = 'status';
  $entity_type->set('entity_keys', $entity_keys);

  $revision_metadata_keys = [
    'revision_user' => 'revision_user',
    'revision_created' => 'revision_created',
    'revision_log_message' => 'revision_log_message'
  ];
  $entity_type->set('revision_metadata_keys', $revision_metadata_keys);

  $definition_update_manager->updateEntityType($entity_type);

  // Add the status field.
  $status = BaseFieldDefinition::create('boolean')
    ->setLabel(t('Publishing status'))
    ->setDescription(t('A boolean indicating the published state.'))
    ->setRevisionable(TRUE)
    ->setTranslatable(TRUE)
    ->setDefaultValue(TRUE);

  $has_content_translation_status_field = \Drupal::moduleHandler()->moduleExists('content_translation') && $definition_update_manager->getFieldStorageDefinition('content_translation_status', $entity_type_id);
  if ($has_content_translation_status_field) {
    $status->setInitialValueFromField('content_translation_status');
  }
  else {
    $status->setInitialValue(TRUE);
  }
  $definition_update_manager->installFieldStorageDefinition('status', $entity_type_id, $entity_type_id, $status);

  // Add the revision metadata fields.
  $revision_created = BaseFieldDefinition::create('created')
    ->setLabel(t('Revision create time'))
    ->setDescription(t('The time that the current revision was created.'))
    ->setRevisionable(TRUE);
  $definition_update_manager->installFieldStorageDefinition('revision_created', $entity_type_id, $entity_type_id, $revision_created);

  $revision_user = BaseFieldDefinition::create('entity_reference')
    ->setLabel(t('Revision user'))
    ->setDescription(t('The user ID of the author of the current revision.'))
    ->setSetting('target_type', 'user')
    ->setRevisionable(TRUE);
  $definition_update_manager->installFieldStorageDefinition('revision_user', $entity_type_id, $entity_type_id, $revision_user);

  $revision_log_message = BaseFieldDefinition::create('string_long')
    ->setLabel(t('Revision log message'))
    ->setDescription(t('Briefly describe the changes you have made.'))
    ->setRevisionable(TRUE)
    ->setDefaultValue('')
    ->setDisplayOptions('form', [
      'type' => 'string_textarea',
      'weight' => 25,
      'settings' => [
        'rows' => 4,
      ],
    ]);
  $definition_update_manager->installFieldStorageDefinition('revision_log_message', $entity_type_id, $entity_type_id, $revision_log_message);

  // Uninstall the 'content_translation_status' field if needed.
  $database = \Drupal::database();
  if ($has_content_translation_status_field) {
    // First we have to remove the field data.
    $database->update($entity_type->getDataTable())
      ->fields(['content_translation_status' => NULL])
      ->execute();

    // A site may have disabled revisionability for this entity type.
    if ($entity_type->isRevisionable()) {
      $database->update($entity_type->getRevisionDataTable())
        ->fields(['content_translation_status' => NULL])
        ->execute();
    }

    $content_translation_status = $definition_update_manager->getFieldStorageDefinition('content_translation_status', $entity_type_id);
    $definition_update_manager->uninstallFieldStorageDefinition($content_translation_status);
  }

  return t('@entity_type_label has been converted to revisionable and publishable.', ['@entity_type_label' => $entity_type->getLabel()]);
}
```

And now let's go through and explain each part of the code.

```php
function my_module_update_dependencies() {
  // The update function that adds the status field must run after
  // content_translation_update_8400() which fixes NULL values for the
  // 'content_translation_status' field.
  if (\Drupal::moduleHandler()->moduleExists('content_translation')) {
    $dependencies['my_module'][8400] = [
      'content_translation' => 8400,
    ];

    return $dependencies;
  }
}
```

This `hook_update_dependencies()` implementation is only needed if your site uses the Content Translation module. However, if you are using this guide to update the entity type of a contributed module, you must include this snippet so that all the users of that module are covered, even if they are not using the Content Translation module.

```php
  // Add the published entity key and revisionable metadata fields to the
  // my_entity entity type.
  $entity_type = $definition_update_manager->getEntityType('my_entity');
  $entity_type_id = $entity_type->id();

  $entity_keys = $entity_type->getKeys();
  $entity_keys['published'] = 'status';
  $entity_type->set('entity_keys', $entity_keys);

  $revision_metadata_keys = [
    'revision_user' => 'revision_user',
    'revision_created' => 'revision_created',
    'revision_log_message' => 'revision_log_message'
  ];
  $entity_type->set('revision_metadata_keys', $revision_metadata_keys);

  $definition_update_manager->updateEntityType($entity_type);
```

Here we update the entity type definition with the new entity keys and revision metadata keys described in the first part of this guide. Note that we are \*not\* adding the `revision` entity key and the revision tables here because those will be handled automatically by the post\_update function detailed at the end of the guide.

```php
  // Add the status field.
  $status = BaseFieldDefinition::create('boolean')
    ->setLabel(t('Publishing status'))
    ->setDescription(t('A boolean indicating the published state.'))
    ->setRevisionable(TRUE)
    ->setTranslatable(TRUE)
    ->setDefaultValue(TRUE);

  $has_content_translation_status_field = \Drupal::moduleHandler()->moduleExists('content_translation') && $definition_update_manager->getFieldStorageDefinition('content_translation_status', $entity_type_id);
  if ($has_content_translation_status_field) {
    $status->setInitialValueFromField('content_translation_status');
  }
  else {
    $status->setInitialValue(TRUE);
  }
  $definition_update_manager->installFieldStorageDefinition('status', $entity_type_id, $entity_type_id, $status);
```

After updating the entity type definition, we are adding the new base fields one by one, starting with the `status` field defined in the `published` entity key. Adding this new field in an existing site has an interesting particularity, it has to inherit the values of another field, `content_translation_status`, a field that is added automatically by the Content Translation module and tracks the published state of each translation of an entity.

```php
  // Add the revision metadata fields.
  $revision_created = BaseFieldDefinition::create('created')
    ->setLabel(t('Revision create time'))
    ->setDescription(t('The time that the current revision was created.'))
    ->setRevisionable(TRUE);
  $definition_update_manager->installFieldStorageDefinition('revision_created', $entity_type_id, $entity_type_id, $revision_created);

  $revision_user = BaseFieldDefinition::create('entity_reference')
    ->setLabel(t('Revision user'))
    ->setDescription(t('The user ID of the author of the current revision.'))
    ->setSetting('target_type', 'user')
    ->setRevisionable(TRUE);
  $definition_update_manager->installFieldStorageDefinition('revision_user', $entity_type_id, $entity_type_id, $revision_user);

  $revision_log_message = BaseFieldDefinition::create('string_long')
    ->setLabel(t('Revision log message'))
    ->setDescription(t('Briefly describe the changes you have made.'))
    ->setRevisionable(TRUE)
    ->setDefaultValue('')
    ->setDisplayOptions('form', [
      'type' => 'string_textarea',
      'weight' => 25,
      'settings' => [
        'rows' => 4,
      ],
    ]);
  $definition_update_manager->installFieldStorageDefinition('revision_log_message', $entity_type_id, $entity_type_id, $revision_log_message);
```

Here we are simply adding the three revision metadata fields, with no special requirements or initial values.

```php
  // Uninstall the 'content_translation_status' field if needed.
  $database = \Drupal::database();
  if ($has_content_translation_status_field) {
    // First we have to remove the field data.
    $database->update($entity_type->getDataTable())
      ->fields(['content_translation_status' => NULL])
      ->execute();

    // A site may have disabled revisionability for this entity type.
    if ($entity_type->isRevisionable()) {
      $database->update($entity_type->getRevisionDataTable())
        ->fields(['content_translation_status' => NULL])
        ->execute();
    }

    $content_translation_status = $definition_update_manager->getFieldStorageDefinition('content_translation_status', $entity_type_id);
    $definition_update_manager->uninstallFieldStorageDefinition($content_translation_status);
  }
```

Remember the `status` field that we added above and its need to inherit values from a `content_translation_status` field, if available. Well, at this point in the update process, the `status` field has already been added with proper initial values, so we can go ahead and remove the `content_translation_status` field because it is not needed anymore.

```php
return t('@entity_type_label has been converted to revisionable and publishable.', ['@entity_type_label' => $entity_type->getLabel()]);
```

This line is just needed for returning a user-friendly message that will be displayed at the end of the database update process.

Finally, the last thing we need is to actually migrate the old data into the new revisionable table schema. This is accomplished by a post\_update hook which goes into a `my_module.post_update.php` file in your module folder, and looks like this:

```php
use \Drupal\Core\Entity\Sql\SqlContentEntityStorageSchemaConverter;

/**
 * Update my_entity to be revisionable.
 */
function my_module_post_update_make_my_entity_revisionable(&$sandbox) {
  $schema_converter = new SqlContentEntityStorageSchemaConverter(
    'my_entity',
    \Drupal::entityTypeManager(),
    \Drupal::entityDefinitionUpdateManager(),
    \Drupal::service('entity.last_installed_schema.repository'),
    \Drupal::keyValue('entity.storage_schema.sql'),
    \Drupal::database()
  );

  $schema_converter->convertToRevisionable(
    $sandbox,
    [
      'changed',
      'some_other_field',
    ]
  );
}
```

There's not much explanation needed here because `SqlContentEntityStorageSchemaConverter` was designed and written to take care of everything for you. The only thing worth mentioning is this array of field names:

```php
    [
      'changed',
      'some_other_field',
    ]
```

This is where we specify the list of fields for which we enabled revision support, as described in the first part of this guide.