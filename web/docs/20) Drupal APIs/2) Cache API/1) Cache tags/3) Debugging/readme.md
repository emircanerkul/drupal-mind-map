All of the above is helpful information when debugging something that is being cached. But, there's one more thing: let's say something is being cached with the cache tags `['foo', 'bar']`. Then the corresponding cache item will have a `tags` column (assuming the database cache back-end for a moment) with the following value:

```php
bar foo

```

In other words:

* cache tags are separated by space
* cache tags are sorted alphabetically

That should make it much easier to analyze & debug caches!

### Headers (debugging)

Finally: it is easy to see which cache tags a certain response depends on (and thus is invalidated by): one must only look at the `X-Drupal-Cache-Tags` header!

(This is also why spaces [are forbidden](#syntax): because the `X-Drupal-Cache-Tags` header, just like many HTTP headers, uses spaces to separate values.)

_Note: If you're not seeing those headers, you will want to [set up your Drupal instance for development.](/developing/api/8/response/cacheable-response-interface#debugging)_