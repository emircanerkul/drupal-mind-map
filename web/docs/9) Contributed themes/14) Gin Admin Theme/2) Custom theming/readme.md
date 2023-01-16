---
url: https://www.drupal.org/docs/contributed-themes/gin-admin-theme/custom-theming
description: >-
  It is entirely possible to override the theming so you can create your own
  custom styles and tweak the interface. Frontend Toolbar offsets /* Position of
  your fixed header */ .your-fixed-header { position: fixed; top:
  var(--gin-toolbar-y-offset); left: var(--gin-toolbar-x-offset); width:
  calc(100% - var(--gin-toolbar-x-offset)); } Custom file name and location
  Begin by creating a stylesheet and name it gin-custom.css. Then place it in
  your public files directory. Check that the stylesheet has been loaded. Some
  example changes Gin Secondary Toolbar /** * @file * A place for custom styles.
published_time: '2022-08-24T15:53:34+00:00'
modified_time: '2022-11-04T12:24:50+00:00'
---
It is entirely possible to override the theming so you can create your own custom styles and tweak the interface.