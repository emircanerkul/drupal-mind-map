---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-contrib-modules/migrate-conditions/migrate-conditions-condition-plugins
description: >-
  Migrate Conditions defines a MigrateConditionsConditionPlugin that we will
  refer to as conditions in this guide. These conditions are only useful when
  leveraged by process plugins. As such, all examples will be in the context of
  a process plugin. We begin with some (mostly) universal aspects of conditions.
  Negation All condition plugins can be negated in two ways. Set negate: true in
  the configuration Prefix the plugin id with not: Source All conditions can be
  configured with a source property just like the source property on a process
  plugin.
published_time: '2022-02-08T21:38:34+00:00'
modified_time: '2022-11-20T00:47:32+00:00'
---
Migrate Conditions defines a `MigrateConditionsConditionPlugin` that we will refer to as conditions in this guide. These conditions are only useful when leveraged by process plugins. As such, all examples will be in the context of a process plugin. We begin with some (mostly) universal aspects of conditions.

### Negation

All condition plugins can be negated in two ways.

1. Set `negate: true` in the configuration
2. Prefix the plugin id with `not:`

### Source

All conditions can be configured with a source property just like the source property on a process plugin. If the source is not specified for a condition, the condition "inherits" the source from whatever plugin is using the condition (usually a process plugin).