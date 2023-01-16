The games can be migrated from the source database to Drupal 8 with the following migration:

```yaml
id: games
label: 'Games'
source:
  plugin: games
  key: migrate
process:
  title: title
  field_datetime: datetime
  field_place: place
destination:
  plugin: 'entity:node'
  default_bundle: game

```

Let's have a closer look of the migration YAML.

* The ID of the migration is 'games' and the label of the migration is 'Games'.
* We are using source plugin 'games'.  
   * This is the @MigrateSource ID of our custom source plugin described above.  
   * The 'key' configuration option defines the source database connection which must be defined in settings.php or settings.local.php. The 'migrate' connection is defaulted for all source plugins that extend SqlBase unless the source plugin explicitly defines otherwise. We define 'migrate' explicitly here for the sake of clarity.
* In the process phase we map only three fields in this minimalistic example:  
   * Drupal 8 node title is mapped 1:1 from the source 'title' property.  
   * Drupal 8 'field\_place' is mapped from the source 'place' property.  
   * Drupal 8 'field\_datetime' is mapped from the source 'datetime' property. This property is defined in the `prepareRow()` method of our source plugin.
* The destination entity in Drupal 8 is 'node' of content type 'game'.