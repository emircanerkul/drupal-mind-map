---
url: >-
  https://www.drupal.org/docs/upgrading-and-converting-drupal-7-modules/step-5-how-to-upgrade-d7-variables-to-d8s-state
description: >-
  Old-style Drupal Variables (formerly controlled with variable_set and
  variable_get) need to be converted to Drupal 8's new configuration system
  API/storage. See also: Converting 7.x modules to 8.x, Upgrading 7.x themes to
  8.x for further required changes to contrib code in order to work with Drupal
  8. The conversion approach below is essential to getting D7 code to work in
  D8, since variable_set and variable_get will throw fatal errors. Configuration
  settings that are edited by end users or implemented across multiple instances
  should be set with Config API, not State API.
published_time: '2012-09-17T23:33:58+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Old-style Drupal Variables (formerly controlled with variable\_set and variable\_get) need to be converted to Drupal 8's new configuration system API/storage.

See also: [Converting 7.x modules to 8.x](https://www.drupal.org/update/modules/7/8), [Upgrading 7.x themes to 8.x](https://www.drupal.org/node/2023177) for further required changes to contrib code in order to work with Drupal 8\. The conversion approach below is essential to getting D7 code to work in D8, since variable\_set and variable\_get will throw fatal errors.

Configuration settings that are edited by end users or implemented across multiple instances should be set with Config API, not State API. See [Upgrading Drupal 7 Variables to Drupal 8 Configuration](https://www.drupal.org/node/1667896).

### Guidelines

1. Within your conversion issue work, convert one variable at a time.  
   * Determine the variable name to convert.  
   * Grep the entire Drupal code base for the variable name and identify all instances that need to be updated.
2. Keep state identifiers short and concise. Generally these can probably stay the same as they were in Drupal 7, unless the old name was incorrect or confusing in some way.
3. The state system is initialized by calling the Drupal::state() function. Interact with the state system using the get(), set() and delete() functions. The Drupal::state() function returns a state object, so you can do `$data = \Drupal::state()->get('my_state_data'); `
4. When retrieving data, the state system does provide a way to provide a default value. Just give a second parameter with a default value `\Drupal::state()->get('my_state_data', 'default_value'); `
5. Here is a simple example of converting variables to state:  
**Drupal 7**  
```php  
  variable_set('my_data', 'foo');  
  $data = variable_get('my_data', 'bar');  
  variable_del('my_data');  
```  
**Drupal 8**  
```php  
  \Drupal::state()->set('my_data', 'foo');  
  $data = \Drupal::state()->get('my_data', 'bar');  
  \Drupal::state()->delete('my_data');  
```
6. The variable name should be changed so that we can identify the module that creates it. The key should use the same namespace strategy as the configuration system. So for example:  
   * `cron_last` becomes `system.cron_last`  
   * `node_cron_last` becomes `node.cron_last`  
   * `menu_masks` becomes `routing.menu_masks.router`
7. If the value needs to be maintained through the Drupal 7 to 8 upgrade it should be migrated using the [migration API](https://www.drupal.org/node/2127611). However if a variable should be migrated it is probably not state.
8. Delete states on uninstall:  
 /core/modules/comment/comment.install  
```php  
function comment_uninstall() {  
...  
  // Remove states.  
  \Drupal::state()->delete('comment.node_comment_statistics_scale');  
 }  
   
```
9. Add test coverage to the upgrade tests:  
 Prefill values for an upgrade test  
 /core/modules/system/tests/upgrade/drupal-7.state.system.database.php  
```php  
db_merge('variable')  
  ->key(array('name' => 'node_cron_comments_scale'))  
  ->fields(array('value' => serialize(1.0 / 1000)))  
  ->execute();  
```  
Check if new values apply  
 /core/modules/system/lib/Drupal/system/Tests/Upgrade/StateSystemUpgradePathTest.php  
```php  
    $expected_state['comment.count_scale'] = array(  
      'value' => 1.0 / 1000,  
      'variable_name' => 'node_cron_comments_scale',  
    );  
```