---
url: >-
  https://www.drupal.org/docs/8/api/plugin-api/creating-a-plugin-that-can-be-defined-in-themes
description: >-
  In general, plugins should not be defined in a custom theme but in a custom
  module. There are some cases where plugins make sense in a Custom Theme, for
  example, the BreakPoints plugin and the Layout Plugin. How to create a plugin
  that can be defined inside a theme Make sure your plugin provides a YML
  Discovery method. Which is the only one that you can use in a theme. In your
  module.services.yml file,make sure you pass the theme handler.
published_time: '2016-10-14T19:12:21+00:00'
modified_time: '2019-11-26T18:52:18+00:00'
---
In general, plugins should not be defined in a custom theme but in a custom module. There are some cases where plugins make sense in a Custom Theme, for example, the BreakPoints plugin and the Layout Plugin.