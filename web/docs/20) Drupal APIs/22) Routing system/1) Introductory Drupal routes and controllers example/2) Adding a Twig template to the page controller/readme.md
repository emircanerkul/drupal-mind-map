Instead of returning simple HTML markup in a render array from the page controller, you can define a Twig template that will be used to generate your custom page.

**The typical steps involved:**

1. Create a Twig template
2. Add a theme hook to your module, that defines which Twig template to use.
3. Invoke the theme hook from the page controller.

### 1\. Create a Twig Template

The template file will usually live in your module's ./templates/ directory. You can either choose a custom name, or use the name of the template hook, that will be created in the next step of this guide. Let's call our file `module-name-theme-hook.html.twig`.

**`module-name-theme-hook.html.twig`**

```php
<!-- Let's output the three variables passed to this template -->

<h1>My lovely twig template.</h1>
<p>You passed this text: <b>{{ variable1 }}</b></p>
<p>You passed this number value: {{ variable2 }}</p>
<p>And you passed this array:</p>

<ul>
  {% for item in variable3 %}
    <li>
       {{ item }} 
    </li>        
  {% endfor %}    
</ul>

<p>Ciao!</p>
```

### 2\. Add a theme hook

In `your_module.module` implement [hook\_theme](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Ftheme/8.7.x). This will provide the **theme hook** that defines which Twig template to use and which variables are passed to the Twig template. It can also provide default values for the available variables.

Make sure to **clear theme-registry cache** after making changes in that hook. If you're using drush from the command line type `drush cc theme-registry`.

**`your_module.module`**

```php
<?php

/**
 * Implements hook_theme().
 *
 * Register a module or theme's theme implementations.
 * The implementations declared by this hook specify how a 
 * particular render array is to be rendered as HTML.
 *
 * See: https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook_theme/8.2.x
 *
 * If you change this method, clear theme registry and routing 
 * table 'drush cc theme-registry' and 'drush cc router'.
 */
function module_name_theme($existing, $type, $theme, $path) {

  return [
    // Name of the theme hook. This is used in the controller to trigger the hook.
    'module_name_theme_hook' => [
      'render element' => 'children',
      // If no template name is defined here,
      // it defaults to the name of the theme hook,
      // ie. module-name-theme-hook.html.twig
      'template' => 'module-name-theme-hook',
      // Optionally define path to Twig template files.
      // Defaults to the module's ./templates/ directory.
      'path' => $path . '/templates',
      // Optionally define variables that will be passed to the Twig
      // template and set default values for them.
      'variables' => [
        'variable1' => 'Yet another default text.',
        'variable2' => 0,
        'variable3' => [0, 0, 0],
      ],
    ],
  ];

}

```

### 3\. Invoke the theme hook from the page controller.

Finally we're back in our Controller, where we used to return the markup for our custom page in the render array. Instead of returning the markup created in our controller, we now return the theme hook in our render array. This will build the markup for our custom page from our Twig template.

**`ExampleController.php`**

```php
<?php

namespace Drupal\example\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * An example controller.
 */
class ExampleController extends ControllerBase {

  /**
   * Returns a render-able array for a test page.
   */
  public function content() {

    // Do something with your variables here.
    $myText = 'This is not just a default text!';
    $myNumber = 1;
    $myArray = [1, 2, 3];

    return [
      // Your theme hook name.
      '#theme' => 'module_name_theme_hook',
      // Your variables.
      '#variable1' => $myText,
      '#variable2' => $myNumber,
      '#variable3' => $myArray,
    ];
  }
}

```

Make sure to clear your routing and theme-registry cache, if your changes don't seem to appear on your custom page.