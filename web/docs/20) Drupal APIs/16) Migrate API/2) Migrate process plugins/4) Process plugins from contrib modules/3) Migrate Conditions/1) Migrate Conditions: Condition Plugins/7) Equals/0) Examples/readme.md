### 1\. Skip a row if a source value is exactly 0

```yaml
process:
  skip_on_zero:
    plugin: skip_on_condition
    source: my_source_value
    condition:
      plugin: equals
      strict: true
      value: 0
    method: row
    message: 'Get your zero out of here.'
```

### 2\. Set a boolean if a source value is not equal to 'closed'

```yaml
process:
  is_open:
    plugin: evaluate_condition
    source: my_source_value
    condition:
      plugin: equals
      negate: true
      value: closed
```

This can be written much more succinctly using "not:" syntax to negate the condition and parens syntax to pass the value.

```yaml
process:
  is_open:
    plugin: evaluate_condition
    source: my_source_value
    condition: not:equals(closed)
```

### 3\. Set a boolean to true if an album is self-titled

Most conditions that accept a `value` can accept a `property` instead. This allows a source value to be compared to another source value. In this case, we will compare `source_album_title` with `source_band_name` to find self-titled albums.

```yaml
process:
  is_self_titled:
    plugin: evaluate_condition
    source: source_album_title
    condition:
      plugin: equals
      property: source_band_name

```

### 4\. Filter a source array

Assume field\_main\_tag is a destination property holding a single tid, which is considered the most important tag. We want to remove that tid from source\_tags before setting field\_other\_tags, which are the less important tags. That is, we keep elements that are not equal to @field\_main\_tag.

```yaml
process:
  field_other_tags:
    plugin: filter_on_condition
    source: source_tags
    condition:
      plugin: not:equals
      property: '@field_main_tag'

```