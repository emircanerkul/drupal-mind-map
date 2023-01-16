### Confirm hosting environment

Ensure your hosting environment matches the [platform requirements of Drupal 10](https://www.drupal.org/docs/system-requirements).

### Update to 9.4 or 9.5

[Update](https://www.drupal.org/docs/updating-drupal) to Drupal 9.4.x or 9.5.x (if not already on that version). If any [modules or themes that have been removed](https://www.drupal.org/docs/core-modules-and-themes/deprecated-and-obsolete) you may use the respective contributed project instead.

### Update contributed projects

Update all contributed projects and ensure they are Drupal 10 compatible.

Make sure to update all contributed modules and themes and ensure they are all compatible with Drupal 10\. They will also still be compatible with your Drupal 9.4+ site. Use [Upgrade Status](https://www.drupal.org/project/upgrade%5Fstatus) to check their compatibility. If your site has contributed modules which are not yet compatible with Drupal 10, you should cooperate with module maintainers and offer help where possible to make sure updates happen. Check the module's project pages for Drupal 10 plans as most key modules provided that. Read [Help contributed modules prepare for Drupal 9](https://www.drupal.org/node/3032484) for more tips.

### Update custom projects

If you have custom code and/or themes, you should also [confirm they are not using any code deprecated in 9.5.x or earlier for removal in 10.0.x](https://www.drupal.org/docs/9/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/deprecation-checking-and-correction-tools), prior to attempting to upgrade.

### Do the upgrade

[Upgrade the code and run update.php.](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-8-or-later/upgrading-a-composer-based-site)