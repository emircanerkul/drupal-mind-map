### 1\. Remove empty values from an array

We keep values from the source array that are not empty.

```yaml
process:
  no_empty_values:
    plugin: filter_on_condition
    condition: not:empty
    source: my_source_array
```

2\. Clean up an array of lookup values prior to sub-process

Consider doing a migration lookup against a paragraphs migration, which will have two destination values. If the `no_stub` option is set, then we will get null returned when a lookup is no successful. We might end up with an array that looks something like this:

```php
[
  ['123', '456'],
  null,
  ['789', '987'],
]
```

Passing that to a sub-process will not work (like it will blow up) because of the `null`. So let's filter out that value with filter\_on\_array before the subprocess!

```php
process:
  field_paragraphs:
    -
      plugin: migration_lookup
      source: my_source
      migration: paragraphs_migration
      no_stub: true
    -
      plugin: filter_on_condition
      condition: not:is_null
    -
      plugin: sub_process
      process:
        target_id: '0'
        target_revision_id: '1'
```

### 3\. Remove old dates from an array

Filter field\_timestamps so that we keep upcoming dates and remove dates that are in the past.

```yaml
process:
  upcoming_dates:
    plugin: filter_on_condition
    source: field_timestamps
    condition:
      plugin: not:older_than
      format: 'U' #format of timestamps
      value: 'now'
```

### 4\. Remove tag ids that do not correspond to tags

Assuming source\_tag\_ids contains taxonomy term ids, we can save ourselves some validation errors by removing values that do not correspond to a valid entity.

```yaml
process:
  field_tags:
    plugin: filter_on_condition
    source: source_tag_ids
    condition:
      plugin: entity_exists
      entity_type: taxonomy_term
```