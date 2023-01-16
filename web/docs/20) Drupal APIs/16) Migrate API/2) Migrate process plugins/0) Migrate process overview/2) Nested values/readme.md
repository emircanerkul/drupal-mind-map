If you want to set `$destination['display_settings']['label']['format']` or read from `$source['display_settings']['label']['format']` you need to use `display_settings/label/format`. Example:

```yaml
process:
  source: 'display_settings/label/format'

```

Don't forget the quotes.

If you are trying to migrate two nested fields, for example the content of body field and its format, don't forget to use nested values for both fields, like this:

```yaml
process:
  'body/format':
    plugin: default_value
    default_value: full_html
  'body/value': example_matched_field
```

If you use `body: example_matched_field` without `/value` in the second place, the result is the whole body field will be overridden with the example\_matched\_field value, losing the format value. 

Another way of achieving this is using the sub\_process plugin:

```yaml
  body:
    plugin: sub_process
    source: body
    process:
      value: value
      format:
        plugin: default_value
        default_value: basic_html
```