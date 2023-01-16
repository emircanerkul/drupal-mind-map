---
url: https://www.drupal.org/docs/8/core/modules/editor/overview
description: >-
  The Text Editor module is included in Drupal 8 core. It is inspired, and in
  some parts functionally identical to the Drupal 7 Wysiwyg module. The Text
  Editor module provides a framework to extend the user interface on text fields
  that allow HTML input. Without the Text Editor module, fields accept only text
  where formatting must be typed manually, such as entering a tag to make text
  bold or an tag to italicize text.
published_time: '2013-05-24T20:44:50+00:00'
modified_time: '2016-11-09T16:31:44+00:00'
---
The Text Editor module is included in [Drupal 8 core](/project/drupal).

It is inspired, and in some parts functionally identical to the Drupal 7 [Wysiwyg](https://www.drupal.org/project/wysiwyg) module.

The Text Editor module provides a framework to extend the user interface on text fields that allow HTML input. Without the Text Editor module, fields accept only text where formatting must be typed manually, such as entering a `<strong>` tag to make text bold or an `<em>` tag to italicize text. The Text Editor module allows these fields to be enhanced with rich text editors (assistive editors, WYSIWYG editors) or toolbars, which make entering and formatting content easier.

### WYSIWYG? What about structured content?

Of course, having the Text Editor module in Drupal 8 does not mean we're no longer true to [structured content principles including filter on output](/documentation/modules/filter).

### What is this, I thought Drupal 8 included CKEditor?

This module provides a framework that other modules can use to provide assistive editors — such as the CKEditor module that Drupal 8 core indeed includes. So, the CKEditor module uses the infrastructure that this module provides. Thanks to this module, it's possible to support other assistive text editors without having to redo all the integration work that went into integrating CKEditor with Drupal.

### Features

This module _actually_ provides the following functionality used in Drupal 8's built-in [CKEditor module](/documentation/modules/ckeditor), and it can be reused by different text editors:

* the image dialog (and image/file usage tracking)
* the link dialog
* in-place editing support (for any text editor plugin that supports it)
* [guaranteed safety for content editors](https://www.drupal.org/node/2099741)

### Issue queue

<http://drupal.org/project/issues/drupal?component=editor.module>