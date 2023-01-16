---
url: https://www.drupal.org/docs/8/api/plugin-api/annotation-based-plugins-in-views
description: >-
  Views uses annotation-based plugin discovery for much of the code in Drupal
  Core. Annotation Class There are a variety of different annotation classes
  that underlie the different Views plugins. The annotation class is specified
  in the plugin block, for example, the Views Display type "Block", uses the
  annotation class "ViewsDisplay", which is indicated by the "@ViewsDisplay" in
  the following code: /** * The plugin that handles a block.
published_time: '2016-01-29T22:07:39+00:00'
modified_time: '2018-03-27T12:01:30+00:00'
---
Views uses annotation-based plugin discovery for much of the code in Drupal Core.

### Annotation Class

There are a variety of different annotation classes that underlie the different Views plugins. The annotation class is specified in the plugin block, for example, the Views Display type "Block", uses the annotation class "ViewsDisplay", which is indicated by the "@ViewsDisplay" in the following code:

```php
/**
 * The plugin that handles a block.
 *
 * @ingroup views_display_plugins
 *
 * @ViewsDisplay(
 *   id = "block",
 *   title = @Translation("Block"),
 *   help = @Translation("Display the view as a block."),
 *   theme = "views_view",
 *   register_theme = FALSE,
 *   uses_hook_block = TRUE,
 *   contextual_links_locations = {"block"},
 *   admin = @Translation("Block")
 * )
 *
...

```

### Annotation Parameter Syntax

When registering a new plugin, it is important that the annotation syntax follows the structure laid out in the Annotation class. For example, a Views argument handler plugin (annotation class @ViewsArgument) should only define a single piece of information, the plugin machine name, in the annotation comment block. For example, the "formula" argument is defined below, with @ViewsArgument("formula") advertising the name. Adding other pieces of information will cause a Fatal Error, WSOD.

```php
/**
 * Abstract argument handler for simple formulae.
 *
 * Child classes of this object should implement summaryArgument, at least.
 *
 * Definition terms:
 * - formula: The formula to use for this handler.
 *
 * @ingroup views_argument_handlers
 *
 * @ViewsArgument("formula")
 */

```

One way to determine which details can be included in the plugin annotation is to consult the AnnotationBase class. In the case of the argument example above the annotation definition class is "ViewsHandlerAnnotationBase", which extends "PluginBase" without change, and supports no key=value attributes at all. A more detailed definition is allowed for Views Style plugins, which are defined by the class ViewsStyle ():

```php
<?php
...

/**
 * Defines a Plugin annotation object for views style plugins.
 *
 * @see \Drupal\views\Plugin\views\style\StylePluginBase
 *
 * @ingroup views_style_plugins
 *
 * @Annotation
 */
class ViewsStyle extends ViewsPluginAnnotationBase {
 /**
   * The plugin ID.
   *
   * @var string
   */
  public $id;

  /**
   * The plugin title used in the views UI.
   *
   * @var \Drupal\Core\Annotation\Translation
   *
   * @ingroup plugin_translatable
   */
  public $title = '';

  /**
   * (optional) The short title used in the views UI.
   *
   *
   * @var \Drupal\Core\Annotation\Translation
   *
   * @ingroup plugin_translatable
   */
  public $short_title = '';

  /**
   * A short help string; this is displayed in the views UI.
   *
   * @var \Drupal\Core\Annotation\Translation
   *
   * @ingroup plugin_translatable
   */
  public $help = '';

  /**
   * The theme function used to render the style output.
   *
   * @var string
   */
  public $theme;

  /**
   * The types of the display this plugin can be used with.
   *
   * For example the Feed display defines the type 'feed', so only rss style
   * and row plugins can be used in the views UI.
   *
   * @var array
   */
  public $display_types;

  /**
   * The base tables on which this style plugin can be used.
   *
   * If no base table is specified the plugin can be used with all tables.
   *
   * @var array
   */
  public $base;

  /**
   * Whether the plugin should be not selectable in the UI.
   *
   * If it's set to TRUE, you can still use it via the API in config files.
   *
   * @var bool
   */
  public $no_ui;

}


```

The properties defined on this annotation class allow for parameters of the same name in the implementing plugins annotation block. For example, the Views Grid style plugin contains the following annotation block:

```php
<?php

namespace Drupal\views\Plugin\views\style;

use Drupal\Component\Utility\Html;
use Drupal\Core\Form\FormStateInterface;

/**
 * Style plugin to render each item in a grid cell.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "grid",
 *   title = @Translation("Grid"),
 *   help = @Translation("Displays rows in a grid."),
 *   theme = "views_view_grid",
 *   display_types = {"normal"}
 * )
 */
class Grid extends StylePluginBase {
...

```