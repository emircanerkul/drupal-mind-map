---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/building-a-views-display-style-plugin-for-drupal
description: >-
  Creating a Views display style plugin might seem like an intricate task, but
  it's easier than it looks. Here's a step by step guide on how to accomplish
  it, complete with source code. You can download the finished code here: TARDIS
  (although it's still in dev). And if you need an introduction to Drupal 8
  modules, here's A practical guide to building basic Drupal 8 modules.
  .info.yml file Start by creating a folder called tardis for your module under
  /modules/custom.
published_time: '2016-03-01T21:31:48+00:00'
modified_time: '2021-08-08T12:39:46+00:00'
---
Creating a Views display style plugin might seem like an intricate task, but it's easier than it looks. Here's a step by step guide on how to accomplish it, complete with source code.

You can download the finished code here: [TARDIS](https://www.drupal.org/project/tardis) (although it's still in dev). And if you need an introduction to Drupal 8 modules, here's [A practical guide to building basic Drupal 8 modules](https://www.drupal.org/node/2560405).

### _.info.yml_ file

Start by creating a folder called **tardis** for your module under **/modules/custom**. Place a file called **tardis.info.yml** inside it with the following code:

```php
name: TARDIS
type: module
description: 'Provides a View display style that renders a list of year and month links to content in reverse chronological order.'
package: Views
core: '8.x'
core_version_requirement: ^8.8 || ^9
dependencies:
  - drupal:views

```

### Classy

Now it's time to create the plugin class. Create a file called **Tardis.php** inside **src/Plugin/views/style** and paste the following code:

```php
<?php

namespace Drupal\tardis\Plugin\views\style;

use Drupal\core\form\FormStateInterface;
use Drupal\views\Plugin\views\style\StylePluginBase;

/**
 * Style plugin to render a list of years and months
 * in reverse chronological order linked to content.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "tardis",
 *   title = @Translation("TARDIS"),
 *   help = @Translation("Render a list of years and months in reverse chronological order linked to content."),
 *   theme = "views_view_tardis",
 *   display_types = { "normal" }
 * )
 */
class Tardis extends StylePluginBase {

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['path'] = array('default' => 'tardis');
    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    // Path prefix for TARDIS links.
    $form['path'] = array(
      '#type' => 'textfield',
      '#title' => t('Link path'),
      '#default_value' => (isset($this->options['path'])) ? $this->options['path'] : 'tardis',
      '#description' => t('Path prefix for each TARDIS link, eg. example.com<strong>/tardis/</strong>2015/10.'),
    );

    // Month date format.
    $form['month_date_format'] = array(
      '#type' => 'textfield',
      '#title' => t('Month date format'),
      '#default_value' => (isset($this->options['month_date_format'])) ? $this->options['month_date_format'] : 'm',
      '#description' => t('Valid PHP <a href="@url" target="_blank">Date function</a> parameter to display months.', array('@url' => 'http://php.net/manual/en/function.date.php')),
    );

    // Whether month links should be nested inside year links.
    $options = array(
      1 => 'yes',
      0 => 'no',
    );
    $form['nesting'] = array(
      '#type' => 'radios',
      '#title' => t('Nesting'),
      '#options' => $options,
      '#default_value' => (isset($this->options['nesting'])) ? $this->options['nesting'] : 1,
      '#description' => t('Should months be nested inside years? <br />
        Example:
        <table style="width:100px">
          <thead>
              <th>Nesting</th>
              <th>No nesting</th>
          </thead>
          <tbody>
            <td>
              <ul>
                <li>2016
                  <ul>
                    <li>03</li>
                    <li>02</li>
                    <li>01</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>2016/03</li>
                <li>2016/02</li>
                <li>2016/01</li>
              </ul>
            </td>
          </tbody>
        </table>
      '),
    );

    // Extra CSS classes.
    $form['classes'] = array(
      '#type' => 'textfield',
      '#title' => t('CSS classes'),
      '#default_value' => (isset($this->options['classes'])) ? $this->options['classes'] : 'view-tardis',
      '#description' => t('CSS classes for further customization of this TARDIS page.'),
    );
  }

}


```

Let's go over some of this:

```php
 * @ViewsStyle(
 *   id = "tardis",
 *   title = @Translation("TARDIS"),
 *   help = @Translation("Render a list of years and months in reverse chronological order linked to content."),
 *   theme = "views_view_tardis",
 *   display_types = { "normal" }
 * )

```

_These comments are important_. They lay the groundwork for our plugin. Unless you remember to add them, the code won't work properly.

`class Tardis extends StylePluginBase {`

Basic plugin definition. Again, a must.

```php
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['path'] = array('default' => 'tardis');
    return $options;
  }


```

Base options capability, plus an important default for our plugin. It's here because this plugin must be customizable.

```php
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);


```

Moving on, we create the actual options form with fields, pretty much like regular config forms. For more info, please turn to the [Form API Reference](https://api.drupal.org/api/drupal/developer!topics!forms%5Fapi%5Freference.html/7).

### _.module_ file

The **.module** file is not a must in Drupal 8, but it's where theming information must go:

```php
<?php

/**
 * @file
 * TARDIS Views module help and theme functions.
 */

/**
 * Implements hook_theme().
 */
function tardis_theme($existing, $type, $theme, $path) {
  // Store TARDIS preprocess theme functions in a separate .inc file.
  \Drupal::moduleHandler()->loadInclude('tardis', 'inc', 'tardis.theme');

  return array(
    'tardis' => array(
      'file' => 'tardis.theme.inc',
    ),
  );
}

```

Basically we're delegating the **preprocess** function for a separate file, to keep things organized.

### _.theme.inc_ file

Create a file called **tardis.theme.inc** in our module directory and include the following code:

```php
<?php

/**
 * @file
 * Theme for TARDIS views.
 */
function template_preprocess_views_view_tardis(&$variables) {
  // View options set by user.
  $options = $variables['view']->style_plugin->options;

  // Build a two-dimension array with years and months.
  $time_pool = array();

  foreach ($variables['view']->result as $id => $result) {
    $created = $result->node_field_data_created;
    $created_year = date('Y', $created);
    // Month date format.
    $month_date_format = (isset($options['month_date_format'])) ? $options['month_date_format'] : 'm';
    $created_month_digits = date('m', $created);
    $created_month = date($month_date_format, $created);
    $time_pool[$created_year][$created_month_digits] = "$created_month";
  }

  $options['time_pool'] = $time_pool;

  // Update options for twig.
  $variables['options'] = $options;
}

```

This code basically takes all the _created dates_ for nodes and builds an associative array which is passed on to the template for final rendering, along with the other options defined in the form that remain unchanged.

### Twig it out

Now for the output of the module, create a file called **views-view-tardis.html.twig** inside a folder called **templates**. _But why this name?_ Remember the comments at the beginning of this tutorial?

`* theme = "views_view_tardis",`

This means the template is to be found at the default location (**/templates**) with **that** name, only with dashes instead of underscores and **.html.twig** at the end.

As for the code:

```php
{#
/**
 * Default theme implementation for Views to output a TARDIS archive.
 *
 * Available variables:
 * - options: View plugin style options:
 *   - classes: CSS classes.
 *   - nesting: Whether months should be nested inside years.
 *   - path: Link path. Eg.: example.com/TARDIS/2016/03
 *   - time_pool: Two-dimension array containing years and months with content.
 *
 * @see template_preprocess_views_view_tardis()
 *
 * @ingroup themeable
 */
#}
{%
  set classes = [
    'views-view-tardis',
    options.classes
  ]
%}
<div{{ attributes.addClass(classes) }}>
  <ul>
    {% for key, item in options.time_pool %}
      {% if options.nesting == 1 %}
        <li><a href="/{{ options.path }}/{{ key }}">{{ key }}</a><ul>
        {% for subkey, subitem in item %}
          <li><a href="/{{ options.path }}/{{ key }}/{{ subkey }}">{{ subitem }}</a></li>
        {% endfor %}
        </ul></li>
      {% else %}
        {% for subkey, subitem in item %}
          <li><a href="/{{ options.path }}/{{ key }}/{{ subkey }}">{{ subitem }}</a></li>
        {% endfor %}
      {% endif %}
    {% endfor %}
  </ul>
</div>

```

First it's good practice to elicit all the variables passed by the `$variables` associative array at the beginning of the file. Those are neatly stored under `$variables['options']` \- or, as twig would have it, **`variables.options`**.

Next we set some classes for our view as defined in the options form:

```php
{%
  set classes = [
    'views-view-tardis',
    options.classes
  ]
%}
```

And recall them:

`<div{{ attributes.addClass(classes) }}>`

The rest of the code deals with retrieving the months and years which have posts and rendering an HTML list. Here it's important to note the **for** loop:

`{% for key, item in options.time_pool %}`

Which renders each link properly. For example:

`<li><a href="/{{ options.path }}/{{ key }}/{{ subkey }}">{{ subitem }}</a></li>`

### One more thing

Last but not least, we should create a default view and export it to speed it up for users. You should notice there's a default view already in **/config/install/views.view.tardis.yml**. That default view is made available from the moment users activate the module.

I created it and exported via the **single export form** at **admin/config/development/configuration/single/export** following [Subhojit Paul's excellent tutorial](http://subhojit777.in/create-views-programatically-drupal8/).

### That's it!

You should now be able to write your very own Views display plugin for Drupal 8! Questions? Leave your comment below. Happy coding!