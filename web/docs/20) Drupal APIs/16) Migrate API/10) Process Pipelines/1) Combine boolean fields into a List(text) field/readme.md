This example relies on [Extended callback process plugin to call functions with multiple parameters](/project/drupal/issues/2882276), which adds the `unpack_source` option to the `callback` process plugin and the [Migrate Source CSV](/project/migrate%5Fsource%5Fcsv) module, which provides the `csv` source plugin.

The field `field_list_text` is a List(text) field with allowed values `key_1`, `key_2`, `key_3`. Multiple values are allowed.

The source is a CSV file. Instead of a single column for `field_list_text`, it has a column for each allowed value. The rows use 0/1 or ''/'X' to indicate whether to include each allowed value.

In the `source` section of the migration, add a constant with the allowed values, as an array:

`source:
  plugin: csv
  # other configuration ...
  constants:
    list_text_values:
      - key_1
      - key_2
      - key_3
`

In the process section of the migration, combine keys and values, then filter out the empty keys:

`  list_text_filter:
    plugin: get
    source:
      - key_1
      - key_2
      - key_3
  field_list_text:
    - plugin: callback
      callable: array_combine
      unpack_source: true
      source:
        - constants/list_text_values
        - '@list_text_filter'
    - plugin: callback
      callable: array_filter
    - plugin: callback
      callable: array_keys`