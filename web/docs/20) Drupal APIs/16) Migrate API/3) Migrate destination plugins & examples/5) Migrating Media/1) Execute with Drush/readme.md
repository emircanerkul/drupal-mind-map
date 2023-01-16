To execute these migrations with Drush, save them into one of two places in your module (mymodule).

`mymodule/config/install/migrate_plus.migration.images_example.yml`  
`mymodule/config/install/migrate_plus.migration.images_to_media_example.yml`

or

`mymodule/migrations/images_example.yml`  
`mymodule/migrations/images_to_media_example.yml`

[Migrate Tools](https://www.drupal.org/project/migrate%5Ftools), with dependencies, must be enabled. When you enable mymodule, the migration configuration entities will be installed, and you can run them with `drush migrate:import images_example,images_to_media_example` (no space after the comma).