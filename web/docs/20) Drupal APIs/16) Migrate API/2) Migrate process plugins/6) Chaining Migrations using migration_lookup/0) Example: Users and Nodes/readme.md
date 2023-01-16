Suppose you are migrating users and nodes from a Drupal 7 site. Start with a migration that creates users:

`id: d7_user
label: User accounts
source:
  plugin: d7_user
process:
  name: name
  pass: pass
  mail: mail
  created: created
  access: access
  login: login
  status: status
  timezone: timezone
destination:
  plugin: entity:user
migration_dependencies: {  }
`

This is a simplified version of the migration in `core/modules/user/migrations/d7_user.yml`. An important difference is that this version does not include `uid: uid` in the `process` section, so it does not preserve user IDs.

Next, add a migration for nodes. Each node in the Drupal 7 site has a field `uid`, the user ID of the node's owner. When migrating the node to the new site, use `migration_lookup` to translate the old user ID to the new one:

```yaml
process:
id: d7_node
label: Nodes
source:
  plugin: d7_node
process:
  title: title
  uid:
    plugin: migration_lookup
    migration: d7_user
    source: node_uid
destination:
  plugin: entity:node
migration_dependencies:
  required:
    - d7_user

```

The `migration_lookup` plugin has one required configuration key: `migration` is the ID of the migration to use for the lookup (in this case, `d7_user`).

The `source` value is the name of the field from _the source of this current_ migration (`node_uid`) that contains the _value_ that was used as the source ID in the previous migration. For example, in the `d7_user` migration, when a user named "Dries Buytaert" was imported, he was assigned user ID "8". In the `d7_node` migration, for us to automatically get that user ID and save it to the `uid` field, we can use this plugin to give us the assigned user id (8) by providing it with the same value ("Dries Buytaert"), which is provided to this migration from the source as `node_uid`. If you're unsure what fields are available to use as the `source` of a `migration_lookup`, check your migration's source.