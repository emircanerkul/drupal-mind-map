### 1\. Skip row if the source\_field is 'one', 'two', or 'three'

```yaml
process:
  skip_one_two_three:
    plugin: skip_on_condition
    source: source_field
    condition:
      plugin: in_array
      value:
        - one
        - two
        - three
      strict: true
   method: row
   message: 'That was one, two, or three'
```

### 2\. Evaluate whether source\_value is found within the source\_array

```yaml
process:
  array_contains_value:
    plugin: evaluate_condition
    source: source_field
    condition:
      plugin: in_array
      property: source_array
```

### 3\. Remove a set of ids from a source array.

```php
process:
  array_without_1_or_2:
    plugin: filter_on_condition
    source: source_ids
    condition:
      plugin: not:in_array
      value:
        - 1
        - 2
      string: true
```