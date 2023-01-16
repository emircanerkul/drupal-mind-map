---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/twig-best-practices-preprocess-functions-and-templates
description: >-
  In order to make Drupal 8 theming as performant as possible and allow for more
  customization in Twig templates, please follow these best practices: Return
  render arrays from preprocess functions Call filters and utility functions in
  templates This guide is written to assist Drupal developers who may have
  Drupal 7 experience and are trying to remove functions like theme() or
  drupal_render() which should no longer be used in Drupal 8+. The "before"
  examples here are generally in the style of Drupal 7 code. For additional
  options for rendering via twig consider the twig_tweak contributed module.
published_time: '2013-02-19T01:32:47+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
In order to make Drupal 8 theming as performant as possible and allow for more customization in Twig templates, please follow these best practices:

* [Return render arrays from preprocess functions](#render)
* [Call filters and utility functions in templates](#utility)

This guide is written to assist Drupal developers who may have Drupal 7 experience and are trying to remove functions like `theme()` or `drupal_render()` which should no longer be used in Drupal 8+. The "before" examples here are generally in the style of Drupal 7 code.

For additional options for rendering via twig [consider the twig\_tweak](https://www.drupal.org/project/twig%5Ftweak) contributed module.

### Return render arrays from preprocess functions

Always return render arrays instead of calling `theme()` or `drupal_render()` within preprocess functions.

Twig renders everything automatically so there is no need to call `drupal_render()` or `theme()` within a preprocess function. Instead, render arrays should be passed to the template since this allows for much more customization than an already-rendered HTML string.

Removing `theme()` call from a preprocess function:

```php
// Before - passing a string of rendered HTML to the template.
$variables['table'] = theme('table', ['header' => $header, 'rows' => $rows]);

// After - passing a render array to the template.
$variables['table'] = [
  '#theme' => 'table',
  '#header' => $header,
  '#rows' => $rows,
];

```

Removing `drupal_render()` from a preprocess function is just a matter of removing the call:

```php
// Before, unnecessary call to drupal_render().
$variables['teaser'] = drupal_render($node_teaser);

// After, with drupal_render() removed.
$variables['teaser'] = $node_teaser;

```

Common is that `drupal_render()` was called when adding to table data.

```php
// Before, unnecessary call to drupal_render().
$row[] = drupal_render($display['title']);

// After, with drupal_render() removed.  
$row[]['data'] = $display['title'];

```

### Call filters and utility functions in templates

While render arrays provide an addressable, alterable structure for data all the way through to the template, not all variables require render arrays. To provide raw data to templates for as long as possible, theme developers should call [filters](https://www.drupal.org/node/2357633) such as `t` and [utility functions](https://www.drupal.org/node/2486991) such as `url()` from within Twig templates. Calling these functions in the Twig template rather than the preprocess function can cut down on function calls since variables passed to the template might not get printed in the template at all.

**Before:**

In the preprocess function:

```php
$variables['no_content_text'] = t('You have not created any content types yet. Go to the <a href="@create-content">content type creation page</a> to add a new content type.', array('@create-content' => url('admin/structure/types/add')));

```

In the template:

```php
<p>{{ no_content_text }}</p>
```

**After:**

In the template:

```php
<p>{{ 'You have not created any content types yet. Go to the <a href="@create-content">content type creation page</a> to add a new content type.'|t({'@create-content': url('admin/structure/types/add')}) }}</p>
```

### Show/Hide & removing drupal\_render\_children and element\_children

If hide() was called in the original template, and drupal\_render\_children was used to render "the rest" of the data, we'll need to separate this all out into separate variables in preprocess.

**Before (PHPTemplate file):**

```php
<?php
hide($form['advanced']);
hide($form['actions']);
?>
<div class="layout-node-form clearfix">
<div class="layout-region layout-region-node-main">
<?php print drupal_render_children($form); ?>
</div>
<div class="layout-region layout-region-node-secondary">
<?php print render($form['advanced']); ?>
</div>
<div class="layout-region layout-region-node-footer">
<?php print render($form['actions']); ?>
</div>
</div> 

```

Use a Twig filter called "without" to hide specific elements. You may render them as usual where required.

**After: (Twig template)**

```php
<div class="layout-node-form clearfix">
  <div class="layout-region layout-region-node-main">
    {{ form|without('advanced', 'actions') }}
  </div>
  <div class="layout-region layout-region-node-secondary">
    {{ form.advanced }}
  </div>
  <div class="layout-region layout-region-node-footer">
    {{ form.actions }}
  </div>
</div>

```

**Alternate method (no longer required):**

Preprocess everything into separate variables, and pass those into the template. You may need to unset the things you render into variables from the whole element (in this case form) before rendering the rest. Print the content exactly as intended into the template.

**Before: (preprocess)**

```php
function template_preprocess_node_edit_form(&$variables) {
  $form = $variables['form'];
  
  // @todo Update this once drupal.org/node/1920886 is resolved.
  $variables['advanced'] = $form['advanced'];
  $variables['actions'] = $form['actions'];
  unset($form['advanced'], $form['actions']);
  $variables['form'] = drupal_render_children($form);
}

```

**After: (Twig template)**

```php
<div class="layout-node-form clearfix">
  <div class="layout-region layout-region-node-main">
    {{ form }}
  </div>
  <div class="layout-region layout-region-node-secondary">
    {{ advanced }}
  </div>
  <div class="layout-region layout-region-node-footer">
    {{ actions }}
  </div>
</div>

```