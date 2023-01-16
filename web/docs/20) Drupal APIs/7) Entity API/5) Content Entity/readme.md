---
url: https://www.drupal.org/docs/drupal-apis/entity-api/content-entity
description: >-
  This cheat sheet provides an overview of the frequently used methods, classes,
  and interfaces for content entities. Content entities inherit many of their
  behavior from entities. See Working with the Entity API for these generic
  functions. Manipulating field values Create custom fields using the
  baseFieldDefinitions() method for the content entity Define a custom field
  called custom_field Store a custom entity instance in a local variable
  ($custom_entity) Store some data Example code $custom_field_value =
  $custom_entity->custom_field->value; // Manipulate the field data.
published_time: '2013-11-25T10:39:26+00:00'
modified_time: '2021-06-16T08:33:14+00:00'
---
This [cheat sheet](/files/drupal-content-entity-8.0.pdf "Drupal 8 content entity cheat sheet") provides an overview of the frequently used methods, classes, and interfaces for content entities.

[![](/files/d8-entity-thumb.png)](/files/drupal-content-entity-8.0.pdf "Drupal 8 content entity cheat sheet")

Content entities inherit many of their behavior from entities. See [Working with the Entity API](/node/2124403) for these generic functions.

### Manipulating field values

* Create custom fields using the `baseFieldDefinitions()` method for the content entity
* Define a custom field called _custom\_field_
* Store a custom entity instance in a local variable (`$custom_entity`)
* Store some data

#### Example code

```php
$custom_field_value = $custom_entity->custom_field->value;
// Manipulate the field data.
// Store the field data back into the entity field.
$custom_entity->custom_field->value = $custom_field_value;
// Save the entity.
$custom_entity->save();

```

#### Content entities examples

* node
* comment
* user