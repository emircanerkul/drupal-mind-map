NOTE: this option has not been tested by the Drulma maintainers, it was suggested by a contributor. See the next issue for context. <https://www.drupal.org/project/drulma/issues/3133032>

The steps in this guide enabled me to host all Drulma dependencies locally, minimize the CSS/JS, avoid using any CDNs and shrink my Bulma CSS to just 19 KB. It also shrinks BulmaJS from 100+ Kb to \~20 Kb with a custom fork of BulmaJS that only builds the navbar, file, and dropdown components.

First, we have to create a subtheme of Drulma.

Next, override the drulma libraries.

Add the following lines to `mydrulmasubtheme.info.yml`:


```php
libraries-override: # drulma drulma/global: false drulma/drulmajs: mydrulmasubtheme/drulmajs drulma/bulmajs: mydrulmasubtheme/bulmajs drulma/bulma: false
```

Next, `mydrulmasubtheme.libraries.yml`:


```php
global: css: theme: css/style.min.css: {} bulmajs: js: js/bulma.min.js: {} # only includes dropdown, file, navbar drulmajs: js: js/drulma.min.js: {} dependencies: - mydrulmasubtheme/bulmajs - core/drupal
```

The js files are the three components used by Drulma. Ideally, they would be combined into a single file as described in the bulmajs documentation, but that is not resolved yet. (<https://github.com/VizuaaLOG/BulmaJS/issues/100>)

Next, I installed bulma with npm. You will need to install npm somehow, it won't be documented here.

This [package.json can be used](https://gist.github.com/ptmkenny/07f2a8b98b8dcffea0581c52343a62cf#file-package-json)

Next make a `style.scss` file and put it in mydrulmasubtheme/sass/bulma\_sass.

It could look like this:


```php
@charset "utf-8"; // @import "node_modules/bulma/bulma.sass"; // import components individually // TODO: eliminate unneeded components @import "bulma_sass/utilities/_all"; @import "bulma_sass/base/_all"; @import "bulma_sass/elements/_all"; @import "bulma_sass/form/_all"; @import "bulma_sass/components/_all"; @import "bulma_sass/grid/_all"; @import "bulma_sass/layout/_all"; @import "../../contrib/drulma/css/bulma-overrides"; @import "../../contrib/drulma/css/drupal-overrides"; @import "../../contrib/drulma/css/tweaks";
```

To get this to work, symlink the bulma sass directory installed by node (ln -s ../node\_modules/bulma/sass/ bulma\_sass) or adjust the path accordingly.

Then you can compile with Gulp.

This [gulpfile.js](https://gist.github.com/ptmkenny/07f2a8b98b8dcffea0581c52343a62cf#file-gulpfile-js) was modified from the one provided with the Bootstrap SASS theme. To use the gulpfile, create a src directory in your drulma subtheme and then symlink the drulma\_js (ln -s ../../../contrib/drulma/js drulma\_js).

This gulpfile uses UnCSS, which automatically removes CSS that is not used on the site. This makes the stylesheet very small but it means a style guide on your site needs to be generated; otherwise, all the CSS will be stripped. You should configure uncss to go to at least one page of each content type, etc. on your website.

You can also use the Simple Styleguide module to easily generate a basic style guide for your site.