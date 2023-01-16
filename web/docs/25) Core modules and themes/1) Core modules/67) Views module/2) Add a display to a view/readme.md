---
url: https://www.drupal.org/docs/8/core/modules/views/add-a-display-to-a-view
description: >-
  You can add one or more displays to a view. Each display is a variation of the
  view. For example, you could start with a view that shows a page of recently
  modified content and then create new displays to output the same content as a
  block and as a feed. A display can also be modified to override any of the
  view parameters. Navigate to the edit screen for your view (for example,
  admin/structure/views/MY_VIEW_NAME/edit). Click Add+ and select from the list
  of output options. Make any necessary changes to the display and click Save.
published_time: '2013-02-16T16:33:51+00:00'
modified_time: '2019-05-02T11:53:49+00:00'
---
You can add one or more displays to a view. Each display is a variation of the view. For example, you could start with a view that shows a page of recently modified content and then create new displays to output the same content as a block and as a feed. A display can also be modified to override any of the view parameters.

1. Navigate to the edit screen for your view (for example, admin/structure/views/MY\_VIEW\_NAME/edit).
2. Click **Add+** and select from the list of output options.
3. Make any necessary changes to the display and click **Save**.

### Duplicate Displays

You can also copy (duplicate) displays or the entire view using the two drop downs located at the upper right of the Views Displays table (above the Advanced link).

### IMPORTANT - Limit Access to Displays or Views:

The first thing to do once you're added or duplicated a view it set its access to avoid showing any private data. In the middle column, change the Access setting to what's appropriate for the display you've added or duplicated.

It's too easy to allow unauthorized users to see data they should not. 

For example, if you have an Admin view with Access only for Administrator but then you duplicate it to a Page and set Access to Authenticated, then your Admin view will be visible to Authenticated too! (Read more and workarounds <https://www.drupal.org/project/views/issues/1174588#comment-12431305>) 

For views with varying access (like above), be sure to set permissions to 'This Page' for each page. 

1. First, click the link immediately to the right of the word Access, which will bring up an Access restrictions dialog.
2. This is where you must select the 'For' drop down to be either 'All displays' or 'This Page'. This is very important for the security of your data.
3. Then decide between the radio buttons None, Permissions, or Roles. Typically Roles will be easiest for most sites. Complex sites may need finer Permissions-based access restrictions.
4. Then the next dialog may appear where you can set the finer options based on your selection above. This dialog is like a wizard for the first time through. The second time it won't appear because next to Access will be two links separated by a pipe (|).
5. Next save your view, after you've verified it's correct.
6. Test your access restrictions! This is very important. It's recommended that you have several accounts with each of the access restrictions you're going to use. For most sites, Administrator and Authenticated are enough. So try out the displays using each, like Administrator, Authenticated, and Anonymous.

Also important, if you duplicate a display be sure to give it a different path in the Page Settings section. You certainly wouldn't want unauthorized users to access the same restricted link as authorized users.