---
url: https://www.drupal.org/docs/8/core/modules/views/configure-views-for-debugging
description: >-
  Navigate to admin/structure/views/settings/advanced. In the Debugging section,
  enable the following option: Add Views signature to all SQL queries All
  Views-generated queries will include the name of the views and display
  'view-name:display-name' as a string at the end of the SELECT clause. This
  makes identifying Views queries in database server logs simpler, but should
  only be used when troubleshooting. To verify the Views-generated queries,
  Navigate to admin/structure/views/settings (Basic). In the Live Preview
  Settings, enable the "Show the SQL query" option.
published_time: '2013-02-14T20:05:38+00:00'
modified_time: '2019-05-02T12:53:05+00:00'
---
1. Navigate to **admin/structure/views/settings/advanced**.
2. In the Debugging section, enable the following option:  
   * **Add Views signature to all SQL queries** All Views-generated queries will include the name of the views and display 'view-name:display-name' as a string at the end of the SELECT clause. This makes identifying Views queries in database server logs simpler, but should only be used when troubleshooting.![Debugging](https://www.drupal.org/files/D8%20Advanced%20Views%20settings%20debugging.png)
3. To verify the Views-generated queries, Navigate to **admin/structure/views/settings** (Basic). In the Live Preview Settings, enable the "**Show the SQL query**" option. ![Debugging SQL](https://www.drupal.org/files/D8%20Views%20settings%20SQL%20query.png)
4. After that, we can see the Views signature on the SQL Queries in the Preview section. ![Debugging Demo](https://www.drupal.org/files/D8%20Views%20Debugging%20demo.png)