Routes for these URL paths can be defined statically (in a `.routing.yml` file) or dynamically in a route provider. In either case, the route name should be `"entity.$entity_type_id.$link_type"`, where `$link_type` is the link relation type with `'-'` replaced by `'_'`.

For example, `media.routing.yml` defines the route for one of the links shown in the first section:

```yaml
entity.media.revision:
  path: '/media/{media}/revisions/{media_revision}/view'
  defaults:
    _controller: '\Drupal\Core\Entity\Controller\EntityViewController::viewRevision'
    _title_callback: '\Drupal\Core\Entity\Controller\EntityController::title'
  options:
    ...
```

The entity annotations (`handlers.route_provider`) can specify one or more route provider. Even though `"route_provider"` is singular, more than one is allowed. Looking at `Drupal\media\Entity\Media` again, the annotations include

```php
 *   handlers = {
 *     ...
 *     "route_provider" = {
 *       "html" = "Drupal\media\Routing\MediaRouteProvider",
 *     },
 *     ...
 *   },
```

The routes for three more of the links in the first section are defined in `Drupal\media\Routing\MediaRouteProvider::getRoutes()`. That class extends `Drupal\Core\Entity\Routing\AdminHtmlRouteProvider`.

For more information, see the [Entity Routes](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!entity.api.php/group/entity%5Fapi/9.4.x#sec%5Froutes) section in the API pages for the Entity API.