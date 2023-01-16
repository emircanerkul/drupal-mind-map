### Asset loading order

As you would expect, the order in which the files are listed is the order in which they will load. By default, all JS assets are now loaded in the footer. JS for critical UI elements that cannot be shown unless their corresponding JS has run can be loaded in the header if needed like so:

```yaml
js-header:
  header: true
  js:
    header.js: {}

js-footer:
  js:
    footer.js: {}
```

Set the `header` property to `true`, to indicate that the JavaScript assets in that asset library are in the 'critical path' and should be loaded from the header. Any direct or indirect dependencies of libraries declared in this way will also automatically load from the header, you do not need to declare them individually for them to be available. This is the meaning of the phrase 'critical path', once an asset is declared to be in the header it is 'critical' for that asset and all of its dependencies to load first.

### Attaching configurable JavaScript:

In some cases, you may want to add JavaScript to a page that depends on some computed PHP information.

In this case, create a JavaScript file, define and attach a library just like before, but _also_ attach JavaScript settings and have that JavaScript file read those settings, via `drupalSettings` (the successor to Drupal 7's `Drupal.settings`). However, to make `drupalSettings` available to our JavaScript file, we have to do the same work as we had to do to make jQuery available: we have to declare a dependency on it.

So that then becomes:

```yaml
cuddly-slider:
  version: 1.x
  js:
    js/cuddly-slider.js: {}
  dependencies:
    - core/jquery
    - core/drupalSettings

```

and

```php
function fluffiness_page_attachments_alter(&$page) {
  $page['#attached']['library'][] = 'fluffiness/cuddly-slider';
  $page['#attached']['drupalSettings']['fluffiness']['cuddlySlider']['foo'] = 'bar';
}

```

Where `'bar'` is some calculated value. (Note that [cacheability metadata](/developing/api/8/cache) is necessary here also!)

Then `cuddly-slider.js` will be able to access `settings.fluffiness.cuddlySlider.foo` (and it will `=== 'bar'`):

```php
(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      
      console.log(settings.fluffiness.cuddlySlider.foo);
      
    }
  };

})(jQuery, Drupal, drupalSettings);
```

### Adding attributes to script elements

If you want to add attributes to a script tag, you need to add an attributes key to the JSON following the script URL. Within the object following the attributes key, add the attribute name that you want to appear on the script as a new key. The value for this key will be the attribute value. If that value is set to true, the attribute will appear on its own without a value on the element.

For example:

```yaml
https://maps.googleapis.com/maps/api/js?key=myownapikey&signed_in=true&libraries=drawing&callback=initMap:
  type: external
  attributes:
    defer: true
    async: true
    data-test: map-link
```

This would result in the following markup:

```php
<script src="https://maps.googleapis.com/maps/api/js?key=myownapikey&signed_in=true&libraries=drawing&callback=initMap" async defer data-test="map-link"></script>

```

### Inline JavaScript

**Inline JavaScript is highly discouraged.** It's recommended to put the JS you want to use inline in a file instead, because that allows JavaScript to be cached on the client side. It also allows JavaScript code to be reviewed and listed.

#### Inline JavaScript that generates markup

This is discouraged and generally not needed. Put the javascript in a file. Examples of this are ads, social media sharing buttons, and social media listing widgets. These do use inline JavaScript. But they are just a special kind of content/markup since they're not about decorating the site's content or making it interactive, instead, they are about pulling in external content through JavaScript.

You want to put these in either a custom block or even directly in a Twig template.

E.g.:

```php
<script type="text/javascript"><!--
ad_client_id = "some identifier"
ad_width = 160;
ad_height = 90;
//--></script>
<script type="text/javascript" src="http://adserver.com/ad.js"></script>

```

```php
<a class="twitter-timeline" href="https://twitter.com/wimleers" data-widget-id="307116909013368833">Tweets by @wimleers</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

```

### Inline JavaScript that affects the entire page

**Using any inline JavaScript is highly discouraged.** Examples of inline JavaScript that affects the entire page are analytics (e.g. Google Analytics) and hosted font services. Inline JavaScript that affects the entire page can be in either of two categories: front-end/styling, or logical.

In the case of front-end/styling (e.g. hosted font services), the JS belongs in the theme. Put the JS directly in your `html.html.twig` file. In the case of fonts, this will also allow you to put it right in the place that gives you the best (and fastest) end user experience, because it allows you to prevent a FOUT (Flash Of Unstyled Text) while the font is still loading (fonts loaded through JS must be listed in the HTML `<HEAD>` _before_ the CSS)!

In the other case, it belongs in the module, and for that, please see ["Adding stylesheets (CSS) and JavaScript (JS) to a Drupal module"](https://www.drupal.org/node/2274843).

### Inline JavaScript that is in an integration module

**Using any inline JavaScript is highly discouraged.** If you can use one of the examples above, please consider those before attempting to do this.

Two things to consider when providing a field that accepts inline JavaScript provided by a site user:

1. The field, form, or page that accepts this inline JavaScript must have permission attached.  
**Example:** MODULE.routing.yml  
```yaml  
MODULE.settings:  
  path: /admin/config/services/MODULE  
  defaults:  
    _title: 'MODULE settings'  
    _form: \Drupal\MODULE\Form\MODULESettings  
  requirements:  
    _permission: 'administer site configuration'  
```
2. The value if stored in a config object should alert the render system about its CacheableMetadata, so that when it changes, the element's render cache is properly cleared/expired.  
**Example:** MODULES.module  
```php  
<?php  
/**  
 * @file  
 * Integrates MODULE in a Drupal site.  
 */  
use Drupal\Core\Render\Markup;  
/**  
 * Implements hook_page_bottom().  
 */  
function MODULE_page_bottom(array &$page_bottom) {  
  $settings = \Drupal::config('MODULE.settings');  
  $user = \Drupal::currentUser();  
  $page_bottom['MODULE'] = [  
    '#markup' => Markup::create($settings->get('js_code')),  
    '#cache' => [  
      'contexts' => ['user'],  
      'tags' => ['user:' . $user->id()],  
    ],  
  ];  
  // Add config settings cacheability metadata.  
  /** @var Drupal\Core\Render\Renderer $renderer */  
  $renderer = \Drupal::service('renderer');  
  $renderer->addCacheableDependency($page_bottom['MODULE'], $settings);  
}  
```