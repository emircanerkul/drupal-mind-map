Depending on which assets you need to have loaded, you'll want to attach the corresponding asset library in a different way. After all, some asset libraries are needed on all pages, others only very rarely, and yet others on most, but not quite all.

But what matters most is that we don't decide whether to attach a library based on _which page_ we're on (i.e. which URL or _route_), but based on which _things_ are visible on the page: if a page contains a `'#type' => 'table'`, a `'#type' => 'dropbutton'` and a `'#type' => 'foobar'`, then we'll only load the libraries associated with each of those `'#type'`s.  
But we're not limited to `'#type'` only: perhaps we want to load a certain asset library only for a certain _instance_ of a `'#type'`. In that case, we just attach it to the render array of that instance.

Of course, _very rarely_, there is a valid reason to actually load a certain asset on all pages (e.g. some analytics JavaScript that tracks page loads), regardless of the "things" on a page.

The sub-sections here show examples of how to do these things.

### Attaching to a certain `'#type'` (for all instances of it)

To attach a library to a certain existing `'#type'`, for all instances of it, we use `hook_element_info_alter()`:

```php
function yourmodule_element_info_alter(array &$types) {
  if (isset($types['table'])) {
    $types['table']['#attached']['library'][] = 'your_module/library_name';
  }
}

```

Then [clear the cache](/node/42055) so that Drupal is aware of the new hook implementation you added.

### Attaching to a render array

To attach a library to a render array (and perhaps a specific instance of a certain `'#type'`), you must have access to that render array. Perhaps you're defining the render array. Perhaps you're modifying it in a hook. In either case, it will look somewhat like this:

```php
$build['the_element_that_needs_the_asset_library']['#attached']['library'][] = 'your_module/library_name';

```

#### Do not use non-numeric keys for libraries

You might want to help Drupal and not produce duplicate library entries by using non-numeric keys:

```php
// Do NOT do this:
$build['the_element_that_needs_the_asset_library']['#attached']['library']['your_module/library_name'] = 'your_module/library_name';

```

The reason for this is Drupal's way of merging arrays will lead to an invalid nested array and notices like this (googlefood):

```php
Warning: explode() expects parameter 2 to be string, array given in Drupal\Core\Asset\LibraryDependencyResolver->doGetDependencies()
Notice: Array to string conversion in system_js_settings_alter()
Notice: Array to string conversion in Drupal\Core\Asset\AttachedAssets->setLibraries()
```

### Attaching to a render array of a Block Plugin

To give another example of attaching a library to a render array, If you are building a block plugin in your module, you can attach the libraries to the render array in the build() function of your class extending the BlockBase class (as of Drupal 8 beta 6).

```php
    return [
      '#theme' => 'your_module_theme_id',
      '#someVariable' => $some_variable,
      '#attached' => [
        'library' => [
          'your_module/library_name',
        ],
      ],
    ];

```

### Attaching a library to a form

As forms are just render arrays, attaching a library works just the same:

```php
/**
 * Implements hook_form_alter().
 */
function yourmodule_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id) {
  /* @var Drupal\Core\Entity\FieldableEntityInterface $entity */
  $formObject = $form_state->getFormObject();
  if ($formObject instanceof \Drupal\Core\Entity\EntityFormInterface) {
    $entity = $formObject->getEntity();
    if (
      $entity->getEntityTypeId() === 'node'
      && in_array($entity->bundle(), ['organisation', 'location', 'event', 'article'])
    ) {
      $form['#attached']['library'][] = 'yourmodule/yourlibrary';
    }
  }
}

```

### Attaching a library to a view

You can add the hook in `.module` file or `.theme` file:

```php
// Top of the file.
use Drupal\views\ViewExecutable;

// ...

/**
* Implements hook_views_pre_render().
*/
function yourmodule_views_pre_render(ViewExecutable $view) {
  if (isset($view) && ($view->storage->id() == 'super_awesome_view')) {
    $view->element['#attached']['library'][] = 'custom/custom_view';
  }
}
```

### Attaching a library to all (or a subset of) pages

In some cases, the asset library is not associated with a certain part of the page, because it is associated with the _entire_ page. For this case, `hook_page_attachments()` exists. A clear example can be found in the Contextual Links module:

```php
// From core/modules/contextual/contextual.module.
function contextual_page_attachments(array &$page) {
  if (!\Drupal::currentUser()->hasPermission('access contextual links')) {
    return;
  }

  $page['#attached']['library'][] = 'contextual/drupal.contextual-links';
}
```

