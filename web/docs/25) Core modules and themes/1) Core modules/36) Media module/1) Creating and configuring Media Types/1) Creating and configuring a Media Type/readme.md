Just like with content types, you will probably want your site to have additional Media Types, or you may want to edit the existing types Drupal core creates for you. In order to do so, navigate to **Structure -> Media Types**, or visit `/admin/structure/media`: 

![Add media type, step 1](https://www.drupal.org/files/add_media_type1.png)

You will need then to provide the basic information for your media type:

![](https://www.drupal.org/files/media_type_creation2.png)

### 1 - Indicate the Media Source plugin

Here is where you need to choose what plugin will be used for this media type. If you need to create a type different from those provided by Drupal core, you can install a contributed module that provides it. Please refer to the section above for some examples.

### 2 - Define the source field

All media entities need to have at least one field to store essential media resource information. This field is called the **source field** and you can either use an existing field or let the system create a suitable field for you. When you create the first type of a given source, the system will automatically create a source field. In the screenshot above, however, we are creating a second type that uses the "Image" source plugin, which then allows us to choose either to create a new field or to re-use the field that was created for the previous media type.

### 3 - (Optionally) indicate metadata mapping information

Source plugins know how to retrieve media-specific metadata information from their assets, and this allows for a powerful feature of Media Entities: you can map metadata from the media resource into standard Drupal fields every time a new entity is created. For example, the ` \Drupal\media\Plugin\media\Source\Image` media source plugin allows for the following metadata attributes:

```php
...
  'name' => $this->t('Name'),
  'mimetype' => $this->t('MIME type'),
  'filesize' => $this->t('File size'),
  'width' => $this->t('Width'),
  'height'  => $this->t('Height'),
...

```

while the `\Drupal\media\Plugin\media\Source\OEmbed` source plugin allows for the following:

```php
...
      'type' => $this->t('Resource type'),
      'title' => $this->t('Resource title'),
      'author_name' => $this->t('The name of the author/owner'),
      'author_url' => $this->t('The URL of the author/owner'),
      'provider_name' => $this->t("The name of the provider"),
      'provider_url' => $this->t('The URL of the provider'),
      'cache_age' => $this->t('Suggested cache lifetime'),
      'default_name' => $this->t('Default name of the media item'),
      'thumbnail_uri' => $this->t('Local URI of the thumbnail'),
      'thumbnail_width' => $this->t('Thumbnail width'),
      'thumbnail_height' => $this->t('Thumbnail height'),
      'url' => $this->t('The source URL of the resource'),
      'width' => $this->t('The width of the resource'),
      'height' => $this->t('The height of the resource'),
      'html' => $this->t('The HTML representation of the resource'),
...

```

These values, when mapped as indicated in the picture above, will be copied into empty field values when the entity is first created in Drupal. Once [#2983456: Expose triggering update of media metadata + thumbnail to end users](https://www.drupal.org/project/drupal/issues/2983456 "Status: Needs review") is fixed, there will be an additional mechanism that will allow users to trigger / refresh copying these values from the source into the entity fields manually.

This step is optional, and won't do any action if left unconfigured.