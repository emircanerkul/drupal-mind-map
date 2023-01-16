The following example is an import of a node reference field from Drupal 7 to Drupal 9+.

```php
  field_location:
    plugin: sub_process
    source: field_location
    process:
      target_id: # The key used by entity reference fields in D8+
        plugin: migration_lookup
        migration:
          - mysite_node_location
          - mysite_node_room
        source: target_id # The key used by node reference fields in D7

```

In this example, the source and destination fields are reference fields, either both are single valued or multi valued, with the same name, `field_location`. The value is determined from the results of two previously run migrations. Usually, a `migration_lookup` has one source migration, but it can have more, so this just shows the possibilities.

The reason we need to use `sub_process` is because field\_location is an entity reference field, which has multiple parts, and we specifically need to set the `target_id` part of the field.

When the migration\_lookup executes, it will determine the target\_id value (for the destination field\_location).

The migration\_lookup requires a `source`, in this case it is the property 'target\_id'. Other reference fields may use a different ID. For example, term reference fields use 'tid'.

Then, since the source and destination fields are multi-valued, that entire step must be run on each source value. The sub\_process plugin is used to wrap the migration lookup step so that it is repeated for each source value.