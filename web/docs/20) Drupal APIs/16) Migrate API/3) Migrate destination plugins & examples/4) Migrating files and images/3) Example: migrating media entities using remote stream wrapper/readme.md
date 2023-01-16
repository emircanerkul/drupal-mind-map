* The contributed [Remote Stream Wrapper](https://www.drupal.org/project/remote%5Fstream%5Fwrapper) module provides a capability to use files directly from a remote location instead of the file system of your Drupal installation.
* The file\_remote\_url process plugin can be used to migrate the remote URL to the field that uses the Remote Stream Wrapper. This may be configured within your media entity bundle.
* The example below assumes that the Article content type has a field field\_picture that references a media bundle which utilises an image field that is configured to also uses the contributed [Remote Stream Wrapper Widget](https://www.drupal.org/project/remote%5Fstream%5Fwrapper%5Fwidget).

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
  field_picture:
    plugin: migration_lookup
    migration: my_migration_id_media
    source: id
  field_remote_file:
    plugin: file_remote_url
    source: file
destination:
  plugin: entity:node
  default_bundle: article
migration_dependencies:
  required:
    - my_migration_id_media
```

Notice the use of the migration\_lookup plugin. This will reference the common id required to link the two different entities. Also notice we have defined our second script as a dependency. This will cause this dependency to run first.

You will need to create a migration script to import the images separately. This will look something like this:

```yaml
id: my_migration_id_media
label: 'Remote Media import for Custom article'
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
  field_media_image:
    plugin: file_remote_url
    source: image
  field_title: title
destination:
  plugin: 'entity:media'
  default_bundle: remote_image
```

It's worth noting we are referencing the field\_media\_image which is the actual image field that we have configured to use the remote\_steam\_wrapper widget initially mentioned, not the field\_picture that is just an entity reference to the media entity that uses this field and any others you may have added. 

Also note that we are specifying that the destination uses the 'entity:media' plugin.