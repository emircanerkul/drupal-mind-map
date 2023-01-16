---
url: https://www.drupal.org/docs/8/modules/audiofield/using-audiofield
description: >-
  Audiofield functions as a formatter for two entity types - Link and File .
  Both of these entity types are available in Drupal 8 Core. In order to use
  them, their modules must be enabled. Once these modules are enabled, you can
  add File and Link fields to any content type through your site's structure
  configuration (Administration > Structure > Content types >Manage fields).
  After these fields have been added, you can then select Audiofield Audio
  Player as the formatter for the field. Normally, file or link uploads display
  as simple links using the default formatter.
published_time: '2017-05-08T23:02:36+00:00'
modified_time: '2017-05-08T23:15:37+00:00'
---
Audiofield functions as a formatter for two entity types - Link and File . Both of these entity types are available in Drupal 8 Core. In order to use them, their modules must be enabled.

Once these modules are enabled, you can add File and Link fields to any content type through your site's structure configuration (Administration > Structure > Content types >Manage fields).

After these fields have been added, you can then select **Audiofield Audio Player** as the formatter for the field. Normally, file or link uploads display as simple links using the default formatter.

![](https://www.drupal.org/files/generic_files.jpg)

Audiofield allows you to display these uploads as audio players directly on the site. To do this, choose to Manage display for your content fields (Administration > Structure > Content types > Manage display).

From this page, choose **Audiofield Audio Player** for your Link or File formatter.

![](https://www.drupal.org/files/choosing_formatter.jpg)

When this has been selected, you will be presented with configuration options for which type of audio player you would like to use. You will only see installed audio players available here.

![](https://www.drupal.org/files/choosing_player.jpg)

After you have selected the appropriate audio player and chosen your settings, you should see the audio player on your content page.

![](https://www.drupal.org/files/sample_audiofield_0.jpg)

Please note that these formatters can also be used and configured similarly anywhere that Drupal uses field formatters - in the Views module, for example.