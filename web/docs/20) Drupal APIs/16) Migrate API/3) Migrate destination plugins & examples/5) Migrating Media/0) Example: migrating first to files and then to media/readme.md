* First we migrate the files to Drupal (as managed files) using the `entity:file `destination plugin.
* Then a second migration is executed, **with the same source data**, this time to create media entities with the `entity:media` destination plugin.
* The second migration does a migration\_lookup to the first one.
* The UID in the second migration will do nothing in this example, but it is there to demonstrate how you can assign the media entities to a user.

This example works the same for files or other media types as long as you change the migration names accordingly (don't forget the two look ups) and the media bundle to suit your needs, from `default_bundle: image` to `default_bundle: file` for example.

**images\_example.yml**

```php
id: images_example
migration_tags:
  - images
label: 'Import images (as files)'
source:
  plugin: embedded_data
  data_rows:
    -
      id: 1
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
    -
      id: 2
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Patras_from_the_fortress.jpg'
  ids:
    id:
      type: integer
  constants:
    DRUPAL_FILE_DIRECTORY: 'public://images/'
process:
  pseudo_destination_filename:
    -
      plugin: callback
      callable: basename
      source: image
    -
      plugin: skip_on_empty
      method: row
      message: 'Cannot import empty image filename.'
  pseudo_destination_path:
    -
      plugin: concat
      source:
        - constants/DRUPAL_FILE_DIRECTORY
        - '@pseudo_destination_filename'
  uri:
    -
      plugin: skip_on_empty
      method: process
      source: image
    -
      plugin: file_copy
      source:
        - image
        - '@pseudo_destination_path'
      file_exists: rename
      move: false
destination:
  plugin: 'entity:file'
migration_dependencies: null
```

**images\_to\_media\_example.yml**

```php
id: images_to_media_example
migration_tags:
  - images
label: 'Migrate images to media'
source:
  plugin: embedded_data
  data_rows:
    -
      id: 1
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
    -
      id: 2
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Patras_from_the_fortress.jpg'
  ids:
    id:
      type: integer
process:
  pseudo_destination_filename:
    -
      plugin: callback
      callable: basename
      source: image
    -
      plugin: skip_on_empty
      method: row
      message: 'Cannot import empty filename.'
  pseudo_destination_path:
    -
      plugin: concat
      source:
        - '@pseudo_destination_filename'
  name: '@pseudo_destination_filename'
  field_media_image/target_id:
    plugin: migration_lookup
    migration: images_example
    source: id
  thumbnail/target_id:
    plugin: migration_lookup
    migration: images_example
    source: id
  uid:
    -
      plugin: skip_on_empty
      method: process
      message: 'No user for this file.'
    -
      plugin: migration_lookup
      migration: users
      source: author
destination:
  plugin: 'entity:media'
  default_bundle: image
migration_dependencies:
  required:
    - images_example
```