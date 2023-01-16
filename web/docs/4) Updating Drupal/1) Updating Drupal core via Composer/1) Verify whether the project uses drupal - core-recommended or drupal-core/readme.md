Run:

```php
composer show drupal/core-recommended
```

* If `drupal/core-recommended` is **installed**, this command returns information about the package.
* If `drupal/core-recommended` is **not installed**, this command returns "Package drupal/core-recommended not found".

The difference between the two is that drupal/core-recommended restricts most dependencies to patch-level updates for maximum stability. `drupal/core` is useful when you want to use the latest minor versions of dependencies and take care of testing that they work well. For more information see the [README](https://github.com/drupal/core-recommended).