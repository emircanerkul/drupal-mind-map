In all the examples above, we've been using the \*.layouts.yml file to register layouts. That is the easiest way to declare a layout if you don't need to give an alternate layout class.

While it's possible to specify an alternate layout 'class' in the \*.layouts.yml file, if you have a one-off layout that uses a custom class, it can be easier to register it in PHP with annotations! (Or if your layouts are derivatives, it's the only way, which we'll discuss in more detail in the next section.)

To do this, you put a `@Layout` annotation above the layout class using the same keys as in the \*.layouts.yml. Here's a simple example:

`/src/Plugin/Layout/AdvancedLayout4.php`

```php
namespace Drupal\my_custom_module\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "advanced_layout_4",
 *   label = @Translation("Advanced Layout 4"),
 *   category = @Translation("My Layouts"),
 *   template = "templates/advanced-layout-4",
 *   library = "my_custom_module/advanced-layout-library",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Main content"),
 *     }
 *   }
 * )
 */
class AdvancedLayout4 extends LayoutDefault {
  // Override any methods you'd like to customize here!
}

```

_(Note: declaring layouts this way can ONLY be done from a module. Themes cannot include plugins declared using PHP classes and annotations.)_