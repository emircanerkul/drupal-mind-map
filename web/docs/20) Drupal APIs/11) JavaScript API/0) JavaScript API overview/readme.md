---
url: https://www.drupal.org/docs/drupal-apis/javascript-api/javascript-api-overview
description: >-
  Since Drupal 8, the available JavaScript files, which were referenced in .info
  files in Drupal 7, are now referenced in .yml files. Also, stylesheets (CSS)
  and JavaScript (JS) are loaded through the same system as modules (code) and
  themes: asset libraries. Drupal uses a high-level principle: assets (CSS or
  JS) are still only loaded if you tell Drupal it should load them. Drupal does
  not load all assets (CSS/JS) on all pages, because this is bad for front-end
  performance. Configurable JavaScript is available with drupalSettings (the
  successor to Drupal 7's Drupal.settings).
published_time: '2014-05-17T10:46:04+00:00'
modified_time: '2022-12-10T18:22:34+00:00'
---
Since Drupal 8, the available JavaScript files, which were referenced in .info files in Drupal 7, are now referenced in .yml files. Also, stylesheets (CSS) and JavaScript (JS) are loaded through the same system as modules (code) and themes: [asset libraries](https://www.drupal.org/node/2274843).

Drupal uses a high-level principle: assets (CSS or JS) are still only loaded if you tell Drupal it should load them. Drupal does not load all assets (CSS/JS) on all pages, because this is bad for front-end performance.

Configurable JavaScript is available with drupalSettings (the successor to Drupal 7's Drupal.settings). However, to make drupalSettings available to our JavaScript file: we have to declare a dependency on it. [More info](https://www.drupal.org/node/2274843)

### Drupal.behaviors compared to jQuery(document).ready() for deferring execution

#### Example: Using jQuery(document).ready()

When using jQuery it is standard for a large majority of situations to wrap almost all code inside the `jQuery(document).ready()` function, like this:

```php
jQuery(document).ready(function ($) {
  // Do some fancy stuff.
});

```

This ensures that our code will only run after the DOM has loaded and all elements are available.

#### Example: Using `Drupal.behaviors`

However, with Drupal there is an alternate better method; using the functionality of `Drupal.behaviors` and `once()`. If used properly, this will ensure that your code runs both on normal page loads and when data is loaded by AJAX (or [BigPipe](/documentation/modules/big%5Fpipe)!) - but not jQuery methods like `load()` which should be avoided as Drupal behaviors will fail to load for loading functions other than `ajax()`. The `Drupal.behaviors` object is itself a property of the Drupal object, and when we want our module/theme to add new behaviors, the best method is to simply extend this object.

A really basic example:

```php
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    // Use context to filter the DOM to only the elements of interest,
    // and use once() to guarantee that our callback function processes
    // any given element one time at most, regardless of how many times
    // the behaviour itself is called (it is not sufficient in general
    // to assume an element will only ever appear in a single context).
    once('myCustomBehavior', 'input.myCustomBehavior', context).forEach(
      function (element) {
        element.classList.add('processed');
      }
    );
  }
};

```

Any object defined as a property of `Drupal.behaviors` will get its `attach()` method called when the DOM has loaded both initially and after any AJAX calls. drupal.js has a `$(document).ready()` function which calls the _Drupal.attachBehaviors()_ function, which in turn cycles through the `Drupal.behaviors` object calling every one of its properties, these all being functions declared by various modules as above, and passing in the document as the context. On AJAX loads the same thing happens except the context is only the new content that the AJAX call loaded. (And since BigPipe internally builds on top of the AJAX system, anything that works with the AJAX system will also work with BigPipe.)

Drupal Behaviors are fired whenever attachBehaviors is called. The context variable that is passed in can often give you a better idea of what DOM element is being processed, but it is not a sure way to know if you are processing something again. **Using once with "context" is a good practice** because then only the given context is searched and not the entire document. This becomes more important when attaching behaviors after an AJAX request.

Detailed examples of using the "context" parameter with once are provided on npm package page [once API](https://www.npmjs.com/package/@drupal/once).

To globally run functions only once on page load, use the `'html'` or `'body'` as the selector used in the once call: `once('my-global-once', 'html')`. Behaviors on this context are only fired once by Drupal, it is Drupals equivalent to `$(document).ready( myInit() );`

```php
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    once('myBehavior', 'html').forEach(function (element) {
      myFunction(element);
    })
  }
}

```

Note: Since Drupal uses [jQuery.noConflict()](https://api.jquery.com/jquery.noconflict/) and only loads JavaScript files when required, to use jQuery and the `$` shortcode for jQuery you must include jQuery and Drupal as dependencies in the [library definition](https://www.drupal.org/developing/api/8/assets#library) in your MODULE.libraries.yml and add a wrapper around your function. So the whole JavaScript file would look something like this:

```php
(function ($, Drupal, once) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      once('myCustomBehavior', 'input.myCustomBehavior', context).forEach(function (element) {
        // Apply the myCustomBehaviour effect to the elements only once.
      });
    }
  };
})(jQuery, Drupal, once);

```

To add once as an explicit dependency of a custom library, add `core/once`as shown below in MODULE.libraries.yml or THEME.libraries.yml:

```yaml
foobar:
  js:
    js/foobar.js: {}
  dependencies:
    - core/drupal
    - core/jquery
    - core/once
```

The full documentation is available on npm package page [once API](https://www.npmjs.com/package/@drupal/once).

See also:

* [Adding stylesheets (CSS) and JavaScript (JS) to a Drupal theme](/theme-guide/8/assets) including defining libraries and inline Javascript.
* [Adding stylesheets (CSS) and JavaScript (JS) to a Drupal module](/developing/api/8/assets). Includes Attaching to a render array, Attaching a library in a twig template, Attaching configurable JavaScript via new drupalSettings
* [Looking at Drupal 8's Javascript changes](http://atendesigngroup.com/blog/looking-at-drupal-8-javascript-changes) by Aten Design. Includes hook\_library\_info, Backbone and Underscore info.
* [JS Coding standards](https://www.drupal.org/node/172169)
* [Drupal 8 change: drupal\_add\_css(), drupal\_add\_js() and drupal\_add\_library() removed in favor of #attached](https://www.drupal.org/node/2169605)
* [Drupal 8 change: hook\_library\_info() is replaced by \*.libraries.yml file](https://www.drupal.org/node/2201089)
* Also: Placeholder for style rules that do not fit in [#1778828](https://drupal.org/node/1778828).
* [JavaScript and Drupal 8 RESTful Web Services](/node/2405657)
* [Understanding JavaScript behaviors in Drupal](https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal)
* [Remove jQuery dependency from the once feature](https://www.drupal.org/node/3158256). Full documentation about once() on npm package page [once API](https://www.npmjs.com/package/@drupal/once).