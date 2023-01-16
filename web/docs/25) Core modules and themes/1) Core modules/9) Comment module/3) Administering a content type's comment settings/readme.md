---
url: >-
  https://www.drupal.org/docs/8/core/modules/comment/administering-a-content-types-comment-settings
description: >-
  This documentation details how to add or edit comment settings on a content
  type. Note that this documentation is mentioning content type but comments can
  actually be added to any entity type. Adding comment to a content type 1.
  Navigate to the Content type administration page (Manage > Structure > Content
  types or http://example.com/admin/structure/types). 2. Find the content type
  you want to enable comment capacity and click "Manage fields" link. 3. Click
  the "Add field" button. 4.
published_time: '2017-04-28T15:05:49+00:00'
modified_time: '2021-09-05T23:46:04+00:00'
---
This documentation details how to add or edit comment settings on a content type.

Note that this documentation is mentioning content type but comments can actually [be added to any entity type](https://www.drupal.org/node/2100015).

### Adding comment to a content type

1\. Navigate to the Content type administration page (_Manage > Structure > Content types_ or `http://example.com/admin/structure/types`).  
2\. Find the content type you want to enable comment capacity and click "Manage fields" link.  
3\. Click the "Add field" button.  
4\. If you installed from the _Standard profile_, Select "Comments: comment" in the "Re-use an existing field" dropdown, alter the label if needed and click "Save and continue". If you installed from another profile, the "Comments: comment field" may not be available in the "Use existing field" dropdown. In this case, look for a "General ↠ Comment: field in the "Add new field" dropdown.  
5\. Here you can specify several different settings.

### Edit comment settings on a content type

1. Navigate to the Content types administration page (_Manage > Structure > Content types_ or `http://example.com/admin/structure/types`).
2. Find the content type you want to enable and click the "Manage fields" link.
3. Click "Edit" next to the "Comments" field to edit the settings.
4. Here you can specify several different settings.

### Settings form

![screen grab of comments admin screen](https://www.drupal.org/files/commentadminformsml.jpg)

#### Label

Add a label that will appear before all the comments listed on this particular content type.

#### Help text

Add custom instructions that will appear in the "comment settings" section of the content type.

#### Default Value setting for new content

The comment setting on future content of this type will _default_ to whichever selected below:

* Hidden: No comments are allowed, and past comments are hidden.
* Closed: No comments are allowed, but any past comments remain visible.
* Open: Any future content of this type is open to new comments. Users with the "post comments" permission can post comments.

<!-- note-warning -->
> WARNING: Note: Normally this setting is a default, and is not retroactive to existing content of the type.
However, new settings can be applied to&nbsp;existing content, if you install an extra module like&nbsp;http://www.drupal.org/project/bulk_apply_comment_settings.

#### Threading

When this option is enabled, comments are displayed in a threaded list (replies are indented to make discussions easier to follow).

#### Comments per page

Specifies the maximum number of comments displayed on one page (additional pages will be added if you exceed this limit).

#### Show reply form on the same page as comments

When this option is enabled, the reply form is displayed on the same page as the comments. (If this is not selected, clicking "Reply" will take you to a new page where you can fill in the reply form.

#### Preview comments

You can specify three possible settings for a comment previews:

1. "Required" (always be displayed prior to saving the comment)
2. "Disabled" (never displayed)
3. "Optional" (the user has the option of displaying a preview)

_Note: Be sure to click "Save Settings" after configuring the settings._