### Attaching a library in a preprocess function

You can attach a library in a preprocess function using the special key `'#attached'`:

```php
function yourmodule_preprocess_maintenance_page(&$variables) {
  $variables['#attached']['library'][] =  'your_module/library_name';
}
```

### Attaching a library in a twig template

You can also attach a library in a twig template by using the attach\_library() twig function. So in any \*.html.twig:

```php
{{ attach_library('your_module/library_name') }}
<div>Some markup {{ message }}</div>

```

### Attaching a library during token replacement

You can also attach a library if your custom token is present in filtered text by adding the library to the BubbleableMetadata object during replacement in hook\_tokens():

```php
/**
 * Implements hook_tokens().
 */
function your_module_tokens($type, $tokens, array $data, array $options, \Drupal\Core\Render\BubbleableMetadata $bubbleable_metadata) {
    $replacements = [];
    if ($type == 'your_module') {
        foreach ($tokens as $name => $original) {
            switch ($name) {
                case 'your-token':
                    $your_render_array = your_module_build_your_renderable_thing();
                    $replacements[$original] =  \Drupal::service('renderer')->render($your_render_array);
                    // LOOK HERE! WE CAN ADD LIBRARIES TOO!
                    $bubbleable_metadata->addAttachments(['library' => ['your_module/library_name'] ]);
                break;
            }
        }
    }

    return $replacements;
}
```

Note that this example shows only how to do the library attachment during replacement -- to fully implement a custom token you must implement hook\_token\_info() as well.

### Attaching a library in a filter plugin

If a module provides a text filter, then it can use the `setAttachments()` or `addAttachments()` method of the [FilterProcessResult](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21FilterProcessResult.php/class/FilterProcessResult/8.8.x) class. For example, the `filter_caption` filter does this:

```php
    if (...) { ...
      $result->setProcessedText(Html::serialize($dom))
        ->addAttachments([
          'library' => [
            'filter/caption',
          ],
        ]);
    }

    return $result;

```

### Attaching configurable JavaScript

In some cases, you may want to add JavaScript to a page that depends on some computed PHP information. You can do so with `drupalSettings` (the successor to Drupal 7's `Drupal.settings`), an array of settings defined in your PHP script that can be accessed as settings object in your JavaScript.

For using `drupalSettings` in a library, we first have to declare a dependency on `core/drupalSettings` in its library definition.

So the library definition of our previous example becomes:

```php
cuddly-slider:
  version: 1.x
  js:
    js/cuddly-slider.js: {}
  dependencies:
    - core/jquery
    - core/drupalSettings

```

In our PHP files, we can now pass the desired `drupalSettings` alongside our library. By convention, we use our [lowerCamelCase](https://www.drupal.org/node/172169#camelcasing) module name as the key for the settings, and add the [lowerCamelCase](https://www.drupal.org/node/172169#camelcasing) name of the library as sub key.

If we'd like to pass computed values `'foo'` and `'baz'` from PHP to our example's JavaScript, we could do:

```php
$computed_settings = [
  'foo' => 'bar',
  'baz' => 'qux',
];

$build['#attached']['library'][] = 'your_module/library_name';
$build['#attached']['drupalSettings']['fluffiness']['cuddlySlider'] = $computed_settings;

```

Then `cuddly-slider.js` will be able to access `drupalSettings.fluffiness.cuddlySlider.foo` and `drupalSettings.fluffiness.cuddlySlider.baz` , which will have values of `'bar'` and `'qux'` respectively.

Render arrays are [cached](https://www.drupal.org/docs/8/api/render-api/cacheability-of-render-arrays). Depending on the nature of your computed values and the component you are attaching `drupalSettings` to, you may have to alter the [cacheablility metadata](https://www.drupal.org/docs/8/api/cache-api/cache-api) accordingly.

### Adding attributes to script elements

If you want to add attributes on a script tag, you need to add an attributes key to the JSON following the script URL. Within the object following the attributes key, add the attribute name that you want to appear in the script as a new key. The value for this key will be the attribute value. If that value is set to true, the attribute will appear on its own without a value on the element.

For example:

```yaml
https://maps.googleapis.com/maps/api/js?key=myownapikey&signed_in=true&libraries=drawing&callback=initMap:
  type: external
  attributes: { defer: true, async: true, data-test: map-link }

```

This would result in the following markup:

```php
<script src="https://maps.googleapis.com/maps/api/js?key=myownapikey&signed_in=true&libraries=drawing&callback=initMap" async defer data-test="map-link"></script>

```