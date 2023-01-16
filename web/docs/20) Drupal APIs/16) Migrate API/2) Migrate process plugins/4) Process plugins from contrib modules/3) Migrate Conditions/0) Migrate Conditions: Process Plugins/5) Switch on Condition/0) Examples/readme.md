### 1\. Determine whether a number is negative, positive, or zero.

```php
process:
  sign:
    plugin: switch_on_condition
    source: my_source_number
    cases:
      -
        condition: less_than(0)
        default_value: negative
      -
        condition: equals(0)
        default_value: zero
      -
        condition: default
        default_value: positive
```

This is equivalent to the following, which uses `greater_than` instead of `default`.

```php
process:
  sign:
    plugin: switch_on_condition
    source: my_source_number
    cases:
      -
        condition: less_than(0)
        default_value: negative
      -
        condition: equals(0)
        default_value: zero
      -
        condition: greater_than(0)
        default_value: positive
```

In some situations though, the `default` condition will be the only reasonable option to specify the last case.

### 2\. Workaround for static\_map when keys have a period/dot

 The core `static_map` process plugin does not allow mapping from a key that contains a period or dot if the migration is stored in configuration using migrate\_plus. See [#2827897: static\_map process plugin does not work with periods in keys](https://www.drupal.org/project/drupal/issues/2827897 "Status: Needs work").

```php
# This does NOT work if stored as config with migrate_plus :(
process:
  field_cpu_bus_type:
  plugin: static_map
  source: BusType
  bypass: true
  map:
    'PCIe 3.0': pcie_3_0
    PCI: pci
```

We can easily work around that with `switch_on_condition`. 

```php
# This works great! :)
process:
  field_cpu_bus_type:
    plugin: switch_on_condition
    source: BusType
    cases:
      -
        condition: equals(PCIe 3.0)
        default_value: pcie_3_0
      -
        condition: equals(PCI)
        default_value: pci
      -
        condition: default
        get: BusType
```

### 3\. Do some extra processing if some conditions are not met

In addition to `default_value` and `get`, we can `process` for any given case. Let's say if the source uid is 0 or 1, you want to keep that value. But any other source uid should be used in a migration lookup. This is one of many ways to write this [example for using if\_condition](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-conditions/migrate-conditions-process-plugins/if-condition#s-4-do-some-extra-processing-if-a-condition-is-not-met). As a bonus, this demonstrates that we can specify human-readable keys for the cases, which is really nice in this situation.

```php
process:
  uid:
    plugin: switch_on_condition
    source: source_uid
    cases:
      admin:
        condition: equals(1)
        default_value: 1
      anonymous:
        condition: equals(0)
        default_value: 0
      authenticated:
        condition: default
        process:
          plugin: migration_lookup
          migration: users
```

Note that since there is no `source` specified in the process under the `authenticated` case, the `source` declared for `switch_on_condition` will be used.

### 4\. Cases with different sources

Sometimes you may need the cases to use different sources. That's just fine! We simply configure the source on each condition. In this example, the node type is determined based on whether specified fields are populated.

```php
process:
  type:
    plugin: switch_on_condition
    cases:
      -
        condition:
          plugin: not:empty
          source: field_video
        default_value: video
     -
        condition:
          plugin: not:empty
          source: field_document
        default_value: document
     -
        condition: default
        default_value: article

```