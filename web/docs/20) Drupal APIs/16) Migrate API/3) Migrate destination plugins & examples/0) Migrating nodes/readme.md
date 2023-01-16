---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples/migrating-nodes
description: >-
  Nodes can be migrated to Drupal 8 by using the entity:node destination plugin.
  The text formatting of the body field is defaulted to Basic HTML in this
  example. For more information, refer to the API documentation of the
  EntityContentBase destination plugin.
published_time: '2018-01-20T20:18:56+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Nodes can be migrated to Drupal 8 by using the `entity:node` destination plugin. 

The text formatting of the body field is defaulted to _Basic HTML_ in this example. For more information, refer to the API documentation of the [EntityContentBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21destination%21EntityContentBase.php/class/EntityContentBase) destination plugin.

```php
id: custom_article_migration
label: 'Custom article migration'
source:
  plugin: embedded_data
  data_rows:
    -
      id: 1
      title: 'Page 1 title'
      content: '<p>Page 1 content</p>'
    -
      id: 2
      title: 'Page 2 title'
      content: '<p>Page 2 content</p>'
  ids:
    id:
      type: integer
process:
  nid: id
  title: title
  body: content
destination:
  plugin: entity:node
  default_bundle: article
```