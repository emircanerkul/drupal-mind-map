**Media entities** are standard Drupal [content entities](http://www.drupal.org/docs/8/api/entity-api/content-entity). And are grouped by **Media type** bundles. Like content types they can have fields added, and their display can be managed via view modes.

Learn about [creating new Media types](https://www.drupal.org/docs/8/core/modules/media/setting-up-and-creating-media-types).

Media entities can be managed via the Media administration page (admin/content/media)

The canonical route for a Media entity is \`/media/{ID}\`, though like other content entities these can be aliased.

However, unlike nodes and most other content entities, the canonical URL for a Media entity, \`/media/{ID}\`, will result in an HTTP 404 error. And not a page that displays the Media entity in question. In most cases this is probably the desired behavior. Media entities are most likely being attached to a page that someone would navigate too, like an Article, and displayed there. Usually you don't want someone to navigate to the Media entity out of context.

This behavior can be configured via the Media module's settings.