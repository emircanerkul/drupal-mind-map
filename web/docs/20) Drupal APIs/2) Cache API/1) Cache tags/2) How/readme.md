### Setting

Any cache backend should implement [CacheBackendInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Cache%21CacheBackendInterface.php/interface/CacheBackendInterface/8), so when you set a cache item with the [::set()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Cache%21CacheBackendInterface.php/function/CacheBackendInterface%3A%3Aset/8) method, provide third and fourth arguments e.g:

```php
$cache_backend->set(
  $cid, $data, Cache::PERMANENT, ['node:5', 'user:7']
);
```

This stores a cache item with ID `$cid` permanently (i.e., stored indefinitely), but makes it susceptible to invalidation through _either_ the `node:5` or `user:7` cache tags.

### Invalidating

Tagged cache items are invalidated via their tags, using [cache\_tags.invalidator:invalidateTags()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Cache%21CacheTagsInvalidator.php/function/CacheTagsInvalidator%3A%3AinvalidateTags/8) (or, when you cannot inject the `cache_tags.invalidator` service: [Cache::invalidateTags()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Cache%21Cache.php/function/Cache%3A%3AinvalidateTags/8)), which accepts a set of cache tags (`string[]`).

_Note: this invalidates items tagged with given tags, across all cache bins. This is because it doesn't make sense to invalidate cache tags on individual bins, because the data that has been modified, whose cache tags are being invalidated, can have dependencies on cache items in other cache bins._