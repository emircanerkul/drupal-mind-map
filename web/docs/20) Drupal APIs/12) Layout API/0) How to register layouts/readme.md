---
url: https://www.drupal.org/docs/drupal-apis/layout-api/how-to-register-layouts
description: >-
  The Layout API was included (originally experimental) in Drupal 8.3.x core.
  There are several ways to provide a layout. We'll discuss each in the sections
  below, starting with the simplest, most common case and building up to some of
  the more advanced techniques! Registering layouts using *.layouts.yml The most
  basic way to register layouts, is to put a *.layouts.yml file in your module
  or theme. The first part of the file name is the machine name of your module
  or theme, so if for example, your module's machine name is my_custom_module,
  you'd call the file my_custom_module.layouts.yml.
published_time: '2017-03-29T19:41:44+00:00'
modified_time: '2022-08-05T19:44:43+00:00'
---
The Layout API was included (originally [experimental](https://www.drupal.org/core/experimental)) in Drupal 8.3.x core. 

There are several ways to provide a layout. We'll discuss each in the sections below, starting with the simplest, most common case and building up to some of the more advanced techniques!

### Registering layouts using \*.layouts.yml

The most basic way to register layouts, is to put a \*.layouts.yml file in your module or theme.

The first part of the file name is the machine name of your module or theme, so if for example, your module's machine name is my\_custom\_module, you'd call the file my\_custom\_module.layouts.yml.

This file should be placed in the top-level directory of your module or theme, and you'll need to rebuild the cache (for example, with Drush it's `drush cr`) for your changes to the file to be picked up.

In the next few sections, we'll cover the different keys and values you can use in this file.

### The simplest case

This is the simplest, and easiest way to register a new layout! For most use cases, you shouldn't need to read beyond this section.

Here's an example of a super simple \*.layouts.yml:

```php
one_column:
  label: 'One column'
  category: 'My Layouts'
  template: templates/one-column
  default_region: main
  regions:
    main:
      label: Main content
two_column:
  label: 'Two column'
  category: 'My Layouts'
  template: templates/two-column
  default_region: main
  regions:
    main:
      label: Main content
    sidebar:
      label: Sidebar

```

This registers two layouts: "One column" and "Two column". The 'label' and 'category' keys are required.

You can see that the first layout declares a single "Main content" region, and the second has both a "Main content" and "Sidebar" region.

At minimum, each layout should specify a Twig template. The 'template' should not include the `.html.twig` extension on the file, which means if you specified `templates/one-column` the actual file will be `templates/one-column.html.twig`. Make sure the value of 'template' is not an already existing theme hook.

In your Twig template, you can use tokens like `{{ content.main }}` and `{{ content.sidebar }}` to output the content of each region. So, for example, `templates/two-column.html.twig` could look like:

```php
<div class="two-column">
  <div class="main-region">
    {{ content.main }}
  </div>
  <div class="sidebar-region">
    {{ content.sidebar }}
  </div>
</div>

```

#### Notes & Considerations

* _Regions cannot have a dash ('-') in their names._
* _You DON'T need to write your own `hooktheme()`, the Layout API takes care of this for you._

### Creating a layout with drag-and-drop regions

For your custom layout to allow for drag-and-drop ability, you need to add some attributes to your twig template. Here is a more advanced version of the `templates/two-column.html.twig ` template above:

```php
{% if content %}
  <div {{ attributes.addClass('two-column') }}>
  {% if content.main %}
    <div {{ region_attributes.main.addClass('main-region') }}>
      {{ content.main }}
    </div>
  {% endif %}
  {% if content.sidebar %}
    <div {{ region_attributes.sidebar.addClass('sidebar-region') }}>
      {{ content.sidebar }}
    </div>
  {% endif %}
  </div>
{% endif %}
```

Note that the block elements have to be direct children of their region for drag and drop to function.

### Registering your own template and using 'theme'

In the first section, we specified the 'template' key and it automatically registered it with the theme system.

It's also possible to specify a particular theme hook (which you've manually registered using `hook_theme()`). This can be useful if, for example, you want to use the same template to render multiple layouts.

To do this, you need to first register your template using [hook\_theme()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Ftheme/8). For example, if wanted to declare a theme hook called "advanced\_layout\_1" you put this in your \*.module (if a module) or \*.theme (if a theme) file:

