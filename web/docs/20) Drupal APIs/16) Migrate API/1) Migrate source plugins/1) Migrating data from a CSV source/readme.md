---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins/migrating-data-from-a-csv-source
description: >-
  The contributed Migrate Source CSV module provides a source plugin for
  utilizing .csv files as migration sources. A more complete example module
  called migrate_source_csv_test can be found in the
  migrate_source_csv/tests/modules folder. How to import a simple CSV file with
  Migrate Source CSV plugin This very basic example will show you how to import
  Title and Body into the Article content type from a CSV file. The CSV source
  plugin can also be used to migrate any kind of entities to Drupal, refer to
  the examples on migrating other entity types. Download Migrate Source CSV and
  enable it.
published_time: '2015-09-25T10:56:57+00:00'
modified_time: '2021-07-23T14:24:07+00:00'
---
The contributed [Migrate Source CSV](https://www.drupal.org/project/migrate%5Fsource%5Fcsv) module provides a source plugin for utilizing .csv files as migration sources.

A more complete example module called `migrate_source_csv_test` can be found in the `migrate_source_csv/tests/modules `folder.

### How to import a simple CSV file with Migrate Source CSV plugin

This very basic example will show you how to import Title and Body into the Article content type from a CSV file. The CSV source plugin can also be used to migrate any kind of entities to Drupal, refer to the examples on migrating other entity types.

1. Download [Migrate Source CSV](https://www.drupal.org/project/migrate%5Fsource%5Fcsv) and enable it.
2. Download [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) and enable it
3. Download [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) and enable it.
4. Ensure you're using the latest version of Drush.
5. Create a sample CSV-file called `articles.csv` with the following content. The delimiter can be configured in the migration definition.  
```php  
id,title,body  
1,title 1,some body text 1  
2,title 2,some body text 2  
3,title 3,some body text 3  
```
6. The contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module allows migration plugins to be implemented as configuration entities, allowing them to flexibly be loaded, modified, and saved.  
   * Navigate to _Administration > Configuration > Development > Synchronize_ (`admin/config/development/configuration/single/import`)  
   * select _Migration_ as the _Configuration type_  
   * Copy-paste the YAML format migration definition and click _Import_. Note that the path to the CSV file is defined in the configuration.

```yaml
uuid: 1bcec3e7-0a49-4473-87a2-6dca09b91aba
id: article_csv_import
label: Import articles
migration_group: default

source:
  plugin: 'csv'
  # Full path to the file.
  path: '/path/to/articles.csv'
  # Column delimiter. Comma (,) by default.
  delimiter: ','
  # Field enclosure. Double quotation marks (") by default.
  enclosure: '"'
  # The row to be used as the CSV header (indexed from 0), 
  # or null if there is no header row.
  header_offset: 0
  # The column(s) to use as a key. Each column specified will 
  # create an index in the migration table and too many columns 
  # may throw an index size error.
  ids:
    - id
  # Here we identify the columns of interest in the source file. 
  # Each numeric key is the 0-based index of the column. 
  # For each column, the key below is the field name assigned to 
  # the data on import, to be used in field mappings below. 
  # The label value is a user-friendly string for display by the 
  # migration UI.
  fields:
    0:
      name: id
      label: 'Unique Id'
    1:
      name: title
      label: 'Title'
    2:
      name: body
      label: 'Post body'

process:
  title: title
  body: body
  type:
    plugin: default_value
    default_value: article

destination:
  plugin: entity:node
```