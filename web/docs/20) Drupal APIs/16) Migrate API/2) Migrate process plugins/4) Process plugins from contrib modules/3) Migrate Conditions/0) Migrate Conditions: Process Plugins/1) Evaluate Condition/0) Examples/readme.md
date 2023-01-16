### 1\. Determine is source\_value is null

```php
process:
  source_value_is_null:
    plugin: evaluate_condition
    condition: is_null
    source: source_value
```

When using 'evaluate\_condition' there is no difference between setting the source on the process plugin and setting the source on the condition plugin. Thus, the following functions exactly like the above.

```php
process:
  source_value_is_null:
    plugin: evaluate_condition
    condition:
      plugin: is_null
      source: source_value
```

### 2\. Set status to false (unpublished) if an event date is in the past

```php
process:
  status:
    plugin: evaluate_condition
    source: event_date
    condition:
      plugin: older_than
      negate: true
      format: U #format of event_date
      value: 'now'
```

### 3\. Set a boolean value is\_a\_teenager based on source\_age

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

###  4\. Make sure stubbed taxonomy terms are set to unpublished

In D7 there is no publishing status for taxonomy terms, but in D9 that concept exists. It's nice for a migration to make sure that stubbed taxonomy terms begin life unpublished in case they never get migrated in full. We do this by setting the status to true if the name property is not empty.

```php
process:
  status:
    plugin: evaluate_condition
    condition: not:empty
    source: name
```

This can be accomplished more directly with the relatively new 'is\_stub' condition.

```php
process:
  status:
    plugin: evaluate_condition
    condition: not:is_stub

```

This is an interesting case where there is no source required since the condition is evaluated on the row itself.