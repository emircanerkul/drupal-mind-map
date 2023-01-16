* The example below assumes that the Article content type has a field field\_attachments which accepts txt files.
* The example uses the embedded\_data source plugin for the sake of simplicity. We have two rows of data in this example.

```yaml
id: custom_article_migration_with_external_files
label: 'Custom article migration with external files'
source:
  plugin: embedded_data
  data_rows:
    -
      id: 1
      title: 'Page 1 title'
      file: 'https://www.drupal.org/files/issues/2018-06-23/interdiff-2944846-2-5.txt'
    -
      id: 2
      title: 'Page 2 title'
      file: 'https://www.drupal.org/files/issues/interdiff-2933620-38-47.txt'
  ids:
    id:
      type: integer
process:
  nid: id
  title: title
  field_attachment:
    plugin: file_import
    source: file
destination:
  plugin: entity:node
  default_bundle: article

```

The important part of the example migration above is the `file_import` process plugin.

* The `source` configuration key is required and it contains the source path or URL for the file to be migrated.
* In this example our source plugin provides a full URL for the file to be downloaded but the value could also be `/path/to/foo.txt` or `public://bar.txt` if the file is already present in your file system.

Optional configuration keys:

* **destination:** (recommended) The destination path or URI to import the file to. If no destination is set, it will default to "public://". The destination property works like the source in that you can reference source or destination properties for its value. This allows you to build dynamic destination paths based on source or destination values (see the "Dynamic File Path Destinations" section below for an example). However, this means if you want to assign a _static_ destination value in your migration, you will need to use a [constant](https://www.drupal.org/docs/8/api/migrate-api/migrate-process/constant-values). To provide a directory path (to which the file is saved using its original name), a trailing slash **must** be used to differentiate it from being a filename. If no trailing slash is provided the path will be assumed to be the destination filename.
* **uid:** The user ID uid to attribute the file entity to. Defaults to 0.
* **move:** Boolean. If set to TRUE, move the file, otherwise copy the file. Only applicable if the source file is local. If the source file is remote it will be always copied. Defaults to FALSE.
* **file\_exist:** Action to peform if the destination file already exists.  
   * 'replace' - (default) Replace the existing file.  
   * 'rename' - Ensure the destination filename is unique by appending '\_{incrementing number}".  
   * 'use existing' - The existing destination file is used.
* **skip\_on\_missing\_source:** Boolean. If set to TRUE, this field will be skipped if the source file is missing (either not available locally or the remote server returns HTTP 404 'file not found'). Otherwise, the row will fail with an error. Note that if you are importing a lot of remote files, this check will greatly reduce the speed of your import as it requires an HTTP request per file to check if the file exists. Defaults to FALSE.
* **skip\_on\_error:** Boolean. If set to TRUE, this field will be skipped if any error occurs during the file import (including missing source files). Otherwise, the row will fail with an error. Defaults to FALSE.
* **id\_only:** Boolean. If set to TRUE, the process will return just the id instead of a entity reference array. Useful if you want to manage other sub-fields in your migration (see other example below).

The 'destination' and 'uid' configuration fields support copying destination values using the @ character. Values using @ must be wrapped in quotes.

### Dynamic File Path Destinations

Since the destination property can accept a destination value, you can create dynamic filepaths. First you create a temporary field (you can name this whatever you want as long as it isn't the name of a field on the migrate destination entity/object):

```yaml
process:
  # ...
  _file_destination:
    plugin: concat
    source:
      - constants/file_destination
      - constants/directory_separator
      - '@text_field_1'
      - constants/directory_separator
      - '@text_field_2'
      - constants/directory_separator
```

Now you can use your pseudo temp field as a destination value:

```yaml
process:
  # ...
  field_file:
    plugin: file_import
    source: file
    destination: '@_file_destination'
```