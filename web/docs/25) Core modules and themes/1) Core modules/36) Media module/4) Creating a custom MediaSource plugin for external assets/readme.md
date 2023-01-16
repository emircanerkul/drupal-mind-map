---
url: >-
  https://www.drupal.org/docs/8/core/modules/media/creating-a-custom-mediasource-plugin-for-external-assets
description: >-
  Creating your own media source plugins are the link between the asset you want
  to represent and the Drupal entity that will hold its data. Their documented
  interfaces are very good sources of information (MediaSourceInterface,
  MediaTypeInterface). Drupal core by default ships with 5 media source plugins:
  File, AudioFile, VideoFile, Image, and OEmbed. Which are good sources of
  inspiration on how to create your own. This example, creates a custom
  ExternalImage media source that uses a text_long field to store a JSON object
  that will contain the information about our external asset.
published_time: '2018-10-24T20:51:10+00:00'
modified_time: '2022-01-14T21:53:23+00:00'
---
Creating your own media source plugins are the link between the asset you want to represent and the Drupal entity that will hold its data. Their documented interfaces are very good sources of information (`MediaSourceInterface`, `MediaTypeInterface`). Drupal core by default ships with [5 media source plugins](https://api.drupal.org/api/drupal/core%21modules%21media%21src%21MediaSourceInterface.php/interface/implements/MediaSourceInterface/8.6.x): `File`, `AudioFile`, `VideoFile`, `Image`, and `OEmbed`. Which are good sources of inspiration on how to create your own.

This example, creates a custom `ExternalImage` media source that uses a **text\_long** field to store a JSON object that will contain the information about our external asset. This object would contain all the relevant properties: `alt`, `source`, `uri`. For example:

```php
{
  "alt": "Main building of Moscow State University",
  "source": "Wikimedia Commons",
  "author": "Dmitry A. Mottl (cropped by King of Hearts)",
  "uri": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Moscow_State_University_crop.jpg/800px-Moscow_State_University_crop.jpg"
}
```

For this we will extend the `MediaSourceBase` class, the **allowed\_field\_types** property of the MediaSource annotation specifies which type of fields will be used to extract information about the asset, in this case a `text_long` field, used to store the JSON object with the properties of the image.

```php
<?php

namespace Drupal\chip_distribution_image_media_type\Plugin\media\Source;

use Drupal\media\MediaInterface;
use Drupal\media\MediaSourceBase;
use Drupal\json_field\Plugin\Field\FieldType\JSONItem;

/**
* External image entity media source.
*
* @see \Drupal\file\FileInterface
*
* @MediaSource(
*   id = "external_image",
*   label = @Translation("External Image"),
*   description = @Translation("Use remote images."),
*   allowed_field_types = {"text_long"},
*   thumbnail_alt_metadata_attribute = "alt",
*   default_thumbnail_filename = "no-thumbnail.png"
* )
*/
class DistributionImage extends MediaSourceBase {
```

We will also implement the `getMetadataAttributes()` method to define which attributes can be contained on the JSON object. When creating a custom media entity type on the Drupal UI, Drupal uses this information to allow you to map this attributes to media entity fields.

```php
public function getMetadataAttributes() {
  return [
    'title' => $this->t('Title'),
    'alt_text' => $this->t('Alternative text'),
    'caption' => $this->t('Caption'),
    'credit' => $this->t('Credit'),
    'id' => $this->t('ID'),
    'uri' => $this->t('URL'),
    'width' => $this->t('Width'),
    'height' => $this->t('Height'),
  ];
}
```

And finally all the magic to allow displaying thumbnails for our newly created `MediaSourcePlugin` happens on the `getMetadata()` method, that receives the `$media` entity itself as a parameter, and the name of the metadata it wishes to obtain the value for:

```php
public function getMetadata(MediaInterface $media, $attribute_name) {
  // Get the text_long field where the JSON object is stored
  $remote_field = $media->get($this->configuration['source_field']);
  $json_arr = json_decode($remote_field->value);
  // If the source field is not required, it may be empty.
  if (!$remote_field) {
    return parent::getMetadata($media, $attribute_name);
  }
  switch ($attribute_name) {
    // This is used to set the name of the media entity if the user leaves the field blank.
    case 'default_name':
      return $json_arr->alt_text;
    // This is used to generate the thumbnail field.
    case 'thumbnail_uri':
      return $json_arr->uri;
    default:
      return $json_arr->$attribute_name ?? parent::getMetadata($media, $attribute_name);
  }
}
```

This is because every Media entity [has a thumbnail field](https://api.drupal.org/api/drupal/core%21modules%21media%21src%21Entity%21Media.php/function/Media%3A%3AbaseFieldDefinitions/8.6.x) used to display a preview of your media assets on views like `/admin/media/content`. To populate this field, [the media module uses](https://api.drupal.org/api/drupal/core%21modules%21media%21src%21Entity%21Media.php/function/Media%3A%3AgetThumbnailUri/8.6.x) the `thumbnail_uri` attribute of the media source plugin used by your media entity type (phew, that was long!).

The media module uses this special **thumbnail\_uri** attribute to download an image, and while configuring the media type using this media source plugin you can specify if this download will occur while creating the entity or later when running the cron. You could also use a module like the [remote\_stream\_wrapper](https://www.drupal.org/project/remote%5Fstream%5Fwrapper) to even avoid downloading the thumbnail, and creating the thumbnail file entity in drupal using the remote URI directly, the only drawback of using the `remote_stream_wrapper` module for this is that it seems like it doesn't allow generating image styles out of file fields using this remote URIs.

### Additional resources

* The [Media Remote](https://www.drupal.org/project/media%5Fremote) contrib module is another example of a MediaSource plugin, which includes validator constraints and the Media Library form integration.