---
url: https://www.drupal.org/docs/8/api/state-api/overview
description: >-
  Note: The State API is different from the FormAPI #states attribute. State API
  values are stored in the 'key_value" table. Video: Complete Documentation of
  State API The State API is a simple system for the storage of information
  about the system's state. The information is stored in the database and will
  be lost when the database is dropped or the site is re-installed from
  configuration. For storing data which needs to be edited by humans or needs to
  be shared between environments use the Configuration API. In Drupal 7 and
  earlier the variables system was used to store state information.
published_time: '2012-09-17T22:47:19+00:00'
modified_time: '2022-09-28T17:25:12+00:00'
---
<!-- note-tip -->
> TIP: Note: The State API is different from the FormAPI #states attribute. State API values are stored in the 'key_value" table.

Video: [Complete Documentation of State API](https://youtu.be/Zl7z55YjJxk)

The [State API](https://api.drupal.org/api/drupal/core%21core.api.php/group/state%5Fapi) is a simple system for the storage of information about the system's state. The information is stored in the database and will be lost when the database is dropped or the site is re-installed from configuration. For storing data which needs to be edited by humans or needs to be shared between environments use the[ Configuration API](https://www.drupal.org/developing/api/8/configuration). In Drupal 7 and earlier the variables system was used to store state information.

State information is stored in the database and has the following characteristics:

* It is not meant to be exported.
* It is specific to an individual environment.
* It is not to be deployed to another environment.
* All state information is lost when you reset the database.

Examples of state information are CSRF tokens and tracking the time something occurred, such as the last time cron was run ('system.cron\_last'). All these are information that is specific to an environment and has no use in deployment.

Here is a list of common keys which might exist on a site:

```php
$common_keys = [
  'comment.maintain_entity_statistics',
  'comment.node_comment_statistics_scale',
  'drupal_css_cache_files',
  'install_task',
  'install_time',
  'node.min_max_update_time',
  'node.type.locked',
  'router.path_roots',
  'routing.menu_masks.router',
  'routing.non_admin_routes',
  'system.cron_key',
  'system.cron_last',
  'system.css_js_query_string',
  'system.js_cache_files',
  'system.maintenance_mode',
  'system.module.files',
  'system.private_key',
  'system.theme.data',
  'system.theme.files',
  'system.theme_engine.files',
  'twig_extension_hash_prefix',
  'views.view_route_names',
];
```

### Reading State

State is read using the `get()` method. To read a state value, just provide the key.

* A single value.  
`$val = \Drupal::state()->get('key');`
* Multiple key/value pairs.  
`$pairs = \Drupal::state()->getMultiple($keys);`

### Writing State

State is written to using the `set()` method. To write a state value, just provide the key and the value.

* A single value.  
`\Drupal::state()->set('key','value');`
* Multiple values.  
`\Drupal::state()->setMultiple($keyvalues);`

### Removing State

A state is deleted using the `delete()` method. To delete a state value, just provide the key.

* Delete a value  
`\Drupal::state()->delete('key');`

### References

Documentation for class [\\Drupal\\Core\\State\\State](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!State!State.php/class/State), Drupal's default [StateInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!State!StateInterface.php/interface/StateInterface) implementation.

[State API documentation](https://api.drupal.org/api/drupal/core!core.api.php/group/state%5Fapi).