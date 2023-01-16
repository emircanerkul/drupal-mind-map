### 1\. Set a boolean field if the row is a stub

Sometimes it's desirable to locate and clean up stub entities after a migration is complete. One approach would be to add a boolean field and set the value like this. Then you can create views or sql queries that use this field.

```yaml
process:
  field_stub:
    plugin: evaluate_condition
    condition: is_stub
```

Note that `is_stub` is a bit unusual in that it does not consider the `source` value, which means it can be left out of the process plugin configuration.

### 2\. Give meaningful title to stubs

There are [other examples](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/if-condition#s-6-give-meaningful-title-to-stubs) of this that use the is\_null condition applied to a source ID value. Using is\_stub is simpler and more semantic.

```yaml
source:
  ...
  constants:
    fallback_title_prefix: "Stub for sourceid "
process:
  title:
    plugin: if_condition
    condition: not:is_stub
    do_get: title
    else_process:
      plugin: concat
      source:
        - constants/fallback_title_prefix
        - nid
```