---
url: https://www.drupal.org/docs/8/modules/breakgen/style-effects
description: >-
  Are effects you can give to your image style. These effects will influence how
  your image is displayed when using the selected image style. By default the
  drupal core image module comes with seven style effects. However some modules
  will provide their own style effects. For example the crop module provides the
  Manual crop style effect. Breakgen has only been tested with the image and
  crop module therefore we'll only explain these style effects. Style effect
  Description Provider Convert Converts an image between extensions (e.g. from
  PNG to JPEG).
published_time: '2019-12-27T12:36:55+00:00'
modified_time: '2019-12-27T13:18:48+00:00'
---
Are effects you can give to your image style. These effects will influence how your image is displayed when using the selected image style. By default the drupal core `image` module comes with seven style effects. However some modules will provide their own style effects. For example the `crop` module provides the Manual crop style effect. Breakgen has only been tested with the `image` and `crop` module therefore we'll only explain these style effects. 

| Style effect   | Description                                                                                                                                                                                     | Provider                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Convert        | Converts an image between extensions (e.g. from PNG to JPEG).                                                                                                                                   | [Image](http://drupal.org/project/drupal)   |
| Crop           | Crop will make images an exact set of dimensions. This may cause parts of the image to be cut off.                                                                                              | [Image](http://drupal.org/project/drupal)   |
| Desaturate     | Desaturate converts an image to grayscale.                                                                                                                                                      | [Image](http://drupal.org/project/drupal)   |
| Resize         | Resizing will make images an exact set of dimensions. This may cause images to be stretched or shrunk disproportionately.                                                                       | [Image](http://drupal.org/project/drupal)   |
| Rotate         | Rotating an image may cause the dimensions of an image to increase to fit the diagonal.                                                                                                         | [Image](http://drupal.org/project/drupal)   |
| Scale and Crop | Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image. | [Image](http://drupal.org/project/drupal)   |
| Scale          | Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.                                                  | [Image](http://drupal.org/project/drupal)   |
| Manual Crop    | Applies manually provided crop to the image.                                                                                                                                                    | [Crop](https://www.drupal.org/project/crop) |