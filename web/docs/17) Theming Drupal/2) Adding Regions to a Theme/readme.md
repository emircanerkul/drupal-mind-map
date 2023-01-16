---
url: https://www.drupal.org/docs/theming-drupal/adding-regions-to-a-theme
description: >-
  Adding regions to a theme requires: Adding region meta-data to your
  THEMENAME.info.yml file. Editing your page.html.twig file and printing the new
  regions. Note: If you declare any regions in your theme, even just one, all
  the default regions will no longer be applied and you assume responsibility
  for declaring any and all regions you want to use.
published_time: '2015-04-10T20:03:35+00:00'
modified_time: '2022-07-27T04:07:47+00:00'
---
Adding regions to a theme requires:

* Adding region meta-data to your THEMENAME.info.yml file.
* Editing your page.html.twig file and printing the new regions.

**Note:** If you declare any regions in your theme, even just one, all the default regions will no longer be applied and you assume responsibility for declaring any and all regions you want to use. 

Any blocks that were in regions which no longer exist (because you didn't define them) will now be disabled - specifically if you edit THEMENAME.info.yml and rebuild the cache with `drush cr`, you'll see a message like this for each:

> The block themename\_breadcrumbs was assigned to the invalid region breadcrumb and has been disabled.

If you visit /admin/structure/block, any disabled blocks are listed in the topmost region, with a "(disabled)" indicator. You can either drag and drop or use the Region drop-down to reassign them or remove the blocks you no longer need.

Make sure you keep the `page_top` and `page_bottom` regions. These are 'hidden' regions, used for markups at the very top and bottom of the page, such as analytics or the admin toolbar. You don't need to list them in your THEMENAME.info.yml file, just don't remove them from the `html.html.twig` template. Modules may rely on them being present.