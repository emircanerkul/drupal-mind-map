---
url: https://www.drupal.org/docs/8/modules/boxout/boxout-guide
description: >-
  The Boxout module is used to create a styled box in your page. Module Page:
  https://drupal.org/project/boxout Installation Put the module into your
  modules directory as usual. Clear the cache Configuration Visit
  /admin/config/content/formats Edit the configuration for each Input format,
  i.e.
published_time: '2017-02-07T23:14:44+00:00'
modified_time: '2017-02-07T23:29:09+00:00'
---
The Boxout module is used to create a styled box in your page.

Module Page: <https://drupal.org/project/boxout>

### Installation

* Put the module into your modules directory as usual.
* Clear the cache

### Configuration

* Visit /admin/config/content/formats
* Edit the configuration for each Input format, i.e. Basic HTML /admin/config/content/formats/manage/basic\_html
* Enable the Boxout button

![Boxout Button](https://www.drupal.org/files/Screen%20Shot%202016-03-07%20at%2022.01.02.png)

**Boxout uses a DIV element to wrap the box, make sure you configure the** 
**text format to allow `<div class="">` in _Filter settings_**  
![Filter Settings](https://www.drupal.org/files/Screen%20Shot%202016-03-07%20at%2022.02.22.png)

### How to use

When you are editing an article you will see the Boxout button, click on it to  
see a dialog where you can insert a Header and a Body.  
![Boxout Dialog](https://www.drupal.org/files/project-images/boxout-dialog.png)  
When you click Insert it will add a div that will format and display the box.

![Boxout in editor](https://www.drupal.org/files/project-images/boxout-edit.png)