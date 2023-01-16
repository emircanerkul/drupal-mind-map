---
url: >-
  https://www.drupal.org/docs/8/api/entity-api/making-the-content-entity-searchable
description: >-
  Stub page. Example code to follow For examples, see NodeSearch.php and
  UserSearch.php. Put the plugin code in a file at the path
  my_module/src/Plugin/Search/MyModuleSearch.php Add search page for content
  entity at admin/config/search/pages If your plugin uses the search index,
  implement \Drupal\Core\Entity\EntityInterface::postSave() in your entity's
  class to call search_mark_for_reindex(). Example Here's example code for the
  Content Entity Example module. Plugin code
published_time: '2015-11-28T22:37:57+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
_Stub page. Example code to follow_

For examples, see `NodeSearch.php` and `UserSearch.php`.

1. Put the plugin code in a file at the path `my_module/src/Plugin/Search/MyModuleSearch.php`
2. Add search page for content entity at `admin/config/search/pages`
3. If your plugin uses the search index, implement `\Drupal\Core\Entity\EntityInterface::postSave()` in your entity's class to call `search_mark_for_reindex()`.