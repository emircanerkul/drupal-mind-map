### 1\. Skip a row if skip\_me\_please is set. 

```yaml
process:
  skip_requested:
    plugin: skip_on_condition
    condition: isset
    source: skip_me_please
    method: row
    message: 'skip was requested'
```

###  2\. Re-create the core null\_coalesce process plugin

`isset` and `is_null` are essentially opposites.

```php
process:
  some_not_null_value:
    plugin: first_meeting_condition
    condition: isset
    source:
      - some_value
      - another_value
      - yet_another
    default_value: 'If all else fails...'
```