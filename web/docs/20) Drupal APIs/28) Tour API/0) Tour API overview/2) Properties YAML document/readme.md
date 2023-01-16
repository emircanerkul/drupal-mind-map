The YAML document consists of the following key properties

* id - The ID of the tour
* module - The name of your module ("forum" in our case).
* langcode - The language of the tour. We have configuration schemas now so config entities will eventually be translatable.
* label - A name for the tour - these aren't used in core but will be leveraged by the Tour UI module which is under active development (read more below).
* routes - An array of routes for which the tour is active. Specify these as an array with route\_name and optional route\_params (also an array). Route names are found in each module's routing.yml file.
* tips - An array of tip plugin configuration to comprise the tour

_Routes_ and _paths_ are not the same thing, and [only routes can be used](https://www.drupal.org/node/1918768) in the YAML configs. Deducing what 'route' is active for a page may require deep insight into the internals of the Drupal system. One way to easily find out what the active route is is to use the ['Webprofiler' that now comes bundled with devel.module](https://www.webwash.net/debug-site-performance-using-web-profiler-in-drupal-8/). That will show the active route in a toolbar at the bottom of every page.