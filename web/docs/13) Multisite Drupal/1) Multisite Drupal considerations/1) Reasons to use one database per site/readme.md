The databases work in the background and are tended to by the codebase. Typically you will never have a need to bother with a database at all.

There is little, if anything, to be gained by trying to use only one database for multiple sites. The small savings in disc-storage you might get from having only one database is greatly overshadowed by the potential problems you can have from doing that.

* If data from one site is corrupted, either accidentally by you or other users, or is corrupted by a malicious attack, all sites can be affected.
* A database is made up of a multitude of 'tables'. If you decide to migrate one of your sites out of a multisite setup, you will have a difficult time determining exactly which tables belong to each site, and which tables are shared by all sites.