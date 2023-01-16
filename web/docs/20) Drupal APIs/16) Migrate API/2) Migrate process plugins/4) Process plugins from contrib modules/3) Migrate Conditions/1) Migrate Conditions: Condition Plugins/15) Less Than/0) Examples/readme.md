### 1\. Skip a row if a source value is negative

```php
process:
  skip_on_negative:
    plugin: skip_on_condition
    source: source_value
    condition:
      plugin: less_than
      value: 0
    method: row
    message: 'source_value was negative'
```

###  2\. Evaluate if a value is less than or equal to zero

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

###  3\. Filter negative numbers out of an array

That is, keep numbers that are not less than zero. 

```php
process:
  non_negative_values:
    plugin: filter_on_condition
    source: source_values
    condition:
      plugin: not:less_than
      value: 0
```