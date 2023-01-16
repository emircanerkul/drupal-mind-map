1. Navigate to the Menus page (_Structure > Menus_ or `http://example.com/admin/structure/menu`).
2. Locate a menu to edit and click **add link**.
3. In the **Menu link title** field, enter the title as it will be displayed in the menu.
4. In the **Link** field, enter a path for the link. This can be an internal Drupal path such as /node/add (see "Before you begin" above) or an external URL such as `http://example.com`. Enter `<front>` to link to the front page.
5. In the **Description** field, enter the text that will be displayed when a user hovers over the link.
6. Enable any of the following options:
* **Enabled**: If the link is not enabled, it will not be displayed in the menu.
* **Show as Expanded**: If this option is enabled and the menu link has children, the first level children of the menu link will always be expanded. (NOTE: This rule doesn't cascade down for subsequent levels of children links. You must enable this option at each level where you want the next level to be expanded.)
* In the **Parent link** list, select the parent of the link.
* (Optional) In the **Weight** list, select the relative weight of the link. Links with the "lightest" weight will display higher in a menu. Links with the same weight will display in alphabetical order.
* Click **Save**.