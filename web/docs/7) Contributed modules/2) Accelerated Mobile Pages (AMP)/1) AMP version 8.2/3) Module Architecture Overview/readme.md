The [AMP Theme](https://www.drupal.org/project/amptheme) is designed to produce the very specific markup that the AMP standard requires. The AMP theme is triggered for any node delivered on an `?amp=1` path. As with any Drupal theme, the AMP theme can be extended using a subtheme, allowing publishers as much flexibility as they need to customize how AMP pages are displayed. This also makes it possible to do things like place AMP ad blocks on the AMP page using Drupal's block system.

The AMP Base theme takes care of converting some of the larger parts of the page into AMP. The aptly named ExAMPle theme demonstrates how to customize the appearance of AMP pages with custom styles. You will likely want to create your own custom AMP subtheme with your own styles.

The [AMP PHP Library](https://github.com/Lullabot/amp-library) analyzes HTML entered by users into rich text fields and reports issues that might make the HTML non-compliant with the AMP standard. The library does its best to make corrections to the HTML, where possible, and automatically converts images and iframes into their AMP equivalents. More automatic conversions may be available in the future. The PHP Library is CMS agnostic, designed so that it can be used by both the Drupal 8 and Drupal 7 versions of the Drupal module, as well as by non-Drupal PHP projects. The Composer installation will take care of adding this library when the AMP module is added.

The module is responsible for the basic functionality of providing an AMP version of Drupal pages, including the following tasks:

* Create an AMP view mode, so users can decide which fields should be displayed in which order on the AMP version of a page.
* Create an AMP route, which will display the AMP view mode on an AMP path (i.e. `node/1?amp=1`).
* Create formatters for common fields, like text, image, video, and iframe that can be used in the AMP view mode to display AMP components for those fields.
* Create AMP ad blocks that can be placed by the theme.
* The theme can place AMP pixel items in the page markup where appropriate, based on the configuration options.
* Create an AMP configuration page where users can identify which ad and analytics systems to use, and identify which theme is the AMP theme.
* Create a way for users to identify which content types should provide AMP pages, and a way to override individual nodes to prevent them from being displayed as AMP pages (to use for odd pages that wouldn’t transform correctly).
* Create an AMP Metadata configuration page where users can provide Structured Data necessary for an AMP page to appear in Google Top Stories carousels.
* Make sure that paths that should not work as AMP pages generate 404s instead of broken pages.
* Make sure that aliased paths work correctly, so if `node/1`has an alias of `my-page`, `node/1?amp=1` has an alias of `my-page?amp=1`.
* Create a system so the user can preview the AMP page.

The body field presents a special problem, since it is likely to contain lots of invalid markup, especially embedded images, videos, tweets, and iframes. There is no easy way to convert a blob of text with invalid markup into AMP markup. At the same time, this is a common problem that other projects will run into. Our solution is a separate, stand-alone, [AMP PHP Library](https://github.com/Lullabot/amp-library) to transform that markup, as best it can, from non-compliant HTML to AMP. The AMP Text field formatter for the body will use that library to render the body in the AMP view mode.

We have done our best to make this solution as turnkey as possible, but more could be added to this module in the future. At this point only node pages can be converted to AMP. The initial module supports AMP tags such as `amp-ad`, `amp-pixel`, `amp-img`, `amp-video`, `amp-analytics`, and `amp-iframe`. Support for additional extended components may be added in the future. For now the module supports Google Analytics, AdSense, and DoubleClick for Publisher ad networks. Additional network support could be added down the road.