Typically, your code will end up rendering things (blocks, entities, and so on) and your controllers will return render arrays or responses. So, usually, you won't be interacting with the Cache API directly. Instead you'll be using:

Render caching (aka fragment caching)

The Render API uses cacheability metadata embedded in render arrays to perform caching (aka render caching). Therefore, the Cache API should not be used to interact with the render cache (neither to retrieve cache items nor to create new ones).

See [Cacheability of render arrays](/developing/api/8/render/arrays/cacheability).

Response caching

The cacheability metadata used by the Render API (see the previous section) bubbles all the way up to Response objects (usually a `HtmlResponse`) that implement `CacheableResponseInterface`.

The cacheability metadata on these Response objects is what allows Drupal 8 to ship with [Page Cache](https://www.drupal.org/documentation/modules/internal%5Fpage%5Fcache) and [Dynamic Page Cache](https://www.drupal.org/documentation/modules/dynamic%5Fpage%5Fcache) enabled by default, because it allows them to work transparently: they are always up-to-date and always vary appropriately.

See [CacheableResponseInterface](/developing/api/8/cache/cacheable-response-interface).