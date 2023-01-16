There are different ways how the already imported YAML format migration definitions can be updated.

**Option 1**

* First export the current version of the migration definition at `admin/config/development/configuration/single/export`
* Copy the migration definition to a text editor and modify it as needed
* Import the modified migration definition at `admin/config/development/configuration/single/import`​
* After configuration refresh; refresh the migration record via its originating configuration.`drush migrate-status`​

**Option 2**

* It is possible to modify the configuration using the Drupal Console command line tool:  
`drupal config:edit migrate_plus.migration.games`
* You will need to run `drush cr` to rebuild the cache before the import is executed again.
* After configuration refresh; refresh the migration record via its originating configuration.`drush migrate-status`​