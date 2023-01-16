Enabling the Content Moderation module creates a default [Workflow](http://www.drupal.org/docs/8/core/modules/workflows/overview) called "Editorial" that can be used for custom block types or content types. (Note: The Editorial Workflow will only be created, if you installed your site from the standard Drupal installation profile. See [Troubleshooting](#s-troubleshooting) section for details on how to fix that.) You can use the default settings, or [customize the workflow configuration](https://www.drupal.org/docs/8/core/modules/workflows/overview). From here, there are also some additional steps necessary in order to use Content Moderation.

### Entity type changes

**This feature requires Drupal 8.4 or later.** Once your moderation workflows are established, you can apply the workflows to different entity types. Out of the box Content Moderation can be added to Block Content and Content (Node) entities. The "select" button will allow you to select which content types should use this workflow. Note that Basic page is checked in the screen shot so it makes sense to the Sample workflow described in this document.

![Page Content Type under moderation](https://www.drupal.org/files/page-under-moderation.png)

### Permissions

You will probably allow people with roles other than administrator to participate in the workflow. To achieve this, you will need to set up the proper permission schema at People > Permissions. 

![Role permissions](https://www.drupal.org/files/role-permissions.png)

The schema in the image above, is centered around two roles; Author and Editor. In this example, an Author can create and edit content, but not publish content. To publish content, the Author will need to save the content as a Draft. Then a user with the Editor role can review the content, and either save it as Published, or save it as a Draft.

Be sure to grant 'View the latest version' and subsequently 'View own unpublished content' to authors. Otherwise authors will not be able to view their latest changes.

Below is a sample of appropriate Node permissions for this example. Note the Author role has permission to create and edit own Basic pages, as well as viewing and reverting revisions, while the Editor role has additional permissions to allow editing of any Basic page, as well as deleting. Your workflow may not match this example exactly, but it is demonstrative of one scenario.

![Node Permissions](https://www.drupal.org/files/node-permissions.png)

Now that our permissions are configured, let's create a page and test it under content moderation.

### Sample workflow

The author creates a page. The author saves this content as a Draft.

![Author saves new content page](https://www.drupal.org/files/author-new-content-draft.png)

The editor publishes this content page. That is, the editor changes the moderation state of the content from Draft to Published.

![Editor publishes new content page](https://www.drupal.org/files/editor-publishes-A.png)

The content page is now published. Anyone with permission to view published content will be able to view the page.

The author edits the content page and saves the new edit as a Draft.

![Author edits published content page](https://www.drupal.org/files/author-edits-to-B-draft.png)

The author can view the latest version of the content page in the Latest version tab. The latest version of the content page is a draft and is not publicly viewable.

![Author views latest version](https://www.drupal.org/files/author-views-latest-version.png)

At this time, the author, and anyone else with permission to view published content, can, of course, continue to view the published version of the content page.

![Author views published version of content page](https://www.drupal.org/files/author-views-published-content.png)  

The editor can publish the draft from the block in the latest version tab. That is, the editor can change the moderation state from Draft to Published.  

![Editor changes state to published](https://www.drupal.org/files/editor-changes-state-to-published.png)

The editor can also publish the draft in the node edit form.

![Editor changes moderation state in node form](https://www.drupal.org/files/editor-changes-moderation-state-in-node-form.png)

Now the author, and anyone else with permission to view published content, can view the edited content page.

Note the Latest version tab has, rightly, gone away. Nicely done.

![Author views edited content page](https://www.drupal.org/files/author-views-edited-content-page.png)

When using the default workflow included with the module, to unpublish a node you must set the state to Archived on the published revision, 

The above describes a simple publishing workflow. This is only one example. There are all kinds of possibilities being delivered with the Content Moderation module. Look more deeply into States and Transitions. Consider multiple workflows for complex publishing environments. This module will really move things forward for our team and hopefully for Drupal itself. 

### Troubleshooting

If you enable Content Moderation (drush en content\_moderation) on a site, that was not installed using Drupal's Standard Profile as a base, you will run into some problems which require a few manual steps before you can use Content Moderation, as detailed in this guide:

1. The **Editorial workflow is missing** after you enabled Content Moderation.
2. The Moderated Content view (/admin/structure/views/view/moderated\_content) shows "**Broken/missing handler**" where the filter criteria "Content revision: Moderation state (exposed)" and "Content revision: Moderation state (<> Published)" are supposed to be.

The root of both problems is, that the Editorial Workflow is not automatically created, if you used another install profile than Drupal's Standard Profile to setup your site.

#### 1\. Fix missing Editorial workflow

If the Editorial workflow was not created when enabling Content Moderation, you can either manually create a new workflow and assign a content type, that's used with your new workflow or import the Editorial workflow manually.

**Steps to import default Editorial workflow:**

1. Make sure you got the latest configs exported in your config/sync directory (`drush config:export`).
2. Copy the Editorial workflow template (`workflows.workflow.editorial.yml`) to your config/sync directory.
3. Import the Editorial workflow template (`drush config:import --partial`)

After these steps, the default Editorial workflow will be available, as outlined in this guide.

Here's an example configuration for the Editorial workflow that is created when enabling Content Moderation on a vanilla Drupal site that was installed using Drupal's standard install profile. It can be imported as described above.

**workflows.workflow.editorial.yml**

```yaml
langcode: en
status: true
dependencies:
  module:
    - content_moderation
id: editorial
label: Editorial
type: content_moderation
type_settings:
  states:
    archived:
      label: Archived
      weight: 5
      published: false
      default_revision: true
    draft:
      label: Draft
      published: false
      default_revision: false
      weight: -5
    published:
      label: Published
      published: true
      default_revision: true
      weight: 0
  transitions:
    archive:
      label: Archive
      from:
        - published
      to: archived
      weight: 2
    archived_draft:
      label: 'Restore to Draft'
      from:
        - archived
      to: draft
      weight: 3
    archived_published:
      label: Restore
      from:
        - archived
      to: published
      weight: 4
    create_new_draft:
      label: 'Create New Draft'
      to: draft
      weight: 0
      from:
        - draft
        - published
    publish:
      label: Publish
      to: published
      weight: 1
      from:
        - draft
        - published
  entity_types:
    node: null
  default_moderation_state: draft
```

#### 2\. Fix Broken/missing handler on the Moderated Content view

This error occurs, if there exists no moderation workflow that is assigned to a content type. Wether you just imported the Editorial workflow as described above or created a custom moderation workflow, you'll have to make sure it has at least one content-type assigned to it. Just edit your moderation workflow, scroll to the bottom of the page and select at least one content type that is used with this workflow. After you save your changes, the "Broken/missing handler" on the Moderated Content will be gone and the view at /admin/content/moderated will work as expected.