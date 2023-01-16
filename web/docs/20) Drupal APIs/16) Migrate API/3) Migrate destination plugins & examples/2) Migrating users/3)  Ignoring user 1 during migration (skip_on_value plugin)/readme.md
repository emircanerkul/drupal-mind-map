User 1 exists in our destination site, so we do not need to migrate it from the source site. The example below (a modified version of `migrate_plus.migration.upgrade_d7_user.yml`) uses the `skip_on_value` plugin to do this.

The `value` key accepts an array. So if we wanted to ignore users 2, 9, and 20 we could list their user IDs:  
**value:** 
 **\- 2** 
 **\- 9** 
 **\- 20**

The same strategy can be used to ignore node IDs using `nid`. 

```php
langcode: en
status: true
dependencies: {  }
id: upgrade_d7_user
class: Drupal\user\Plugin\migrate\User
field_plugin_method: null
cck_plugin_method: null
migration_tags:
  - 'Drupal 7'
  - Content
migration_group: migrate_drupal_7
label: 'User accounts'
source:
  plugin: d7_user
process:
  uid:
    -
      plugin: skip_on_value
      equals: true
      source: uid
      method: row
      value:
        - 1
  name:
    -
      plugin: get
      source: name
  pass:
    -
      plugin: get
      source: pass

  mail:
    -
      plugin: get
      source: mail
  created:
    -
      plugin: get
      source: created
  access:
    -
      plugin: get
      source: access
  login:
    -
      plugin: get
      source: login
  status:
    -
      plugin: get
      source: status
  init:
    -
      plugin: get
      source: init
destination:
  plugin: 'entity:user'
migration_dependencies:
  optional:
    - upgrade_user_picture_field_instance
    - upgrade_user_picture_entity_display
    - upgrade_user_picture_entity_form_display
```