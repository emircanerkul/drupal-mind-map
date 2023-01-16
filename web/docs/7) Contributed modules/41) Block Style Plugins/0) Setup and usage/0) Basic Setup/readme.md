### Creating plugins and form fields in a Yaml file

The easiest way to get started is to use a single yaml file to declare each plugin and the fields to display. This can go into either a module or better yet, a theme. Name it **mymodule.blockstyle.yml** or **mytheme.blockstyle.yml** replacing the first part with the name or your module or theme.

```yaml
sample_block_style:
  label: 'Sample Block Style'
  form:
    field_name:
      '#type': 'textfield'
      '#title': 'Add a custom css class'
      '#default_value': 'my-class'
```

**Notice:** Form fields need to be on the same level and cannot currently be nested.