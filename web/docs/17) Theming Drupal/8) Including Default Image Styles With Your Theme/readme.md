---
url: >-
  https://www.drupal.org/docs/8/theming-drupal-8/including-default-image-styles-with-your-theme
description: >-
  Drupal has a powerful image manipulation system that allows for the creation
  of image styles that can perform various effects on an image and create a
  derivative of the original image. This functionality can be leveraged in
  themes that wish to include a set of default image styles created to work with
  the theme in question rather than having to rely on those provided by core.
  The process for including an image style in your theme is similar to that of
  including default configuration in a module.
published_time: '2014-10-15T04:27:33+00:00'
modified_time: '2022-08-12T14:28:37+00:00'
---
> Drupal has a powerful image manipulation system that allows for the creation of image styles that can perform various effects on an image and create a derivative of the original image. This functionality can be leveraged in themes that wish to include a set of default image styles created to work with the theme in question rather than having to rely on those provided by core.

The process for including an image style in your theme is similar to that of [including default configuration in a module](https://www.drupal.org/node/2087879).

* Create the Image Style you wish to include using the UI
* Export the Image Style as YAML
* Include the exported YAML in the config/install directory of your theme following the appropriate naming convention.

Start by creating an image style using the admin UI at Configuration > Media > Image Styles (admin/config/media/image-styles). Once the image style has been created and saved, the configuration that makes up that image style will be stored in your site's active config.

This configuration can be exported using the:

* single import/export tool at Configuration > Configuration management > Single Import/Export > Export (admin/config/development/configuration/single/export).
* From the configuration type select list choose "Image style"
* then choose your image style from the configuration name select list.

The YAML representation of the image style will be displayed in the textarea, and can be copied and pasted into a .yml file in the config/install directory of your theme. Configuration files follow a specific naming pattern. image.style.{image style name}.yml. If you're unsure what name your file should use it is displayed underneath the textarea with the exported configuration.

Note that the exported configuration will contain a UUID key as the first line. This UUID should be removed before copying the configuration into the new image.style.{image style name}.yml file.

**Example** THEMENAME/config/install/image.style.black\_white.yml

```yaml
langcode: en
status: true
dependencies: { }
name: black_white
label: 'black & white'
effects:
  8d4f85cc-9a2d-4a30-af15-21b0833dc06d:
    uuid: 8d4f85cc-9a2d-4a30-af15-21b0833dc06d
    id: image_desaturate
    weight: 1
    data: { }
    third_party_settings: { } 
```

You can include any number of image styles with your theme. They will all be imported into the active configuration when the theme is installed.

**Please note** that once your theme has been installed, editing the image style YML file in config/install will have no effect, nor will adding an additional image style YML file in config/install.