```php
// Replace "MY_MODULE_OR_THEME" with the machine name of your module or theme.
function MY_MODULE_OR_THEME_theme() {
  return [
    'advanced_layout_1' => [
      'template' => 'templates/advanced-layout-1',
      // layout_plugin expects the theme hook to be declared with this:
      'render element' => 'content',
      'base hook' => 'layout',
    ],
  ];
}

```

Then in your \*.layouts.yml file, don't use 'template', but specify the machine name of your theme hook in 'theme\_hook'.

For example, if your theme hook is "advanced\_layout\_1", your \*.layouts.yml could look like:

```php
advanced_layout_1:
  label: Advanced Layout 1
  category: My Layouts
  theme_hook: advanced_layout_1
  regions:
    main:
      label: Main content

```

_(Note: You can also give a specific theme suggestion in 'theme\_hook', like "advanced\_layout\_1\_\_alternate\_suggestion", by putting the suggestion after a double underscore "\_\_".)_

### Registering your own library and using 'library'

Most layout templates have associated CSS that must be loaded.

To do this, you need to first register your library with the [asset management system](https://www.drupal.org/developing/api/8/assets) using \*.libraries.yml. Here's a simple example:

```php
advanced-layout-library:
  version: 1.x
  css:
    theme:
      css/advanced-layout-library.css: {}
  js:
    js/advanced-layout-library.js: {}
  dependencies:
    - core/jquery

```

Then in your \*.layouts.yml file, specify the machine name of your library in 'library'.

For example, if your library is "advanced-layout-library", your \*.layouts.yml could look like:

```php
advanced_layout_2:
  label: Advanced Layout 2
  category: My Layouts
  template: templates/advanced-layout-2
  # Replace "MY_MODULE_OR_THEME" with the machine name of your module or theme.
  library: MY_MODULE_OR_THEME/advanced-layout-library
  regions:
    main:
      label: Main content

```

### Automatically rendering icon used in the layout builder interface

You can also specify `icon_map:` This is used to describe the icon used when the site builder is choosing a layout in the layout builder interface, these icons are built as [SVG automatically](https://www.drupal.org/project/drupal/issues/2660124) and described in your layouts YML.

![](https://www.drupal.org/files/Screenshot_2018-05-03_11-31-16.png)

For rendering columns that span through multiple rows, just repeat the region name:

```yaml
icon_map:
  - [square_one, square_two, square_three]
  - [rectangle_vertical, rectangle_horizontal, rectangle_horizontal]
  - [rectangle_vertical, square_four, square_five]
```

The above code snippet produces the following icon map: 

![](https://www.drupal.org/files/Screenshot%202020-02-28%2017.56.30.png)

### Using an alternate 'class'

So far, in the previous examples we haven't had to write much (or any) PHP code! This works by using the default layout class (`\Drupal\Core\Layout\LayoutDefault`) for any layouts that don't specify a 'class' key.

However, it's possible to use a custom 'class' for a layout! This can be useful if, for example, you want your layout to have custom settings so that users can change the way the layout is rendered.

_(Note: You can specify a custom 'class' with layouts registered in both modules and themes, BUT the class itself MUST be in a module. Themes can't contain autoloadable class files.)_

Here's an example layout class which provides a settings form:

```php
namespace Drupal\my_custom_module;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Plugin\PluginFormInterface;

class MyLayoutClass extends LayoutDefault implements PluginFormInterface {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'extra_classes' => 'Default',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $configuration = $this->getConfiguration();
    $form['extra_classes'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Extra classes'),
      '#default_value' => $configuration['extra_classes'],
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {
    // any additional form validation that is required
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    $this->configuration['extra_classes'] = $form_state->getValue('extra_classes');
  }

}

```

Then your \*.layouts.yml could look like:

```php
advanced_layout_3:
  label: Advanced Layout 3
  category: My Layouts
  class: '\Drupal\my_custom_module\MyLayoutClass'
  template: templates/advanced-layout-3
  library: my_custom_module/advanced-layout-library
  regions:
    main:
      label: Main content

```

And in your Twig template, you now have access to the `{{ settings.extra_classes }}` variable. So, your `templates/advanced-layout-3.html.twig` could look like:

```php
<div class="my-advanced-layout {{ settings.extra_classes }}">
  <div class="main-region">
    {{ content.main }}
  </div>
</div>

```