---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/locating-template-files-with-debugging
description: >-
  To know which template is generating the markup for a particular element, you
  can use Twig's built in debug option. This option will render HTML comments
  alongside your rendered output that include the theme hooks in use, suggested
  template filenames, as well as denoting the exact Twig file used to render a
  particular section of your markup. Enable Twig debugging in
  sites/default/services.yml by setting debug: true under the twig.config
  section (disable it on production environment).
published_time: '2014-10-17T14:45:58+00:00'
modified_time: '2021-08-15T06:14:00+00:00'
---
To know which template is generating the markup for a particular element, you can use Twig's built in `debug` option. This option will render HTML comments alongside your rendered output that include the theme hooks in use, suggested template filenames, as well as denoting the exact Twig file used to render a particular section of your markup.

Enable Twig debugging in `sites/default/services.yml` by setting `debug: true` under the `twig.config` section (disable it on production environment). If you are using Drupal 8 for multisite, you should edit the services.yml file in the sites/currentsite directory for the specific site you are theming. If `services.yml` does not yet exist; copy `default.services.yml from the sites/default directory` and rename it to `services.yml`For full instructions on Twig debugging, see [Debugging compiled Twig Templates](https://www.drupal.org/node/1903374).

After [clearing caches](http://drupal.org/node/42055), inspect the source of the page; you will see code similar to the below code:


```php
<!-- THEME DEBUG -->
<!-- THEME HOOK: 'node' -->
<!-- FILE NAME SUGGESTIONS:
   * node--view--frontpage--page-1.html.twig
   * node--view--frontpage.html.twig
   * node--1--teaser.html.twig
   * node--1.html.twig
   * node--article--teaser.html.twig
   * node--article.html.twig
   * node--teaser.html.twig
   x node.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/classy/templates/content/node.html.twig' -->

<article data-history-node-id="1" data-quickedit-entity-id="node/1" role="article" class="contextual-region node node--type-article node--promoted node--view-mode-teaser" about="/node/1" typeof="schema:Article" data-quickedit-entity-instance-id="0">
....
</article>

<!-- END OUTPUT from 'core/themes/classy/templates/content/node.html.twig' -->
```

A few things to point out about this debug output:

1. The file name suggestions are in order from most specific to least specific.
2. The current file name suggestion in use has an 'x' beside it.
3. Along with the `BEGIN OUTPUT` and `END OUTPUT` you'll find the full path to the template being rendered.