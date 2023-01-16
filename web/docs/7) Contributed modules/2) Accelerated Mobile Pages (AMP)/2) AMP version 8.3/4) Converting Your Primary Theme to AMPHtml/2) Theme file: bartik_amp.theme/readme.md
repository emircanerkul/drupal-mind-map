Create bartik\_amp.theme, and add hooks as needed:

We cleaned up most of the libraries in the info file, but there is one javascript file that is added very late that won't be removed. Fix it in the theme. If you have any other stubborn javascript or css files, you can remove them this way.

```php
/**
 * Implements hook_library_info_alter().
 */
function bartik_amp_library_info_alter(&$libraries, $extension) {
  // This library persists even if listed in libraries-override.
  // This code will pull it out for good.
  if ($extension == 'core' && isset($libraries['html5shiv'])) {
    unset($libraries['html5shiv']);
  }

}

```

If script tags are still present in the document, that means some module is adding them with a different mechanism than normal Drupal libraries, like html\_head attachments. In that case, you may want to manually remove those tags:

```php
function my_theme_preprocess_html(&$variables) {
  foreach ($variables['page']['#attached']['html_head'] as $key => $value) {
    // Remove any other scripts that are being attached to the page.
    if ($value[0]['#tag'] == 'script' && (!isset($value[0]['#attributes']['type']) || $value[0]['#attributes']['type'] != 'application/ld+json')) {
      unset($variables['page']['#attached']['html_head'][$key]);
    }
  }
}
```

**Warning**: this is not part of bartik\_amp, hence the "my\_theme" prefix in the code sample; it must be adapted to your particular theme machine name. Also, if using the snippet for adjusting AMP Toolbar classes (see below), make sure to put it all under a **single** "my\_theme\_preprocess\_html" function.

If you use the core Toolbar module, you should enable the AMP Toolbar module as well. That will move the toolbar into an amp-sidebar and display it vertically. The core module adds classes to the page that assume the toolbar is horizontal, so you can adjust those classes in the theme:

```php
/**
* Implements hook_preprocess_html().
*
* Reset toolbar classes and add sidebar toggle button to the header.
*/
function bartik_amp_preprocess_html(&$variables) {
  // AMP Toolbar wrapped the toolbar in amp-sidebar, which is always
  // vertical. Change the page classes to reflect that.
  // @see toolbar.html.twig.
  if (!empty($variables['page_top']['toolbar'])) {
    if (!empty($variables['attributes']) && $variables['attributes'] instanceof Attribute) {
      $variables['attributes']->removeClass('toolbar-horizontal');
      $variables['attributes']->addClass('toolbar-vertical');
    }
    else {
      $variables['attributes'] = new Attribute($variables['attributes']);
      $variables['attributes']->addClass(['toolbar-tray-open', 'toolbar-vertical', 'toolbar-fixed', 'toolbar-loading']);
    }
  }
}
```