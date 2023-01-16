---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples
description: >-
  Migrate API destination plugin indicates what kind of Drupal entities are
  created. Content entities: Nodes, users, taxonomy terms and files are examples
  of content entities. Configuration entities: Content type and field
  definitions are examples of configuration entities. Destination entity type is
  typically defined as entity:entity_type, for example entity:node Full list of
  other destination plugins provided by the core Migrate module. For a list of
  destination plugins available on your Drupal installation, you can use:
  \Drupal::service('plugin.manager.migrate.destination')->getDefinitions();
published_time: '2017-10-19T19:09:04+00:00'
modified_time: '2020-07-21T13:03:11+00:00'
---
Migrate API destination plugin indicates what kind of Drupal entities are created.

* **Content entities:** Nodes, users, taxonomy terms and files are examples of _content_ entities.
* **Configuration entities:** Content type and field definitions are examples of _configuration_ entities.

Destination entity type is typically defined as `entity:entity_type`, for example `entity:node`

[Full list of other destination plugins provided by the core Migrate module](https://api.drupal.org/api/drupal/namespace/Drupal!migrate!Plugin!migrate!destination/8.5.x).

For a list of destination plugins available on your Drupal installation, you can use:

```php
\Drupal::service('plugin.manager.migrate.destination')->getDefinitions();
```