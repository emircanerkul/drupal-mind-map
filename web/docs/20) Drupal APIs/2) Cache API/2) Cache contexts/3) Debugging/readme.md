All of the above is helpful information when debugging something that is being cached. But, there's one more thing: let's say something is being cached with the cache keys `['foo', 'bar']` and the cache contexts `['languages:language_interface', 'user.permissions', 'route']`. Then the corresponding cache item will be cached in a particular cache bin with a CID (_cache ID_) of:

```php
foo:bar:[languages:language_interface]=en:[user.permissions]=A_QUITE_LONG_HASH:[route]=myroute.ROUTE_PARAMS_HASH

```

In other words:

* cache keys are listed first, in the order provided
* cache contexts are listed second, alphabetically, and result in CID parts of the form `[<cache context name>]=<cache context value>`
* all these CID parts are concatenated together using colons

That should make it much easier to analyze & debug caches!

### Headers (debugging)

Finally: it is easy to see which cache contexts a certain response depends on (and thus is varied by): one must only look at the `X-Drupal-Cache-Contexts` header!

_Note: If you're not seeing those headers, you will want to [set up your Drupal instance for development.](/developing/api/8/render/arrays/cacheability#headers)_