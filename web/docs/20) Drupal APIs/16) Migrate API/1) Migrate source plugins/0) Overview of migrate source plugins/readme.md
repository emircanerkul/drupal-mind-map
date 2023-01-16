---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins/overview-of-migrate-source-plugins
description: >-
  Migration source plugins are responsible for fetching the data from the
  source. The source key of the migration plugin defines which source plugin the
  migration uses. The value is an associative array containing the name of the
  source plugin and the configuration for it. Some source plugins might not have
  any configurations. The code snippet below is part of the Drupal 6 to Drupal 8
  node migration definition. It defines that the migration uses the 'd6_node'
  source plugin.
published_time: '2013-11-07T02:15:51+00:00'
modified_time: '2022-05-19T12:38:49+00:00'
---
Migration source plugins are responsible for fetching the data from the source.

The _source_ key of the migration plugin defines which source plugin the migration uses. The value is an associative array containing the name of the source plugin and the configuration for it. Some source plugins might not have any configurations. The code snippet below is part of the Drupal 6 to Drupal 8 node migration definition. It defines that the migration uses the 'd6\_node' source plugin.

```php
source:
  plugin: d6_node

```

Drupal 8 core and contributed modules provide several source plugins for most common use cases, for example migrating from CSV, JSON or XML. Refer to the other pages on this same handbook section for usage examples. 

If you need to write a custom source plugin:

