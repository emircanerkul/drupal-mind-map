* Your site must be updated to the latest minor version. Upgrades are only supported from the final scheduled minor release and one previous (e.g. Drupal 8.8 and 8.9), not from earlier releases (e.g. Drupal 8.3). Follow the [update instructions](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer).
* You should upgrade any outdated modules on your site to their latest versions. Older module versions may not be compatible with Drupal 9.
* Your hosting environment must meet [the minimum system requirements](https://www.drupal.org/docs/system-requirements/php-requirements) for the Drupal version you are upgrading to (e.g. PHP 7.4 or later).
* Check if you have deprecated code in your site that was removed in the next major version. Fix any deprecations, if required. The [Upgrade Status module](https://www.drupal.org/project/upgrade%5Fstatus/) can help you with this. You might have to [upgrade several modules](https://www.drupal.org/docs/updating-drupal/updating-modules-and-themes-using-composer).

The actual upgrade process will depend on whether your current site was built using Composer or tarballs (tar.gz files).

<!-- note-warning -->
> WARNING: If going the Composer route, these instructions are for sites based on drupal/recommended-project or drupal/legacy-project, or derivatives, and not drupal-composer/drupal-project-based sites. See Update Drupal from Versions Prior to 8.8.x using Composer for instructions on converting to the newer 8.8+ compatible model.