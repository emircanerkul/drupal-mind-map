---

(Please note this procedure is no longer accurate, see [#3206886: Create Subtheme without drush](https://www.drupal.org/project/bulma/issues/3206886 "Status: Active").)

If you are not familiar with Drush, you could create sub-theme step by step manually, altough recommended way is with Drush.

1. Copy default folder (located inside bulma/starterkit folder) to themes folder
2. Rename copied folder to "your sub-theme name".
3. Make search replace BULMA\_SUBTHEME\_MACHINE\_NAME with "your sub-theme name".
4. After this also you need to rename all files named/prefixed with default to "your subtheme name":  
 \- default.info.yml rename to your-subtheme-name.info.yml  
 \- default.libraries.yml rename to your-subtheme-name.libraries.yml  
 \- etc..
5. And final step is that you unhide this theme, under your-subtheme-name.info.yml remove line 7 (hidden: true).