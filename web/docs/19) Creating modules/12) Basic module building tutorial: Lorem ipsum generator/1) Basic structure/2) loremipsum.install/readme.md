```php
<?php

/**
 * @file
 * Installation functions for Lorem ipsum module.
 */

use Drupal\user\RoleInterface;

/**
 * Implements hook_install().
 */
function loremipsum_install() {
  user_role_change_permissions(RoleInterface::ANONYMOUS_ID, array(
    'generate lorem ipsum' => TRUE,
  ));
}

```

Here we have the _use_ of another class: _RoleInterface_. Basically, this file tells Drupal: "once this module is enabled, look for the _generate lorem ipsum_ permission and enable it".

But where is this permission defined?