By default, Drupal caches any rendering it performs for blocks and entities, to speed up subsequent page loads. This means that changes to Twig templates for these will not take effect immediately. Setting the render cache to use the Null cache back-end effectively disables this.

To disable the render cache, add the following lines to either:

* `settings.php`, taking care not to add it to your production site
* or `settings.local.php`, by uncommenting the lines at the bottom of your `settings.php` first.

These lines are:

```php
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null'; 
```

You might find that they are already in your `settings.php`, commented out; if so, just uncomment them (but remember to comment them out again later!)