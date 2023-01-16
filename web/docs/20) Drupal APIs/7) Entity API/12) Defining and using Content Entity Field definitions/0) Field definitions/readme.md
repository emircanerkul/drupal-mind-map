Entity types define their base fields in a static method on the entity class. Base fields are non-configurable fields that always exist on a given entity type, like the node title or created and changed dates. The entity manager complements those with configurable and non-configurable fields provided by other modules by invoking `hook_entity_field_info()` and `hook_entity_field_info_alter()`. This is also how fields configured via Field UI are added in as well.(These hooks no longer exist according to the API).

Field definitions are simple objects implementing the [FieldDefinitionInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Field!FieldDefinitionInterface.php/interface/FieldDefinitionInterface/8) whereas base fields are usually created with the [BaseFieldDefinition](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21BaseFieldDefinition.php/class/BaseFieldDefinition/8.4.x) class and configurable fields directly implement the interface with the respective configuration entities (aka Field and FieldInstance).  
Field definitions are also the place to define [validation constraints](https://drupal.org/node/2015613) for field items or field item properties. All field type plugin implementations can be used. (This interface and class no longer exist).

Fields are currently always a list of field items, which means that the FieldItem class that is defined as the type will be wrapped in a FieldItemList class that represents a list of those field items ([#1869574: Support single valued Entity fields](https://www.drupal.org/project/drupal/issues/1869574 "Status: Needs work") might change this).

All fields (including base fields) can also have widgets and formatters to display and edit them ([#1988612: Apply formatters and widgets to rendered entity base fields, starting with node.title](https://www.drupal.org/project/drupal/issues/1988612 "Status: Closed (fixed)"), TBD).

### Base fields

### 

The following is a shortened, exemplary list of field definitions of the node entity type.

```php
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\node\NodeInterface;

class Node implements NodeInterface {

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions($entity_type) {
    // The node id is an integer, using the IntegerItem field item class.
    $fields['nid'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('Node ID'))
      ->setDescription(t('The node ID.'))
      ->setReadOnly(TRUE);

    // The UUID field uses the uuid_field type which ensures that a new UUID will automatically be generated when an entity is created.
    $fields['uuid'] = BaseFieldDefinition::create('uuid')
      ->setLabel(t('UUID'))
      ->setDescription(t('The node UUID.'))
      ->setReadOnly(TRUE);

    // The language code is defined as a language_field, which, again, ensures that a valid default language
    // code is set for new entities.
    $fields['langcode'] = BaseFieldDefinition::create('language')
      ->setLabel(t('Language code'))
      ->setDescription(t('The node language code.'));

    // The title is StringItem, the default value is an empty string and defines a property constraint for the
    // value to be at most 255 characters long.
    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setDescription(t('The title of this node, always treated as non-markup plain text.'))
      ->setRequired(TRUE)
      ->setTranslatable(TRUE)
      ->setSettings(array(
        'default_value' => '',
        'max_length' => 255,
      ));

    // The uid is an entity reference to the user entity type, which allows to access the user id with $node->uid->target_id
    // and the user entity with $node->uid->entity. NodeInterface also defines getAuthor() and getAuthorId(). (@todo: check owner vs. revisionAuthor)
    $fields['uid'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('User ID'))
      ->setDescription(t('The user ID of the node author.'))
      ->setSettings(array(
        'target_type' => 'user',
        'default_value' => 0,
      ));

    // The changed field type automatically updates the timestamp every time the
    // entity is saved.
    $fields['changed'] = BaseFieldDefinition::create('changed')
      ->setLabel(t('Changed'))
      ->setDescription(t('The time that the node was last edited.'))
    return $fields;
  }
}

```

### Multivalue fields

To specify the maximum number of items allowed for the field call [setCardinality()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21BaseFieldDefinition.php/function/BaseFieldDefinition%3A%3AsetCardinality/8.2.x) method.  
For instance, to define the field which can have 3 item call: 

```php
->setCardinality(3);
```

To define the field with unlimited values call: 

```php
->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED);
```

The example of the definition of the multivalue field for referring to the 'user' entities: 

```php
$fields['my_field'] = BaseFieldDefinition::create('entity_reference')
  ->setLabel(t('The label of the field'))
  ->setDescription(t('The description of the field.'))
  ->setRevisionable(TRUE)
  ->setSetting('target_type', 'user')
  ->setSetting('handler', 'default')
  ->setTranslatable(TRUE)
  ->setDisplayOptions('view', [
    'label' => 'hidden',
    'type' => 'author',
    'weight' => 0,
  ])
  ->setDisplayOptions('form', [
    'type' => 'entity_reference_autocomplete',
    'weight' => 5,
    'settings' => [
      'match_operator' => 'CONTAINS',
      'size' => '60',
      'autocomplete_type' => 'tags',
      'placeholder' => '',
    ],
  ])
  ->setDisplayConfigurable('form', TRUE)
  ->setDisplayConfigurable('view', TRUE);
  ->setRequired(TRUE)
  ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED);
```

An entity can also provide fields that only exist for a specific bundle or alter them by the bundle. For example, the node title can have a different label for each bundle. To provide alterations by the bundle, the base field definition must be cloned before changes are made, as it would otherwise change the base field definition and affect all bundles.

```php
use Drupal\node\Entity\NodeType;
use Drupal\Core\Entity\EntityTypeInterface;

  /**
   * {@inheritdoc}
   */
  public static function bundleFieldDefinitions(EntityTypeInterface $entity_type, $bundle, array $base_field_definitions) {
    $node_type = NodeType::load($bundle);
    $fields = array();
    if (isset($node_type->title_label)) {
      $fields['title'] = clone $base_field_definitions['title'];
      $fields['title']->setLabel($node_type->title_label);
    }
    return $fields;
  }

```

### [Field types](#field-types)

Drupal core provides a [list of field types](https://www.drupal.org/docs/drupal-apis/entity-api/fieldtypes-fieldwidgets-and-fieldformatters) that can be used for base fields. Additionally, modules can provide additional field types that can be used too.

### Configurable fields

Additional fields can be registered in `hook_entity_base_field_info()` and `hook_entity_bundle_field_info()`. The following examples add base and by bundle fields.

```php
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityTypeInterface;

/**
 * Implements hook_entity_base_field_info().
 */
function path_entity_base_field_info(EntityTypeInterface $entity_type) {
  if ($entity_type->id() === 'taxonomy_term' || $entity_type->id() === 'node') {
    $fields['path'] = BaseFieldDefinition::create('path')
      ->setLabel(t('The path alias'))
      ->setComputed(TRUE);

    return $fields;
  }
}

/**
 * Implements hook_entity_bundle_field_info().
 */
function field_entity_bundle_field_info(EntityTypeInterface $entity_type, $bundle, array $base_field_definitions) {
  if ($entity_type->isFieldable()) {
    // Configurable fields, which are always attached to a specific bundle, are
    // added 'by bundle'.
    return Field::fieldInfo()->getBundleInstances($entity_type->id(), $bundle);
  }
}

```

Corresponding alter hooks exist for each of the above.

### Field storage

If your field doesn't have any special requirements Entity Field API can take care of the database storage and update the database schemas accordingly. This is the default for fields that are not marked as being a computed field (`setComputed(TRUE)`), or has specifically indicated to provide its own field storage (`setCustomStorage(TRUE)`).

Say you want to add a new base field to all Node entities that contains a simple boolean value to indicate whether the content is "highlighted".

```php
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;

/**
 * Implements hook_entity_base_field_info().
 */
function MYMODULE_entity_base_field_info(EntityTypeInterface $entity_type) {
  $fields = array();

  // Add a 'Highlight' base field to all node types.
  if ($entity_type->id() === 'node') {
    $fields['highlight'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Highlight'))
      ->setDescription(t('Whether or not the node is highlighted.'))
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE)
      ->setDisplayOptions('form', array(
        'type' => 'boolean_checkbox',
        'settings' => array(
          'display_label' => TRUE,
        ),
      ))
      ->setDisplayConfigurable('form', TRUE);
  }

  return $fields;
}

```

~~Now all it takes is to visit `update.php` to run the database updates, and an additional 'highlight' column will be added to the tables holding the node data.~~ @see: this [change record](/node/2554097)  
I've tried so many times and visit update.php won't add column to the database, but run

```php
  \Drupal::entityTypeManager()->clearCachedDefinitions();
  \Drupal::entityDefinitionUpdateManager()->applyUpdates();

```

can have the column created in database. Note: this will also run any updates that may be pending for other field definitions.

**Update**: The code above will not work as of Drupal 8.7

See the example from: [this change record](https://www.drupal.org/node/3034742)

**Installing a new field storage definition**

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

If your custom module is adding a new field, it will be added automatically when the module is enabled, and removed when the module is uninstalled.

If your module is already installed you can run `drush entity-updates.` However, it might be possible that the new custom fields do not appear in the form. This is because the fields are disable. Go to Manage form display through the UI of your custom entity and enable them.

Another option is to write a hook\_update\_N to update the field definitions you can do something like:

```php
/**
 * Add in highlight field to all nodes.
 */
function MYMODULE_update_8001() {
  $entity_type = \Drupal::service('entity_type.manager')->getDefinition('node');
  \Drupal::entityDefinitionUpdateManager()->updateEntityType($entity_type);
}
```

Or:

```php
/**
 * Add 'revision_translation_affected' field to 'node' entities.
 */
function node_update_8001() {
  // Install the definition that this field had in
  // \Drupal\node\Entity\Node::baseFieldDefinitions()
  // at the time that this update function was written. If/when code is
  // deployed that changes that definition, the corresponding module must
  // implement an update function that invokes
  // \Drupal::entityDefinitionUpdateManager()->updateFieldStorageDefinition()
  // with the new definition.
  $storage_definition = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Revision translation affected'))
      ->setDescription(t('Indicates if the last edit of a translation belongs to current revision.'))
      ->setReadOnly(TRUE)
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE);

  \Drupal::entityDefinitionUpdateManager()
    ->installFieldStorageDefinition('revision_translation_affected', 'node', 'node', $storage_definition);
}
```

See <https://www.drupal.org/node/2554097> for more details and examples.