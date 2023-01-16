* The contributed [Remote Stream Wrapper](https://www.drupal.org/project/remote%5Fstream%5Fwrapper) module provides a capability to use files directly from a remote location instead of the file system of your Drupal installation.
* The file\_remote\_url process plugin can be used to migrate the remote URL to the field that uses the Remote Stream Wrapper.
* The example below assumes that the Article content type has a field field\_remote\_file which uses the contributed [Remote Stream Wrapper Widget](https://www.drupal.org/project/remote%5Fstream%5Fwrapper%5Fwidget).

```yaml
id: custom_article_migration_with_remote_file
label: 'Custom article migration with remote file'
source:
  plugin: embedded_data
  data_rows:
    -
      id: 1
      title: 'Page 1 title'
      file: 'https://www.drupal.org/files/druplicon-small.png'
    -
      id: 2
      title: 'Page 2 title'
      file: 'https://www.drupal.org/files/drupal_logo-blue.png'
  ids:
    id:
      type: integer
process:
  nid: id
  title: title
  field_remote_file:
    plugin: file_remote_url
    source: file
destination:
  plugin: entity:node
  default_bundle: article

```