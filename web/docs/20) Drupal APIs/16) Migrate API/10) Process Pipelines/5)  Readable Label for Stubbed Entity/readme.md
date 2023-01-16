When an entity stub is created as a result of using the `migrate_lookup` process plugin, the label of the stub is a randomly generated hash that is very long and break layouts and can't be pronounced. You can create a more useful label for your stub using the `null_coalesce` process plugin to create a fallback label. When a stub is being generated, the only source values available in the migration will be the source IDs. So we use a source ID as the fallback label.

Let's say the following snippet is in a migration called `my_node_migration`.

```yaml
process:
  title:
    plugin: null_coalesce
    source:
      - the_real_title
      - whatever_source_property_is_the_source_id
```

In this case, if a node is stubbed out during a `migrate_lookup` against `my_node_migration`, the stub's label will be the source ID. This is because when a stub is being created, the only source property (or properties) available will be the source ID(s). Whatever `the_real_title` is will be null, but we fall back to the source ID.

You could do fancier things as well by concatenating the source ID with a constant that you define.

```yaml
source:
  ...
  constants:
    my_stub_prefix: '(Stub) '
process:
  _fallback_title:
    plugin: concat
    source:
      - 'constants/my_stub_suffix'
      - whatever_source_property_is_the_source_id
  title:
    plugin: null_coalesce
    source:
      - the_real_title
      - '@_fallback_title'
```