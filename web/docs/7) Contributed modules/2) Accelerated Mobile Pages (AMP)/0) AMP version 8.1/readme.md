---
url: >-
  https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-81
description: >-
  The AMP module is designed to convert Drupal pages into pages that comply with
  the AMP standard. Initially only node pages will be converted. Other kinds of
  pages will be enabled at a later time. When the AMP module is installed, AMP
  can be enabled for any node type. At that point, AMP content becomes available
  on URLs such as node/1?amp or node/article-title?amp. There are also special
  AMP formatters for text, image, and video fields. The AMP Theme is designed to
  produce the very specific markup that the AMP HTML standard requires.
published_time: '2018-04-06T14:11:57+00:00'
modified_time: '2018-04-23T12:34:19+00:00'
---
The AMP module is designed to convert Drupal pages into pages that comply with the [AMP standard](https://www.ampproject.org). Initially only node pages will be converted. Other kinds of pages will be enabled at a later time.

When the AMP module is installed, AMP can be enabled for any node type. At that point, AMP content becomes available on URLs such as `node/1?amp` or `node/article-title?amp`. There are also special AMP formatters for text, image, and video fields.

The [AMP Theme](https://www.drupal.org/project/amptheme) is designed to produce the very specific markup that the AMP HTML standard requires. The AMP theme is triggered for any node delivered on an `?amp` path. As with any Drupal theme, the AMP theme can be extended using a subtheme, allowing publishers as much flexibility as they need to customize how AMP pages are displayed. This also makes it possible to do things like place AMP ad blocks on the AMP page using Drupal's block system.

The [AMP PHP Library](https://github.com/Lullabot/amp-library) analyzes HTML entered by users into rich text fields and reports issues that might make the HTML non-compliant with the AMP standard. The library does its best to make corrections to the HTML, where possible, to make it more compliant with the AMP HTML standard. It also automatically converts images, iframes, tweet embed HTML, instagram embed HTML and youtube embed HTML into their AMP HTML equivalents. The PHP Library is CMS agnostic, designed so that it can be used by both the Drupal 8 and Drupal 7 versions of the Drupal module, as well as by non-Drupal PHP projects.

To learn more about this module, see this article on the official AMP blog: "[AMPing up Drupal](https://amphtml.wordpress.com/2016/03/02/amping-up-drupal/)".