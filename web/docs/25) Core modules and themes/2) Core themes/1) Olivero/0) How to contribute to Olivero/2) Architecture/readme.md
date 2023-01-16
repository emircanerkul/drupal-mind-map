* When possible, we will follow the [Claro](https://git.drupalcode.org/project/drupal/tree/8.8.x/core/themes/claro) project’s lead in theme architecture including  
   * Directory structure  
   * [CSS architecture](https://www.drupal.org/docs/8/modules/claro/claro-css-coding-standards)
* Use of PostCSS  
   * Claro [uses the following packages](https://git.drupalcode.org/project/drupal/blob/8.8.x/core/package.json#L48), which we will utilize:  
         * autoprefixer  
         * postcss  
         * postcss-calc  
         * postcss-custom-properties  
         * postcss-header  
         * postcss-import  
   * We hope to use the additional packages:  
         * postcss-nested  
         * postcss-custom-media
* We will use modern technology that will either support IE11 or gracefully degrade functionality.  
   * CSS Grid is being used and has syntax back-ported to support IE11 through autoprefixer. To do this, we utilize a basic grid, and we cannot use negative grid line numbers (as IE’s older grid syntax doesn’t support this.  
   * We use Intersection Observer to detect when the site header should hide behind a navigation menu. IE does not support this, but we ensure that the site continues to work properly — but without this added functionality. In this case, the navigation will continue to appear in the same place and scroll out of view as the end-user scrolls down.
* JavaScript  
   * All JS will be written using vanilla JS (no jQuery or other frameworks).  
   * Modern (ES6 and later) JavaScript will be used (see <https://www.drupal.org/node/2815083>). JS will be compiled by Babel so it can be understood by IE11.  
   * Follow [Drupal JS coding standards](https://www.drupal.org/docs/develop/standards/javascript/javascript-coding-standards).  
   * Usage of Drupal Behaviors  
         * TBD — should we mandate the usage of behaviors if the component will never change outside of page-load?

### Development Setup

A setup guide that walks you through the different scripts you'll need to run in order to compile the CSS and JS files for the Olivero theme.

* <https://www.drupal.org/docs/8/themes/olivero/development-setup>

### Development Tools

A shared paper document that lists our various tools used by folks to automate and test code.

* <https://www.dropbox.com/scl/fi/p8zh7cu0texf9jidr25b7/Development-tools-for-Olivero.paper>