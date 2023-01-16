This example shows how the core User module is migrating users from Drupal 7 to Drupal 8\. The migration is defined in `core/modules/user/migrations/d7_user.yml`. Let’s break this into pieces as we did with the first example:

```php
id: d7_user
label: User accounts
migration_tags:
  - Drupal 7
class: Drupal\user\Plugin\migrate\User
source:
  plugin: d7_user
process:
  # If you are using this file to build a custom migration,
  # consider removing the uid field to allow
  # incremental migrations.
  uid: uid
  name: name
  pass: pass
  mail: mail
  created: created
  access: access
  login: login
  status: status
  timezone: timezone
  langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: false
  preferred_langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: true
  preferred_admin_langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: true
  init: init
  roles:
    plugin: migration_lookup
    migration: d7_user_role
    source: roles
  user_picture:
    -
      plugin: default_value
      source: picture
      default_value: null
    -
      plugin: migration_lookup
      migration: d7_file
destination:
  plugin: entity:user
migration_dependencies:
  required:
    - d7_user_role
  optional:
    - d7_field_instance
    - d7_file
    - language
    - default_language
    - user_picture_field_instance
    - user_picture_entity_display
    - user_picture_entity_form_display
```

### Again, we have ID of the migration, label and migration tags.

```php
id: d7_user
label: User accounts
migration_tags:
  - Drupal 7
class: Drupal\user\Plugin\migrate\User
```

User migration has its own migrate plugin class [User ](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21User.php/class/User/8.4.x)which extends [FieldMigration](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21FieldMigration.php/class/FieldMigration/8.4.x). This is needed to migrate the custom fields that we might have added to the User entity on the Drupal 7 source site. We don’t get deeper to this topic in this tutorial but you are, of course, free to investigate the source code of the plugin class.

### Defining the source plugin

```php
source:
  plugin: d7_user
```

We’re defining here that we are using the [User](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21source%21d7%21User.php) source plugin. The id ('d7\_user') we use in the migration matches to the plugin annotation of the plugin class.

This source plugin will query the source data from the D7 database table ‘users’. For implementation details, see [User::query()](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21source%21d7%21User.php/function/User%3A%3Aquery).

### Defining the migration process and transformations

```php
process:
  uid: uid
  name: name
  pass: pass
  mail: mail
  created: created
  access: access
  login: login
  status: status
  timezone: timezone
  langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: false
  preferred_langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: true
  preferred_admin_langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: true
  init: init
  roles:
    plugin: migration_lookup
    migration: d7_user_role
    source: roles
  user_picture:
    -
      plugin: default_value
      source: picture
      default_value: null
    -
      plugin: migration_lookup
      migration: d7_file
```

We have here a lot of 1:1 field mapping, for example D8 'uid' is mapped 1:1 from D7 'uid', 'name' is mapped 1:1 from 'name' and so on. 

The langcode mapping looks a bit different, let's have a look at that.

```php
  langcode:
    plugin: user_langcode
    source: language
    fallback_to_site_default: false
```

* We are first saying that we’re talking about the transformation of the D8 destination property 'langcode'.
* The process plugin to be used for this is [UserLangcode](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21UserLangcode.php/class/UserLangcode)  
   * This is a process plugin provided by the User module itself.  
   * The process plugin class must be created in the MODULE/src/Plugin/migrate/process directory  
   * The plugin ID used in the migration must be found in the plugin annotation of the class
* We’re saying that the source is coming from the source property 'language'
* The UserLangcode process plugin takes another argument 'fallback\_to\_site\_default' which is set to 'false'.

The real transformation logic is defined in [UserLangcode::transform()](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21UserLangcode.php/function/UserLangcode%3A%3Atransform). If we look at the source of this transform method, it contains the following logic:

* If the user's language is empty and the 'fallback\_to\_site\_default' is 'false', it means the locale module was not installed and the user's langcode should be set to English.
* Then we check that the user's language actually exists in Drupal 8\. If it does not exist in Drupal 8, we use the default language of the Drupal 8 site.
* If the language was found, we use that as user’s language.

Let’s next have a closer look at the user role mapping:

```php
roles:
    plugin: migration_lookup
    migration: d7_user_role
    source: roles
```

* We are first saying that we’re talking about the D8 'roles' that the user should be given.
* In order to be able to give roles to the user, the roles must have been migrated already earlier using the 'd7\_user\_role' migration.
* We use the [migration\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MigrationLookup.php/class/MigrationLookup) process plugin which takes the D7 roles as an input and returns the corresponding D8 role ids.

The migration\_lookup process plugin is one of the most fundamental process plugins.

Let’s then have a closer look at the processing for user picture.

```php
user_picture:
    -
      plugin: default_value
      source: picture
      default_value: null
    -
      plugin: migration_lookup
      migration: d7_file
```

Here the Drupal 7 source value 'picture' must pass through two process plugins to end up with the correct Drupal 8 value. The anatomy of the process pipeline is explained on the [migrate process overview documentation page](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-process-overview). 

What happens here is as follows:

* We’re first passing the Drupal 7 source property 'picture' through the [default\_value](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21DefaultValue.php/class/DefaultValue) process plugin. This property is a 1:1 relationship with the Drupal 7 `file_managed.fid` value.
* This plugin passes the given default value (null in this case) to the next phase of the process pipeline if the original source property had no value (NULL, zero or empty string). If the source property has a value, then that value is preserved and passed to the next phase of the process pipeline.
* The second phase of the process pipeline is the migration\_lookup plugin which we already covered above in this article. It uses the value from the previous pipeline step as its source and checks the ID of the file which was previously migrated using the d7\_file migration.

### Defining the destination plugin

```php
destination:
  plugin: entity:user
```

Here we are saying that the migration is generating Drupal 8 user entities.

### Migration dependencies

```php
 migration_dependencies:
  required:
    - d7_user_role
  optional:
    - d7_field_instance
    - d7_file
    - language
    - default_language
    - user_picture_field_instance
    - user_picture_entity_display
    - user_picture_entity_form_display
```

We are declaring here that the migration d7\_user\_role is a prerequisite for running this migration. The optional migrations do not necessarily have to be executed but Migrate Drupal will execute them before this one if you are running all migrations at one go.