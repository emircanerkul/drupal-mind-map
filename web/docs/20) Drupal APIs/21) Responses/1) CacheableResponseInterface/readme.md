---
url: https://www.drupal.org/docs/8/api/responses/cacheableresponseinterface
description: >-
  CacheableResponseInterface is an interface for responses that can expose
  cacheability metadata. (Cache contexts, tags and max-age.) The Render API
  bubbles up cacheability metadata all the way to the Response object (usually a
  HtmlResponse) that implement this interface. But really, any response can have
  this cacheability metadata.
published_time: '2015-10-13T12:54:54+00:00'
modified_time: '2022-06-28T07:34:41+00:00'
---
[CacheableResponseInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Cache%21CacheableResponseInterface.php/interface/CacheableResponseInterface/8) is an interface for responses that can expose [cacheability metadata](/developing/api/8/cache). (Cache [contexts](/developing/api/8/cache/contexts), [tags](/developing/api/8/cache/tags) and [max-age](/developing/api/8/cache/max-age).)

The [Render API](/developing/api/8/render) bubbles up cacheability metadata all the way to the `Response` object (usually a `HtmlResponse`) that implement this interface.

But really, _any_ response can have this cacheability metadata. For example, [CacheableJsonResponse](/developing/api/8/response) allows you to associate cacheability metadata with a JSON response: if the data in the JSON response originates from [data/objects with cacheability metadata](/developing/api/8/cache/cacheable-dependency-interface), then we know perfectly what the JSON response varies by (the cache contexts), what it is invalidated by (the cache tags) and how long it can be cached (its max-age). Similarly, `CacheableRedirectResponse` can be used for example for entities that have URL aliases, which never change, except when the entity's cache tag is invalidated.

Consequently, it is the cacheability metadata on these response objects that allow [Page Cache](/documentation/modules/internal%5Fpage%5Fcache) and [Dynamic Page Cache](/documentation/modules/dynamic%5Fpage%5Fcache) to cache responses, while always guaranteeing the response is up-to-date (thanks to cache tags) and that the right variation is sent in case of Dynamic Page Cache (thanks to cache contexts).