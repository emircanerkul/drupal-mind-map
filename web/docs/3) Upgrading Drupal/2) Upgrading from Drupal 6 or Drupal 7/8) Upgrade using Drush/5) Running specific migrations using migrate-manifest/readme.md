It is also possible to use a manifest file to set up a specific set of migrations. This lets you run groups of migrations in a reproducible manner. For this method, you also need the [Migrate Manifest](https://drupal.org/project/migrate%5Fmanifest) module. With Migrate Manifest, you can get a complete list of available migrations using the following commands:

```php
drush migrate:template:list
```

The desired migrations are defined as a YAML file as shown in the example below. You only need to list the migrations you need. Migrate Manifest will ask you to add additional migrations that are needed to resolve any dependencies. Migrations can be listed in any order, they will be executed in the correct order based on the dependencies.

```yaml
# user 
- d6_user 
- d6_user_profile_field 
- d6_user_profile_field_instance 
- d6_user_profile_entity_display 
- d6_user_profile_entity_form_display 
- d6_profile_values:user 
- d6_filter_format 
- d6_user_role 
- d6_user_picture_entity_display 
- d6_user_picture_entity_form_display 
- d6_user_picture_file 
- d6_user_picture_field 
- d6_user_picture_field_instance 

# taxonomy 
- d6_taxonomy_vocabulary 
- d6_taxonomy_settings 
- d6_taxonomy_term 

# nodes 
- d6_node 
- d6_node_revision 
- d6_node_type 
- d6_view_modes 
- d6_filter_format 
- d6_field_instance_per_form_display 
- d6_field_instance_widget_settings 
- d6_field_formatter_settings 
- d6_field_instance 
- d6_field 
- d6_field_settings 
- d6_node_settings 
- d6_cck_field_values:* 
- d6_cck_field_revision:* 

# taxonomy fields 
- d6_term_node_revision 
- d6_term_node 
- d6_vocabulary_entity_display 
- d6_vocabulary_entity_form_display 
- d6_vocabulary_field_instance 
- d6_vocabulary_field 

# blocks 
- d6_block 
- d6_menu 

# custom blocks 
- d6_custom_block 
- d6_filter_format 

# book 
- d6_book 
- d6_book_settings 

# file migrations are configurable, see https://www.drupal.org/node/2257723 
- d6_file: 
    source: 
      conf_path: sites/assets 
    destination: 
      source_base_path: destination/base/path 
      destination_path_property: uri 

```

Place the manifest file in a location that is accessible when running Drush. Storing it in your version control system is recommended so that you can track changes to your migrations.

Make sure that modules used by the migrations listed in the manifest file exist and are enabled on your source site (e.g. field module for d6\_field) Otherwise, there will be errors when the migrations are executed.

The migrations defined in the manifest file are executed from the command line as shown below. Replace the database URL and path to manifest file with appropriate values (like `migrate:upgrade`, migrate-manifest will accept a MySQL URL or settings.php array key):

```php
drush migrate-manifest --legacy-db-url=mysql://d6user:d6pass@localhost/drupal_6 manifest.yml 
```