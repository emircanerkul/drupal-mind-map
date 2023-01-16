---
url: >-
  https://www.drupal.org/docs/contributed-modules/album-photos/8x-4x-to-6x-upgrade-survival-guide
description: >-
  This guide will help with the upgrade process. It is not as smooth as I would
  like, so if it seems too much stick with 8.x-4.x for now, but new features
  will likely be added to 6.x and beyond. Many of the new features in 6.x simply
  wont work with 8.x-4.x. Step zero: backup! And please run this on a copy/test
  site before doing it on the live site. Prepare any existing views that need to
  be modified and custom display modes for the smoothest possible upgrade on the
  live site. First run /update.php. This will move all photos to the new
  photos_image entity. At first the photos may not appear.
published_time: '2021-03-26T16:05:56+00:00'
modified_time: '2021-07-21T18:09:11+00:00'
---
This guide will help with the upgrade process. It is not as smooth as I would like, so if it seems too much stick with 8.x-4.x for now, but new features will likely be added to 6.x and beyond. Many of the new features in 6.x simply wont work with 8.x-4.x.

Step zero: backup! And please run this on a copy/test site before doing it on the live site. Prepare any existing views that need to be modified and custom display modes for the smoothest possible upgrade on the live site.

First run /update.php. This will move all photos to the new photos\_image entity. At first the photos may not appear. The key to making beautiful image galleries with 6.x is display modes and views. Any existing views will have to be updated to display the photos\_image entity with the desired display mode.

**Not seeing any images:**

Check the photos display modes:  
Structure > Photos > Manage display  
/admin/structure/photos/display

(Error? Enable core media module.)

Under custom display settings make sure at least “Album cover”, “Full content” and “List” are enabled. Now check each display tab and make sure the image (or any content field that you want to display in the gallery) is enabled and properly formatted.

Not seeing any of those options under custom display settings? They might have to be manually created (or imported from the module config/install or config/optional directory). They can be manually created here: /admin/structure/display-modes/view by clicking “Add view mode”. Note that the “Machine-readable name” is different than the name. They are: cover, full, list, pager, search\_result, search\_result\_image, and sort.

**Album page:**

In 8.x-4.x /photos/album/\* is the album list page. Now the “Photo album” /node/\* (photos content type / node) is designed to replace that page.  
Structure > Content types > Photo album > Manage display  
/admin/structure/types/manage/photos/display

Check that the “Album cover” and “Album photos” fields are enabled and placed in the desired order (or disable if needed). Now if you still aren’t seeing images on the /node/\* page check the photos settings.  
Configuration > Media > Photos  
/admin/config/media/photos

Under the “Advanced” tab the option “Album photos image list view” controls what content appears in the “Album photos” field. At this point (after saving) cache may need to be cleared.

**Photo Information block / pager:**

Change “Pages” from:  
/photos/image/\*  
To:  
/photos/\*/\*

Check the pager display mode. Also check the “Override default album link” under advanced photos settings if you need to change the default link to the album page to a custom view for example. Instead of the photo album content (node).

**Photo comments:**

Currently photo comments are attached to the photos node and remain there. Ideally we would move these to the photos\_image entity. If this is important to your site, please help with testing / debugging the upgrade process in the module issue queue.

**Views:**

Check that the new views are enabled (they can be found in the config/optional directory if they weren't installed automatically). Update any existing views to use the photos\_image entity and desired display mode.

**Image file path:**

The "Path" setting has been removed. It is now recommended to use the File (Field) Paths module (<https://www.drupal.org/project/filefield%5Fpaths>) and Token (<https://www.drupal.org/project/token>).

Structure > Photos > Manage fields  
Edit field\_image. Check Enable File (Field) Paths? Example:  
photos/image\_\[photos\_image:uid:target\_id\]/album\_\[photos\_image:album\_id:target\_id\]  
For user 1 album 2 (node 2) that will be photos/image\_1/album\_2/\[filename\].

\--

This should be enough to get you started. If you think of some helpful advice please feel free to edit this page. If you have some code that will help make this process smoother for everyone please post it in the issue queue. If you run into any road blocks or errors please open an issue in the module issue queue.