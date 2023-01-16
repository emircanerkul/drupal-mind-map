---
url: https://www.drupal.org/docs/8/core/modules/node/uses
description: >-
  Creating content When new content is created, the Node module records basic
  information about the content, including the author, date of creation, and the
  content type. It also manages the publishing options, which define whether or
  not the content is published, promoted to the front page of the site, and/or
  sticky at the top of content lists. Default settings can be configured for
  each type of content on your site at Administration > Structure > Content
  types > [Specific content type] or http://example.com/admin/structure/types.
published_time: '2017-04-28T23:16:24+00:00'
modified_time: '2017-06-13T20:37:47+00:00'
---
### Creating content

When new content is created, the Node module records basic information about the content, including the author, date of creation, and the content type. It also manages the _publishing options_, which define whether or not the content is published, promoted to the front page of the site, and/or sticky at the top of content lists. Default settings can be configured for each type of content on your site at _Administration > Structure > Content types > \[Specific content type\]_ or `http://example.com/admin/structure/types`.

### Creating custom content types

The Node module gives users with the _Administer content types_ permission the ability to create new content types in addition to the default ones already configured. Creating custom content types allows you the flexibility to add and delete fields and configure default settings that suit the differing needs of various site content. To add new content types in Drupal 8, navigate to _Administration > Structure > Content Types > Add content type_ or `http://example.com/admin/structure/types/add`.

### Administering content

The Content administration page allows you to review and bulk manage your site content. To access this page in Drupal 8, navigate to _Administration > Content_ or `http://example.com/admin/content`.

### Creating revisions

The Node module also enables you to create multiple versions of any piece of content, and revert to older versions by enabling _Create new revision_ in the Publishing options tab for each content type. You can review and revert revisions through the "Revisions" tab on any content, and add new ones in the "Revision information" settings when editing a given node.

### User permissions

The Node module makes a number of permissions available for each content type, which can be set by role on the permissions page (_Administration > People > Permissions tab_ or `http://example.com/admin/people/permissions`).

For more useful materials on content administration in Drupal, see [Resource Guide: Tools for Content Administration in Drupal](https://www.drupal.org/resource-guides/content-administration).