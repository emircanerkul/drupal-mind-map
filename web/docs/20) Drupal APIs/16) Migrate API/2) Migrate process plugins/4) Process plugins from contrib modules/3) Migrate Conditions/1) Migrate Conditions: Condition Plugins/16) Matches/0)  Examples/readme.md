### 1\. Set a boolean if a source string contains a number

```php
process:
  has_a_digit:
    plugin: evaluate_condition
    source: source_string
    condition:
      plugin: matches
      regex: /\d+/

```

### 2\. Skip a row if a source string is not an exclamation

Because we should always be super excited about everything.

```php
process:
  _skip_calm_strings:
    plugin: skip_on_condition
    source: source_string
    method: row
    condition:
      plugin: not:matches
      regex: /!$/
    message: 'We only want a string that ends with ! because we are always super excited'

```