If you do an update, remember also to update the database (yoursite/update.php).

* This is valid not only for core updates, but also for shared modules (which is by default).
* It is required for every site on your multisite system, which also has the same modules installed. As example: if you have installed the "slick" module on 10 sites and did an update on 1, you have to use update.php on all other 9 sites too.