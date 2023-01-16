Migrate provides a `skip_on_empty` process plugin. Migrate Plus provides a `skip_on_value` process plugin. The equivalent of a `skip_on_not_empty` plugin can be created configuring the `skip_on_value` plugin as follows.

```yaml
plugin: skip_on_value
not_equals: true
source: my_value
method: row/process
value:
 - null
 - false
 - ''
```

This can be also accomplished using the contributed Migrate Conditions module [as described here](https://www.drupal.org/docs/contributed-modules/migrate-conditions/migrate-conditions-process-plugins/skip-on-condition#s-3-skip-on-not-empty).