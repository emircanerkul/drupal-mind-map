### 1\. Set a boolean value is\_a\_teenager based on source\_age

```php
process:
  is_a_teenager:
    plugin: evaluate_condition
    source: source_age
    condition:
      plugin: and
      conditions:
        -
          plugin: not:less_than
          value: 13
        -
          plugin: less_than
          value: 20
```

### 2\. Set a boolean if a source value is 5.

This is overly complicated. It should really be done with a single equals condition. But it's just an example!

```php
process:
  source_is_five:
    plugin: evaluate_condition
    source: source_value
    condition:
      plugin: and
      conditions:
        -
          plugin: greater_than
          value: 4
        -
          plugin: greater_than
          negate: true
          value: 5
        -
          plugin: callback
          callable: is_int
```

###  3\. Set a boolean if the source is large and in charge.

This example demonstrates the `iterate` property which is only available on logical conditions (`and` and `or`).

```yaml
process:
  large_and_in_charge:
    plugin: evaluate_condition
    source:
      - source_size
      - source_comportment
    condition:
      plugin: and
      iterate: true
      conditions:
        -
          plugin: equals
          value: 'large'
        -
          plugin: equals
          value: 'in charge'
```

Alternatively, we can configure the source directly on each condition. This is a situation where this strategy leads to simpler code.

```yaml
process:
  large_and_in_charge:
    plugin: evaluate_condition
    condition:
      plugin: and
      conditions:
        -
          plugin: equals
          value: 'large'
          source: source_size
        -
          plugin: equals
          value: 'in charge'
          source: source_comportment
```