---
url: https://www.drupal.org/docs/mobile-drupal-sites/responsive-images
description: >-
  Note: This page could use some more information! Using responsive images means
  loading images that have been specifically sized for the user screen based on
  breakpoints. This practice makes websites load faster on mobile devices
  because image sizes are optimized for mobile devices. This is different than
  fluid images when large images are scaled down with CSS. Responsive images
  transmit less data than fluid images by sending the smallest image necessary
  for the receiving device. Whereas fluid transmits one size, perhaps the
  largest size, then forces the device to scale it down.
published_time: '2014-10-08T13:12:27+00:00'
modified_time: '2022-09-23T05:32:11+00:00'
---
**Note: This page could use some more information!**

Using responsive images means loading images that have been specifically sized for the user screen based on breakpoints. This practice makes websites load faster on mobile devices because image sizes are optimized for mobile devices. This is different than fluid images when large images are scaled down with CSS.

Responsive images transmit less data than fluid images by sending the smallest image necessary for the receiving device. Whereas fluid transmits one size, perhaps the largest size, then forces the device to scale it down. As you can imagine, sending a 100 kb fluid image takes far longer than a 1 megabyte responsive image, especially over slow cellular signals. Also consider the cost of data on the site visitor, who might not visit again because of that cost.

Use both, responsive images and fluid image css. Because of the large number of screen sizes, site editors can't possibly store all screen size variations. But they could store two, three and maybe even four sizes of each image. Only one of these stored images (the roughly right size one) gets transmitted to the device. Then css fluid image adjusts the image to fit the exact device size to make it look good.

Ok, for the discerning reader, an image is an image, whereas the words responsive and fluid describe the processing of that image. Responsive image sizes get processed by a site editor, whereas fluid gets processed by a browser.

The Responsive Image module in Drupal 8 and later versions provides an image formatter and breakpoint mappings to output responsive images using the HTML5 picture tag. Responsive image includes a fallback support for Internet Explorer 8\. To get images in IE 8 that aren't mobile sized, you'll need to configure the fallback in your display to use your desktop image size rather than 'automatic'.

### Usage

Prerequisites

Make sure both _Breakpoint_ and _Responsive image_ modules are enabled. These modules are available as Drupal 8 core modules.

Defining responsive image styles

By creating responsive image mappings you define the image styles that are being used to output images at certain breakpoints. On the Responsive image mappings admin page `/admin/config/media/responsive-image-style` click _Add responsive image style_ to create a new style. First, select a label and a breakpoint group and click Save. After that, you can choose the image styles that will be used for each breakpoint. Image styles can be defined on the Image styles page that is provided by the Image module. Breakpoints are defined in the configuration files of the theme; see [Working with breakpoints in Drupal 8](https://www.drupal.org/documentation/modules/breakpoint) for more about breakpoints.

Using responsive image styles in Image fields

After defining responsive image styles, you can use them in the display settings for your Image fields, so that the site displays responsive images using the HTML5 picture tag. Open the Manage display page for the entity type (content type, taxonomy vocabulary, etc.) that the Image field is attached to. Choose the _Responsive image_ format, click the Edit icon, and select one of the responsive image mappings that you have created.