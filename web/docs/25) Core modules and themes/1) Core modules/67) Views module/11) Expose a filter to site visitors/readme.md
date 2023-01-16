---
url: >-
  https://www.drupal.org/docs/8/core/modules/views/expose-a-filter-to-site-visitors
description: >-
  Your view can expose a filter to your site visitors, allowing them to interact
  with the data in the view. The following instructions assumes that you have
  gone through the steps of add a filter to a view. Navigate to the edit screen
  for a view (for example, admin/structure/views/view/MYVIEWNAME/edit). In the
  Filters section, click a filter. The Configure Filter dialog box displays.
  Click More.
published_time: '2013-02-15T21:04:34+00:00'
modified_time: '2017-02-12T00:28:24+00:00'
---
Your view can expose a filter to your site visitors, allowing them to interact with the data in the view.

The following instructions assumes that you have gone through the steps of [add a filter to a view](/docs/8/core/modules/views/add-a-filter-to-a-view).

1. Navigate to the edit screen for a view (for example, admin/structure/views/view/MYVIEWNAME/edit).
2. In the Filters section, click a filter. The Configure Filter dialog box displays.
3. Click **More**.
4. Enable the **Expose This Filter to Visitors** option
5. Enable one of the following options:  
   * **Single Filter** If this option is selected, you can add a label and description which will be displayed to the site visitor.  
   * **Grouped Filters** If this option is selected, you can enable any of the following options:  
         * **Remember** Saves a visitor's selections.  
         * **Allow Multiple Selections** Allows a user to select multiple items.  
         * **Widget Type** Specifies whether to use radio buttons or a select list.
6. In the table, specify the label, operators and values for each filter. You can add, remove and rearrange the order of filters.
7. Click **Apply**

Note that some filters do not have multiple options and therefore do not provide a grouping option.