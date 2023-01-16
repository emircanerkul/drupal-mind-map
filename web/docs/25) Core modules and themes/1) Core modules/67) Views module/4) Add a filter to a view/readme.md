---
url: https://www.drupal.org/docs/8/core/modules/views/add-a-filter-to-a-view
description: >-
  Navigate to the edit screen for a view (for example,
  admin/structure/views/view/MYVIEWNAME/edit). In the Filters section, click
  Add. In the For field, select one of the following options: All Displays The
  filter will be added to all of the displays in the current view. This Page
  (override) The filter will only be added to the current display. From the
  list, select one or more filters. Tip: You can filter the list by typing in
  the Search box or by selecting from the Type dropdown list. Click Apply. The
  Configure Filter Criterion dialog box displays.
published_time: '2013-02-15T20:25:25+00:00'
modified_time: '2022-04-12T10:25:50+00:00'
---
1. Navigate to the edit screen for a view (for example, admin/structure/views/view/MYVIEWNAME/edit).
2. In the Filters section, click **Add**.
3. In the **For** field, select one of the following options:  
   * **All Displays** The filter will be added to all of the displays in the current view.  
   * **This Page (override)** The filter will only be added to the current display.
4. From the list, select one or more filters. _Tip_: You can filter the list by typing in the **Search** box or by selecting from the **Type** dropdown list.
5. Click **Apply**. The Configure Filter Criterion dialog box displays.
6. In the **Operator** dropdown list, select an operator. If the selected operator requires one or more values, enter them in the fields provided.
7. Click **Apply**.

Although a filter for float fields can be added it is not generally a good idea to compare floats. The [warning](https://www.php.net/manual/en/language.types.float.php) in the PHP manual about floating point numbers has more information.