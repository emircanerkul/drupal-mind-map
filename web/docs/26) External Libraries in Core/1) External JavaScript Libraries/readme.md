---
url: >-
  https://www.drupal.org/docs/external-libraries-in-core/external-javascript-libraries
description: Drupal 8 allows using external JavaScript libraries.
published_time: '2018-01-18T10:29:51+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Drupal 8 allows using external JavaScript libraries. A list of all external JavaScript libraries in core can be found in [core.libraries.yml](http://cgit.drupalcode.org/drupal/tree/core/core.libraries.yml)

| Library                                                                | Version (used in core) | Latest version | related Issue | Comment |
| ---------------------------------------------------------------------- | ---------------------- | -------------- | ------------- | ------- |
| [backbone](https://github.com/jashkenas/backbone)                      | 1.2.3                  | 1.4.0          |               |         |
| [classList.js](https://github.com/eligrey/classList.js)                | 2014-12-13             | 1.2.20180112   |               |         |
| [ckeditor](https://github.com/ckeditor/ckeditor-dev)                   | 4.8.0                  | 4.12.1         |               |         |
| [domready](https://github.com/ded/domready)                            | 1.0.8                  | 1.0.8          |               |         |
| [farbtastic](https://github.com/mattfarina/farbtastic)                 | 1.2                    | 1.3            |               |         |
| [html5shiv](https://github.com/aFarkas/html5shiv)                      | 3.7.3                  | 3.7.3          |               |         |
| [jquery-form](https://github.com/malsup/form)                          | 3.51                   | 4.2.2          |               |         |
| [jquery-joyride](https://github.com/zurb/joyride)                      | 2.1.0.1                | 2.1.0          |               |         |
| [jquery-once](https://github.com/RobLoach/jquery-once)                 | 2.2.0                  | 2.2.3          |               |         |
| [jquery-ui-touch-punch](https://github.com/furf/jquery-ui-touch-punch) | 0.2.3                  | 0.2.3          |               |         |
| [jquery.cookie](https://github.com/carhartl/jquery-cookie)             | 1.4.1                  | 1.4.1          |               |         |
| [jquery.ui](https://github.com/jquery/jquery-ui)                       | 1.12.1                 | 1.12.1         |               |         |
| [jquery](https://github.com/jquery/jquery)                             | 3.2.1                  | 3.4.1          |               |         |
| [matchMedia](https://github.com/paulirish/matchMedia.js)               | 0.2.0                  | 0.3.2          |               |         |
| [modernizr](https://github.com/Modernizr/Modernizr)                    | 3.3.1                  | 3.7.1          |               |         |
| [picturefill](https://github.com/scottjehl/picturefill)                | 3.0.1                  | 3.0.3          |               |         |
| [underscore](https://github.com/jashkenas/underscore)                  | 1.8.3                  | 1.9.1          |               |         |

**Note**: All version details are related to the current core minor version (e.g. 8.5.x).

<!-- note-warning -->
> WARNING: There is no automatic way to upgrade these libraries. Currently, manually downloaded and added to the assets/vendor directory and updated core.libraries.yml to upgrade. See CKEditor upgrade issue for an example.