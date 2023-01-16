---
url: https://www.drupal.org/docs/8/modules/avatar-kit/avatar-kit-versions
description: >-
  This page outlines the differences between Avatar Kit 1.x and 2.x for Drupal
  8. Avatar Kit 2.x is a complete rewrite. Some functionality has been split out
  to the generic PHP library also named Avatar Kit (Github). 2.x It has strict
  requirements, making use of Drupal core 8.4 features, depends on various
  externally developed projects found on Packagist. 2.x requires PHP 7.1 or
  higher. Avatar Kit and its dependents uses newer PHP syntax extensively. If
  your site is unable to meet these requirements, it is recommended to use
  Avatar Kit 1.x in the mean time.
published_time: '2017-12-25T19:07:50+00:00'
modified_time: '2017-12-25T19:19:37+00:00'
---
This page outlines the differences between Avatar Kit 1.x and 2.x for Drupal 8.

Avatar Kit 2.x is a complete rewrite. Some functionality has been split out to the generic PHP library also named [Avatar Kit](https://packagist.org/packages/dpi/ak) ([Github](https://github.com/dpi/ak)).

2.x It has strict requirements, making use of Drupal core 8.4 features, depends on various externally developed projects found on Packagist.

2.x requires PHP 7.1 or higher. Avatar Kit and its dependents uses newer PHP syntax extensively.

If your site is unable to meet these requirements, it is recommended to use Avatar Kit 1.x in the mean time.

There is no upgrade path from 1.x to 2.x. There is not many reasons to have an upgrade path, since the plugin system was rewritten, and the cached images themselves can easily be rebuilt. User uploaded images remain in an image field, so uninstalling 1.x will not purge these images.