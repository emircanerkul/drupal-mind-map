###  1\. Determine if all values in an array are positive

```php
process:
  all_positive:
    plugin: evaluate_condition
    source: my_source_numbers
    condition:
      plugin: all_elements
      condition:
        plugin: greater_than
        value: 0
```

### 2\. Skip a row if all source dates are in the past

```php
process:
  skip_if_everything_is_in_the_past:
    plugin: skip_on_condition
    source: my_source_dates
    condition:
      plugin: all_elements
      condition:
        plugin: older_than
        format: 'j M Y' #the format of the source dates
        value: 'now'
    method: row
    message: 'All the dates are old.'
```