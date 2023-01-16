So far, we've been registering single layout plugins, one at a time. However, "derivatives" are sets of plugins that are registered dynamically based on some other data.

For example, if you wanted to create a flexible layout builder, you'd give the site administrator some user interface to declare a new layout, and the configuration for each layout would be saved as a config entity. Then you'd register a layout class that used a "deriver" to dynamically register a layout plugin for each of those saved config entities.

So, first you'd register the layout class, for example:

```php
namespace Drupal\my_custom_module\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;

/**
 * A layout from our flexible layout builder.
 *
 * @Layout(
 *   id = "flexible_layout",
 *   deriver = "Drupal\my_custom_module\Plugin\Deriver\FlexibleLayoutDeriver"
 * )
 */
class FlexibleLayout extends LayoutDefault {

  /**
   * {@inheritdoc}
   */
  public function build(array $regions) {
    $render_array = parent::build($regions);
    // Since this is a flexible layout builder, you probably need to do
    // something special to render the layout, so we override the ::build()
    // method which is responsible for creating a render array.
    return $render_array;
  }

}

```

Notice how the annotation is incomplete (i.e., it's missing some of the keys necessary to register a layout) and includes a 'deriver' key. It's the deriver's job to iterate over the data about the layouts and fill in the rest of the information about the layout.

Also, when declaring layouts in this way, unless you can point to a specific 'template' or 'theme', you'll _probably_ need to override the layout's `::build()` method to provide custom code for rendering the layout.

Now, here is what an example deriver could look like:

```php
namespace Drupal\my_custom_module\Plugin\Deriver;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\my_custom_module\Plugin\Layout\FlexibleLayout;
use Drupal\Core\Layout\LayoutDefinition;

/**
 * Makes a flexible layout for each layout config entity.
 */
class FlexibleLayoutDeriver extends DeriverBase {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    // Here we need to magically get a list of the config entities.
    // I leave this as an exercise for the reader. :-)
    $config_entities = [];

    // Now we loop over them and declare the derivatives.
    foreach ($config_entities as $entity) {
      // Here we fill in any missing keys on the layout annotation.
      $this->derivatives[$entity->id()] = new LayoutDefinition([
        'class' => FlexibleLayout::class,
        'label' => $entity->label(),
        'category' => $entity->getCategory(),
        'regions' => $entity->getRegions(),
      ]);
    }

    return $this->derivatives;
  }

}

```

_(Note: declaring layouts this way can ONLY be done from a module. Themes cannot include plugins declared using PHP classes and annotations.)_