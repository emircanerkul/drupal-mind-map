### 1\. Determine if a source value is an integer

```yaml
process:
  is_an_integer:
    plugin: evaluate_condition
    source: source_value
    condition:
      plugin: callback
      callable: is_int
```

Using parens notation to specify the callable, this can be simplified to:

```yaml
process:
  is_an_integer:
    plugin: evaluate_condition
    source: source_value
    condition: callback(is_int)
```

### 2\. Skip rows where the phone number uses a 900 number using regex.

Callback can be used with callables that require multiple arguments, such as `preg_match`, by setting the `unpack_source` configuration.

```php
constants:
 my_regex: '/\(9\d\d\)/'
process:
  skip_900_numbers:
    plugin: skip_on_condition
    condition:
      plugin: callback
      callable: preg_match
      unpack_source: true
    source:
      - 'constants/my_regex'  
      - source_phone_number
    method: row
    message: 'That phone number is too suspicious'

```

Please note that this can be accomplished much more easily with the relatively new `matches` condition:

```php
process:
  skip_900_numbers:
    plugin: skip_on_condition
    condition:
      plugin: matches
      regex: '/\(9\d\d\)/'
    source: source_phone_number
    method: row
    message: 'That phone number is too suspicious'

```

or even 

```php
process:
  skip_900_numbers:
    plugin: skip_on_condition
    condition: matches(/\(9\d\d\)/)
    source: source_phone_number
    method: row
    message: 'That phone number is too suspicious'

```