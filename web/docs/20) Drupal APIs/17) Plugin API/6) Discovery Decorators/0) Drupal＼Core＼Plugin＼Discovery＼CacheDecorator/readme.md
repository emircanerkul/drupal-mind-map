We'll discuss the various methods that exist here and what they do.

### public function \_\_construct(DiscoveryInterface $decorated, $cache\_key = NULL);

As mentioned above, this function takes a DiscoveryInterface compatible variable called $decorated. This could be any of the previously discussed discovery classes. In addition to this it takes a `$cache_key` which will be used when making `cache()->get()` calls.

### public function getPluginDefinition($plugin\_id);

If you've looked at the code for any of the other discovery classes, then this function should be familiar. In the case of the `CacheDecorator`, we will check to see if we have a cached version of this already loaded and if we don't, then it will manually load the definition for us by proxying to the discovery class that was passed into the constructor.

### public function getPluginDefinitions();

Another familiar discovery function, in this function we will look to see if a cache of all definitions exists, if one does not, we'll get all the definitions and then cache it for next time.

### protected function getCachedDefinitions();

The first unfamiliar function, this is a simple function that will get our cached definition either from a variable in the class, or if that's empty, then will attempt to get the definitions via `cache()->get($this->cacheKey)`.

### protected function setCachedDefinitions($definitions);

This simple function is used to set the cache definitions via `cache()->set($this->cacheKey, $definitions)`.

### public function \_\_call($method, $args);

Finally, the `__call()` method is added. This will allow our decorator class to proxy any incoming method that the original discovery class supports into that class by calling:

```php
return call_user_func_array(array($this->decorated, $method), $args);

```

All discovery decorators should implement this function.