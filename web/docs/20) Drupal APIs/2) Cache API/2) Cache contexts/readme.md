---
url: https://www.drupal.org/docs/drupal-apis/cache-api/cache-contexts
description: >-
  Cache contexts = (request) context dependencies Cache contexts are analogous
  to HTTP's Vary header. Why? Cache contexts provide a declarative way to create
  context-dependent variations of something that needs to be cached. By making
  it declarative, code that creates caches becomes easier to read, and the same
  logic doesn't need to be repeated in every place where the same context
  variations are necessary. Examples: Some expensive-to-calculate data depends
  on the active theme: different results for different themes. Then you'd vary
  by the theme cache context.
published_time: '2015-03-25T09:33:13+00:00'
modified_time: '2022-07-05T14:02:44+00:00'
---
> Cache contexts = (request) context dependencies

> Cache contexts are analogous to HTTP's [Vary](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.44) header.