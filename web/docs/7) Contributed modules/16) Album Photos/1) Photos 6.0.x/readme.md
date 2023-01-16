---
url: https://www.drupal.org/docs/contributed-modules/album-photos/photos-60x
description: >-
  New photo entity provides more flexibility. Media: Upload images to a media
  field with the Media Library Form API Element module. First make sure you have
  an image media type. Now add a media reference field to the photos entity
  type: /admin/structure/photos/fields. Update the different display modes to
  display the media field: /admin/structure/photos/display. Set the new media
  field as the default multi-upload field: /admin/config/media/photos.
  Troubleshooting/other useful modules: Media Library Theme Reset Image file
  path: By default images will be placed in photos/images.
published_time: '2020-04-26T14:46:58+00:00'
modified_time: '2021-07-26T18:21:20+00:00'
---
New photo entity provides more flexibility.

**Media:**

Upload images to a media field with the [Media Library Form API Element](https://www.drupal.org/project/media%5Flibrary%5Fform%5Felement) module.

* First make sure you have an image media type.
* Now add a media reference field to the photos entity type: /admin/structure/photos/fields.
* Update the different display modes to display the media field: /admin/structure/photos/display.
* Set the new media field as the default multi-upload field: /admin/config/media/photos.

Troubleshooting/other useful modules:  
[Media Library Theme Reset](https://www.drupal.org/project/media%5Flibrary%5Ftheme%5Freset)

**Image file path:**

By default images will be placed in photos/images. The path can be customized by editing the photos field\_image file directory settings.  
Photo fields can be found here: /admin/structure/photos/fields

It is recommended to use the File (Field) Paths module (<https://www.drupal.org/project/filefield%5Fpaths>) and Token (<https://www.drupal.org/project/token>).

Structure > Photos > Manage fields  
Edit field\_image. Check Enable File (Field) Paths? Example:  
photos/image\_\[photos\_image:uid:target\_id\]/album\_\[photos\_image:album\_id:target\_id\]  
For user 1 album 2 (node 2) that will be photos/image\_1/album\_2/\[filename\].