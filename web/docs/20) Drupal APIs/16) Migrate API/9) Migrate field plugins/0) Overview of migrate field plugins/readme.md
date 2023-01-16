---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-field-plugins/overview-of-migrate-field-plugins
description: >-
  Field plugins provide a direct upgrade solution from Drupal 6/7 fields to
  Drupal 8/9 equivalents. They are responsible for handling the migration of
  custom fields and add processes to migrations for entities that have fields.
  When you write custom migrate field plugins they: usually extend
  Drupal\migrate_drupal\Plugin\migrate\field\FieldPluginBase. must be annotated
  with \Drupal\migrate_drupal\Annotation\MigrateField. must be in the namespace
  sub directory Plugin\migrate\field under the namespace of the module that
  defines them, for example MYMODULE/src/Plugin/migrate/field.
published_time: '2020-08-13T19:12:48+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Field plugins provide a direct upgrade solution from Drupal 6/7 fields to Drupal 8/9 equivalents. They are responsible for handling the migration of custom fields and add processes to migrations for entities that have fields.

When you write custom migrate field plugins they:

* usually extend [Drupal\\migrate\_drupal\\Plugin\\migrate\\field\\FieldPluginBase.](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21field%21FieldPluginBase.php/class/FieldPluginBase/8.9.x)
* must be annotated with[ \\Drupal\\migrate\_drupal\\Annotation\\MigrateField.](http://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Annotation%21MigrateField.php/class/MigrateField/8.9.x)
* must be in the namespace sub directory **Plugin\\migrate\\field** under the namespace of the module that defines them, for example `MYMODULE/src/Plugin/migrate/field`.
* must have class names end with **Field**, otherwise they will not be detected.

[List of core field plugins](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21field%21FieldPluginBase.php/class/uses/FieldPluginBase/8.9.x).

### MigrateField example

The following example is the field plugin for Drupal 7 text fields.

```php
@MigrateField(
  id = "d7_text",
  type_map = {
    "text" = "text",
    "text_long" = "text_long",
    "text_with_summary" = "text_with_summary"
  },
  core = {7},
  source_module = "text",
  destination_module = "text",
)
```

### MigrateField annotation

* The `id` property often matches the source field type. It does not in this example.
* The `source_module` is the name of the module on the source site that provides the field type.
* The `destination_module` is the name of the module on the destination Drupal 8/9 that provides the field type.
* The `core` property is the Drupal version of the source site the provides the field type. If it the same for both Drupal 6 and Drupal 7 use {6, 7}.
* The 'type\_map' is an array in the format 'd6/d7\_field\_name' => 'd8/d9\_field\_name'.