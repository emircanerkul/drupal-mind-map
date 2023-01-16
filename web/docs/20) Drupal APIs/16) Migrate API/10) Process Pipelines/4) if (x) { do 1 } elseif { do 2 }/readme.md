The [Migrate Conditions](http://drupal.org/project/migrate%5Fconditions) contrib module has a [dedicated process plugin](https://www.drupal.org/docs/contributed-modules/migrate-conditions/migrate-conditions-process-plugins/if-condition) for this scenario, but it can be accomplished with core plugins and a bit of cleverness.

```yaml
process:
  _temp1:
    - plugin: skip_on_value
      source: thing1
      value: testvalue
    - plugin: get
      source: value1
  _temp2: value2
  value:
    plugin: null_coalesce
    source:
      - @_temp1
      - @_temp2

```