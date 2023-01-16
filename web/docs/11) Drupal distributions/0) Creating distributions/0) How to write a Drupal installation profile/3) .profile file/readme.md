The _profilename_.profile file has access to almost everything a normal Drupal _modulename_.module file does because Drupal is fully bootstrapped before almost anything in the profile runs.

```php
<?php
/**
 * @file
 * Enables modules and site configuration for a standard site installation.
 */

// Add any custom code here like hook implementations.

```