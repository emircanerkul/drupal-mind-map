---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/block-module/managing-blocks
description: >-
  Video Link: Complete documentation of Blocks, Configuration related to Blocks
  Blocks are boxes of content rendered into an area, or region, of a web page
  (such as "User Login" or "Who's online") that can be displayed in regions
  (such as footer or sidebar) on your page. This functionality is provided by
  the Block module, which is a part of Drupal 8 core. Drupal 8 also introduces
  another module apart from Block that allows the creation of custom blocks
  through the user interface and it is "Custom Block" module.
published_time: '2016-11-22T11:41:53+00:00'
modified_time: '2022-09-18T06:53:12+00:00'
---
Video Link: [Complete documentation of Blocks](https://www.youtube.com/watch?v=DMVGBPAKTlE&t=4s), [Configuration related to Blocks](https://www.youtube.com/watch?v=kESL2d3HuKM&t=10s)

**Blocks** are boxes of content rendered into an area, or region, of a web page (such as "User Login" or "Who's online") that can be displayed in **regions** (such as footer or sidebar) on your page. This functionality is provided by the Block module, which is a part of Drupal 8 core. Drupal 8 also introduces another module apart from Block that allows the creation of custom blocks through the user interface and it is "**Custom Block**" module. There was an experimental module which was also introduced in core (**Place Blocks)** which when enabledallowed administrators to place blocks from any Drupal page, but it was superseded by **Layout Builder** non-reusable blocks functionality in Drupal 8.7\. 

![](https://www.drupal.org/files/core-blocks.png)

![Edit Block Drupal 7](https://www.drupal.org/files/edit-block-1.jpg)  
Example of a block. This block displays social media icons.  

Blocks are made available to your site most commonly by enabling core or contributed **modules**. Once created, a Block can be modified to adjust its appearance, shape, size, and position - or which Website pages it appears on. Any custom or contributed block can be assigned to a particular region by clicking on a button **Place block**. If the block is already enabled, its region can be changed by choosing specified regions from drop-down. For example, to assign any block in the Header region, click on "**Place Block**" button and choose any block to be placed in this particular region.

![Image showing Place block button and dropdown list of regions.](https://www.drupal.org/files/place-blocks-v3.png)

An Image showing the Place block button and a list of regions for changing block position.

![place-blocks](https://www.drupal.org/files/place-block-2_0.png)

You can place one block at multiple regions. Here I'm placing the Page title (Core block) in the Header region. Click Place block button for the Page title block and you will see a configuration popup showing:

![Page title config](https://www.drupal.org/files/page-title-config.png)

Hitting the _Save block_ button will place Page title block inside the Header region.

![](https://www.drupal.org/files/page-title-in-header.png)

If you click "Configure Block" you can go ahead and edit the contents of the block, deal with the visibility settings and even change the placement of where it is on your theme.

Blocks are placed in regions via the Block Admin page **Administer > Structure > Block Layout.**

Your site's theme defines the regions available. Therefore, block placement in regions is done per theme on the Block Admin page. If you have more than one theme enabled on your site blocks **can be placed differently for each theme**.

You can learn more about [Assigning content to regions](http://drupal.org/node/171224).

![Block Management Screen](https://www.drupal.org/files/edit-block-3.png)

The block management screen also lets you specify the vertical sort-order of the blocks within a theme region. This can be done by dragging blocks to the desired position. When Javascript is not enabled, you do this by assigning a weight to each block. Lighter blocks (smaller weight) "float up" towards the top of the region. Heavier ones "sink down" towards the bottom of it.

The block management screen also provides checkboxes (depending on what modules you have enabled), as well as a _configure_ link, which takes you to the configuration screen. The checkboxes and configuration page let you customize the visibility of the block. A block's visibility depends on:

* Whether it is _Enabled_ and assigned to a region. Disabled blocks (blocks not assigned to any region in your theme) are never shown.
* _Page-specific visibility settings_. Individual blocks can be configured to only show/hide on certain pages. This can be a path like "about" for the \[site-root\]/about page, "about/\*" where the asterisk is any path that starts with "about". An important exception is the frontpage: "<front>". You can also show/hide blocks based on the result of a [PHP snippet](/node/60317).
* _Custom visibility settings_. Individual blocks can be configured so that users decide whether to show/hide certain blocks.
* Its function. Dynamic blocks (such as those defined by modules) may be empty on certain pages and will not be shown.

The block management screen also has an another tab which is used to add Custom blocks. The name of the tab is "Custom block library". This tab ultimately provides a link to add custom blocks. This allows you to define a block containing content of your choice. Each administrator-defined block consists of a title, a description, and a body which can be as long as you wish; the Drupal engine will render the content of the block.

A new feature that is also included in core is **Block types** under **Custom block library**. Now you can create a particular type of block with Manage fields, Manage form displays, Manage displays. By default, the type is provided by Drupal 8 blocks is Basic block. This block contains a title and a body field.

![Block type screen](https://www.drupal.org/files/block-type.png)

You can

* enable, place, and configure blocks at **Administer** **\>> Structure >> Block layout**.
* add a block at **Administer** **\>> Structure >> Block layout >> Place block**.
* add a custom block at **Administer** **\>> Structure >> Block layout >> Add custom block**.

**Note:**  
If the option is not available on a new installation, go to **_Administer >> Customize Dashboard >> Add more Blocks_**. There you can add the "Management Block" which will have the Structure option.

When working with large numbers of blocks (say, more than 100), it may be necessary to increase `max_input_vars` in php.ini. Otherwise, blocks may not save in regions correctly when moved.

### Technical details

Core module: Yes.  
Dependencies: None.  
Related Modules: Dashboard.  
Permissions: Administer blocks. Also see the API docs at [block permission](//api.drupal.org/api/drupal/modules--block--block.module/function/block%5Fpermission/7).  
API Documentation: [block.api.php](https://api.drupal.org/api/drupal/core%21modules%21block%21block.api.php/group/block%5Fapi/8.2.x), [block.libraries.yml](https://api.drupal.org/api/drupal/core!modules!block!block.libraries.yml/8.2.x), [block.links.contextual.yml](https://api.drupal.org/api/drupal/core%21modules%21block%21block.links.contextual.yml/8.2.x), [block.links.menu.yml](https://api.drupal.org/api/drupal/core%21modules%21block%21block.links.menu.yml/8.2.x), [block.links.task.yml](https://api.drupal.org/api/drupal/core%21modules%21block%21block.links.task.yml/8.2.x), [block.permissions.yml](https://api.drupal.org/api/drupal/core%21modules%21block%21block.permissions.yml/8.2.x), [block.routing.yml](https://api.drupal.org/api/drupal/core%21modules%21block%21block.routing.yml/8.4.x), [block.services.yml](https://api.drupal.org/api/drupal/core%21modules%21block%21block.services.yml/8.4.x), [block.module](https://api.drupal.org/api/drupal/core%21modules%21block%21block.module/8.4.x)  
Template files: [block.html.twig](https://api.drupal.org/api/drupal/core%21modules%21block%21templates%21block.html.twig/8.2.x)  
Other files: block.info.yml, block.css, block.admin.js, block.js, block.install  
Database tables (4): block, block\_role, block\_custom, cache block. Also see the API docs at [block schema](http://api.drupal.org/api/drupal/modules--block--block.install/function/block%5Fschema/7).