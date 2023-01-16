---
url: >-
  https://www.drupal.org/docs/8/distributions/degov/upgrading-from-degov-1x-to-2x
description: >-
  Edit your composer.json file: Remove the deGov modules dependency and use the
  degov/degov dependency from packagist.org. Remove the GitHub repository URL
  for the deGov dependency Remove the folder with the old deGov modules Add this
  function into your degov_profile.install file: /** * Missing modules and
  missing media revision default revision column, after upgrade from deGov 1.x
  do deGov 2.x.
published_time: '2018-03-18T10:10:02+00:00'
modified_time: '2018-08-19T16:45:49+00:00'
---
* Edit your **composer.json** file:  
   * Remove the deGov modules dependency and use the degov/degov dependency from [packagist.org](https://packagist.org/packages/degov/degov).  
   * Remove the GitHub repository URL for the deGov dependency
* Remove the folder with the old deGov modules
* Add this function into your degov\_profile.install file:
* ```php  
/**  
 * Missing modules and missing media revision default revision column, after upgrade from deGov 1.x do deGov 2.x.  
 */  
function degov_profile_update_8001() {  
  $modules = [  
    'lightning',  
    'lightning_scheduled_updates',  
    'crop_media_entity',  
  ];  
  $connection = Database::getConnection();  
  foreach ($modules as $module) {  
    $connection->query("DELETE FROM key_value WHERE collection = 'system.schema' AND name = ':module'", [  
      'module' => $module  
    ]);  
  }  
  \Drupal::service('module_installer')->install(['content_moderation']);  
  \Drupal::service('module_installer')->install(['degov']);  
  $spec = [  
    'type'        => 'int',  
    'description' => 'Missing column after deGov 2 update',  
    'length'      => 11,  
    'not null'    => FALSE,  
  ];  
  $schema = $connection->schema();  
  if (!$schema->fieldExists("{media_revision}", "revision_default")) {  
    $schema->addField('{media_revision}', 'revision_default', $spec);  
  }  
}  
```
* Run **composer update**
* Run **drush updb**