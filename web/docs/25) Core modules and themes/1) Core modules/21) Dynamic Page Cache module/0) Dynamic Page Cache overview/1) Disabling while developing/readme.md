In `example.settings.local.php`, this section can be found:

```php
/**
 * Disable Dynamic Page Cache.
 *
 * Note: you should test with Dynamic Page Cache enabled, to ensure the correct
 * cacheability metadata is present (and hence the expected behavior). However,
 * in the early stages of development, you may want to disable it.
 */
# $settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

```

Uncomment the commented-out line to disable the dynamic page cache. But please do pay attention to the comment!

### See also

* [Cacheability of render arrays](/developing/api/8/render/arrays/cacheability)
* [Auto-placeholdering](/developing/api/8/render/arrays/cacheability/auto-placeholdering)
* [Cache Contexts](/developing/api/8/cache/contexts)
* [Drupal 8's Dynamic Page Cache by Wim Leers](http://wimleers.com/article/drupal-8-dynamic-page-cache)