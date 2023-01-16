---
url: https://www.drupal.org/docs/8/core/modules/tracker-module/overview
description: >-
  The Activity Tracker core module displays a site's most recently added or
  updated content. The Activity Tracker module also provides user-level
  tracking, which allows you to follow the contributions of specific authors.
  The Recent content page contains a reverse-chronological list of new and
  recently updated content. The list displays the content type, the title, the
  author's username, how many comments that item has received, and when it was
  last updated. Updates include any changes to the text, either by the original
  author or someone else, as well as any new comments added to an item.
published_time: '2016-11-21T14:50:38+00:00'
modified_time: '2019-12-20T09:04:08+00:00'
---
The Activity Tracker core module displays a site's most recently added or updated content. The Activity Tracker module also provides user-level tracking, which allows you to follow the contributions of specific authors.

The _Recent content_ page contains a reverse-chronological list of new and recently updated content. The list displays the content type, the title, the author's username, how many comments that item has received, and when it was last updated. Updates include any changes to the text, either by the original author or someone else, as well as any new comments added to an item. A red "new" will display beside the name of each node the current user has not yet navigated to. The _My recent content_ tab on this page limits the list to the currently logged-in user.

To use the Activity Tracker module to see a specific user's updated content, you can click on that user's profile, then their _Track_ tab, or enter the URL `http://example.com/user/34/track` (in older versions of the module), or `http://example.com/user/34/activity` (in recent versions of the module), where the number is the unique Drupal user ID number.

To see the activity of _all_ users, enter the URL `http://example.com/track` (in older versions of the module), or `http://example.com/activity` (in recent versions of the module),

Aside from enabling and disabling, you _cannot_ administer this module (ie. there are no configuration options). 

There is no Tracker view in the current D8 implementation. The information is created from the tracker\_page() function in the tracker.pages.inc file.