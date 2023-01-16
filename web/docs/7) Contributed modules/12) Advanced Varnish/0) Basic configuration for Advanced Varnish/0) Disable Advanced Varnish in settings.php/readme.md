If you're working in an environment that doesn't have Varnish set up, you can disable Advanced Varnish module by adding those lines to your `settings.php` file:

```php
// Disable Varnish
$config['adv_varnish.cache_settings']['general']['varnish_purger'] = false;
$config['adv_varnish.cache_settings']['available']['enable_cache'] = false;
```

You can also include them in `settings.local.php`

Useful links:

* [Grace mode](https://varnish-cache.org/docs/trunk/users-guide/vcl-grace.html#grace-mode)
* [Varnish and HTTPS](https://komelin.com/articles/https-varnish/)
* [The Varnish Book](http://book.varnish-software.com/4.0/)