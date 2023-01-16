---
url: https://www.drupal.org/docs/contributed-modules/album-photos/photos-8x-4x
description: >-
  The photos.module. Album Photos module page The Album Photos module provides a
  solution for creating photo albums and uploading multiple images. The module
  automatically creates the photos content type which creates a node that
  contains all the photos (saved as managed files). This page will explain how
  to install the module and enable the special features. Including how to
  configure the module in the admin section admin/config/media/photos.
published_time: '2017-07-21T23:57:12+00:00'
modified_time: '2021-03-26T16:13:15+00:00'
---
The photos.module. [Album Photos module page](https://drupal.org/project/photos)

The Album Photos module provides a solution for creating photo albums and uploading multiple images. The module automatically creates the photos content type which creates a node that contains all the photos (saved as managed files).

This page will explain how to install the module and enable the special features. Including how to configure the module in the admin section admin/config/media/photos.

### Best Experience

For the best experience install and enable the following modules:

* [Crop API](https://www.drupal.org/project/crop)
* [Image Widget Crop](https://www.drupal.org/project/image%5Fwidget%5Fcrop)
* [Image Effects](https://www.drupal.org/project/image%5Feffects)
* [Colorbox](http://drupal.org/project/colorbox)
* [Plupload](http://drupal.org/project/plupload) (multi image upload)
* [Exif Orientation](https://www.drupal.org/project/exif%5Forientation) (auto fix image orientation)

For **inline editing** of image titles and descriptions install the [Jeditable](http://www.appelsiini.net/projects/jeditable) code. At the top of the page find the text "For those in hurry download latest source or minified.". Save the source and minified files (<http://www.appelsiini.net/download/jquery.jeditable.js> and <http://www.appelsiini.net/download/jquery.jeditable.mini.js>) in a folder called jeditable and place that folder in your /libraries folder. If it's not working try clearing the site's cache.

On the colorbox module settings page make sure the "Enable colorbox load" box is checked.

Update permissions as needed for **Album photos** and **Node**. Explained in [permissions](#photos-permissions) below.

### Admin Section

The admin section explained. (admin/config/media/photos)

**Configure and enable photo searching**  
If the core search module is enabled this option will appear at the top of the photos.module admin section. The link will take you to the core search settings page where you can enable searching of individual photos by title and description. Check the "Album photos" check box in the active search modules section.

**Privacy settings:**  
This option is enabled if you have the "Photos Access" sub-module enabled. Select enable to display the settings described below in the [Sub-modules](#photos-sub-modules) section. This will display the photos access options for each album.

**Classic form:**  
The module comes with a standard classic form as backup if you don't have the plupload module installed / enabled or the SWFUpload module. Select the number of fields you want to display on the classic form. Each field will allow the user to select one image and set the title and description while uploading new images.

**Use Plupoad for file uploads:**  
Select this box if you have the plupload module installed to enable multiple image uploading with features such as drag and drop or select multiple images from folders.

**Path:**  
This defines a custom path within your files directory to store the original images upon upload.

**How to display original image and all sizes?**  
This option is specific to the photos sharing page. For best experience and integration with the colorbox module choose print, otherwise return will build your sites theme around the image share code including header and all.

**Comment setting:**  
Enable commenting on individual photos. All comments will be displayed on the album node page with a link to the image. All comments for each image will be displayed on the image page.

**zip compressed upload:**  
If you have this option enabled user can upload zip files full of images. This is compatible with the classic form and with the plupload module. This option also enables a page for site administrators where they can specify a filepath on the server where a zip folder has been uploaded via ftp or some other way (photos/import). If you can't access the photos/import page try clearing your site's cache after enabling this option.

**Rename image:**  
Enable this option to automatically rename files when they are uploaded.

### Permissions

The Album Photos admin/people/permissions explained.

**View photos:**  
Allows users to view publicly available photos.

**Create photos:**  
Allows users to create photo galleries and upload images.

**Edit own photos:**  
Allows users to edit photos titles and descriptions.

**Delete own photos:**  
Allows users to delete photos that they have uploaded.

**Edit any photos:**  
Allows users to edit any photos whether they were the one that uploaded them or not.

**Delete any photos:**  
Allows users to delete any photos whether they were the one that uploaded them or not.

Sub-modules

The photos module comes with sub-modules.

**Photos Access:**  
The Photos Access module provides settings for each album including open, locked, designated users, or password required. There is also an option to add collaborators which allows you to add other users who can view / edit the album. After enabling this module you will be asked to rebuild your site's permissions. This can be done on the status report page (admin/reports/status).

Photos access options explained:

**Open:**  
The gallery is public and open for anyone to view.

**Locked:**  
The gallery is locked. Only the creator can see this album.

**Designated users:**  
Only users in this list and the creator can see this album.

**Password required:**  
A password can be set and only people who enter that password from the node page can view this album.

All options have the exception of being viewed by the super admin or administrators with correct permissions.