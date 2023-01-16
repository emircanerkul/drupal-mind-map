With the **Configuration Manager** core module, you can import, export, and synchronize site configuration via **Manage > Configuration > Development > Configuration synchronization** (`admin/config/development/configuration`). You can review changes on the "Configuration synchronization" page before importing them, but there's no confirmation step if you click the "Import all" button.

_Either_ a single object can be imported or exported using a copy/paste workflow. This is useful if, for example, you wanted to just move a newly created view from one environment to another.

_Or_ the full site configuration can also be dumped as YAML files to a tar.gz file. This only works if you're moving configuration between two copies of the same site (e.g. dev and production), because the site UUIDs must match, from where you exported to where you're importing.

After synchronization is complete, all changes will be applied, such as enabling new modules, fields or content types. In short, all configuration changes made on the development site should now be live on production.

To directly edit site config entities, you can use [drush config-edit](https://drushcommands.com/drush-8x/config/config-edit/ "drush config edit for drush 8.x") or [drupal config:edit](https://drupalconsole.com/docs/en/commands/config-edit/), or "Config editor" from the [Devel module](https://www.drupal.org/project/devel).

### How to check a site's UUID from CLI

#### Using Drush

`drush cget system.site`

#### Using Drupal Console

`drupal debug:config system.site`

### More synchronization workflow documentation

* [Using the Drupal UI](https://www.drupal.org/node/2416545 "Workflow using the Drupal UI | Drupal 8 guide on Drupal.org")
* [Using Drush](https://www.drupal.org/node/2416591 "Workflow using Drush | Drupal 8 guide on Drupal.org")
* [Drush 8 config command docs](https://drushcommands.com/drush-8x/config/ "Drush Commands")

### Do's and Don'ts

#### DO'S

It's strongly recommended that you do a database-dump before each synchronization of the staging and the active directory. The database-dump "could save your life" on a potentially needed rollback-strategy.

#### DON'TS

Don't try to change the active configuration on your site by changing files in a module's config/install directory. This will NOT work, because Drupal only reads from that directory when the module is installed.