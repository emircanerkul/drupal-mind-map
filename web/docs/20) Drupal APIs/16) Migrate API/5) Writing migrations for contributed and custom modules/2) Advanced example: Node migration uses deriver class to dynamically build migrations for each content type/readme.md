The source Drupal 6 or Drupal 7 site will have the content types the site builder had created and all content types have their own fields. 

* There might be for example a content type _Car_ with fields _make_ and _model_.
* And content type _Driver_ with fields _name_ and _age_.

What we need to achieve is obviously to migrate all Drupal 7 Car nodes to Drupal 8 as Car nodes and all Drupal 7 Driver nodes to Drupal 8 as Driver nodes. If we inspect the migrations at admin/config/development/configuration/single/export after the migrations have been generated (select 'Migration' as 'Configuration type'), we can see that there is a separate migration generated for Car nodes and Driver nodes and these two migrations have mappings for the correct fields. Let’s have a look at the `core/modules/node/migrations/d7_node.yml` to investigate how did this magic happen.

```php
id: d7_node
label: Nodes
migration_tags:
  - Drupal 7
deriver: Drupal\node\Plugin\migrate\D7NodeDeriver
source:
  plugin: d7_node
process:
  # If you are using this file to build a custom migration consider removing
  # the nid and vid fields to allow incremental migrations.
  # In D7, nodes always have a tnid, but it's zero for untranslated nodes.
  # We normalize it to equal the nid in that case.
  # @see \Drupal\node\Plugin\migrate\source\d7\Node::prepareRow().
  nid: tnid
  vid: vid
  langcode:
    plugin: default_value
    source: language
    default_value: "und"
  title: title
  uid: node_uid
  status: status
  created: created
  changed: changed
  promote: promote
  sticky: sticky
  revision_uid: revision_uid
  revision_log: log
  revision_timestamp: timestamp
destination:
  plugin: entity:node
migration_dependencies:
  required:
    - d7_user
    - d7_node_type
  optional:
    - d7_field_instance
    - d7_comment_field_instance
```

The secret lies in the deriver class which is [D7NodeDeriver ](https://api.drupal.org/api/drupal/core%21modules%21node%21src%21Plugin%21migrate%21D7NodeDeriver.php/class/D7NodeDeriver)and to be more specific, in [D7NodeDeriver::getDerivativeDefinitions()](https://api.drupal.org/api/drupal/core%21modules%21node%21src%21Plugin%21migrate%21D7NodeDeriver.php/function/D7NodeDeriver%3A%3AgetDerivativeDefinitions). Since this is a very advanced topic, reading the source is the best way to understand the flow. On high level:

* We first read all node types that the site has. This is needed to generate the different migrations for each content type (i.e. Cars and Drivers in the example above)
* For each node type, we generate the field mappings based on the fields that each node type has.
* And finally we return the derivatives.