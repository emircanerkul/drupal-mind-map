The primary value of a field and all the subfields must be explicitly mapped. The following example uses the default\_value plugin to map the format subfield:

```yaml
  'field_name/value':
  'field_name/format':
    plugin: default_value
    default_value: 'full_html'
```