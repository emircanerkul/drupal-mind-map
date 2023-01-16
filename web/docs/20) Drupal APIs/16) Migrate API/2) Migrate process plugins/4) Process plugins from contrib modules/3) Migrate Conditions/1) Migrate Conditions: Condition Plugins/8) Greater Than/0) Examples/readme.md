### 1\. Skip a row if a source value is greater than 5

```yaml
process:
  skip_greater_than_five:
    plugin: skip_on_condition
    source: source_vale
    condition:
      plugin: greater_than
      value: 5
    method: row
    message: 'source_value was greater than 5'
```

Which can be shortened by using parens syntax:

```yaml
process:
  skip_greater_than_five:
    plugin: skip_on_condition
    source: source_vale
    condition: greater_than(5)
    method: row
    message: 'source_value was greater than 5'
```

Note that when using parens notation, the 5 will be interpreted as a string, whereas it is an integer in the long notation. This shouldn't have any effect on the result in this case though.

### 2\. Evaluate if one source value is greater than another source value

```yaml
process:
  mind_over_matter:
    plugin: evaluate_condition
    source: source_mind
    condition:
      plugin: greater_than
      property: source_matter
```

###  3\. Filter positive numbers out of an array

That is, keep numbers that are not greater than zero. 

```yaml
process:
  non_positive_values:
    plugin: filter_on_condition
    source: source_values
    condition:
      plugin: not:greater_than
      value: 0
```