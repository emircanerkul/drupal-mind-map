Each migration has a "mapping table" stored in the database. In the Users and Nodes example above, the tables would be `migrate_map_d7_user` and `migrate_map_d7_node`. The mapping table for a migration has one column for each source key and one column for each destination key. For the `d7_user` and `d7_node` migrations, there is one of each: `sourceid1` and `destid1`.

When the `migration_lookup` plugin is given a migration and a source value (or an array of source values), it finds the mapping table for that migration. Then it queries that table, looking for the row where the source key(s) match the given value(s). It returns the destination key(s).

When troubleshooting, it is often useful to do that same query yourself. For example,

`SELECT * FROM migrate_map_d7_user WHERE sourceid1 = 123;`