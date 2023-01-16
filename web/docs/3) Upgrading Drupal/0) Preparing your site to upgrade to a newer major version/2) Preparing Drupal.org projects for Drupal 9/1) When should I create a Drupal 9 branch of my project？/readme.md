**Never!** Some releases of project are likely to be compatible with versions of Drupal 8, 9, and later, simultaneously. There is no longer a need to maintain different branches of your project for each major version of Drupal core. You can keep making releases with `8.x-*` versions.

[Drupal 8.7.7 onwards supports a new core\_version\_requirement key in info.yml files](https://www.drupal.org/node/3070687) where you can declare your project compatible with both Drupal 8 and 9 at the same time.

Drupal 8.8.3 onwards support semantic versioning for contributed projects. Once your project supports only Drupal 8.8.3 and later, and you are ready to make a new major branch, you can [switch to semantic versioning](/node/1015226#semver-transition).