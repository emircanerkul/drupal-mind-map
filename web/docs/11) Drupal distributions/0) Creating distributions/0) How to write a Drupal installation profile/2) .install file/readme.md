Note that if your profile implements `hook_install()`, installation from configuration (see the section [below](#config)) is not supported. This might be addressed in [#2982052: Allow an install hook in profiles installing from configuration](https://www.drupal.org/project/drupal/issues/2982052 "Status: Needs review"). See [Installing Drupal from configuration (only certain profiles)](/node/2897299) for details.

```php
<?php
/**
 * @file
 * Install, update and uninstall functions for the profilename install profile.
 */

/**
 * Implements hook_install().
 *
 * Perform actions to set up the site for this profile.
 *
 * @see system_install()
 */
function profilename_install() {
  // First, do everything in standard profile.
  include_once DRUPAL_ROOT . '/core/profiles/standard/standard.install';
  standard_install();

  // Can add code in here to make nodes, terms, etc.
}

```