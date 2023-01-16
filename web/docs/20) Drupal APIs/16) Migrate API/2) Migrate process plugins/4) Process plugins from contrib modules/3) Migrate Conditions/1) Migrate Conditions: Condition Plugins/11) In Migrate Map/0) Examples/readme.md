### 1\. Skip a row if a value is already in a specified migrate map

```yaml
process:
  _skip_if_in_other_migration:
    plugin: skip_on_condition
    method: row
    source: my_source_value
    condition:
      plugin: in_migrate_map
      migration: some_other_migration
```