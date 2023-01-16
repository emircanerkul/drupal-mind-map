### 1\. Set a boolean if a source string contains a configured string

```php
process:
  is_a_doctor:
    plugin: evaluate_condition
    source: source_name
    condition:
      plugin: contains
      value: 'Dr.'

```

This can be shortened by using parens notation to pass the value.

```php
process:
  is_a_doctor:
    plugin: evaluate_condition
    source: source_name
    condition: contains(Dr.)

```

### 2\. Skip a row if source\_array does not contain source\_value

```php
process:
  destination_field:
    plugin: skip_on_condition
    source: source_array
    condition:
      plugin: not:contains
      property: source_value
    method: row
    message: 'source_value was not found within source_array'
```