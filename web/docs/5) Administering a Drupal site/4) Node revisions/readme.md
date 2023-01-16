---
url: https://www.drupal.org/docs/administering-a-drupal-site/node-revisions
description: >-
  Drupal lets you create a new revision every time a node is updated. This
  allows you to track how the node has changed over time on your site. While
  this feature is now enabled by default, you can change whether each Content
  type is revisionable on the Content type editing form at Administration »
  Structure » Content types » [your-content-type]. Then on the Content type
  [your-content-type] edit page under Publishing options check the Create new
  revision box. This will result in a new revision being created when the node
  is edited.
published_time: '2019-06-04T16:39:23+00:00'
modified_time: '2020-10-30T11:42:08+00:00'
---
Drupal lets you create a new _revision_ every time a node is updated. This allows you to track how the node has changed over time on your site.

While this feature is now enabled by default, you can change whether each Content type is revisionable on the Content type editing form at _Administration » Structure » Content types » \[your-content-type\]._ Then on the Content type \[your-content-type\] edit page under _Publishing options_ check the _Create new revision_ box. This will result in a new revision being created when the node is edited. (Editors can override this when editing an individual node.)

To view and manage revisions, use the Revisions tab when viewing a node (you must have "View revisions" or "Administer content" permission to view revisions.) From the Revisions tab, you can view the individual revisions, revert to an earlier revision, and delete revisions (you must have the "Administer content" or "Revert revisions" and "Delete revisions" permissions).

One interesting detail of the system is the behaviour of the reverting mechanism. Let's say you have revisions {1,2,3,current}. If you revert to revision #2, a copy of #2 is made and the copy is set as the current revision. Thus, after reverting you'll have {1,2,3,4,current}, where current is a clone of #2, and #4 is the previous current revision.

Another useful feature of the revision system is the _Revision log message_ field, which appears near the "Create a new revision" check box on the node editing form. If you add a message to this field when you create a revision, that message will appear on the Revisions tab along with the revision. It is a good idea to add a meaningful message here whenever you create a node revision so that others (or you, months later) can see why you changed the node and what your changes were, without having to actually view the previous revision. While filling the field is optional at the time of this writing, there is [a feature request](https://www.drupal.org/project/drupal/issues/308352) to allow the field to be configured as mandatory.

On the Revisions tab, a table lists each revision along with a timestamp, the user who made the change, and the revision log message, if entered.

You can enhance the revisions tab by installing the contributed [Diff module](http://drupal.org/project/diff). This module allows you to see the differences between two revisions; without this module, you can only view the entire content of each revision, and it may be difficult to tell exactly what has changed between the revisions.

Note that the `node_revision` table in the database will always have one record associated with each record in the node table, which it keeps track of as the current revision. This will happen even if you do not have revisions enabled. On the other hand, if you have enabled revisioning, you will have multiple entries in your `node_revision` table associated with each node, corresponding, not just to the current revision, but to all past revisions too.

For more advanced functionality, including the ability to make revisions mandatory when content is edited, see the [Content moderation module](https://www.drupal.org/docs/8/core/modules/content-moderation/overview).

_Originally based on <https://www.drupal.org/node/320614> and updated for Drupal 8._