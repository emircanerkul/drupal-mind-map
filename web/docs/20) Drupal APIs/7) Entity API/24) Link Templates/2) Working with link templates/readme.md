[Drupal\\Core\\Entity\\EntityType](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityType.php/class/EntityType/9.4.x) has methods

* `getLinkTemplate()`
* `getLinkTemplates()`
* `hasLinkTemplate()`
* `setLinkTemplate()`

Example: `config_translation_entity_type_alter()` adds the `config-translation-overview` link to config entity types:

```php
      /** @var \Drupal\Core\Entity\EntityTypeInterface $entity_type */
      if ($entity_type->hasLinkTemplate('edit-form')) {
        $entity_type->setLinkTemplate('config-translation-overview', $entity_type->getLinkTemplate('edit-form') . '/translate');
      }
```

[Drupal\\Core\\Entity\\EntityBase](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityBase.php/class/EntityBase/9.4.x) has methods

* `linkTemplates()`
* `hasLinkTemplate()`
* `toUrl()`
* `toLink()`

The first method is used in `EntityBase::toUrl()`. Notice how the route name is derived from the link relation type:

```php
    // The links array might contain URI templates set in annotations.
    $link_templates = $this->linkTemplates();

    // ...

    if (isset($link_templates[$rel])) {
      $route_parameters = $this->urlRouteParameters($rel);
      $route_name = "entity.{$this->entityTypeId}." . str_replace(['-', 'drupal:'], ['_', ''], $rel);
      $uri = new Url($route_name, $route_parameters);
    }
```

 The second method is used in `Drupal\user\RoleListBuilder::getDefaultOperations()` when adding the "Edit permissions" link to each row of `/admin/people/roles`:

```php
    if ($entity->hasLinkTemplate('edit-permissions-form')) {
      $operations['permissions'] = [
        'title' => t('Edit permissions'),
        'weight' => 20,
        'url' => $entity->toUrl('edit-permissions-form'),
      ];
    }
```

The last two methods accept a link relation type as an optional parameter (defaults to `'canonical'`). The snippet above has an example of `toUrl()`. A common use of `toLink()` is to generate the edit link for a log message. For example, `Drupal\taxonomy\TermForm::save()` has

```php
    $edit_link = $term->toLink($this->t('Edit'), 'edit-form')->toString();
```