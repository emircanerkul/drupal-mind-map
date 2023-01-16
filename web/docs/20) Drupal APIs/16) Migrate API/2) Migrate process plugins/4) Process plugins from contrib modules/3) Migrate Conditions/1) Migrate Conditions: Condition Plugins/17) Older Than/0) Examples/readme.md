### 1\. Skip old content

Using the older\_than condition, we can skip a row if the content is older than we would like.

```php
process:
  skip_old_content:
    plugin: skip_on_condition
    source: my_source_date
    condition:
      plugin: older_than
      format: 'j M Y' #the format of the source date
      value: '-1 month'
    method: row
    message: 'This content is soooooo last month.'
```

###  2\. Set a boolean if a source date is in the future

Something is in the future if it is not older than now.

```php
process:
  is_in_the_future:
    plugin: evaluate_condition
    source: my_source_date
    condition:
      plugin: not:older_than
      format: 'j M Y' #the format of the source date
      value: 'now'

```

### 3\. Skip violations of causality

 Skip rows where the updated date is before the created date because that violates laws of physics. When comparing two source dates, they must be in the same format. In the example below, the format is 'U'.

```php
process:
  skip_spacetime_ruptures:
    plugin: skip_on_condition
    source: source_updated_timestamp
    condition:
      plugin: older_than
      format: 'U' #the timestamp format
      property: source_created_timestamp
    method: row
    message: 'Einstein says no dice.'
```