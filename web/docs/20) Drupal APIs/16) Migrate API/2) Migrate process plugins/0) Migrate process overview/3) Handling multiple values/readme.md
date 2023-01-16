Many plugins work with a single value as an input. The migration system automatically recognizes if the pipeline is a list instead of a single value and calls the plugin repeatedly for every single value.

Another way of achieving this is using the [sub\_process plugin](https://api.drupal.org/api/drupal/core!modules!migrate!src!Plugin!migrate!process!SubProcess.php/class/SubProcess/). In the example, field\_entity\_reference is the field name. The process pipeline will combine the destination properties field\_entity\_reference and target\_id into field\_entity\_reference/target\_id to set each value returned from the migration\_lookup.

```yaml
  field_entity_reference:
    plugin: sub_process
    source: associative_array
    process:
      target_id:
        plugin: migration_lookup
        migration: migration_source
        source: associative_array_key
```