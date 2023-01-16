Taking the example above, we use the `@deprecated` annotation on the function implementation. This documents when we deprecated the function, when it will be removed and what to use instead. We also add a `@see` annotation explaining where to read more. In the implementation of the function, a `trigger_error()` call is added to trigger a fail in tests that look for deprecation errors. Then, a backwards compatible implementation of the old solution is added, which is based on the new API. This is how a backwards compatible function implementation might look:

```php
/**
 * Copies a file to a new location without database changes or hook invocation.
 *
 * [...]
 *
 * @deprecated in Drupal 8.7.0, will be removed before Drupal 9.0.0.
 *   Use \Drupal\Core\File\FileSystemInterface::copy().
 *
 * @see file_copy()
 * @see https://www.drupal.org/node/3006851
 */
function file_unmanaged_copy($source, $destination = NULL, $replace = FILE_EXISTS_RENAME) {
  @trigger_error('file_unmanaged_copy() is deprecated in Drupal 8.7.0 and will be removed before Drupal 9.0.0. Use \\Drupal\\Core\\File\\FileSystemInterface::copy(). See https://www.drupal.org/node/3006851.', E_USER_DEPRECATED);

  // ... backwards compatible implementation ...
}

```

Finally, while not evident in this code example, a test should be added to confirm that the deprecation works properly.

While most deprecations are simple, some cases are less straightforward. Some will not be able to `trigger_error()` (such as global or class constants), and some will not be able to have a `@deprecated` annotation (such as an else {} clause in a condition). There are also some deprecations that were implemented before the current deprecation policy was adopted, and possibly missing the `@deprecated` annotation or `trigger_error()`.

The important piece is that we have a way to identify "future changes" while maintaining backwards compatible implementations. This means Drupal 8 modules, custom code, etc. continue working in updated versions, but it is clear what needs to be changed in order to work with Drupal 9.

A more thorough explanation can be found in the [Drupal core deprecation policy](https://www.drupal.org/core/deprecation).