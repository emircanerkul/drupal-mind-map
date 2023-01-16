This is a commonly asked question. (See the comments on this page.) What are the difference between insert() and query()?

insert() has each column specified as a separate entry in the fields array and the code can clean each column value. query() has an SQL string with no way of checking individual columns. If you use query() with placeholders, the code can check the column values but placeholders are just an option, there is no way to ensure your SQL does not contain values not passed through placeholders.

insert() passes the request through a set of hooks to let other modules check and modify your requests. This is the right way to work with other modules. query() is slightly faster because query() does not pass the request through the hooks. You might save processing time but your code will not let other modules help your code.

insert() is more likely to work with other databases and future versions of Drupal.