* Source plugins implement [\\Drupal\\migrate\\Plugin\\MigrateSourceInterface](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigrateSourceInterface.php/interface/MigrateSourceInterface/8.9.x "Defines an interface for migrate sources.")
* Source plugins usually extend[\\Drupal\\migrate\\Plugin\\migrate\\source\\SourcePluginBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21source%21SourcePluginBase.php/class/SourcePluginBase/8.9.x "The base class for source plugins.")
* Source plugins are annotated with [\\Drupal\\migrate\\Annotation\\MigrateSource](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Annotation%21MigrateSource.php/class/MigrateSource/8.9.x "Defines a migration source plugin annotation object.") annotation
* Source plugins must be in the namespace subdirectory Plugin\\migrate\\source under the namespace of the module that defines them, for example MYMODULE/src/Plugin/migrate/source
* Source plugins are managed by the [\\Drupal\\migrate\\Plugin\\MigrateSourcePluginManager](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigrateSourcePluginManager.php/class/MigrateSourcePluginManager/8.9.x "Plugin manager for migrate source plugins.") class
* Source plugin providers are determined by their own namespace and and their parent class' namespace
* [Example on how to write a custom SQL source plugin](https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins/migrating-data-from-a-sql-source)
* [Instructions on how to execute migrations](https://www.drupal.org/docs/8/api/migrate-api/executing-migrations)

### Migrate Map Field Options

For every migration the migrate module creates a table that contains various rows of data. This usually takes the name form migrate\_map\_**name\_of\_your\_migration.**  Each row contains a variety of columns that are used to map your imports and also contains some additional info such as date last imported, rollback action, destination id etc. This will also include both your source id hash, and the original source id used to generate the hash. By default you size of the text field set to store your original key defaults to tiny or 255 chars. If your source id/key (ids if using and array of keys) is longer you are likely to get an exception during import along the lines of \`Data too long for column 'sourceid1' at row 1\`. In this event you can pass additional field storage options as those are returned by the [FieldStorageDefinitionInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldStorageDefinitionInterface.php/interface/FieldStorageDefinitionInterface/8.2.x)::getSettings() Class/method at the same level as the required state key: value. For example this will allow you to increase the default max\_length of the field storage value defined in your database. 

Here is a working example that also uses url plugin as provided by the Migration Plus module. Please note that in addition to the required type value of the 'id' associative array I have also added the max\_length key and value to ensure that the newly created sourceid1 column will be able to accommodate value up to this length limit.

```yaml
source:
  plugin: url
  data_fetcher_plugin: http
  data_parser_plugin: simple_xml
  urls: 'https://news.google.com/rss/search?q=feed&hl=en-GB'

  item_selector: /rss/channel/item
  fields:
    -
      name: id
      label: ID
      selector: id
    -
      name: title
      label: Title
      selector: title

  ids:
    id:
      type: string
      max_length: 1024
```

For additional info about fine tuning the migrate map source table value, please see [MigrateSourceInterface](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigrateSourceInterface.php/9.1.x)::getIds(); 

### Migrate API track\_changes option

Setting the **track\_changes** option to TRUE will cause each incoming source row to be hashed and, if previously imported, compared to the previous value to determine whether the item should be re-imported. This is used to import changed as well as new records from the source.

The Migration Plugin example below shows how the 'track\_changes' option can be enabled as a configuration option in the 'source' phase.

```php
id: test_migration
label: "Test migration"
migration_group: test_migration_group
source:
  plugin: SOME_PLUGIN
  # Enable "track changes" feature.
  track_changes: true
process:
  type:
    plugin: default_value
    default_value: article
  uid:
    plugin: default_value
    default_value: 1
  status:
    plugin: default_value
    default_value: 1
  title: source_title
destination:
  plugin: entity:node
migration_dependencies: {}

```

Note: The `drush migrate-import --update` option is similar but as opposed to the method described above it forces an update for **all** rows.

### Which migrate source plugins can you use?

Use drush to get a list of migrate source plugins:

```php
$ drush ev "print_r(\Drupal::service('plugin.manager.migrate.source')->getDefinitions());"

```

Or to get a list of just the keys of the migrate source plugins:

```php
$ drush ev "print_r(array_keys(\Drupal::service('plugin.manager.migrate.source')->getDefinitions()));"

```

When you do this command with a fairly new drupal site you might only get a few plugins like this:

```php
Array
(
    [0] => empty
    [1] => embedded_data
    [2] => table
    [3] => url
)

```

However, when you enable several of the example modules like: _Migrate Drupal UI, Migrate Example, Migrate Example (Advanced), Migrate Drupal, Migrate Example Setup, Migrate Advanced Example Setup, RESTful Web Services, Serialization_. Then you will (might) get more example source plugins like these:

```php
Array
(
    [0] => block
    [1] => d7_block_translation
    [2] => d6_block_translation
    [3] => d7_block_custom
    [4] => d7_block_custom_translation
    [5] => d6_box_translation
    [6] => d6_box
    [7] => d7_color
    [8] => d7_comment_entity_translation
    [9] => d7_comment
    [10] => comment_type
    [11] => d6_comment
    [12] => contact_settings
    [13] => contact_category
    [14] => d7_field_instance_per_form_display
    [15] => d7_field
    [16] => d7_field_option_translation
    [17] => d7_field_instance_per_view_mode
    [18] => d7_field_instance_label_description_translation
    [19] => d7_view_mode
    [20] => d7_field_instance
    [21] => d6_field_instance_per_form_display
    [22] => d6_field
    [23] => d6_field_option_translation
    [24] => d6_field_instance_per_view_mode
    [25] => d6_field_instance_label_description_translation
    [26] => d6_field_instance_option_translation
    [27] => d6_field_instance
    [28] => d7_file
    [29] => d6_file
    [30] => d6_upload_instance
    [31] => d6_upload
    [32] => d7_filter_format
    [33] => d6_filter_format
    [34] => d7_image_styles
    [35] => d6_imagecache_presets
    [36] => menu_link
    [37] => d7_menu_link_localized
    [38] => d7_menu_link_translation
    [39] => d6_menu_link_translation
    [40] => empty
    [41] => embedded_data
    [42] => variable
    [43] => content_entity:block_content
    [44] => content_entity:comment
    [45] => content_entity:contact_message
    [46] => content_entity:file
    [47] => content_entity:menu_link_content
    [48] => content_entity:node
    [49] => content_entity:path_alias
    [50] => content_entity:shortcut
    [51] => content_entity:taxonomy_term
    [52] => content_entity:user
    [53] => d7_variable_translation
    [54] => d6_variable_translation
    [55] => md_empty
    [56] => variable_multirow
    [57] => d8_config
    [58] => beer_comment
    [59] => beer_term
    [60] => beer_node
    [61] => beer_user
    [62] => wine_term
    [63] => table
    [64] => url
    [65] => d7_node_entity_translation
    [66] => d7_node
    [67] => d7_node_type
    [68] => d7_node_revision
    [69] => d7_node_complete
    [70] => d6_node
    [71] => d6_node_type
    [72] => d6_view_mode
    [73] => d6_node_revision
    [74] => d6_node_complete
    [75] => d7_url_alias
    [76] => d6_url_alias
    [77] => d7_rdf_mapping
    [78] => d7_search_page
    [79] => d6_search_page
    [80] => d7_shortcut
    [81] => d7_shortcut_set
    [82] => d7_shortcut_set_users
    [83] => menu
    [84] => d7_menu_translation
    [85] => d7_theme_settings
    [86] => extension
    [87] => d7_taxonomy_term_translation
    [88] => d7_taxonomy_vocabulary_translation
    [89] => d7_term_localized_translation
    [90] => d7_taxonomy_vocabulary
    [91] => d7_taxonomy_term_entity_translation
    [92] => d7_taxonomy_term
    [93] => d6_term_node
    [94] => d6_taxonomy_vocabulary_translation
    [95] => d6_term_localized_translation
    [96] => d6_taxonomy_vocabulary_per_type
    [97] => d6_taxonomy_vocabulary
    [98] => d6_term_node_revision
    [99] => d6_taxonomy_term
    [100] => update_settings
    [101] => d7_user
    [102] => d7_user_entity_translation
    [103] => d7_user_role
    [104] => user_picture_instance
    [105] => d6_user
    [106] => d6_profile_field_option_translation
    [107] => d6_user_picture_file
    [108] => d6_user_picture
    [109] => d6_user_role
    [110] => d6_profile_field_values
    [111] => profile_field
)

```