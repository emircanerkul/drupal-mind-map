The method of applying the constraint differs depending on whether or not the field is a base field on an Entity you've defined in a custom module.

### Method 1 - Adding a Constraint to a Base Field of an Entity Type Defined by Your Module

This method is used to add a constraint to a base field on an entity type defined by code in your custom module. Constraints on base fields are added using [BaseFieldDefinition::addConstraint() ](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldConfigBase.php/function/FieldConfigBase%3A%3AaddConstraint/8.3.x)in overrides of [ContentEntityBase::baseFieldDefinitions()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21ContentEntityBase.php/function/ContentEntityBase%3A%3AbaseFieldDefinitions/8.3.x):

```php
public static function baseFieldDefinitions(EntityTypeInterface $entityType) {
  $fields['unique_number'] = BaseFieldDefinition::create('integer')
    ->setLabel(t('Unique Number'))
    // Use the ID of the constraint as it was defined
    // in the annotation of the constraint definition
    ->addConstraint('UniqueInteger');

  return $fields;
}

```

### Method 2 - Adding a Constraint to An Entity Type Defined by Your Module

This method is used to add a constraint to an entity type defined by code in your custom module. Add the constraint to the entity type annotation on the entity class. If the constraint plugin is configurable, the options can be set there. If it is not, specify an empty array with {}.

```php
/**
 * @MyEntityType(
 *   constraints = {
 *     "GroupContentCardinality" = {}
 *   }
 * )
 */

```

### Method 3 - Adding a Constraint to a Bundle Field of an Entity Type Not Defined by Your Module

This method is used to add constraints to a field on an entity type defined in a module other than your own. In \[MODULENAME\].module, implement either  
[hook\_entity\_base\_field\_info\_alter() ](http://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21entity.api.php/function/hook%5Fentity%5Fbase%5Ffield%5Finfo%5Falter/8.3.x)(for base fields defined by the entity), or   
[hook\_entity\_bundle\_field\_info\_alter](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21entity.api.php/function/hook%5Fentity%5Fbundle%5Ffield%5Finfo%5Falter/8.3.x)() (for fields added to a bundle of the entity):

```php
/**
 * Implements hook_entity_bundle_field_info_alter().
 */
function MODULENAME_entity_bundle_field_info_alter(&$fields, \Drupal\Core\Entity\EntityTypeInterface $entity_type, $bundle) {
  if ($entity_type->id() === 'the_entity_type' && $bundle === 'the_bundle') {
    if (isset($fields['unique_number'])) {
      // Use the ID as defined in the annotation of the constraint definition
      $fields['unique_number']->addConstraint('UniqueInteger', []);
    }
  }
}

```

### Method 4 - Adding a Constraint to an Entity Type Not Defined by Your Module

This method is used to add constraints to an entity type defined in a module other than your own. In \[MODULENAME\].module, implement [hook\_entity\_type\_alter() ](http://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21entity.api.php/function/hook%5Fentity%5Ftype%5Falter/8.5.x):

```php
/**
 * Implements hook_entity_type_alter().
 *
 * @param array $entity_types
 */
function MODULENAME_entity_type_alter(array &$entity_types) {
  // Add validation constraint to the node entity
  $entity_types['node']->addConstraint('special_validation_constraint');
}

```