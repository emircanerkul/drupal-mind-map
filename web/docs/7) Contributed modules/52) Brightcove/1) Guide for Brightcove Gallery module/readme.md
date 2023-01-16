---
url: >-
  https://www.drupal.org/docs/contributed-modules/brightcove/guide-for-brightcove-gallery-module
description: >-
  General information The Brightcove Gallery module allows users to launch video
  portals, stream live events and deliver engaging video experiences. With the
  help of the Gallery it is possible to embed (one or more) Brightcove videos
  and playlists in landing pages within Drupal.
published_time: '2022-06-16T14:23:37+00:00'
modified_time: '2022-06-17T06:42:11+00:00'
---
**General information**

The Brightcove Gallery module allows users to launch video portals, stream live events and deliver engaging video experiences. With the help of the Gallery it is possible to embed (one or more) Brightcove videos and playlists in landing pages within Drupal.

The module covers the following functionalities:

* View Brightcove In-Page Experiences
* Delete Brightcove In-Page Experiences
* Edit Brightcove In-Page Experiences: work in process

**Installation**

The Brightcove Gallery module does not have to be installed separately, as the Brightcove Video Connect module already contains the Brightcove Gallery module. However, it needs to be enabled separately.

To enable the module from the terminal use the following command:

`drush en brightcove_gallery`

For the instructions of the installation of Drupal 8 and Drupal 9 versions of Brightcove Video Connect module visit the following [link](https://www.drupal.org/docs/contributed-modules/brightcove).

**Brightcove In-Page Experiences**

The Brightcove Gallery module brings with itself the Brightcove In-Page Experiences feature, which makes it possible to retrieve experiences in Drupal for a user having a Brightcove Studio account; in other words, the videos in the In-Page Experience are imported from Brightcove Studio.

Accessing the Brightcove In-Page Experiences:

* click on Content » Brightcove In-Page Experiences
* or go to the URL /admin/content/brightcove-in-page-experience

Here admin users can see the list of their experiences with all the related metadata:

![In-page experiences](https://www.drupal.org/files/1_140.png)

* Name of the experience: note that by clicking on the name of an experience, the user is taken to the view page of the experience entity
* Status of the experience: success, unpublished, publishing, unpublishing, inactive, failed
* API client
* Date of creation
* Date of last update
* ID of the experience
* Operations: view and delete

**Add experiences to different content types**

The Brightcove Gallery module enables adding In-Page Experiences to already existing content types. Experiences will be added in the form of reference field items.

Adding and experience to a Basic Page content type:

1\. Go to the Manage field tab of the Basic Page content type

![Add field](https://www.drupal.org/files/2_117.png)

2\. Click on Add field, where the new field will be of Other reference field type

![](https://www.drupal.org/files/3_56.png)

3\. Give it a label, then press Save and continue

4\. In the next step, under the Field settings tab it can be determined what types of items will be referenced: here choose Brightcove In-Page Experience from the drop-down list

![](https://www.drupal.org/files/4_28.png)

5\. Click save and then you will have an experience field created on the basic page content type

![](https://www.drupal.org/files/5_20.png)

6\. Go to Manage display and set the format to Rendered entity

![](https://www.drupal.org/files/6_8.png)

7\. At the settings of the rendered entity (by clicking on the small wheel icon) you can select the view mode: it can be default or preview view mode (see below: how to create preview view mode), which actually refers to the display of the experience gallery

![](https://www.drupal.org/files/7_7.png)

8\. Save

Now you can add a new basic page content with the In-Page Experience field available, so you can add experiences to a basic Drupal page.

![](https://www.drupal.org/files/8_2.png)

NOTE: the search function of the In-Page Experience drop-down field is a bit tricky, which is caused by the API itself: when the user searches for the name of an experience entity, they have to use whole words from the name of the experience, otherwise no results will be suggested in the search field.

![](https://www.drupal.org/files/9_3.png)

Upon selection the ID of the experience will also be displayed in the field, which makes the identification easier.

![](https://www.drupal.org/files/10_1.png)

NOTE: if you select an In-Page Experience that is in unpublished status, it will not be displayed, as the rendered view will be provided only after publishing the experience, which refers to experiences in success status.

**Create view mode**

With the following steps you can create custom view modes:

1\. Click on Structure » Display modes or go to the URL /admin/structure/display-modes

![](https://www.drupal.org/files/11_5.png)

2\. Here select the View modes option

3\. Add view mode

![](https://www.drupal.org/files/12_7.png)

4\. Select the option Brightcove In-Page Experience

![](https://www.drupal.org/files/13_3.png)

5\. Add name

![](https://www.drupal.org/files/14_3.png)

6\. Save

The newly created view mode will be listed at the Brightcove In-Page Experiences section of the view modes.

![](https://www.drupal.org/files/15_3.png)

**Brightcove In-Page Experience settings: custom display settings**

To edit the custom view modes, go to Structure » Brightcove In-Page Experience settings, and go to the Manage display tab.

![](https://www.drupal.org/files/16_0.png)

Under the Custom display settings you can select the new view mode, which will be displayed on a separate tab.

![](https://www.drupal.org/files/17_1.png)

Here it is possible to determine which fields will be displayed along a given content type: if only the “Preview” field is enabled, only the video gallery will be displayed along with the content.

![](https://www.drupal.org/files/18_1.png)

**Brightcove In-Page Experience settings: Caching**

By default the caching is set for -1 seconds, which means that the loaded entities will be cached until the cache is cleared on purpose. If you want them to be cached for 10 minutes for example, set the cache for 600 seconds.

![](https://www.drupal.org/files/19_1.png)