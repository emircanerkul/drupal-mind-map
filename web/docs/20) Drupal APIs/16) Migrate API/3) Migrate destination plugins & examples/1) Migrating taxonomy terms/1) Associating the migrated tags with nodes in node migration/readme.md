[A simple node migration](https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples/migrating-nodes) was covered on a separate handbook page. We modify that same migration here and show how the migrated tags (taxonomy terms) can be associated with nodes in a node migration.

The relation between the node and taxonomy term is done with a reference field in the node content type. The example below uses the Article content type and the example assumes that the Article has a field called 'field\_tags'.

```yaml
id: custom_article_migration_with_terms
label: 'Custom article migration with terms'
source:
  plugin: embedded_data
  data_rows:
    -
      page_id: 1
      title: 'Page 1 title'
      term_id: 1
    -
      page_id: 2
      title: 'Page 2 title'
      term_id: 2
    - 
      page_id: 3
      title: 'Page 3 title'
      term_id: 3
  ids:
    page_id:
      type: integer
process:
  nid: page_id
  title: title
  field_tags:
    plugin: migration_lookup
    migration: custom_term_migration
    source: term_id
destination:
  plugin: entity:node
  default_bundle: article
migration_dependencies:
  required:
    - custom_term_migration

```

This example migration imports three nodes and associates each article node with a taxonomy term. The important part of the example is this:

```yaml
process:
  field_tags:
    plugin: migration_lookup
    migration: custom_term_migration
    source: term_id

```

The 'field\_tags' uses the [migration\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MigrationLookup.php/class/MigrationLookup) process plugin.

* This process plugin does a lookup to get the Drupal ID of a previously executed migration.
* Here we are saying that the migration we are interested in is 'custom\_term\_migration' which is the migration we used to import the taxonomy terms.
* We are defining that the old ID in the source system was 'term\_id'. When the terms were migrated, the Migrate API makes a map table that knows the original source ID and the new Drupal taxonomy term ID. The migration\_lookup process plugin gets the Drupal 8 tid and populates that value to 'field\_tags'.

Another important note in the example is the migration dependency at the end of the example:

```yaml
migration_dependencies:
  required:
    - custom_term_migration

```

This definition means that the custom\_term\_migration must be executed before the node migration can be run.