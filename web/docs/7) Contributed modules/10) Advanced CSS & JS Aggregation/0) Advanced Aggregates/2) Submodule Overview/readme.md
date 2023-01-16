AdvAgg comes with quite a few submodules to do various tasks. Most are compatible with the vast majority of other mods but some may have conflicts. If so those are noted here and more details in the module's full write-ups.

#### AdvAgg Cdn (advagg\_cdn)

_This module may have conflicts, but only with other CDN type modules._

Load CSS or JavaScript libraries from a public CDN; currently only supports jQuery and jQuery UI with either Google's or Microsoft's CDN.

#### AdvAgg CSS/JS Validator (advagg\_validator)

Validate CSS and or JS files in your site through a few different validators.

#### AdvAgg External Minifier (advagg\_ext\_minify)

Minify CSS or JS through an otherwise unsupported method, with a configurable command line.

#### AdvAgg Minify CSS (advagg\_css\_minify)

Minify the CSS files using a 3rd party minifier; currently supports YUI (included) or the Core minification algorithm.

#### AdvAgg Minify JS (advagg\_js\_minify)

Compress the compiled JavaScript files using a 3rd party minifier; built in support for a number of minifiers.

#### AdvAgg Modifier (advagg\_mod):

_Depending on tweaks applied this module may cause compatibility issues with other modules._

Includes additional tweaks that may not work for all sites such as: - Force preprocessing for all CSS/JS. - Add defer tag to all JS. - Defer CSS loading using `rel=preload` and JavaScript Polyfill. - Add async tag to all or only local JavaScript.

#### AdvAgg Old IE Compatibility Enhancer (advagg\_old\_ie\_compatibility)

_This module may have conflicts with other modules if it is enabled._

Includes additional functionality to improve Drupal compatibility with old versions of Internet Explorer (6-9).