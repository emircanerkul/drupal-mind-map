---
url: https://www.drupal.org/docs/drupal-apis/entity-api/handlers
description: >-
  While entities represent a piece of data, handlers are responsible for acting
  on and with them. Handlers of an entity can be accessed through the
  entity_type.manager service. Different types of handler are responsible for
  different functionality. The handler type is identified by a string, used in
  the entity type annotation to set the handler class for the entity type, and
  when retrieving the handler: $handler =
  \Drupal::entityTypeManager()->getHandler($entity_type_id, $handler_type); Some
  handler types have a dedicated retrieval method on EntityTypeManager.
published_time: '2013-11-25T10:36:26+00:00'
modified_time: '2021-04-22T13:46:44+00:00'
---
While entities represent a piece of data, handlers are responsible for acting on and with them. Handlers of an entity can be accessed through the [entity\_type.manager service](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityTypeManager.php/class/EntityTypeManager).

Different types of handler are responsible for different functionality. The handler type is identified by a string, used in the entity type annotation to set the handler class for the entity type, and when retrieving the handler:

```php
$handler = \Drupal::entityTypeManager()->getHandler($entity_type_id, $handler_type);

```

Some handler types have a dedicated retrieval method on EntityTypeManager.

Some handler types, such as 'storage' and 'access' will default to a standard implementation if none is defined in the entity type. Other types of handler will simply be empty if the entity type does not define it.

Handler type string are arbitrary, and modules are free to define their own handler types.

Note: Handlers were previously known as Controllers. See [Change Record](https://www.drupal.org/node/2200867).

### Storage

The storage handler implements [EntityStorageInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityStorageInterface.php/interface/EntityStorageInterface) and will default to [ContentEntityStorageBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21ContentEntityStorageBase.php/class/ContentEntityStorageBase), a handler that implements standard methods for crud operations.

Example usage:

```php
/** @var \Drupal\node\NodeStorageInterface $storage */
$storage = \Drupal::entityTypeManager()->getStorage('node');

$storage->load(1);
$storage->loadMultiple([1, 2, 3]);
// Equivalent to $node->save().
$storage->save($node);
$new_node = $storage->create(['title' => 'My awesome node']);

```

### Access Control

The access handler implements [EntityAccessControlHandlerInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityAccessControlHandlerInterface.php/interface/EntityAccessControlHandlerInterface) and will default to [EntityAccessControlHandler](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityAccessControlHandler.php/class/EntityAccessControlHandler).

```php
/** @var \Drupal\Core\Entity\EntityAccessControlHandlerInterface $access_control */
$access_control = \Drupal::entityTypeManager()->getAccessControlHandler('node');
```

### List Builder

The list builder implements [EntityListBuilderInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityListBuilderInterface.php/interface/EntityListBuilderInterface) and will default to [EntityListBuilder](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityListBuilder.php/class/EntityListBuilder)

### View Builder

The view builder implements [EntityViewBuilderInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityViewBuilderInterface.php/interface/EntityViewBuilderInterface) and will default to [EntityViewBuilder](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityViewBuilder.php/class/EntityViewBuilder)

Example usage:

```php
$nid = 1;
$entity_type = 'node';
$view_mode = 'teaser';

// Load node.
$node = \Drupal::entityTypeManager()
  ->getStorage($entity_type)
  ->load($nid);
  
// Translate, if necessary.
$lang_code = \Drupal::languageManager()->getCurrentLanguage()->getId();
$node = $node->getTranslation($lang_code);

// Build a render array for the node.
$build = \Drupal::entityTypeManager()
  ->getViewBuilder($entity_type)
  ->view($node, $view_mode);
```

### Form

The form handler implements [EntityFormInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityFormInterface.php/interface/EntityFormInterface). Since [EntityForm](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityForm.php/class/EntityForm) already implements that interface, you can extend it to provide classes for such high level operations as add, edit, and delete. You would then provide user access to those operations through routing.yml files. See the Drupal Examples project configuration entity example, src/Entity/Robot.php.