Highwater marks allow Migrate API to track changes so that we can migrate only content that has been _created_ or _updated_ in the source since the migration was previously executed. This requires the source plugin to have a special _high\_water\_property_ property. This can be any property that indicates the _highest_ (or most recent) value migrated so far.

Let's use nodes as an example. If we would use `nid` as the high\_water\_property property, the migration system would keep track of the highest `nid` migrated so far. When the migration is executed again, we would only migrate those nodes that have a higher `nid`. In other words, only nodes that are _created_ in the source system since the previous migration. Nodes also have a timestamp in the `changed` property. This timestamp is populated when a node is _created_ or an existing node is _updated_. If this property is used as a highwater property, the next migration would include those nodes that have a higher value in the `changed` property. In other words, the nodes that have been _created_ or _updated_ in the source system since the previous migration.

Example using the node entity ID as a highwater mark for a Drupal upgrade migration:

```yaml
source:
  plugin: d7_node_complete
  node_type: article
  high_water_property:
    name: nid
    alias: n

```

<!-- note-warning -->
> WARNING: Note: when using highwater marks, it is critical that your source data be sorted by the highwater field (i.e., the timestamp). If the data is out of order, some changed rows might be skipped, and other rows might be unnecessarily remigrated.

<!-- note-warning -->
> WARNING: Note: when using a timestamp property as a highwater mark, the value must be unique as multiple records with the same timestamp will cause unpredictable results.

A slower alternative to using highwater marks would be to use the [**track\_changes**](https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins/overview-of-migrate-source-plugins#s-migrate-api-track-changes-option) property instead.