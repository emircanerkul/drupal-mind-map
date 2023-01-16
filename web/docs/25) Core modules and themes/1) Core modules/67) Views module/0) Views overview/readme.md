---
url: https://www.drupal.org/docs/8/core/modules/views/overview
description: >-
  Using the Views module, you can fetch content from the database of your site
  and present it to the user as lists, posts, galleries, tables, maps, graphs,
  menu items, blocks, reports, forum posts etc. Different content types
  including nodes, users, and other bundles can be displayed. Views has many
  performance and stability advantages over direct database queries, such as a
  complex caching layer and a large ecosystem of extension modules.
published_time: '2007-01-15T20:51:08+00:00'
modified_time: '2021-07-14T04:25:41+00:00'
---
Using the **[Views](http://drupal.org/project/views)** module, you can fetch content from the database of your site and present it to the user as lists, posts, galleries, tables, maps, graphs, menu items, blocks, reports, forum posts etc. Different content types including nodes, users, and other bundles can be displayed. Views has many performance and stability advantages over direct database queries, such as a complex [caching layer](https://www.drupal.org/docs/drupal-apis/cache-api/cache-tags) and a large ecosystem of [extension modules](https://www.drupal.org/project/project%5Fmodule?f%5B0%5D=&f%5B1%5D=&f%5B2%5D=im%5Fvid%5F3%3A89&f%5B3%5D=sm%5Fcore%5Fcompatibility%3A8&f%5B4%5D=sm%5Ffield%5Fproject%5Ftype%3Afull&f%5B5%5D=bs%5Fproject%5Frelease%5Fhas%5Ffull%3Atrue&f%5B6%5D=&text=&solrsort=iss%5Fproject%5Frelease%5Fusage+desc&op=Search).

Views UI, a submodule within Views, provides a graphical interface underneath which lies a powerful SQL query builder that can access virtually any information in your database and display it in any format.

Different displays can present the query results as pages with fixed URLs on your site (or URLs accepting arguments), blocks, feeds, or panel panes.

You can also use Views to present related content or implement contextual filters. An example of presenting related content is when you want to display a list of users along with links to the content they have created. To do this, you need to create a relationship linking two nodes. You can create a relationship by navigating to Advanced settings in your display page and clicking on "Add Relationship." Once the proper relationship is set up, you can add the fields from the linked node that you would like to display. An example of where you would want to use a contextual filter is if you want to display customized content to a user according to their user ID. To do this, navigate to the advanced settings on the display page and click on add contextual filter. In this case, you would want to add a filter for content: Nid.