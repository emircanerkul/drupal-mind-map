### 1\. Add default case when using switch\_on\_condition 

Determine whether a number is negative, positive, or zero.

```php
process:
  sign:
    plugin: switch_on_condition
    source: my_source_number
    cases:
      -
        condition: less_than(0)
        default_value: negative
      -
        condition: equals(0)
        default_value: zero
      -
        condition: default
        default_value: positive
```

This is equivalent to the following, which uses `greater_than` instead of `default`.

```php
process:
  sign:
    plugin: switch_on_condition
    source: my_source_number
    cases:
      -
        condition: less_than(0)
        default_value: negative
      -
        condition: equals(0)
        default_value: zero
      -
        condition: greater_than(0)
        default_value: positive
```

In some situations though, the `default` condition will be the only reasonable option to specify the last case.