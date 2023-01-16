---
url: https://www.drupal.org/docs/8/api/entity-api/structure-of-an-entity-annotation
description: >-
  Entity types, both configuration and content entity are defined using
  annotation. An example, from core/modules/user/src/Entity/User.php: ... /** *
  Defines the user entity class. * * The base table name here is plural, despite
  Drupal table naming standards, * because "user" is a reserved word in many
  databases.
published_time: '2014-02-28T12:10:04+00:00'
modified_time: '2020-02-10T21:23:44+00:00'
---
Entity types, both configuration and content entity are defined using annotation.

An example, from core/modules/user/src/Entity/User.php:

```php
...
/**
 * Defines the user entity class.
 *
 * The base table name here is plural, despite Drupal table naming standards,
 * because "user" is a reserved word in many databases.
 *
 * @ContentEntityType(
 *   id = "user",
 *   label = @Translation("User"),
 *   label_collection = @Translation("Users"),
 *   label_singular = @Translation("user"),
 *   label_plural = @Translation("users"),
 *   label_count = @PluralTranslation(
 *     singular = "@count user",
 *     plural = "@count users",
 *   ),
 *   handlers = {
 *     "storage" = "Drupal\user\UserStorage",
 *     "storage_schema" = "Drupal\user\UserStorageSchema",
 *     "access" = "Drupal\user\UserAccessControlHandler",
 *     "list_builder" = "Drupal\user\UserListBuilder",
 *     "views_data" = "Drupal\user\UserViewsData",
 *     "route_provider" = {
 *       "html" = "Drupal\user\Entity\UserRouteProvider",
 *     },
 *     "form" = {
 *       "default" = "Drupal\user\ProfileForm",
 *       "cancel" = "Drupal\user\Form\UserCancelForm",
 *       "register" = "Drupal\user\RegisterForm"
 *     },
 *     "translation" = "Drupal\user\ProfileTranslationHandler"
 *   },
 *   admin_permission = "administer users",
 *   base_table = "users",
 *   data_table = "users_field_data",
 *   translatable = TRUE,
 *   entity_keys = {
 *     "id" = "uid",
 *     "langcode" = "langcode",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/user/{user}",
 *     "edit-form" = "/user/{user}/edit",
 *     "cancel-form" = "/user/{user}/cancel",
 *     "collection" = "/admin/people",
 *   },
 *   field_ui_base_route = "entity.user.admin_form",
 *   common_reference_target = TRUE
 * )
 */
class User extends ContentEntityBase implements UserInterface {
...

```

Configuration entities use "@ConfigEntityType" and extend the `Drupal\Core\Config\Entity\ConfigEntityBase` class. Content entities use "@ContentEntityType" and extend the `Drupal\Core\Config\Entity\ContentEntityBase` class.

Available to be used in entity type annotations are all values of type "property" as listed in the [EntityType API documentation](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!EntityType.php/class/EntityType/8).