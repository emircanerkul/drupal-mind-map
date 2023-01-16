### 1\. Evaluate if a value is less than or equal to zero

This should really be done by using `not:greater_than`, but it's just an example.

```php
process:
  not_positive:
    plugin: evaluate_condition
    source: source_value
    condition:
      plugin: or
      conditions:
        -
          plugin: less_than
          value: 0
        -
          plugin: equals
          value: 0
```

### 2\. Evaluate if a source value is 5, or '5', or 'five', or something that clearly should be read as five. 

```php
process:
  some_kind_of_5:
    -
      plugin: callback
      callable: strtolower
      source: my_source_value
    -
      plugin: evaluate_condition
      condition:
        plugin: or
        conditions:
          -
            plugin: equals
            value: 5
          -
            plugin: equals
            value: 'five'
```

###  3\. Set a boolean if the source image is missing 'alt' or 'title'.

This example demonstrates the `iterate` property which is only available on logical conditions (`and` and `or`). Assume field\_image is a single array with properties like 'alt', 'title', filename', url', etc. This may not entirely match reality, but it's just an example.

```php
process:
  missing_data:
    plugin: evaluate_condition
    source: field_image
    condition:
      plugin: or
      iterate: true
      conditions:
        alt:
          plugin: empty
        title:
          plugin: empty
```

As an alternative to the iterate configuration, we could specify separate sources for the OR-ed conditions. 

```php
process:
  missing_data:
    plugin: evaluate_condition
    condition:
      plugin: or
      conditions:
        -
          plugin: empty
          source: field_image/alt
        -
          plugin: empty
          source: field_image/title
```