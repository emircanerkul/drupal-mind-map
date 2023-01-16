---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins/in-migrate-map
description: >-
  Returns true if the source is found in the configured migrate map tables. This
  is most likely to be helpful in a scenario where your source data is kind of
  funky. This is unlikely to be useful in drupal-to-drupal migrations. This
  functions similarly to the migration_lookup process plugin with a couple
  notable differences. First, this is a migrate_condition plugin, so it returns
  a boolean rather than destination ids. Second, this plugin will never create
  stubs and as such there is not a no_stub option. Third, the treatment of
  skipped rows is configurable through the include_skipped property.
published_time: '2022-11-10T20:30:07+00:00'
modified_time: '2022-11-20T20:57:42+00:00'
---
Returns true if the source is found in the configured migrate map tables. This is most likely to be helpful in a scenario where your source data is kind of funky. This is unlikely to be useful in drupal-to-drupal migrations.

This functions similarly to the `migration_lookup` process plugin with a couple notable differences. First, this is a migrate\_condition plugin, so it returns a boolean rather than destination ids. Second, this plugin will never create stubs and as such there is not a `no_stub` option. Third, the treatment of skipped rows is configurable through the `include_skipped` property.

Available configuration keys:

* **migration**: The migration id or array of migration ids against which to do a lookup.
* **include\_skipped**: (optional) If TRUE, a source is considered to be in the map even the row has been skipped and the destination ids are null. Defaults to FALSE.
* **negate**: (optional) Whether to negate the 'in\_migrate\_map' condition. Defaults to FALSE. You can also negate the 'in\_migrate\_map' plugin by using 'in\_migrate\_map' as the plugin id.
* **source**: (optional) Property or array of properties on which to evaluate the condition. If not set, the condition will be evaluated on the source passed to the ::evaluate() method, typically the source of the process plugin that is using this condition.

The `migration` can be specified using parens notation, but only if it's a single migration.