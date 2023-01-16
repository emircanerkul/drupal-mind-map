To define one or more (asset) libraries, add a `*.libraries.yml` file to the root of your module folder (alongside your .info.yml file). (If your module is named `fluffiness`, then the file name should be `fluffiness.libraries.yml`). Each "library" in the file is an entry detailing CSS and JS files (assets), like this:  

```php
cuddly-slider:
  version: 1.x
  css:
    layout:
      css/cuddly-slider-layout.css: {}
    theme:
      css/cuddly-slider-theme.css: {}
  js:
    js/cuddly-slider.js: {}

```

You may notice the 'layout' and 'theme' keys for css which are not present for js. This indicates the style type the css file belongs to.

You can set `CSS` weights with 5 different levels of styling:

* `base`: CSS reset/normalize plus HTML element styling. Key assigns a weight of `CSS_BASE = -200`
* `layout`: macro arrangement of a web page, including any grid systems. Key assigns a weight of `CSS_LAYOUT = -100`
* `component`: discrete, reusable UI elements. Key assigns a weight of `CSS_COMPONENT = 0`
* `state`: styles that deal with client-side changes to components. Key assigns a weight of `CSS_STATE = 100`
* `theme`: purely visual styling (“look-and-feel”) for a component. Key assigns a weight of `CSS_THEME = 200`

This is defined by the [SMACSS](http://smacss.com/) standard. So here if you specify theme it means that the CSS file contains theme related styling which is pure look and feel. [More info here](https://www.drupal.org/node/1887922). You **cannot** use other _keys_ as these will cause strict warnings.

This example assumes that the actual JavaScript `cuddly-slider.js` is located in the subfolder `js` of your module. You can also have the JS come from an external URL, include CSS files, and there are other possibilities. See [CDN / externally hosted libraries](https://www.drupal.org/theme-guide/8/assets#external) for details.

However, remember that Drupal no longer loads jQuery on all pages by default; Drupal only loads what's necessary. Therefore, we must declare that our module's `cuddly-slider` library _declares a dependency_ on the library that contains jQuery. It is neither a module nor a theme that provides jQuery, it's Drupal core: `core/jquery` is the dependency we want to declare. (This is an extension name followed by a slash, followed by the library name, so if some other library wanted to depend on our `cuddly-slider` library, it'd have to declare a dependency on `fluffiness/cuddly-slider`, because `fluffiness` is the name of our module.)

So, to ensure jQuery is available for `js/cuddly-slider.js`, we update the above to:

```php
cuddly-slider:
  version: 1.x
  css:
    theme:
      css/cuddly-slider.css: {}
  js:
    js/cuddly-slider.js: {}
  dependencies:
    - core/jquery

```

As you'd expect, the order the CSS and JS assets are listed is also the order in which they will be loaded.

**By** **default**, Drupal, will attach the JS assets at the bottom of the page to avoid common issues such as: DOM content loading block, code being executed that requires the presence DOM elements that are not yet loaded, etc... If for whatever reason, it is required to _attach JS assets into the <head> section_ it is possible to do so using the **header** option:

```php
cuddly-slider:
  version: 1.x
  header: true
  js:
    js/cuddly-slider.js: {}

```

So, now, the js/cuddly-slider.js **will be attached to the page top**.

Js also can have some more customization:

```php
cuddly-slider:
  version: 1.x
  js:
    js/cuddly-slider.js: {
      minified: true,
      attributes: { id : "script-cuddly-slider" }
    }

```

`minified` will indicate to the compiler that it's already minified and it will skip it.  
If we need attributes for our script we can add them using `attributes` and put `id` or any custom attribute inside  
There are more but it's the most common use.