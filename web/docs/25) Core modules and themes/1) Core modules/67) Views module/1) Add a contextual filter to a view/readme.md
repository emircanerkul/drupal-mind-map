---
url: >-
  https://www.drupal.org/docs/8/core/modules/views/add-a-contextual-filter-to-a-view
description: >-
  [INCOMPLETE] You can configure a view so that it is filtered dynamically,
  depending on the context. For example, you could use a contextual filter to
  add a block that contains related content or that presents a list of articles
  by the same author. Prerequisite: To create a contextual filter that is based
  on a context other than the information in the URL, you may need to create a
  relationship. For more information, see Add a Relationship to a View. Navigate
  to the edit screen of a view (for example,
  admin/structure/views/MY_VIEW_NAME/edit). Click Advanced.
published_time: '2013-02-19T18:15:47+00:00'
modified_time: '2021-12-01T22:21:23+00:00'
---
**\[INCOMPLETE\]**

You can configure a view so that it is filtered dynamically, depending on the context. For example, you could use a contextual filter to add a block that contains related content or that presents a list of articles by the same author.

_Prerequisite: To create a contextual filter that is based on a context other than the information in the URL, you may need to create a relationship. For more information, see [Add a Relationship to a View](http://drupal.org/node/1920288)._

1. Navigate to the edit screen of a view (for example, admin/structure/views/MY\_VIEW\_NAME/edit).
2. Click **Advanced**.
3. In the Contextual Filters area, click **Add**.
4. From the Add Contextual Filters list, select one or more filters and click **Apply and Configure Contextual Filters**. The Configure Contextual Filter dialog box displays.
5. In section **When the Filter Value Is Not In The Url**, specify one of the following options:  
   * **Display all results for the specified field**  
   * **Provide default value**  
   * **Hide view**  
   * **Display a summary**  
   * **Display contents of "No Results Found"**  
   * **Display "Access Denied"**
6. If you want to specify different behavior for certain situations, in the **Exceptions** section, specify a value for exceptions.
7. In section **When the Filter Value Is In the Url or a Default is Provided**, specify one of the following options:  
   * **Override title**  
   * **Specify validation criteria**
8. Click **Apply and Continue**. Repeat steps 5 through 7 for each selected filter.