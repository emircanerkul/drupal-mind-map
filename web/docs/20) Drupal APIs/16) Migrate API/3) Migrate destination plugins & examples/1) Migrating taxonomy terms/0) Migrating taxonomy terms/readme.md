The example below assumes that a vocabulary called 'tags' exists. We use the [embedded\_data](https://api.drupal.org/api/drupal/core!modules!migrate!src!Plugin!migrate!source!EmbeddedDataSource.php/class/EmbeddedDataSource) source plugin for the sake of simplicity to migrate three terms to this vocabulary.

```yaml
id: custom_term_migration
label: 'Custom term migration'
source:
  plugin: embedded_data
  data_rows:
    -
      term_id: 1
      name: 'Small'
    -
      term_id: 2
      name: 'Medium'
    -
      term_id: 3
      name: 'Large'
  ids:
    term_id:
      type: integer
process:
  tid: term_id
  name: name
destination:
  plugin: entity:taxonomy_term
  default_bundle: tags

```