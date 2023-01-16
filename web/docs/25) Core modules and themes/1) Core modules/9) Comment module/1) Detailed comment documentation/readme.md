---
url: >-
  https://www.drupal.org/docs/8/core/modules/comment/detailed-comment-documentation
description: >-
  When enabled, the Drupal comment module creates a discussion board for each
  Drupal node. Users can post comments to discuss a forum topic, weblog post,
  story, collaborative book page, etc. An administrator can give comment
  permissions to user groups, and users can (optionally) edit their last
  comment, assuming no others have been posted since. User control of comment
  display Attached to each comment board is a control panel for customizing the
  way that comments are displayed.
published_time: '2017-04-28T15:21:44+00:00'
modified_time: '2018-09-26T07:12:55+00:00'
---
When enabled, the Drupal comment module creates a discussion board for each Drupal node. Users can post comments to discuss a forum topic, weblog post, story, collaborative book page, etc. An administrator can give comment permissions to user groups, and users can (optionally) edit their last comment, assuming no others have been posted since.

### User control of comment display

Attached to each comment board is a control panel for customizing the way that comments are displayed. Users can control the chronological ordering of posts (newest or oldest first) and the number of posts to display on each page. Additional settings include:

* **Threaded** — Displays the posts grouped according to conversations and subconversations.
* **Flat** — Displays the posts in chronological order, with no threading whatsoever.
* **Expanded** — Displays the title and text for each post.
* **Collapsed** — Displays only the title for each post.

When a user chooses _save settings_, the comments are then redisplayed using the user's new choices. Administrators can set the default settings for the comment control panel, along with other comment defaults, in **administer » comments » configure**. NOTE: When comment moderation is enabled, users will have another control panel option to control thresholds (see below).

### Additional comment configurations

Comments behave like other user submissions in Drupal. Filters, smileys and HTML that work in nodes will also work with comments. Administrators can control access to various comment module functions through **administer » access control » permissions**. In a new Drupal installation, all comment permissions are disabled by default. The choice of which permissions to grant to which roles (groups of users) is left up to the site administrator. The following permissions are available in Drupal 8:

* **Access comments** — Allows users to view comments.
* **Administer comments** — Allows users complete control over configuring, editing and deleting all comments.
* **Post comments** — Allows users to post comments into an administrator moderation queue.
* **Post comments without approval** — Allows users to directly post comments, without the administrator having to publish the comments.

### Notification of new comments

Drupal provides specific features to inform site members when new comments have been posted.

Drupal displays the total number of comments attached to each node, and tracks comments read by individual site members. Members which have logged in will see a notice accompanying nodes which contain comments they have not read. Some administrators may want to install a comment notification module (a table comparing some of these modules [is available here](http://groups.drupal.org/node/15928)). Users can then request that Drupal send them an e-mail when new comments are posted (the notify module requires that cron.php be configured properly).

The _tracker_ module, disabled by default, displays all the site's recent posts. There is a link to the [recent posts](https://www.drupal.org/tracker) page in the navigation block. This page is a useful way to browse new or updated nodes and comments. Content which the user has not yet read is tagged with a red star (this graphic depends on the current theme). Visit the comment board for any node, and Drupal will display a red _"new"_ label beside the text of unread comments.

### Creating a new Comment Type

1. Navigate to /admin/structure/comment
2. Add a new comment type /admin/structure/comment/types/add  
   * Add a title, description and choose the entity type: for example, "Content".  
   * This will make this comment type available to use, when you add the comment field to your other content types.

Now you may follow the documentation on how to add fields. See [Adding fields to the comments for a content type.](/node/2873791)