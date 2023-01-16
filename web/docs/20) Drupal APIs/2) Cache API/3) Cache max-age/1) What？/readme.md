A cache `max-age` is a positive integer, expressing a number of seconds.

Cache max-ages are passed around as individual integers, because a given cache item can only logically have a single max-age.

Examples:

* `60` means cacheable for 60 seconds
* `100` means cacheable for 100 seconds
* `0` means cacheable for zero seconds, i.e. _not cacheable_
* [\\Drupal\\Core\\Cache\\Cache::PERMANENT](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Cache%21Cache.php/constant/Cache%3A%3APERMANENT) (value `-1`) means `cacheable forever`, i.e. _this will only ever be invalidated due to [cache tags](/developing/api/8/cache/tags)_. (In other words: ∞, or _infinite_ seconds.)

So if you for example want to prevent a rendered block from being cached, you should specify `max-age=0` on it.

Example for most render arrays:

`$build['#cache']['max-age'] = 0;`

Example in a function:

```php
\Drupal::cache()->set('my_cache_item', $school_list, \Drupal::time()->getRequestTime() + (86400));
```

If you want to change block max-age to 0 then you must implement getCacheMaxAge method.