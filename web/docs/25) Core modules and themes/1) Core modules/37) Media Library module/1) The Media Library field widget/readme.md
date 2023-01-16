---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/media-library-module/the-media-library-field-widget
description: >-
  This page explains how to set up Media Library in an entity reference field.
  If you have not already installed Media library, see the Overview page for
  instructions. The media library can be used with any entity reference field
  that references Media entities. (It does not support any other field types at
  the time of this writing.) For brevity, we'll refer to such a field as a
  "media reference" field from here on out. When you create a media reference
  field, it will be configured to use the media library by default; no
  additional configuration is needed!
published_time: '2019-09-26T13:50:22+00:00'
modified_time: '2019-10-10T20:07:39+00:00'
---
This page explains how to set up Media Library in an entity reference field. If you have not already installed Media library, [see the Overview page](https://www.drupal.org/docs/8/core/modules/media-library-module/overview) for instructions.

The media library can be used with any entity reference field that references Media entities. (It does not support any other field types at the time of this writing.) For brevity, we'll refer to such a field as a "media reference" field from here on out.

When you create a media reference field, it will be configured to use the media library by default; no additional configuration is needed!

To configure an existing media reference field to use the media library:

1. Navigate to the fields configuration page for the content type (or other entity bundle) which has the media reference field you'd like to change. (For example, /admin/structure/types/manage/article/fields.)
2. Click the "Manage form display" tab.
3. Locate the field you'd like to configure and change its widget to "Media library".

![The "Manage form display" tab of a content type, with a media reference field available](https://www.drupal.org/files/3083974-01.png)

The following options are available if you edit the settings for the widget (normally by clicking the gear icon at the right side of the row):

* **Tab order**: This list allows you to configure the order of the vertical tabs (which filter the library by media type) that will appear in the media library whenever you open it for this field. Which tabs are available depends on the "Media type" setting of the field itself (which, in turn, is configurable via the "Manage fields" tab). The first tab in the list will be activated by default when you open the media library.