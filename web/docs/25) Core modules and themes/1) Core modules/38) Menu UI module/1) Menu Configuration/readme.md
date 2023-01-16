---
url: https://www.drupal.org/docs/8/core/modules/menu-ui/menu-configuration
description: >-
  Creating a menu​ Navigate to the Menus page (Structure > Menus or
  http://example.com/admin/structure/menu). Click Add menu. In the Title field,
  enter a title. In the Description field, enter an optional description. Click
  Save. To learn how to add new menu items to the menu, read further on Adding a
  link to a menu. To add tabs to a menu see Creating menu tabs. Enable the menu
  Assuming you plan to add nodes to your menu and not just external links, you
  must enable it in the content type for the node(s) that will be the target of
  the menu's links.
published_time: '2017-04-28T17:48:30+00:00'
modified_time: '2018-07-22T14:54:45+00:00'
---
**Creating a menu**​

1. Navigate to the Menus page (**_Structure > Menus_** or <http://example.com/admin/structure/menu>).
2. Click **Add menu**.
3. In the **Title** field, enter a title.
4. In the **Description** field, enter an optional description.
5. Click **Save**.

To learn how to add new menu items to the menu, read further on [Adding a link to a menu](/node/788972). To add tabs to a menu see [Creating menu tabs](/node/1578582).

**Enable the menu**

Assuming you plan to add nodes to your menu and not just external links, you must enable it in the content type for the node(s) that will be the target of the menu's links. It is possible to add menu links that are not enabled this way through the Menus page. If you do, you will find that certain changes cause your link to disappear from the assigned menu. Menus can be enabled on multiple content types.

1. Navigate to the content type for the node(s) (**_Structure > Content type_** or <http://example.com/admin/structure/types>).
2. Locate the content type and click **edit**.
3. Choose **Menu settings**.
4. Click the checkbox of the menu(s) you want to enable.
5. (Optional) Set the **Default parent item** to choose a default menu for the content type.

**Renaming menus**

1. Navigate to the Menus page (**/admin/structure/menu**).
2. Click **Edit Menu**.
3. In the **Title** field, enter a new title.
4. Click **Save**.

_Note: The default menus cannot be renamed._

**Removing a menu**

1. Navigate to the Menus page (**/admin/structure/menu**).
2. Click **Edit Menu**.
3. Click **Delete**.
4. Click **Delete** again to confirm.

_Note: The default menus cannot be deleted._

**Expanding Menus**

If you have hierarchical menu items within a menu and you'd like to show the submenu items, on each parent menu item's edit page, check Show as expanded and save. This only affects the immediate children below the menu item. That is, if you have 3 levels of menu items, checking Show as expanded on the first tier items will only show the second tier items, not the third tier items. For example:

* First tier menu item 1  
   * Second tier menu item 1 (only shown if First tier menu item 1 has Show as expanded selected)  
         * Third tier menu item 1 (only shown if Second tier menu item 1 has Show as expanded selected)  
         * Third tier menu item 2 (only shown if Second tier menu item 1 has Show as expanded selected)  
   * Second tier menu item 2
* First tier menu item 2
* First tier menu item 3

Don't forget to configure the visibility levels in the block you use for that menu if you want to see the submenu items. By default it is one and you only see the parent item.

![](https://www.drupal.org/files/issues/Selection_032_2.png)