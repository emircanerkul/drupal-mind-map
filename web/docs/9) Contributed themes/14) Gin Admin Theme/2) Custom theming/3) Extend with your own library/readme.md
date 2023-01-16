### Theme

If overriding styles with a simple CSS is not enough, you can extend/override any of Gin's libraries. Or you can extend the custom CSS library to attach your own library as shown below:

```yaml
/* your_theme.info.yml */

libraries-extend:
  gin/gin_base:
    - your_module/your_library_extension
```

###  Module

If you want to extend Gin with a module you'll need to create a small helper module. You can then access the _GinSettings_ for checks if needed.

```php
/* your_module.module */

<?php

use Drupal\gin\GinSettings; // Optional.

/**
 * Implements hook_preprocess_HOOK() for page_attachments.
 */
function your_module_page_attachments_alter(&$page) {
  // Get theme settings (optional).
  /** @var \Drupal\gin\GinSettings $settings */
  $settings = \Drupal::classResolver(GinSettings::class);

  // Toolbar example.
  $toolbar = $settings->get('classic_toolbar');

  // Attach the base library if the horizontal toolbar is set.
  if ($toolbar === 'horizontal') {
    // Attach your library.
    $page['#attached']['library'][] = 'your_module/your_library';
  }

  // Route specific example.
  $route = \Drupal::routeMatch()->getRouteName();

  if (
    $route == 'user.login' ||
    $route == 'user.pass' ||
    $route == 'user.register'
  ) {
    // Attach your library.
    $page['#attached']['library'][] = 'your_module/your_library';
  }
}

```