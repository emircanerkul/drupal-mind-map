* The example below assumes that the Article content type has a field field\_image which accepts PNG files and that image alt and title fields are enabled.
* This example demonstrates how the define the destination directory where the image files will be downloaded.
* The example uses the embedded\_data source plugin for the sake of simplicity. We have two rows of data in this example.

```yaml
id: custom_article_migration_with_external_images
label: 'Custom article migration with external image files'
source:
  plugin: embedded_data
  data_rows:
    -
      id: 1
      title: 'Page 1 title'
      file: 'https://www.drupal.org/files/druplicon-small.png'
      file_title: 'Druplicon logo'  
    -
      id: 2
      title: 'Page 2 title'
      file: 'https://www.drupal.org/files/drupal_logo-blue.png'
      file_title: 'Drupal logo'
  ids:
    id:
      type: integer
  constants:
    file_destination: 'public://images/'
process:
  nid: id
  title: title
  field_image:
    plugin: image_import
    source: file
    destination: 'constants/file_destination'
    title: file_title
    alt: !title
destination:
  plugin: entity:node
  default_bundle: article

```

The image\_import process plugin extends the file\_import plugin. In addition to the configuration keys inherited from file\_import process plugin, image\_import has the following additional optional configuration keys.

* **alt:** The alt attribute for the image.
* **title:** The title attribute for the image.
* **width:** The width of the image.
* **height:** The height of the image.

All of the above fields support copying destination values using the starting @ sign. Values using @ must be wrapped in quotes.

Additionally, a special value '!file' is available as demonstrated in the example above. This magical value can be used to populate the file name for example to the alt or title fields.