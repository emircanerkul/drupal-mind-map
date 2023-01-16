There is always something to improve in Drupal. Let's take `file.inc` functions in Drupal 8 for example. These functions have been around for a long time but are not a good fit in Drupal 8\. Most were deprecated in Drupal 8.7.0 and they will be removed in Drupal 9\. This is what the before/after pair looks for one of them:

```php
// Before 8.7.0 only this was possible.
file_unmanaged_copy($source, $destination);

// After 8.7.0 this is the new way. The prior code still works but is deprecated.
\Drupal::service('file_system')->copy($source, $destination);
```

The new solution is better for various reasons, including:

1. The file system service implements the FileSystemInterface and thus makes it easy to find all the related functionality, no need to hunt around in global function names following a naming convention.
2. The service can be swapped for a different file system implementation, such as for logging file operations.
3. The service can be mocked in tests, allowing file system operations to be avoided while still testing the logic.
4. The code matches Drupal 8's code style elsewhere.
5. The code does not need to be loaded at all times, can be autoloaded when needed.

The old solution remains in Drupal 8 for [backwards compatibility](https://www.drupal.org/core/d8-bc-policy). That means that modules, sites and custom code using the `file_unmanaged_copy()` function will continue working even though a replacement solution is already available. The old solution is marked as deprecated, which means it will eventually be removed from Drupal altogether.