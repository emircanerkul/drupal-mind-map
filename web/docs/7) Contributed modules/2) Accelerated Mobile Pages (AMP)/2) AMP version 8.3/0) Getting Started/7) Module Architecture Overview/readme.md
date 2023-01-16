### AMP Theme

The [theme](https://www.drupal.org/project/amptheme) is designed to produce the very specific markup that the AMP standard requires. The AMP theme is triggered for any node delivered on an \`?amp\` path. As with any Drupal theme, the AMP theme can be extended using a subtheme, allowing publishers as much flexibility as they need to customize how AMP pages are displayed. You will likely want to create your own custom AMP subtheme with your own styles.

A new feature in AMP 8.3 is the ability to create an AMP theme as a subtheme of your primary theme instead of using the base AMPTheme. An example is included in AMPTheme of an AMP theme that is a subtheme of Bartik instead of AMPTheme. Your subtheme should carefully follow the examples in that theme to be sure it still validates.

### AMP PHP Library

The [library](https://github.com/Lullabot/amp-library) analyzes HTML entered by users into rich text fields and reports issues that might make the HTML non-compliant with the AMP standard. The library does its best to make corrections to the HTML, where possible, and automatically converts images and iframes into their AMP equivalents. The PHP Library is CMS agnostic, designed so that it can be used by both the Drupal 8 and Drupal 7 versions of the Drupal module, as well as by non-Drupal PHP projects. The Composer installation will take care of adding this library when the AMP module is added, as long as you append the command with \`--with-dependencies\`.

### AMP Module

The [module](https://www.drupal.org/project/amp) is responsible for the basic functionality of providing an AMP version of Drupal pages, including the following tasks:

* Provides an AMP view mode, so users can:  
   * identify which content types should provide AMP pages.  
   * decide which fields should be displayed in which order on the AMP version of a page.
* Provides an AMP route, which will display the AMP view mode on an AMP path (i.e. \`node/1?amp=1\`).
* Provides formatters for common fields, like text, image, video, and iframe that can be used in the AMP view mode to display AMP components for those fields.
* Provides an AMP configuration page where users can identify which theme is the AMP theme.
* Makes sure that paths that should not work as AMP pages generate 404s instead of broken pages.
* Makes sure that aliased paths work correctly, so if \`node/1\` has an alias of \`my-page\`, \`node/1?amp=1\` has an alias of \`my-page?amp=1\`.
* Creates a system so the user can preview the AMP page.

The body field presents a special problem, since it is likely to contain lots of invalid markup, especially embedded images, videos, tweets, and iframes. There is no easy way to convert a blob of text with invalid markup into AMP markup. At the same time, this is a common problem that other projects will run into. Our solution is a separate, stand-alone, AMP PHP Library to transform that markup, as best it can, from non-compliant HTML to AMP. The AMP Text field formatter for the body will use that library to render the body in the AMP view mode