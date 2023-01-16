### 1\. Skip a row if a source value is null

Maybe you can't use skip\_on\_empty because you want to allow zero (0) or false or something.

```yaml
process:
  skip_null:
    plugin: skip_on_condition
    condition: is_null
    source: source_value
    method: row
    message: 'the source_value was null'
```

###  2\. Re-create the core null\_coalesce process plugin

```yaml
process:
  some_not_null_value:
    plugin: first_meeting_condition
    condition: not:is_null
    source:
      - some_value
      - another_value
      - yet_another
    default_value: 'If all else fails...'
```

### 3\. Remove null values from an array

That is, we keep values that are not null.

```yaml
process:
  array_with_no_nulls:
    plugin: filter_on_condition
    source: my_source_array
    condition: not:is_null
    preserve_keys: true
```