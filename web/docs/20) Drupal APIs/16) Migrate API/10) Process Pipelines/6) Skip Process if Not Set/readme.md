The core Migrate module provides a `skip_row_if_not_set` process plugin. However, there is no dedicated plugin to skip a _process_ rather than the row if the source if not set. This can be easily accomplished using the [Migrate Conditions](http://drupal.org/project/migrate%5Fconditions) contributed module as [described in these docs](https://www.drupal.org/docs/contributed-modules/migrate-conditions/migrate-conditions-process-plugins/skip-on-condition#s-4-skip-process-if-not-set).

That said, the equivalent of a `skip_process_if_not_set` can be achieved with existing core plugins. Including the following in a process pipeline will skip the process if `my_source_value` is not set.

```yaml
-
  plugin: callback
  callable: is_null
  source: my_source_value
-
  plugin: static_map
  map:
    0: 1
    1: 0
-
  plugin: skip_on_empty
  method: process
-
  plugin: get
  source: my_source_value
-
  ...the rest of the pipeline
```