---
url: >-
  https://www.drupal.org/docs/8/core/modules/layout-builder/configuring-layout-builder-permissions
description: >-
  Access to Layout Defaults More information on Layout Defaults can be found on
  this handbook page. Layout Defaults are layouts that apply to all
  nodes/entities of a given content type/bundle.
published_time: '2019-03-22T20:47:00+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
### Access to Layout Defaults

More information on Layout Defaults can be found on [this handbook page](/docs/8/core/modules/layout-builder/creating-layout-defaults).

Layout Defaults are layouts that apply to all nodes/entities of a given content type/bundle.

Accessing Layout Defaults for an entity type require two permissions

* **Configure any layout**, a Layout Builder permission
* **Administer display: _Entity Type_** , a Field UI permission

For example, granting permission to access layout defaults on node content types would require the permissions _Node: Administer display_ and _Configure any layout_

### Access to Layout Overrides

More information on Layout Overrides can be found on [this handbook page](/docs/8/core/modules/layout-builder/creating-layout-overrides).

There are two types of permissions that grant access to Layout Overrides:

_Entity Type - Bundle_: Configure all layout overrides or _(Entity Type):_ Configure all layout overrides

Allows access to _any_ layout attached to entities of the given type and bundle (for example, layout overrides for any individual "Article" content item).

_Entity Type - Bundle:_  Configure layout overrides for content items that the user can edit

Grant access only to layouts attached to entities of the given type and bundle which the current user also has permission to edit (for example, a layout of draft content the user may edit, but not a layout of another user's content).

### Access to create and edit single-use custom blocks

The **Create and edit custom blocks** permission allows the layout editor to add new content to the page with single-use custom blocks. Users without this permission will only be able to place existing content blocks on the site. (Previously, the `configure any layout` permission itself provided this functionality.) This permission is required to add custom block content to either default layouts or layout overrides.

### Access to contextual links

It is impractical to edit layouts unless the Contextual Links module is enabled and the layout editor has the "Use contextual links" permission.

### Example scenario

Create 3 roles with one user each: _editor_, _designer_, _publisher_. Give _editor_ and _designer_ permission to create drafts, and _publisher_ permission to publish. Give _editor_ permission to create and edit articles, and _designer_ permission to configure all article layout overrides. Give all these roles permission to use contextual links.

Log in as an editor and create and edit articles. For each save, you can only choose "Draft" as the state. You do not have access to the Layout tab.

Log in as a designer, and so long as there already existed a published revision of the article, you can access it, and via it, the Layout tab. This worked even if there is also a forward draft. When making Layout changes, you can only choose "Draft" as the state, and the newly created revision incorporates the changes from the latest draft created by the editor.

Log in as a publisher, view the revisions created by both the editor and the designer, and publish them.

### Contrib modules

If you find the permissions provided aren't sufficient for your project, you can also add these contributed modules:

* [Layout Builder Permissions](/project/layout%5Fbuilder%5Fpermissions)
* [Layout Builder Advanced Permissions](/project/layout%5Fbuilder%5Fperms)