---
url: >-
  https://www.drupal.org/documentation/modules/settings_tray/using-the-settings-tray
description: >-
  The Settings Tray module is included in Drupal 8 core since Drupal 8.2 and is
  considered stable in Drupal 8.5. It provides enhanced functionality from the
  Contextual module by adding the ability to configure blocks and change the
  related configuration from the Drupal front-end. To use this feature enable it
  from the Core section of the Extend (module administration) page. After
  enabling the module, the Edit button provided by the Contextual module will
  trigger a new "Edit" mode provided by the Settings Tray module.
published_time: '2016-08-17T14:56:27+00:00'
modified_time: '2018-03-09T14:34:28+00:00'
---
The Settings Tray module is included in [Drupal 8 core](/project/drupal) since Drupal 8.2 and is considered **stable in Drupal 8.5**. It provides enhanced functionality from the [Contextual module](/docs/8/core/modules/contextual/working-with-contextual-links) by adding the ability to configure blocks and change the related configuration from the Drupal front-end.

To use this feature enable it from the **Core** section of the Extend (module administration) page. 

After enabling the module, the **Edit** button provided by the [Contextual module](/docs/8/core/modules/contextual/working-with-contextual-links) will trigger a new "Edit" mode provided by the Settings Tray module. In "Edit" mode most of the [blocks](/docs/8/core/modules/block/overview) on the page will be highlighted and will become clickable. Clicking on the highlighted blocks will open a simplified block edit form in the sidebar.

![Drupal settings tray example gif](https://www.drupal.org/files/settings-tray.gif)

The Settings Tray block form contains all the block configuration options except **Visibility** options and the region selector. For some blocks such as the **Menu** and **Site Branding** blocks, the form will also allow editing related configuration such as Menu items, the Site name, and the Site slogan.

![](https://www.drupal.org/files/Home_Drupal_8.4.3_-_2017-12-23_14.34.23.png)

The Settings Tray module also provides a new "Quick Edit" contextual link. "Edit" mode is invoked when this link is clicked, and the sidebar will open with the block's form.

![Settings Tray contextual link](https://www.drupal.org/files/settings_tray_contextual_link.png)

To exit Edit mode, either click "Editing" in the toolbar or press the ESC key.