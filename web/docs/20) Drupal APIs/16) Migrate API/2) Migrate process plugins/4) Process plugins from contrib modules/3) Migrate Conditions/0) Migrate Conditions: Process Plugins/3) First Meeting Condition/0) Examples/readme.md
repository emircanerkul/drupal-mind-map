### 1\. Re-create core null\_coalesce

```yaml
process:
  some_not_null_value:
    plugin: first_meeting_condition
    condition: not:is_null
    source:
      - something
      - something_else
      - whatever
    default_value: 'If all else fails'
```

### 2\. Make an "empty coalesce" plugin

Sometimes "is\_null" is too high a bar. Maybe we don't want empty strings or false either.

```yaml
process:
  some_not_empty_value:
    plugin: first_meeting_condition
    condition: not:empty
    source:
      - something
      - something_else
      - whatever
    default_value: 'If all else fails'
```