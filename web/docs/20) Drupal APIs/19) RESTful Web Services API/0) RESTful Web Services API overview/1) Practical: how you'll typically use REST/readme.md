Typically, you expose entities as REST resources either to build a decoupled Drupal site, to let a native mobile iOS/Android app talk consume/feed a Drupal site, or to integrate with some web service.

<!-- note-warning -->
> WARNING: For further API-First Initiatives issues see here&nbsp;, Accept-header support was removed here&nbsp;- you require the _format= URL argument always.

Configure REST resources

Expose the REST resources you want — see Configuring REST resources above.

The most common use case: interacting with entities. For REST resources exposing entities, the [Entity Access API](/docs/8/api/entity-api/access-on-entities-tbd) determines whether entities can be interacted with. For example, users must have the `access content` permission to be able to `GET` a `Node` entity (view it), and the `create article content`permission to be able to `POST` an `article Node` (create it).  

<!-- note-version -->
> VERSION: Specific version(s)
Before Drupal 8.2, one had to grant REST-specific permissions&nbsp;on top&nbsp;of the necessary entity type-specific permissions. For details, see the change record: "Accessing entities via REST no longer requires additional REST-specific permissions".

Customize a REST resource's formats

By default, the REST module supports `json` and `xml`. If you install core's [HAL](/documentation/modules/hal) module, you can also enable the `hal_json` format. By installing additional modules, you can get access to more formats — see [Serialization API](/developing/api/8/serialization) for details.

Do it via the REST UI module, or modify config directly:

```php
granularity: resource
configuration:
  methods:
    - …
  formats:
    - hal_json
    - xml
    - json
  authentication:
    - …

```

Customize a REST resource's authentication mechanism

In case of an authenticated user and a progressively decoupled Drupal site, you probably want authentication to happen using the cookie that the authenticated user already has.

Do it via the [REST UI contrib module](/project/restui), or modify config directly:

```php
granularity: resource
configuration:
  methods:
    - …
  formats:
    - …
  authentication:
    - cookie

```

Creating REST resource plugins

Look at `\Drupal\dblog\Plugin\rest\resource\DBLogResource` for a trivial example, `\Drupal\rest\Plugin\rest\resource\EntityResource` for a very complex example.

Note that scaffolding code for custom modules can be automatically generated with a [Drupal Console](https://drupalconsole.com/) [command](https://hechoendrupal.gitbooks.io/drupal-console/content/en/commands/generate-plugin-rest-resource.html) via:

```php
drupal generate:plugin:rest:resource
```

What is _very important_ is the [@RestResource](https://api.drupal.org/api/drupal/core%21modules%21rest%21src%21Annotation%21RestResource.php/class/RestResource/8) annotation's `uri_paths` definition (which takes [link relation types](https://api.drupal.org/api/drupal/core%21core.link%5Frelation%5Ftypes.yml/8.3.x) as keys, and partial URIs as values). If you don't specify any, Drupal will automatically generate URI paths (and hence URLs) based on the plugin ID. If your plugin ID is `fancy_todo`, you'll end up with `GET|PATCH|DELETE /fancy_todo/{id}` and `POST /fancy_todo`. But, often, you'll want to specify your own paths: a `canonical` URI path (for example `/todo/{todo_id}`), but also a `https://www.drupal.org/link-relations/create` URI path (for example `/todo`). For example:

```php
 *   uri_paths = {
 *     "canonical" = "/todo/{id}",
 *     "https://www.drupal.org/link-relations/create" = "/todo"
 *   }

```

This also allows you to version your API, and create different implementations for each version:

```php
 *   uri_paths = {
 *     "canonical" = "/api/v1/todo/{id}",
 *     "https://www.drupal.org/link-relations/create" = "/api/v1/todo"
 *   }

```