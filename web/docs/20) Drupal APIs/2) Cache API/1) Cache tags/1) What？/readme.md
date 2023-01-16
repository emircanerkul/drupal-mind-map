A cache tag is a string.

Cache tags are passed around in sets (order doesn't matter) of strings, so they are typehinted to `string[]`. They're sets because a single cache item can depend on (be invalidated by) many cache tags.

### Syntax

By convention, they are of the form `thing:identifier` — and when there's no concept of multiple instances of a thing, it is of the form `thing`. The only rule is that it cannot contain spaces.

There is no strict syntax.

Examples:

* `node:5` — cache tag for `Node` entity 5 (invalidated whenever it changes)
* `user:3` — cache tag for `User` entity 3 (invalidated whenever it changes)
* `node_list` — list cache tag for `Node` entities (invalidated whenever any `Node` entity is updated, deleted or created, i.e., when a listing of nodes may need to change). Applicable to any entity type in following format: `{entity_type}_list`.
* `node_list:article` — list cache tag for the `article` bundle (content type). Applicable to any entity + bundle type in following format: `{entity_type}_list:{bundle}`.
* `config:node_type_list` — list cache tag for `Node type` entities (invalidated whenever any content types are updated, deleted or created). Applicable to any entity type in the following format: `config:{entity_bundle_type}_list`.
* `config:system.performance` — cache tag for the `system.performance` configuration
* `library_info` — cache tag for asset libraries

### Common cache tags

The data that Drupal manages fall in 3 categories:

1. entities — these have cache tags of the form `<entity type ID>:<entity ID>` as well as `<entity type ID>_list` and `<entity type ID>_list:<bundle>` to invalidate lists of entities. Config entity types use the cache tag of the underlying configuration object.
2. configuration — these have cache tags of the form `config:<configuration name>`
3. custom (for example `library_info`)

Drupal provides cache tags for entities & configuration automatically — see the [Entity base class](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21Entity.php/class/Entity/8) and the [ConfigBase base class](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Config%21ConfigBase.php/class/ConfigBase/8). (All specific entity types and configuration objects inherit from those.)

Although many entity types follow a predictable cache tag format of `<entity type ID>:<entity ID>`, third-party code shouldn't rely on this. Instead, it should retrieve cache tags to invalidate for a single entity using its`::getCacheTags()` method, e.g., `$node->getCacheTags()`, `$user->getCacheTags()`, `$view->getCacheTags()` etc.

In addition, it may be necessary to invalidate listings-based caches that depend on data from the entity in question (e.g., refreshing the rendered HTML for a listing when a new entity for it is created): this can be done using `EntityTypeInterface::getListCacheTags()`, then invalidating any returned by that method along with the entity's own tag(s). Starting with Drupal 8.9 ([change notice](https://www.drupal.org/node/3107058)), entities with bundles also automatically have a more specific cache tag that includes their bundle, to allow for more targetted invalidation of lists.

It is also possible to define custom, more specific cache tags based on values that entities have, for example a term reference field for lists that show entities that have a certain term. Invalidation for such tags can be put in custom presave/delete entity hooks:

```php
function yourmodule_node_presave(NodeInterface $node) {
  $tags = [];
  if ($node->hasField('field_category')) {
    foreach ($node->get('field_category') as $item) {
      $tags[] = 'mysite:node:category:' . $item->target_id;
    }
  }
  if ($tags) {
    Cache::invalidateTags($tags);
  }
}

```

These tags can then be used in code and in views using the contributed module [Views Custom Cache Tag.](https://www.drupal.org/project/views%5Fcustom%5Fcache%5Ftag)

Note: There is currently no API to get per-bundle and more specific cache tags from an entity or other object. That is because it is not the entity that decided which list cache tags are relevant for a certain list/query, that depends on the query itself. Future Drupal core versions will likely improve out of the box support for per-bundle cache tags and for example integrate them into the entity query builder and views.