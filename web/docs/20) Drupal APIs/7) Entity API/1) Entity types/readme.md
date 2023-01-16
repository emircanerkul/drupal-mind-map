---
url: https://www.drupal.org/docs/drupal-apis/entity-api/entity-types
description: >-
  Drupal 7 - entities were generic stdClass objects. Drupal 8 - entities are now
  specifically typed objects, with each entity type defining a class that will
  be used for instances of the given entity. Requirements Entity classes must be
  placed in the Entity sub-namespace of the module that provides the entity
  type, e.g. \Drupal\[module_name]\Entity. This means entity class PHP files may
  be found in a module's src/Entity directory. The docblock for the class must
  contain an EntityType annotation that defines the metadata for entities of
  that type.
published_time: '2013-10-29T23:25:54+00:00'
modified_time: '2019-06-14T12:07:27+00:00'
---
> * **Drupal 7** \- entities were generic stdClass objects.
> * **Drupal 8** \- entities are now specifically typed objects, with each entity type defining a class that will be used for instances of the given entity.

**Requirements**  
Entity classes must be placed in the `Entity` sub-namespace of the module that provides the entity type, e.g. `\Drupal\[module_name]\Entity`. This means entity class PHP files may be found in a module's `src/Entity` directory.

The docblock for the class must contain an `EntityType` annotation that defines the metadata for entities of that type. These include things like the entity type's label, controllers, tables, etc. For a documented list of all the available metadata properties, refer to the [\\Drupal\\Core\\Entity\\Annotation\\EntityType](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21Annotation%21EntityType.php/class/EntityType/8) class.

### Naming

Entity type names should be prefixed with the module name if the entity type and module name aren't the same. Prefixing the entity type's class itself is not required since it lives within the namespace of the defining module, provided it is meaningful enough on its own. For example, the entity type for taxonomy terms is named `taxonomy_term` and the class name is `Drupal\taxonomy\Entity\Term`.

### Interfaces

Drupal 8 recommends you [type hint](http://php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration) functions and methods with interfaces instead of classes. For example, the generic entity storage hooks type hint with `EntityInterface` as in `hook_entity_insert(EntityInterface $entity)` and the node specific storage hooks type hint with `NodeInterface` as in `hook_node_insert(NodeInterface $node)`.

Entity fields / properties are often very short, storage-centric and not very self-descriptive. Additionally, content entities don't use defined properties for their fields (including base fields like the node title) at all.

Therefore, the recommended approach is to provide an Interface with documented method names. A few rules to follow when doing so:

* Methods usually have a get/set/is or similar prefix: getSomething(), setSomething($value), isSomething().
* Only add methods for things that other code is supposed to change. The last changed date of nodes ($node->changed) isn't supposed to be changed, so there is `$node->getChangedTime()` but no `$node->setChangedTime()` method.
* Use self-descriptive method names, for example, the method to access `$node->status` is called `$node->isPublished()`.

### Discoverability

To find out which entity types a module provides, refer to the classes in the Entity sub-namespace of that module that have an @EntityType annotation, which also contains the name in the `id` annotation key.

When trying to find where a given entity type is defined, the first thing to look for is the prefix of the entity type. If a module doesn't follow that naming convention, then it can be found by searching for `id = "$type"`. If the class or interface is known instead of the entity type, then the namespace of that indicates where it is coming from.

### Example

`core/modules/node/src/Entity/Node.php`:

```php
namespace Drupal\node\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Session\AccountInterface;
use Drupal\node\NodeInterface;
use Drupal\user\UserInterface;

/**
 * Defines the node entity class.
 *
 * @ContentEntityType(
 *   id = "node",
 *   label = @Translation("Content"),
 *   bundle_label = @Translation("Content type"),
 *   handlers = {
 *     "storage" = "Drupal\node\NodeStorage",
 *     "storage_schema" = "Drupal\node\NodeStorageSchema",
 *     "view_builder" = "Drupal\node\NodeViewBuilder",
 *     "access" = "Drupal\node\NodeAccessControlHandler",
 *     "views_data" = "Drupal\node\NodeViewsData",
 *     "form" = {
 *       "default" = "Drupal\node\NodeForm",
 *       "delete" = "Drupal\node\Form\NodeDeleteForm",
 *       "edit" = "Drupal\node\NodeForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\node\Entity\NodeRouteProvider",
 *     },
 *     "list_builder" = "Drupal\node\NodeListBuilder",
 *     "translation" = "Drupal\node\NodeTranslationHandler"
 *   },
 *   base_table = "node",
 *   data_table = "node_field_data",
 *   revision_table = "node_revision",
 *   revision_data_table = "node_field_revision",
 *   translatable = TRUE,
 *   list_cache_contexts = { "user.node_grants:view" },
 *   entity_keys = {
 *     "id" = "nid",
 *     "revision" = "vid",
 *     "bundle" = "type",
 *     "label" = "title",
 *     "langcode" = "langcode",
 *     "uuid" = "uuid",
 *     "status" = "status",
 *     "uid" = "uid",
 *   },
 *   bundle_entity_type = "node_type",
 *   field_ui_base_route = "entity.node_type.edit_form",
 *   common_reference_target = TRUE,
 *   permission_granularity = "bundle",
 *   links = {
 *     "canonical" = "/node/{node}",
 *     "delete-form" = "/node/{node}/delete",
 *     "edit-form" = "/node/{node}/edit",
 *     "version-history" = "/node/{node}/revisions",
 *     "revision" = "/node/{node}/revisions/{node_revision}/view",
 *   }
 * )
 */
class Node extends ContentEntityBase implements NodeInterface {
  // ...
}

```

To get a complete picture of the entities in Drupal 8 we can review the following diagram. This represent the entity classes. To view open in a new tab:  
[![Entities diagram](/files/classDrupal_Entities.png)](/files/classDrupal%5FEntities.png)