---
url: https://www.drupal.org/docs/8/core/modules/views/add-a-relationship-to-a-view
description: >-
  When you first create a view you select the base table from options such as
  Comments, Content, and Taxonomy terms. This cannot be changed later. After
  that selection, you will only be able to select fields from that base table.
  For example, with a Content view, you can get the User ID of the author, but
  not the author's username. To get that information you will need to create a
  Relationship to join those two tables. With the connection of User ID, you can
  get the author's username from the User table.
published_time: '2013-02-18T15:26:27+00:00'
modified_time: '2021-12-01T22:17:23+00:00'
---
When you first create a view you select the base table from options such as Comments, Content, and Taxonomy terms. This cannot be changed later. After that selection, you will only be able to select fields from that base table. For example, with a Content view, you can get the User ID of the author, but not the author's username. To get that information you will need to create a **Relationship** to _join_ those two tables. With the connection of User ID, you can get the author's username from the _User table_.

1. Navigate to the edit screen of a view (for example, admin/structure/views/MY\_VIEW\_NAME ) In this case we're editing a Content listing.
2. In the right column, click **Advanced**.
3. In the Relationships area, click **Add**.
4. There are many tables you can join to the content listing. In this case, search for "author" options, and select Content: Content author. Click Apply.  
![d8-views-add-relationship.png](https://www.drupal.org/files/d8-views-add-relationship.png)
5. Next, you can set the administrative title, though the default should be sensible enough. You can also opt to "Require this relationship. This will hide content which doesn't have the relationship. Click Apply.
6. Under Fields click Add.
7. Search for your chosen relationship, such as User. Now you will have more fields available from the joined table, in this case, the User table. Select **User: Name**. Click Apply.  
![d8-views-relationship-more-fields.png](https://www.drupal.org/files/d8-views-relationship-more-fields.png)
8. Next, you can configure how the field displays. The defaults, in this case, will append a field label and make the field a link to the user. Change the label to Author. Click Apply.
9. Check your preview to see your content listing, including the author's username.  
![d8-views-relationship-preview.png](https://www.drupal.org/files/d8-views-relationship-preview.png)