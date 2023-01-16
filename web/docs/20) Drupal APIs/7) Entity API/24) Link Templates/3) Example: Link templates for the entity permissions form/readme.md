The Node module adds a permissions form for the Article content type at `/admin/structure/types/manage/article/permissions` with these annotations in `core/modules/node/src/Entity/NodeType.php`:

```php
 *   handlers = {
 *     ...
 *     "route_provider" = {
 *       "permissions" = "Drupal\user\Entity\EntityPermissionsRouteProvider",
 *     },
 *     "list_builder" = "Drupal\node\NodeTypeListBuilder",
 *   },
 *   ...
 *   links = {
 *     "edit-form" = "/admin/structure/types/manage/{node_type}",
 *     "delete-form" = "/admin/structure/types/manage/{node_type}/delete",
 *     "entity-permissions-form" = "/admin/structure/types/manage/{node_type}/permissions",
 *     "collection" = "/admin/structure/types",
 *   },
```

The real work is done in the User module, starting with `core/modules/user/user.link_relation_types.yml`:

```yaml
# User extension relation types.
# See https://tools.ietf.org/html/rfc5988#section-4.2.
entity-permissions-form:
  uri: https://drupal.org/link-relations/permissions
  description: A form where bundle-related permissions can be managed.
```

The route is defined in EntityPermissionsRouteProvider, which sets the form builder Drupal\\user\\Form\\EntityPermissionsForm as the page controller.