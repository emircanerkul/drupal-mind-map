---
url: https://www.drupal.org/docs/drupal-apis/entity-api/working-with-the-entity-api
description: >-
  Covers generic entity API methods Entity::create() Entity::load()
  Entity::save() Entity::id() Entity::bundle() Entity::isNew() Entity::label()
  More specific API's will be covered in specific chapters. TODO: Link once
  created. Check // Make sure that an object is an entity. if ($entity
  instanceof \Drupal\Core\Entity\EntityInterface) { } // Make sure it's a
  content entity. if ($entity instanceof
  \Drupal\Core\Entity\ContentEntityInterface) { } // or: if
  ($entity->getEntityType()->getGroup() == 'content') { } // Get the entity type
  or the entity type ID.
published_time: '2013-10-30T21:25:20+00:00'
modified_time: '2022-05-10T21:15:59+00:00'
---
**Covers generic entity API methods**

* `Entity::create()`
* `Entity::load()`
* `Entity::save()`
* `Entity::id()`
* `Entity::bundle()`
* `Entity::isNew()`
* `Entity::label()`

More specific API's will be covered in specific chapters. TODO: Link once created.

### Check

```php
// Make sure that an object is an entity.
if ($entity instanceof \Drupal\Core\Entity\EntityInterface) {
}

// Make sure it's a content entity.
if ($entity instanceof \Drupal\Core\Entity\ContentEntityInterface) {
}
// or:
if ($entity->getEntityType()->getGroup() == 'content') {
}

// Get the entity type or the entity type ID.
$entity->getEntityType();
$entity->getEntityTypeId();

// Make sure it's a node.
if ($entity instanceof \Drupal\node\NodeInterface) {
}

// Using entityType() works better when the needed entity type is dynamic.
$needed_type = 'node';
if ($entity->getEntityTypeId() == $needed_type) {
}

```

### Get information from an entity/ Entity methods

A number of generic methods are available to get information from an entity, like the ID, bundle, revision ID and so on. See the documentation on the [EntityInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityInterface.php/interface/EntityInterface/8) for details.

```php
// Get the ID.
$entity->id();

// Get the bundle.
$entity->bundle();

// Check if the entity is new.
$entity->isNew();

// Get the label of an entity. Replacement for entity_label().
$entity->label();

// Get the URL object for an entity.
$entity->toUrl();

// Get internal path, path alias if exists, for an entity.
$entity->toUrl()->toString();

// Create a duplicate that can be saved as a new entity.
$duplicate = $entity->createDuplicate();

```

### Create

```php
// Use the entity type manager (recommended).
$node = \Drupal::entityTypeManager()->getStorage('node')->create(['type' => 'article', 'title' => 'Another node']);


// You can use the static create() method if you know the entity class.
$node = Node::create([
  'type' => 'article',
  'title' => 'The node title',
]);

```

Settings defaults from the field type annotation are only added for missing top level keys; no deep merge is performed.

Avoid using the static `Entity::create()` method in object oriented code. Instead use [dependency injection](/docs/8/api/services-and-dependency-injection/services-and-dependency-injection-in-drupal-8) to inject the entity type manager and create the entity with `$this->entityTypeManager->getStorage($entity_type)->create()`. This ensures that the code is properly decoupled and can be unit tested.

For discoverability within an IDE you can assign the entity storage interface to a property as well. For example, `$this->nodeStorage = $this->entityTypeManager->getStorage('node'); `To create an entity, you can then use `$this->nodeStorage->create()`.

### Load

```php
// Using the storage controller (recommended).
$entity = \Drupal::entityTypeManager()->getStorage($entity_type)->load(1);

// Use the static method
$node = Node::load(1);

// Load multiple entities, also exists as entity_load_multiple().
$entities = \Drupal::entityTypeManager()->getStorage($entity_type)->loadMultiple([1, 2, 3]);

// Load entities by their property values.
$entities = \Drupal::entityTypeManager()->getStorage('node')->loadByProperties(['type' => 'article']);
```

To update an entity, load it and then save it with your changes.

Avoid using the static `Entity::load()` method in object oriented code. Instead use [dependency injection](/docs/8/api/services-and-dependency-injection/services-and-dependency-injection-in-drupal-8) to inject the entity type manager and load the entity with `$this->entityTypeManager->getStorage($entity_type)->load($entity_id)`. This ensures that the code is properly decoupled and can be unit tested.

### Save

```php
// To save an entity.
$entity->save();

```

That works for both new and existing entities, the entity itself keeps track whether it's new or not. By default, for content entities, that depends on whether it has an ID or not. To save an entity that has an ID as a new entity (e.g, when importing something), the isNew flag can be enforced.

```php
// The following will attempt to insert a new node with the ID 5, this will fail if that node already exists.
$node->nid->value = 5;
$node->enforceIsNew(TRUE);
$node->save();

```

### Delete

```php
// Delete a single entity.
$entity = \Drupal::entityTypeManager()->getStorage('node')->load(1);
$entity->delete();

// Delete multiple entities at once.
\Drupal::entityTypeManager()->getStorage($entity_type)->delete([$id1 => $entity1, $id2 => $entity2]);

```

### Query

```php
$nodeStorage = \Drupal::entityTypeManager()->getStorage('node');
    
$ids = $nodeStorage->getQuery()
  ->condition('status', 1)
  ->condition('type', 'article') // type = bundle id (machine name)
  //->sort('created', 'ASC') // sorted by time of creation
  //->pager(15) // limit 15 items
  ->execute();

$articles = $nodeStorage->loadMultiple($ids);
```

### Access control

The `access()` method can be used to check who can do what with an entity. The method supports different operations, the standard operations are `view`, `update`, `delete` and `create`, create is a somewhat special, see below.

Access checks are forwarded to the access controller. (TODO: Add link)

```php
// Check view access of an entity.
// This defaults to check access for the currently logged in user.
if ($entity->access('view')) {

}

// Check if a given user can delete an entity.
if ($entity->access('delete', $account)) {

}

```

When checking create access, there is usually no entity yet. Creating one just to check if someone would be able to create it is a costly operation. Therefore, create access for those should be checked directly on the access controller.

```php
\Drupal::entityTypeManager()->getAccessControlHandler('node')->createAccess('article');

```

If there is already an entity, `$entity->access('create')` works too, which just forwards to the createAccess() method, the same way other operations forward to the access() method on the access controller.

**NOTE:** Some online guides use \\Drupal::entityManager(), but it is deprecated in 8.x it will be removed in 9.x. So you can use `\Drupal::entityTypeManager()` instead of \\Drupal::entityManager().