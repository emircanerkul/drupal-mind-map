---
url: https://www.drupal.org/docs/contributed-themes/bulma/dropdown-menu-in-navbar
description: >-
  Since version 8.x-1.0-alpha3, the Bulma theme supports two-level dropdown
  menus, see the corresponding issue. At
  admin/structure/block/manage/bulma_main_menu (replace "bulma" with your
  subtheme machine name, or just use the contextual link), make sure Initial
  visibility level is set to 1 and Number of levels to display to 2. As menu
  items need to be expanded for this to work, you may check Expand all menu
  links so you will not have to change this setting on every menu item. Please
  keep in mind that: Only a single level of dropdown is supported.
published_time: '2017-07-02T11:00:14+00:00'
modified_time: '2021-06-23T08:11:39+00:00'
---
Since version 8.x-1.0-alpha3, the Bulma theme supports two-level dropdown menus, see the [corresponding issue](https://www.drupal.org/project/bulma/issues/2885806). At admin/structure/block/manage/bulma\_main\_menu (replace "bulma" with your subtheme machine name, or just use the contextual link), make sure _Initial visibility level_ is set to 1 and _Number of levels to display_ to 2\. As menu items need to be expanded for this to work, you may check _Expand all menu links_ so you will not have to change this setting on every menu item.

Please keep in mind that:

* Only a single level of dropdown is supported.
* To be drop-down, a menu item must be configured to be always expanded.
* The main navigation block should be configured to start at level 1 and use a maximum of 2 levels.

Should you need more than two levels, you may use a module like [Superfish](https://www.drupal.org/project/superfish) and share your experience on this page.