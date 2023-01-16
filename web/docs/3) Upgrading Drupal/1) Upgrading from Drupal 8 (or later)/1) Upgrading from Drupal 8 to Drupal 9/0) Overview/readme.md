---
url: >-
  https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-8-or-later/upgrading-from-drupal-8-to-drupal-9/overview
description: >-
  Short summary Ensure your hosting environment matches the platform
  requirements of Drupal 9. Update to Drupal 8.8.x or 8.9.x (if not already on
  that version) Update all contributed projects and ensure they are Drupal 9
  compatible Make custom code Drupal 9 compatible Update core codebase to Drupal
  9 Run update.php If you're looking for step by step directions, you'll find
  more details in the upgrading section. How do I upgrade to Drupal 9 from 8.7
  or earlier versions of Drupal 8?
published_time: '2019-05-07T15:22:11+00:00'
modified_time: '2022-11-28T03:27:53+00:00'
---
### Short summary

1. Ensure your hosting environment matches the [platform requirements of Drupal 9](https://www.drupal.org/docs/9/how-drupal-9-is-made-and-what-is-included/environment-requirements-of-drupal-9).
2. Update to Drupal 8.8.x or 8.9.x (if not already on that version)
3. Update all contributed projects and ensure they are Drupal 9 compatible
4. Make custom code Drupal 9 compatible
5. Update core codebase to Drupal 9
6. Run update.php

If you're looking for step by step directions, you'll find more details in the [upgrading section](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-8-to-drupal-9-or-higher).

### How do I upgrade to Drupal 9 from 8.7 or earlier versions of Drupal 8?

You should fully update your Drupal 8 site to the most recent version of both core and contributed modules and themes, prior to updating to Drupal 9\. This means Drupal 8.8.x or Drupal 8.9.x and the most recent contributed modules versions that are compatible with those releases.

Drupal 8.8 is the first minor release of Drupal 8 that is fully API-compatible with Drupal 9.0.x, therefore contributed module releases prior to 8.8.0 are unlikely to be compatible with Drupal 9.0.0\. We require updating to _at least_ Drupal 8.8.0 prior to updating to Drupal 9 and the upgrade will not proceed until this is done. However more recent patch releases of 8.8.x and 8.9.x will have further bugfixes applied and are always preferred.

We have minimized the number and complexity of database updates required in order to update from Drupal 8.8 or 8.9.x to Drupal 9.0.x. By updating to the latest version of core first, this ensures your database is Drupal 9-ready, along with your contributed modules, so that only code changes and some smaller database updates need to happen all at once.

Make sure to update all contributed modules and themes and ensure they are all compatible with Drupal 9\. They will also still be compatible with your Drupal 8.8+ site. Use [Upgrade Status](https://www.drupal.org/project/upgrade%5Fstatus) to check their compatibility. If your site has contributed modules which are not yet compatible with Drupal 9, you should cooperate with module maintainers and offer help where possible to make sure updates happen. Check the module's project pages for Drupal 9 plans as most key modules provided that. Read [Help contributed modules prepare for Drupal 9](https://www.drupal.org/node/3032484) for more tips.

If you have custom code and/or themes, you should also [confirm they are not using any code deprecated in 8.8.x or earlier for removal in 9.0.x](https://www.drupal.org/docs/9/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/deprecation-checking-and-correction-tools), prior to attempting to update your site to Drupal 9.

Finally once every other component is Drupal 9 compatible, [update the core codebase](https://www.drupal.org/docs/8/upgrade/upgrading-between-drupal-8-major-versions-eg-from-drupal-8-to-drupal-9) to Drupal 9 and run update.php.

Generally, it is recommended to keep up with minor updates of Drupal core as they are released. However if you are still on version 8.6.x or older, you may want to skip directly to 8.8.x in order to have upgrade path bug fixes applied. These are no longer backported to earlier versions.

If you are having trouble updating to 8.8.x, check the [list of known issues \[broken link\]](https://www.drupal.org/project/issues/search/drupal?project%5Fissue%5Ffollowers=&status%5B%5D=Open&categories%5B%5D=1&version%5B%5D=8.x&issue%5Ftags%5Fop=%3D&issue%5Ftags=Drupal+8+upgrade+path) and open a new issue if you can't find your problem there.

Note that Drupal 8.9 will have security support only until November 2021.

### How do I upgrade to Drupal 9 from Drupal 8.8 or later?

Make sure to update all contributed modules and themes and ensure they are all compatible with Drupal 9\. They will also still be compatible with your Drupal 8.8+ site. Use [Upgrade Status](https://www.drupal.org/project/upgrade%5Fstatus) to check their compatibility. If your site has contributed modules which are not yet compatible with Drupal 9, you should cooperate with module maintainers and offer help where possible to make sure updates happen. Check the module's project pages for Drupal 9 plans as most key modules provided that. Read [Help contributed modules prepare for Drupal 9](https://www.drupal.org/node/3032484) for more tips.

If you have custom code and/or themes, you should also [confirm they are not using any code deprecated in 8.8.x or earlier for removal in 9.0.x](https://www.drupal.org/docs/9/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/deprecation-checking-and-correction-tools), prior to attempting to update your site to Drupal 9.

Finally once every other component is Drupal 9 compatible, [update the core codebase](https://www.drupal.org/docs/8/upgrade/upgrading-between-drupal-8-major-versions-eg-from-drupal-8-to-drupal-9) to Drupal 9 and run update.php.