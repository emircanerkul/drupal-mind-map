<!-- note-tip -->
> TIP: At the moment, the Drupal Automatic Updates module is available as a contributed module from Drupal.org. In a later iteration, and after significant community testing, it will be included in Drupal core. At that time, all you will need to do is upgrade to the version of Drupal that includes the feature.

To install the contrib version of the Automatic Updates module, you will follow the same instructions that you would use for many other modules on Drupal.org:

`composer require drupal/automatic_updates:^2`

### Requirements

Automatic Updates requires Composer 2.3.5 or later.

For this module to work, Drupal must be able to change its own code base. Not all hosting environments allow this; for example, at this time, Automatic Updates is likely incompatible with most offerings from Acquia, Pantheon, or similar providers. If your Drupal site is hosted in such a set-up, we recommend using Automatic Updates in a local development environment, then pushing the changes to the hosting environment.

Additionally, the 8.x-2.x version of Automatic Updates requires that your Drupal site be managed by Composer. Most sites created with Drupal 8.8 or later are Composer-managed by default.

### Attended Use

The Readiness check feature will run regularly to ensure that there are no problems that would prevent an update from applying. Drupal Core's Update module, which is required by this module, will notify site administrators when security updates are available.

On the module configuration page, a user can choose to manually trigger the in-place update.

### Unattended Use

Unattended updates are currently disabled. The Drupal Association is currently implementing [The Update Framework](https://theupdateframework.io/) on drupal.org. Upon completion of this project unattended updates will be enabled by integrating the [PHP-TUF library](https://github.com/php-tuf/php-tuf) into this module which will provide a client-side implementation of The Update Framework.