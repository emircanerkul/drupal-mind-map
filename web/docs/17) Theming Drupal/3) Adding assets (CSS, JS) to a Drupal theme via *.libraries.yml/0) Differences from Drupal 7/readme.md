There are six important differences compared to Drupal 7 for themers:

1. The [THEME.info.yml](/node/2349827) file has replaced the `THEME.info` file (with the same data).
2. The `stylesheets` property (for adding CSS) in `THEME.info` has been removed and replaced by `*.libraries.yml` where \`\*\` is the name of the theme or module.
3. The `scripts` property (for adding JS) in `THEME.info` has been removed and also replaced by `*.libraries.yml` where \`\*\` is the name of the theme or module.
4. Only CSS, and JS that is required on a page will be loaded. JQuery, for example, [is no longer automatically loaded](/node/1541860) unless explicitly specified in `*.libraries.yml`. If your theme requires jQuery or other assets you want to load on all pages, add them in `*.libraries.yml. `and then include the library in the `THEME.info.yml.`
5. In Drupal 7 libraries had to be defined using `hook_library_info()`. [That has been replaced with \*.libraries.yml file](/node/2201089).
6. [In Drupal 8 drupal\_add\_css(), drupal\_add\_js() and drupal\_add\_library() were removed in favor of #attached](/node/2169605)