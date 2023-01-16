1. Drupal 8 outputs semantic HTML5 markup by default (see [Drupal 8 HTML5 Initiative](https://www.drupal.org/community-initiatives/drupal-core/html5)), compared to XHTML in Drupal 6 and 7.
2. Besides [jQuery v2.x](http://jquery.com/) Drupal 8 now includes more front-end libraries such as [Modernizr](http://modernizr.com/), [Underscore.js](http://underscorejs.org/) and [Backbone.js](http://backbonejs.org/).
3. Drupal 8's core [RDFa](https://www.drupal.org/documentation/modules/rdf) module outputs [schema.org](http://schema.org) markup.
4. Drupal 8 has improved accessibility making extensive use of [WAI-ARIA](https://www.drupal.org/node/1179668) attributes.
5. Drupal 8 introduces [Twig](/theme-guide/8/twig), which replaces PHPTemplate as the default theme engine. This means the `theme_*` functions and PHP-based `*.tpl.php` files have been replaced by `*.html.twig` templates ().
6. Drupal 8 enables by default features that improve performance such as [CSS and JavaScript aggregation](/node/2259531).
7. Drupal 8 ships with new UI elements that you use in your own admin screens, including modal dialogs and drop buttons.
8. Drupal 8 ships with responsive features such as [responsive themes](https://www.drupal.org/node/1388492), toolbar, images, and tables.
9. In Drupal 6 and 7 if you wanted to add CSS or JS to a particular page, you'd use the [drupal\_add\_css()](https://api.drupal.org/api/drupal/includes!common.inc/function/drupal%5Fadd%5Fcss/7) and [drupal\_add\_js()](https://api.drupal.org/api/drupal/includes!common.inc/function/drupal%5Fadd%5Fjs/7) functions, respectively. This is now replaced by [attaching JS/CSS assets in the #attached property of a render array](/theme-guide/8/adding-javascript) using libraries.
10. Drupal 8 drops support for IE 6, 7 and 8, enabling the use of jQuery 2.0 and other code that assumes modern HTML5/CSS3 browser support.
11. Drupal 8 does not [support browsers that do not support SVG](/node/2298227) (including IE8 and Android Browser 2.3)
12. Drupal 8 contains fewer IDs than Drupal 7's CSS.
13. [Drupal 8's CSS (file) structure](/node/1887918) is based on [SMACSS](http://smacss.com/ "Scalable and Modular Architecture for CSS") & [BEM](http://bem.info/ "Block, Element, Modifier").
14. Drupal 8's CSS uses [CSS3 pseudo selectors](/node/2178215).
15. Drupal 8 ships with [Classy, a core base theme that injects classes into markup, and includes corresponding CSS.](/theme-guide/8/classy) In progress: This will replace many preprocess functions and CSS files which were previously included in core modules.
16. Drupal 8 [moves CSS classes from preprocess functions to Twig templates](/node/2325067).
17. Drupal 8 uses [breakpoint media queries](/documentation/modules/breakpoint) to control how the site looks on different devices.