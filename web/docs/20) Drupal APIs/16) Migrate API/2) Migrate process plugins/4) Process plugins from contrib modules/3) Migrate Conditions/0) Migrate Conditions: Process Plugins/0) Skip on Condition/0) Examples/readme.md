### 1\. Recreate core's skip\_on\_empty

...but with fine control over how to handle an array. Skip on Condition is set to "handle multiples" which means that the process plugin gets the whole current value of the process pipeline at once.

1.a) Skip the row when the source is an empty array.

```yaml
process:
  skip_on_empty_array:
    plugin: skip_on_condition
    condition: empty
    source: my_source_array
    method: row
```

If we instead want to evaluate the condition on each element of the array individually, we use the "helper" condition `has_element` as follows.

1.b) Skip the row if any item in the source array is empty.

```yaml
process:
  skip_if_any_array_element_is_empty:
    plugin: skip_on_condition
    condition:
      plugin: has_element
      condition: empty
    source: my_source_array
    method: row
```

### 2\. Skip old content

Using the older\_than condition, we can skip a row if the content is older than we would like. We can also log a message that contains context.

```yaml
process:
  skip_old_content:
    plugin: skip_on_condition
    source: my_source_date
    condition:
      plugin: older_than
      format: 'j M Y' #the format of the source date
      value: '-1 month'
    method: row
    message: 'This content is from %s and is soooooo last month.'
    message_context:
      - my_source_date

```

The value of the `my_source_date` property will replace the `%s` when the message is logged.

### 3\. Skip on NOT empty

Sometimes we want to skip a row/process if a certain source value is NOT empty. Here are two versions of the syntax that skip on not empty.

```yaml
process:
  skip_on_not_empty:
    plugin: skip_on_condition
    condition:
      plugin: empty
      negate: true
    source: my_source_value
    method: row
```

```yaml
process:
  skip_on_not_empty:
    plugin: skip_on_condition
    condition: not:empty
    source: my_source_value
    method: row
```

### 4\. Skip process if not set

The core Migrate module provides a `skip_row_if_not_set` process plugin. However, there is no dedicated plugin to skip a _process_ rather than the row if the source if not set.

```yaml
process:
  skip_process_if_not_set:
    plugin: skip_on_condition
    condition: not:isset
    source: my_source_value
    method: process
```

Equivalently, the `is_null` condition could be used in place of `not:isset.`

### 5\. Skip content cloned by `date_repeat_entity`

The contributed D7 module [date\_repeat\_entity](http://drupal.org/project/date%5Frepeat%5Fentity) allows for recurring events by cloning content automatically. When migrating that content to D9, you may want to ignore the cloned content and only migrate the original node. 

```yaml
process:
  _skip_clones:
    plugin: skip_on_condition
    method: row
    condition:
      plugin: not:equals
      property: uuid # Notice this is a source property, not a constant value.
    source: date_repeat_entity_master_uuid/0/value
```

This is interesting in that we compare two source values, which cannot be done by `skip_on_value` from migrate\_plus.