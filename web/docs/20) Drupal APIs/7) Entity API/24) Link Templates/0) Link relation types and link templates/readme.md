The `links` annotation in an entity definition specifies an array of link templates. The keys are link relation types, and the values are URL paths with placeholders to be replaced.

For example, the annotations for `Drupal\media\Entity\Media` include

```php
 *   links = {
 *     "add-page" = "/media/add",
 *     "add-form" = "/media/add/{media_type}",
 *     "canonical" = "/media/{media}/edit",
 *     "collection" = "/admin/content/media",
 *     "delete-form" = "/media/{media}/delete",
 *     "delete-multiple-form" = "/media/delete",
 *     "edit-form" = "/media/{media}/edit",
 *     "revision" = "/media/{media}/revisions/{media_revision}/view",
 *   }
```

Instead of defining link templates statically in the entity annotations, they can also be defined dynamically using `setLinkTemplate()`. See the section "Working with link templates" below.

In the link templates, the placeholders `{media_type}`, `{media}`, and `{media_revision}` are replaced with the media type (bundle), media ID, and revision ID. See the API doc [EntityType::getLinkTemplates()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityType.php/function/EntityType%3A%3AgetLinkTemplates/9.4.x) for more information.

The link relation types `canonical`, `delete-form`, and many more are declared in [core.link\_relation\_types.yml](https://api.drupal.org/api/drupal/core!core.link%5Frelation%5Ftypes.yml/9.4.x). A module can define additional link relation types. For example, [workflows.link\_relation\_types.yml](https://api.drupal.org/api/drupal/core!modules!workflows!workflows.link%5Frelation%5Ftypes.yml/9.4.x) defines `add-state-form` and `add-transition-form`:

```php
add-state-form:
  uri: https://drupal.org/link-relations/add-state-form
  description: A form where a state can be created.
add-transition-form:
  uri: https://drupal.org/link-relations/add-transition-form
  description: A form where a transition can be created.
```

Using `drush`, you can generate a list of all the available link relation types:

```php
drush php:eval 'print_r(array_keys(Drupal::service("plugin.manager.link_relation_type")->getDefinitions()))'
```