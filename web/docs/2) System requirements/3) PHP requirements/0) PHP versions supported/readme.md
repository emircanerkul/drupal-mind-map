| PHP version        | Supported by Drupal | First Drupal release with support | Recommended?                       |
| ------------------ | ------------------- | --------------------------------- | ---------------------------------- |
| 7.3                | 9.x (note 2 below)  | 8.6.4                             | ![](/misc/watchdog-warning.png) No |
| 7.4                | 9.x                 | 8.8.3                             | ![](/misc/watchdog-warning.png) No |
| 8.0                | 9.x                 | 9.1.0                             | ![](/misc/watchdog-ok.png) Yes     |
| 8.1 (note 1 below) | 9.x, 10.x           | 9.3.0                             | ![](/misc/watchdog-ok.png) Yes     |
| 8.2                | 10.0.x              | 10.0.0                            | ![](/misc/watchdog-ok.png) Yes     |

1. _[Drupal 10 requires at least PHP 8.1](https://www.drupal.org/node/3264830). [PHP 8.1.6 is recommended.](https://www.drupal.org/node/3295061)_
2. _[Drupal 9.4 dropped official support for PHP 7.3](https://www.drupal.org/project/drupal/issues/2917655)._ Sites on PHP 7.3 may still be installed and updated to Drupal 9.4 (with a warning), but their security coverage is not guaranteed unless they update to at least PHP 7.4.

### What does it mean for a PHP version to be supported? What does it mean for the PHP installation to be "too old"?

Drupal minor versions receive a predefined window of security coverage (typically 12 months) _so long as you are using a supported PHP version._ 

We prefer to allow sites to receive security updates even if they are using a version of PHP that is no longer supported. However, Drupal's upstream dependencies may drop support for older PHP versions before the Drupal major version reaches its end of life. If this happens, the Drupal site will no longer be able to install security updates for that dependency, so we can no longer guarantee its security coverage.

Site owners will receive warnings on their site status report that their PHP installation is "too old" if the site's PHP version is old enough that a dependency is likely to drop support for it.

If a dependency does drop support for a PHP version that was initially supported by the Drupal major version, an unscheduled minor release may be created to require the new PHP and dependency versions. For example, Drupal 9.0.0 supported PHP 7.3, so if a Drupal 9 dependency drops support for PHP 7.3 before Drupal 9's end-of-life date in November 2023, we may create a new minor version outside the normal schedule that increases the PHP version requirement to 7.4 and the dependency's version requirement to the supported version.

### What does it mean for a version of PHP to be "recommended"?

Drupal will work on all supported PHP versions. _Recommended_ PHP versions are the best choice for building a Drupal site because they will remain supported longer.