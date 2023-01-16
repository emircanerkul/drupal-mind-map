---
url: https://www.drupal.org/docs/8/api/render-api/bubbleable-metadata
description: >-
  The parent page explains cacheability in general. This looks in detail at how
  render arrays bubble cacheability. Concepts Cacheability metadata: contexts,
  tags, max-age. TO BE EXPANDED Bubbleable metadata: cacheability metadata +
  #attached + #post_render_cache callbacks. TO BE EXPANDED Default render cache
  contexts: every render array that uses #theme uses templates of the negotiated
  theme, and almost every render array contains translated strings (i.e. text
  wrapped in a t() call). That's why Drupal adds the corresponding cache
  contexts ('theme' and 'languages:' .
published_time: '2015-03-27T13:16:02+00:00'
modified_time: '2016-10-13T17:28:48+00:00'
---
The [parent page](/developing/api/8/render/arrays/cacheability) explains cacheability in general. This looks in detail at how render arrays bubble cacheability.