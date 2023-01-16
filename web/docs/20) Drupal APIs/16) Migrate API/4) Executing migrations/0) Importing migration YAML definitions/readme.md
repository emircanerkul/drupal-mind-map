The contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module allows migration plugins to be implemented as configuration entities, allowing them to flexibly be loaded, modified, and saved. 

* Make sure that core Migrate and contributed Migrate Plus modules are enabled.
* Navigate to `admin/config/development/configuration/single/import` of your Drupal 8 site.
* Select 'Migration' as the configuration type.
* Paste your migration definition YAML to the configuration import form and click 'Import'.