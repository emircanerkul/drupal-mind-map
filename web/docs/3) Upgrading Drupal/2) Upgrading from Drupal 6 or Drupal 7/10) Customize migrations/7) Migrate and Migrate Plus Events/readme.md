A (most complete) list of the migrate events you can react on :

`MigrateEvents::MAP_SAVE MigrateEvents::MAP_DELETE MigrateEvents::POST_IMPORT MigrateEvents::POST_ROLLBACK MigrateEvents::PRE_ROW_SAVE MigrateEvents::POST_ROW_SAVE MigrateEvents::POST_ROW_DELETE MigratePlusEvents::PREPARE_ROW`

A useful implementation can be read in the constructor of `class MigrateExecutable,` Migrate Tool module.